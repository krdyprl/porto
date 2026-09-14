// Merender penekanan **tebal** di dalam teks, tanpa perlu parser markdown penuh.
// Dipakai di section yang menampilkan teks panjang (About, Experience, Projects, dll).
export default function RichText({ text }) {
  if (!text) return null;
  const parts = String(text).split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}
