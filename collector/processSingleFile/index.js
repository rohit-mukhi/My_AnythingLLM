const path = require("path");
const fs = require("fs");
const {
  WATCH_DIRECTORY,
  SUPPORTED_FILETYPE_CONVERTERS,
} = require("../utils/constants");
const {
  trashFile,
  isTextType,
  normalizePath,
  isWithin,
} = require("../utils/files");
const convertWithMarkItDown = require("./convert/asMarkitdown");
const markitdownConfig = require("../utils/markitdown-config");
const RESERVED_FILES = ["__HOTDIR__.md"];

/**
 * Process a single file and return the documents
 * @param {string} targetFilename - The filename to process
 * @param {Object} options - The options for the file processing
 * @param {boolean} options.parseOnly - If true, the file will not be saved as a document even when `writeToServerDocuments` is called in the handler. Must be explicitly set to true to use.
 * @param {string} options.absolutePath - If provided, use this absolute path instead of resolving relative to WATCH_DIRECTORY. For internal use only.
 * @param {Object} metadata - The metadata for the file processing
 * @returns {Promise<{success: boolean, reason: string, documents: Object[]}>} - The documents from the file processing
 * 
 * Processing order:
 * 1. MarkItDown converter (if format supported and enabled)
 * 2. Standard format-specific converters (PDF, DOCX, etc.)
 * 3. Text fallback for unknown text-like files
 */
async function processSingleFile(targetFilename, options = {}, metadata = {}) {
  const fullFilePath = normalizePath(
    options.absolutePath || path.resolve(WATCH_DIRECTORY, targetFilename)
  );

  // If absolute path is not provided, check if the file is within the watch directory
  // to prevent unauthorized paths from being processed.
  if (
    !options.absolutePath &&
    !isWithin(path.resolve(WATCH_DIRECTORY), fullFilePath)
  )
    return {
      success: false,
      reason: "Filename is a not a valid path to process.",
      documents: [],
    };

  if (RESERVED_FILES.includes(targetFilename))
    return {
      success: false,
      reason: "Filename is a reserved filename and cannot be processed.",
      documents: [],
    };

  if (!fs.existsSync(fullFilePath))
    return {
      success: false,
      reason: "File does not exist in upload directory.",
      documents: [],
    };

  const fileExtension = path.extname(fullFilePath).toLowerCase();
  if (fullFilePath.includes(".") && !fileExtension) {
    return {
      success: false,
      reason: `No file extension found. This file cannot be processed.`,
      documents: [],
    };
  }

  // Try MarkItDown converter first if format is supported
  if (markitdownConfig.SUPPORTED_FORMATS.includes(fileExtension)) {
    try {
      console.log(
        `\x1b[36m[MarkItDown]\x1b[0m Converting ${targetFilename} using MarkItDown...`
      );
      const markdown = await convertWithMarkItDown(fullFilePath);
      
      if (markdown && markdown.length > 0) {
        // Process the markdown content as text
        const asTxt = require("./convert/asTxt.js");
        const result = await asTxt({
          fullFilePath,
          filename: targetFilename,
          options,
          metadata: {
            ...metadata,
            docSource: metadata.docSource || "converted from " + fileExtension + " using MarkItDown.",
          },
        });
        
        if (result.success) {
          console.log(
            `\x1b[32m[MarkItDown SUCCESS]\x1b[0m ${targetFilename} converted successfully.\n`
          );
          return { ...result, markdownContent: markdown };
        }
      }
    } catch (error) {
      console.warn(
        `\x1b[33m[MarkItDown]\x1b[0m Conversion failed for ${targetFilename}: ${error.message}`
      );
      console.log(
        `\x1b[33m[MarkItDown]\x1b[0m Falling back to standard converters...`
      );
    }
  }

  let processFileAs = fileExtension;
  if (!SUPPORTED_FILETYPE_CONVERTERS.hasOwnProperty(fileExtension)) {
    if (isTextType(fullFilePath)) {
      console.log(
        `\x1b[33m[Collector]\x1b[0m The provided filetype of ${fileExtension} does not have a preset and will be processed as .txt.`
      );
      processFileAs = ".txt";
    } else {
      // If absolute path is provided, do NOT trash the file since it is a user provided path.
      if (!options.absolutePath) trashFile(fullFilePath);
      return {
        success: false,
        reason: `File extension ${fileExtension} not supported for parsing and cannot be assumed as text file type.`,
        documents: [],
      };
    }
  }

  const FileTypeProcessor = require(SUPPORTED_FILETYPE_CONVERTERS[
    processFileAs
  ]);
  return await FileTypeProcessor({
    fullFilePath,
    filename: targetFilename,
    options,
    metadata,
  });
}

module.exports = {
  processSingleFile,
};
