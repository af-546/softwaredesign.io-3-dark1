import { useState } from "react";
import { roiDefaults } from "@/data/pricing";
import { CountUp } from "./CountUp";

export function ROICalculator() {
  const [conversion, setConversion] = useState(roiDefaults.currentConversion);
  const [visitors, setVisitors] = useState(roiDefaults.monthlyVisitors);
  const [aov, setAov] = useState(roiDefaults.avgOrderValue);
  const [cost, setCost] = useState(roiDefaults.projectCost);

  const currentRevenue = (visitors * (conversion / 100) * aov);
  const improvedConversion = conversion * 1.8;
  const projectedRevenue = visitors * (improvedConversion / 100) * aov;
  const monthlyGain = projectedRevenue - currentRevenue;
  const paybackMonths = monthlyGain > 0 ? Math.ceil(cost / monthlyGain) : 0;

  return (
    <div className="glass-panel rounded-2xl p-8">
      <h3 className="heading-md mb-2">ROI Calculator</h3>
      <p className="text-ink-soft text-sm mb-8">
        Estimate the return on a design investment based on conversion lift.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        {[
          { label: "Conversion rate (%)", value: conversion, set: setConversion, max: 10, step: 0.1 },
          { label: "Monthly visitors", value: visitors, set: setVisitors, max: 100000, step: 1000 },
          { label: "Avg. order value ($)", value: aov, set: setAov, max: 1000, step: 10 },
          { label: "Project cost ($)", value: cost, set: setCost, max: 200000, step: 1000 },
        ].map((s) => (
          <div key={s.label}>
            <label className="text-xs font-mono text-ink-muted uppercase tracking-wider">{s.label}</label>
            <input
              type="range"
              min={0}
              max={s.max}
              step={s.step}
              value={s.value}
              onChange={(e) => s.set(Number(e.target.value))}
              className="w-full mt-2 accent-neon-cyan"
            />
            <p className="text-neon-cyan font-mono text-sm mt-1">{s.value.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bento-card !p-4">
          <p className="text-xs text-ink-muted mb-1">Monthly gain</p>
          <p className="font-display text-2xl text-neon-cyan">
            $<CountUp end={Math.round(monthlyGain)} />
          </p>
        </div>
        <div className="bento-card !p-4">
          <p className="text-xs text-ink-muted mb-1">Payback</p>
          <p className="font-display text-2xl text-neon-magenta">
            <CountUp end={paybackMonths} /> mo
          </p>
        </div>
        <div className="bento-card !p-4">
          <p className="text-xs text-ink-muted mb-1">Annual ROI</p>
          <p className="font-display text-2xl text-neon-gold">
            {monthlyGain > 0 ? Math.round(((monthlyGain * 12 - cost) / cost) * 100) : 0}%
          </p>
        </div>
      </div>
    </div>
  );
}
