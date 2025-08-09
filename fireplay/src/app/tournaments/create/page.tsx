"use client";
import { useState } from "react";

export default function CreateTournamentPage() {
  const [mode, setMode] = useState("BR");
  const [type, setType] = useState("Squad");
  const [slots, setSlots] = useState(50);
  const [entry, setEntry] = useState(20);
  const [platformFee, setPlatformFee] = useState(1.5);
  const prizePool = entry * slots;
  const platformIncome = platformFee * slots;

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">Create Tournament</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="space-y-1">
          <span className="text-sm text-white/70">Mode</span>
          <select value={mode} onChange={(e)=>setMode(e.target.value)} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2">
            <option>BR</option>
            <option>CS</option>
          </select>
        </label>
        <label className="space-y-1">
          <span className="text-sm text-white/70">Type</span>
          <select value={type} onChange={(e)=>setType(e.target.value)} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2">
            <option>Solo</option>
            <option>Duo</option>
            <option>Squad</option>
          </select>
        </label>
        <label className="space-y-1">
          <span className="text-sm text-white/70">Slots</span>
          <input type="number" value={slots} onChange={(e)=>setSlots(parseInt(e.target.value||"0"))} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2" />
        </label>
        <label className="space-y-1">
          <span className="text-sm text-white/70">Entry Fee (₹)</span>
          <input type="number" value={entry} onChange={(e)=>setEntry(parseInt(e.target.value||"0"))} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2" />
        </label>
        <label className="space-y-1">
          <span className="text-sm text-white/70">Platform Fee (₹)</span>
          <input type="number" step="0.5" value={platformFee} onChange={(e)=>setPlatformFee(parseFloat(e.target.value||"0"))} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2" />
        </label>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm text-white/60">Preview</div>
        <div className="mt-2 grid sm:grid-cols-2 gap-2">
          <div>Prize Pool: <span className="font-semibold">₹{prizePool}</span></div>
          <div>Platform Income: <span className="font-semibold">₹{platformIncome}</span></div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <a href="/tournaments" className="px-3 py-2 rounded-md border border-white/10">Cancel</a>
        <button className="px-3 py-2 rounded-md bg-lime-400 text-black">Confirm & Create</button>
      </div>
    </div>
  );
}