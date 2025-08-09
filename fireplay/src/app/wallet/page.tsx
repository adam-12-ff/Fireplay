export default function WalletPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">Wallet</h1>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm text-white/60">Balance</div>
        <div className="text-3xl font-semibold">₹ 0</div>
      </div>
      <form className="space-y-3">
        <div>
          <label className="text-sm text-white/70">UPI ID</label>
          <input className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2" placeholder="gamer@upi" />
        </div>
        <div>
          <label className="text-sm text-white/70">Amount</label>
          <input type="number" className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2" placeholder="50" />
        </div>
        <button className="rounded-md bg-lime-400 text-black px-4 py-2">Request Withdrawal</button>
      </form>
      <div className="pt-6 text-sm text-white/60">Minimum ₹50. Verified users only.</div>
    </div>
  );
}