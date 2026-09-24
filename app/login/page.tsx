import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LumoraWordmark } from "@/components/layout/logo";

export default function LoginPage() {
  return (
    <div className="grid min-h-[calc(100vh-64px)] lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-16 sm:px-16">
        <div className="mx-auto w-full max-w-sm">
          <LumoraWordmark />
          <h1 className="mt-8 font-display text-3xl font-semibold">Join Lumora</h1>
          <p className="mt-2 text-slate">Learn something. Do something. Create impact.</p>

          <div className="mt-8 space-y-3">
            <Button variant="outline" className="w-full justify-center gap-3">
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden>
                <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.3h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.54-5.17 3.54-8.66Z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.94-2.91l-3.88-3c-1.08.72-2.46 1.15-4.06 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.1A12 12 0 0 0 12 24Z" />
                <path fill="#FBBC05" d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28v-3.1H1.26A12 12 0 0 0 0 12c0 1.94.46 3.77 1.26 5.38l4.01-3.1Z" />
                <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.26 6.62l4.01 3.1C6.22 6.88 8.87 4.77 12 4.77Z" />
              </svg>
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full justify-center gap-3">
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-ink" aria-hidden>
                <path d="M16.36 1.43c0 1.14-.43 2.2-1.16 3.02-.83.94-2.18 1.67-3.3 1.58-.15-1.1.4-2.24 1.14-3.01.83-.9 2.28-1.58 3.32-1.59ZM20.6 17.2c-.5 1.15-.74 1.66-1.38 2.68-.9 1.44-2.16 3.24-3.73 3.25-1.4.02-1.76-.91-3.66-.9-1.9.01-2.3.92-3.7.9-1.57-.02-2.76-1.63-3.66-3.06-2.5-3.95-2.76-8.6-1.22-11.07 1.1-1.75 2.83-2.78 4.46-2.78 1.65 0 2.7.91 4.07.91 1.32 0 2.14-.91 4.06-.91 1.45 0 2.99.79 4.09 2.16-3.6 1.98-3.01 7.13.67 8.82Z" />
              </svg>
              Continue with Apple
            </Button>
          </div>

          <div className="my-6 flex items-center gap-3 text-xs text-slate-soft">
            <span className="h-px flex-1 bg-slate-line" /> or <span className="h-px flex-1 bg-slate-line" />
          </div>

          <form className="space-y-3">
            <Input type="email" placeholder="Email address" aria-label="Email address" />
            <Button className="w-full justify-center gap-2">
              <Mail className="h-4 w-4" /> Sign up with email
            </Button>
          </form>

          <p className="mt-6 text-xs text-slate-soft">
            By continuing you agree to Lumora's Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

      <div className="relative hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop"
          alt="Sunrise over a mountain ridge"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <p className="absolute bottom-10 left-10 max-w-sm font-display text-2xl font-semibold text-white">
          More than a platform. It's a movement.
        </p>
      </div>
    </div>
  );
}
