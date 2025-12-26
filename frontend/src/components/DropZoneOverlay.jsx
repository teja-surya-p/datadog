export default function DropZoneOverlay({ active }) {
  if (!active) {
    return null;
  }

  return (
    <div className="drop-zone" aria-hidden="true">
      <div className="drop-zone-card">
        <p>Drop files to attach them to this chat.</p>
      </div>
    </div>
  );
}
