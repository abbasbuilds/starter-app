import { createClient } from "@/lib/supabase-server";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Starter App</h1>
        <p className="mt-4 text-white/60 text-lg">
          Minimal Next.js + Supabase starter.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          {user ? (
            <a
              href="/dashboard"
              className="rounded-full bg-white px-8 py-3 text-black font-semibold hover:bg-white/90 transition-colors"
            >
              Go to Dashboard
            </a>
          ) : (
            <>
              <a
                href="/login"
                className="rounded-full bg-white px-8 py-3 text-black font-semibold hover:bg-white/90 transition-colors"
              >
                Login
              </a>
              <a
                href="/signup"
                className="rounded-full border border-white/20 px-8 py-3 font-semibold hover:bg-white/5 transition-colors"
              >
                Sign up
              </a>
            </>
          )}
        </div>
      </div>
    </main>
  );
}