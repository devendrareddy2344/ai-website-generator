import Loader from "./Loader";

export default function PreviewPanel({ code, loading }) {
  return (
    <main className="preview-panel">
      <div className="preview-card">
        <div className="preview-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="preview-title">Live Preview</span>
        </div>

        {loading && <Loader />}

        <iframe
          title="Preview"
          sandbox="allow-scripts allow-forms"
          srcDoc={code}
        />
      </div>
    </main>
  );
}
