export default function AdminPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <div className="grid sm:grid-cols-3 gap-4">
        <a className="rounded-xl border border-white/10 bg-white/5 p-4" href="#verify">
          <div className="text-sm text-white/60">Verifications</div>
          <div className="text-xl font-semibold">WhatsApp Codes</div>
        </a>
        <a className="rounded-xl border border-white/10 bg-white/5 p-4" href="#withdrawals">
          <div className="text-sm text-white/60">Withdrawals</div>
          <div className="text-xl font-semibold">Pending</div>
        </a>
        <a className="rounded-xl border border-white/10 bg-white/5 p-4" href="#disputes">
          <div className="text-sm text-white/60">Disputes</div>
          <div className="text-xl font-semibold">Manual Review</div>
        </a>
      </div>
    </div>
  );
}