import { X, DownloadSimple, CheckCircle } from "@phosphor-icons/react";

export default function MarkdownPreviewModal({ filename, markdown, onClose }) {
  const handleDownload = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename.replace(/\.[^.]+$/, "") + ".md";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleBackdropClick = (e) => {
    // Only close if clicking directly on the backdrop, not on the modal itself
    if (e.target === e.currentTarget) {
      // Don't close - only close on X button click
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={handleBackdropClick}
    >
      <div className="bg-theme-bg-secondary rounded-xl w-[700px] max-h-[80vh] flex flex-col shadow-xl border border-white/10">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-x-3">
            <div className="flex items-center gap-x-2">
              <CheckCircle size={20} className="text-green-500" weight="fill" />
              <div>
                <p className="text-white font-semibold text-sm">MarkItDown Preview</p>
                <p className="text-green-400 text-xs mt-0.5 font-medium">✓ Markdown conversion successful</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-x-1.5 text-xs text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
            >
              <DownloadSimple size={14} />
              Download .md
            </button>
            <button
              onClick={onClose}
              className="text-white/50 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="px-5 py-2 bg-green-500/10 border-b border-green-500/20">
          <p className="text-green-300 text-xs font-medium">
            📄 File saved as: <span className="font-semibold">{filename}</span>
          </p>
        </div>
        <pre className="p-5 overflow-y-auto text-xs text-white/80 font-mono whitespace-pre-wrap break-words flex-1">
          {markdown}
        </pre>
      </div>
    </div>
  );
}
