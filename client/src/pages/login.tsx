import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function LoginPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Please Log In</h1>
      <Button
        onClick={() => setLocation("/admin")}
      >
        Login
      </Button>
    </div>
  );
}