export default function OnboardingPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Onboarding</h1>
      <section className="space-y-3">
        <h2 className="font-semibold">1) Phone Number</h2>
        <form className="flex gap-2">
          <input className="flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none" placeholder="+91 98765 43210" />
          <button className="rounded-md bg-lime-400 text-black px-4">Send OTP</button>
        </form>
      </section>
      <section className="space-y-3">
        <h2 className="font-semibold">2) Free Fire Profile Screenshot</h2>
        <div className="rounded-lg border border-dashed border-white/20 p-6 text-sm text-white/60">Drag & drop screenshot (max 2MB). OCR will try to read UID/Username.</div>
      </section>
      <section className="space-y-3">
        <h2 className="font-semibold">3) FirePlay Card Preview</h2>
        <div className="h-40 rounded-xl bg-gradient-to-r from-sky-500/30 via-yellow-400/30 to-fuchsia-400/30 border border-white/10"></div>
      </section>
      <div className="flex justify-end">
        <a href="/tournaments" className="rounded-md bg-lime-400 text-black px-4 py-2">Continue</a>
      </div>
    </div>
  );
}