"use client";

import { useState } from "react";
import { Sparkles, Wallet, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currentUser, type Cause } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const pointPresets = [100, 250, 500, 1000];
const moneyPresets = [10, 25, 50, 100];

type Tab = "points" | "money";

export function DonatePanel({ cause }: { cause: Cause }) {
  const [tab, setTab] = useState<Tab>("points");

  // Points tab state
  const [balance, setBalance] = useState(currentUser.pointsBalance);
  const [selectedPoints, setSelectedPoints] = useState<number | null>(250);
  const [customPoints, setCustomPoints] = useState("");
  const [pointsSuccess, setPointsSuccess] = useState<number | null>(null);

  // Money tab state
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [moneySuccess, setMoneySuccess] = useState<number | null>(null);

  const pointsToGive = customPoints ? Number(customPoints) || 0 : selectedPoints ?? 0;
  const amountToGive = customAmount ? Number(customAmount) || 0 : selectedAmount ?? 0;

  const canDonatePoints = pointsToGive > 0 && pointsToGive <= balance;
  const canDonateMoney = amountToGive > 0;

  function handleDonatePoints() {
    if (!canDonatePoints) return;
    setBalance((b) => b - pointsToGive);
    setPointsSuccess(pointsToGive);
    setSelectedPoints(250);
    setCustomPoints("");
  }

  function handleDonateMoney() {
    if (!canDonateMoney) return;
    setMoneySuccess(amountToGive);
    setSelectedAmount(25);
    setCustomAmount("");
  }

  return (
    <div className="rounded-md border border-slate-line bg-white p-6">
      <p className="font-display text-lg font-semibold">Support {cause.name}</p>
      <p className="mt-1 text-sm text-slate">
        Donate points you've earned, or give directly — every bit routes to this cause.
      </p>

      {/* Tabs */}
      <div className="mt-5 grid grid-cols-2 rounded-full border border-slate-line bg-paper p-1 text-sm font-semibold">
        <button
          onClick={() => setTab("points")}
          className={cn(
            "flex items-center justify-center gap-1.5 rounded-full py-2 transition-colors",
            tab === "points" ? "bg-ink text-paper" : "text-slate hover:text-ink"
          )}
        >
          <Sparkles className="h-4 w-4" /> Points
        </button>
        <button
          onClick={() => setTab("money")}
          className={cn(
            "flex items-center justify-center gap-1.5 rounded-full py-2 transition-colors",
            tab === "money" ? "bg-ink text-paper" : "text-slate hover:text-ink"
          )}
        >
          <Wallet className="h-4 w-4" /> Direct Donation
        </button>
      </div>

      {/* Points tab */}
      {tab === "points" && (
        <div className="mt-5">
          {pointsSuccess !== null ? (
            <SuccessState
              message={`${pointsSuccess.toLocaleString()} points donated to ${cause.name}.`}
              onDismiss={() => setPointsSuccess(null)}
            />
          ) : (
            <>
              <p className="text-xs font-medium text-slate-soft">
                Your balance: <span className="text-ink">{balance.toLocaleString()} pts</span>
              </p>

              <div className="mt-3 grid grid-cols-4 gap-2">
                {pointPresets.map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setSelectedPoints(p);
                      setCustomPoints("");
                    }}
                    disabled={p > balance}
                    className={cn(
                      "rounded-sm border py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                      selectedPoints === p && !customPoints
                        ? "border-mint bg-mint-tint text-mint-deep"
                        : "border-slate-line text-slate hover:border-ink hover:text-ink"
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <Input
                type="number"
                min={0}
                placeholder="Custom amount"
                value={customPoints}
                onChange={(e) => {
                  setCustomPoints(e.target.value);
                  setSelectedPoints(null);
                }}
                className="mt-3"
                aria-label="Custom points amount"
              />

              <Button
                className="mt-4 w-full justify-center"
                disabled={!canDonatePoints}
                onClick={handleDonatePoints}
              >
                Donate {pointsToGive > 0 ? pointsToGive.toLocaleString() : ""} Points
              </Button>
              {pointsToGive > balance && (
                <p className="mt-2 text-xs font-medium text-amber-deep">
                  That's more than your current balance.
                </p>
              )}
            </>
          )}
        </div>
      )}

      {/* Money tab */}
      {tab === "money" && (
        <div className="mt-5">
          {moneySuccess !== null ? (
            <SuccessState
              message={`$${moneySuccess.toLocaleString()} donated to ${cause.name}.`}
              onDismiss={() => setMoneySuccess(null)}
            />
          ) : (
            <>
              <div className="grid grid-cols-4 gap-2">
                {moneyPresets.map((a) => (
                  <button
                    key={a}
                    onClick={() => {
                      setSelectedAmount(a);
                      setCustomAmount("");
                    }}
                    className={cn(
                      "rounded-sm border py-2 text-sm font-semibold transition-colors",
                      selectedAmount === a && !customAmount
                        ? "border-mint bg-mint-tint text-mint-deep"
                        : "border-slate-line text-slate hover:border-ink hover:text-ink"
                    )}
                  >
                    ${a}
                  </button>
                ))}
              </div>

              <Input
                type="number"
                min={0}
                placeholder="Custom amount (USD)"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="mt-3"
                aria-label="Custom donation amount in dollars"
              />

              <Button
                className="mt-4 w-full justify-center"
                disabled={!canDonateMoney}
                onClick={handleDonateMoney}
              >
                Donate ${amountToGive > 0 ? amountToGive.toLocaleString() : ""}
              </Button>
              <p className="mt-3 text-xs text-slate-soft">
                Demo checkout — no real payment will be processed.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function SuccessState({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  return (
    <div className="rounded-sm border border-mint bg-mint-tint p-5 text-center">
      <CircleCheck className="mx-auto h-8 w-8 text-mint-deep" />
      <p className="mt-2 text-sm font-semibold text-mint-deep">Thank you!</p>
      <p className="mt-1 text-sm text-ink/80">{message}</p>
      <button
        onClick={onDismiss}
        className="mt-4 text-xs font-semibold text-slate underline underline-offset-2 hover:text-ink"
      >
        Make another donation
      </button>
    </div>
  );
}
