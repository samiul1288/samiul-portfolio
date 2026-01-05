export default function Button({ as = "button", className = "", ...props }) {
  const Comp = as;
  return (
    <Comp
      className={
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold " +
        "transition active:scale-[0.99] " +
        className
      }
      {...props}
    />
  );
}
