export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-base-950" />
      <div className="absolute inset-0 bg-grid-glow" />
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-indigo-600/25 blur-[110px] animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-violet-600/25 blur-[110px] animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-cyan-500/15 blur-[110px] animate-blob [animation-delay:8s]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}
