import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-[#F8F9FA] px-6 py-20 animate-in fade-in duration-1000">
      <div className="w-full max-w-sm flex flex-col items-center">
         <div className="w-full bg-white rounded-2xl border border-zinc-100 shadow-sm relative overflow-hidden group">
            <LoginForm />
         </div>
      </div>
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-60">
         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #E9ECEF 1.5px, transparent 0)', backgroundSize: '48px 48px' }} />
      </div>
    </main>
  );
}
