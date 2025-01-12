import { Link } from "wouter";

export default function GlobalHeader() {
  return (
    <header className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          MyLogo
        </Link>
        <div>
          Logged in as Admin
        </div>
      </div>
    </header>
  );
}