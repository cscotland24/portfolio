export function WeaveRule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`weave-rule ${className}`}>
      <span />
      <span />
      <span />
    </div>
  );
}
