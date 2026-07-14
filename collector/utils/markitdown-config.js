module.exports = {
  MARKITDOWN_PATH: process.env.MARKITDOWN_PATH || '/home/master/Agentic AI Programme/markitdown',
  SUPPORTED_FORMATS: [
    '.pdf', '.doc', '.docx', '.ppt', '.pptx',
    '.xls', '.xlsx', '.jpg', '.jpeg', '.png',
    '.html', '.htm', '.csv', '.json', '.xml',
    '.zip', '.epub', '.txt', '.md'
  ],
  CONVERSION_TIMEOUT: 30000, // 30 seconds
  MAX_FILE_SIZE: 100 * 1024 * 1024, // 100MB
};
