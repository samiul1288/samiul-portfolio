import { forwardRef } from "react";

const GlassCard = forwardRef(function GlassCard(
  { className = "", children },
  ref
) {
  return (
    <div
      ref={ref}
      className={
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur " +
        "shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] " +
        className
      }
    >
      {children}
    </div>
  );
});

export default GlassCard;
