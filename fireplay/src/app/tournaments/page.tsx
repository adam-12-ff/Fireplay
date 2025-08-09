export default function TournamentsPage() {
  const filters = [
    { label: "Mode", options: ["BR", "CS"] },
    { label: "Type", options: ["Solo", "Duo", "Squad"] },
  ];
  const items = Array.from({ length: 6 }).map((_, i) => ({ id: i + 1, mode: i % 2 ? "CS" : "BR", entry: (i + 1) * 10, slots: 50 }));
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Live Tournaments</h1>
        <a href="/tournaments/create" className="rounded-md bg-lime-400 text-black px-3 py-2 text-sm">Create Tournament</a>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t) => (
          <a key={t.id} href={`/tournaments/${t.id}`} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
            <div className="text-sm text-white/60">{t.mode} • Squad</div>
            <div className="mt-1 text-lg font-semibold">Entry ₹{t.entry}</div>
            <div className="text-sm text-white/60">Slots {t.slots}</div>
          </a>
        ))}
      </div>
    </div>
  );
}