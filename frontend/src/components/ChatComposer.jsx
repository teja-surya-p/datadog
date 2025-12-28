function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M3 11.5 20.5 3l-4.5 18-3.9-6.2L3 11.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12.1 14.8 20.5 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 15V4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7 8 12 3l5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ChatComposer({
  inputValue,
  onInputChange,
  onSend,
  onAttachClick,
  onFilesAdded,
  attachedFiles,
  onRemoveFile,
  fileInputRef,
  isSending = false,
  error = '',
}) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (isSending) {
        return;
      }
      onSend();
    }
  };

  const handleFileChange = (event) => {
    onFilesAdded(event.target.files);
    event.target.value = '';
  };

  return (
    <div className="composer">
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="file-input"
        onChange={handleFileChange}
        disabled={isSending}
      />
      {error ? <p className="composer-error">{error}</p> : null}
      {attachedFiles.length ? (
        <div className="attachment-row">
          {attachedFiles.map((file) => (
            <div key={file.name} className="attachment-chip">
              <span>{file.name}</span>
              <button
                className="chip-button"
                type="button"
                aria-label={`Remove ${file.name}`}
                onClick={() => onRemoveFile(file.name)}
                disabled={isSending}
              >
                x
              </button>
            </div>
          ))}
        </div>
      ) : null}
      <div className="composer-row">
        <textarea
          value={inputValue}
          onChange={(event) => onInputChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Orbit AI anything. Press Enter to send, Shift + Enter for a new line."
          rows={1}
          disabled={isSending}
        />
        <div className="composer-actions">
          <button
            className="icon-button"
            type="button"
            onClick={onAttachClick}
            aria-label="Upload"
            disabled={isSending}
          >
            <UploadIcon />
          </button>
          <button
            className="primary-button"
            type="button"
            onClick={onSend}
            aria-label="Send"
            disabled={isSending}
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
