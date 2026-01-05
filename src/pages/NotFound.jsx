import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h1 className="text-3xl font-extrabold">404</h1>
      <p className="mt-2 text-slate-300">Page not found.</p>
      <Link to="/" className="inline-block mt-6 underline text-slate-200">
        Go Home
      </Link>
    </section>
  );
}
