export function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[var(--blush)] opacity-60 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-32 w-[26rem] h-[26rem] rounded-full bg-[var(--lavender)] opacity-50 blur-3xl animate-float-slower" />
      <div className="absolute bottom-0 left-1/3 w-[22rem] h-[22rem] rounded-full bg-[var(--butter)] opacity-50 blur-3xl animate-float-slow" />
    </div>
  );
}
