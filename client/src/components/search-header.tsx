import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchHeaderProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchHeader({ value, onChange }: SearchHeaderProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        className="pl-10"
        placeholder="Search customers..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
