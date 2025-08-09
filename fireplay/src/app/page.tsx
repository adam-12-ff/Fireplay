import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Empowering Brands? No. Empowering Gamers.
            <span className="block text-lime-400">FirePlay</span>
          </h1>
          <p className="text-white/70 max-w-prose">
            Join Free Fire tournaments, earn XP, level up your FirePlay Card, and
            win cash rewards. Host matches, verify via WhatsApp, and withdraw to UPI.
          </p>
          <div className="flex gap-3">
            <a href="/onboarding" className="rounded-md bg-lime-400 px-4 py-2 text-black font-medium hover:bg-lime-300">Get Started</a>
            <a href="/tournaments" className="rounded-md border border-white/20 px-4 py-2 hover:bg-white/5">Browse Tournaments</a>
          </div>
          <div className="flex gap-6 pt-4 text-sm text-white/70">
            <div><span className="text-white font-semibold">2000+</span> Players</div>
            <div><span className="text-white font-semibold">150M+</span> XP Distributed</div>
            <div><span className="text-white font-semibold">10 Years</span> Experience</div>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-zinc-900 to-black p-6 ring-1 ring-white/10">
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,#22c55e33,transparent_40%),radial-gradient(circle_at_80%_70%,#84cc1633,transparent_35%)]" />
          <div className="relative grid gap-4">
            <div className="rounded-xl backdrop-blur bg-white/5 p-4 border border-white/10">
              <div className="text-xs text-white/60">Your FirePlay Card</div>
              <div className="mt-2 h-28 rounded-lg bg-gradient-to-r from-sky-500/30 via-emerald-400/30 to-lime-400/30 border border-white/10"></div>
            </div>
            <div className="rounded-xl backdrop-blur bg-white/5 p-4 border border-white/10">
              <div className="text-xs text-white/60">Next Match</div>
              <div className="mt-2 h-16 rounded-lg bg-white/5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
