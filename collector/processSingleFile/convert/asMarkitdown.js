// collector/processSingleFile/convert/asMarkitdown.js
const { spawn } = require('child_process');

module.exports = async function convertWithMarkItDown(filePath) {
  return new Promise((resolve, reject) => {
    const markitdownPath = process.env.MARKITDOWN_PATH || '/home/master/Agentic AI Programme/markitdown';
    
    const pythonProcess = spawn('python3', [
      '-c',
      `import sys; sys.path.insert(0, '${markitdownPath}/packages/markitdown/src'); from markitdown import MarkItDown; md = MarkItDown(); result = md.convert('${filePath}'); print(result.text_content)`
    ]);
    
    let markdown = '';
    let errorOutput = '';
    
    pythonProcess.stdout.on('data', (data) => {
      markdown += data.toString();
    });
    
    pythonProcess.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });
    
    pythonProcess.on('close', (code) => {
      if (code === 0 && markdown) {
        resolve(markdown.trim());
      } else {
        reject(new Error(`MarkItDown: ${errorOutput || 'Conversion failed'}`));
      }
    });
    
    setTimeout(() => {
      pythonProcess.kill();
      reject(new Error('MarkItDown timeout (30s)'));
    }, 30000);
  });
};
