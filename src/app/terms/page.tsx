export const metadata = {
  title: "Terms & Conditions | SkyRise Digital Hub",
  description: "Scope, revisions, timelines, refunds, and disclaimers.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Terms & Conditions</h1>
      <ul className="mt-4 list-disc list-inside text-sm text-black/80 dark:text-white/80 space-y-2">
        <li>Pricing ranges are estimates; final quotes depend on scope and timelines.</li>
        <li>Packages include defined scope and limited revisions; extras billed separately.</li>
        <li>Turnaround shared in proposal based on content readiness and approvals.</li>
        <li>Refunds are not available after kickoff; milestone-wise billing available.</li>
        <li>Government/third‑party fees (PSK/Embassy/Platforms) are extra as applicable.</li>
      </ul>
    </div>
  );
}


