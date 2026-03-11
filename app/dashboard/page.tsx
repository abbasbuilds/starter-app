import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <p className="mt-1 text-white/60">
              Welcome back, {user.email}
            </p>
          </div>
          <form action="/logout" method="POST">
            <button
              type="submit"
              className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
            >
              Logout
            </button>
          </form>
        </div>
        
        <div className="mt-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 max-w-sm">
            <h2 className="text-lg font-medium">Account Details</h2>
            <p className="mt-2 text-sm text-white/50">
              User ID: {user.id}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}