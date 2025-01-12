import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, User, CheckCircle, XCircle, Clock } from "lucide-react";
import { Link } from "wouter";
import type { Customer } from "@/lib/mock-data";

interface CustomerCardProps {
  customer: Customer;
}

export default function CustomerCard({ customer }: CustomerCardProps) {
  const getStatusIcon = () => {
    switch (customer.qcStatus) {
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-yellow-500" />;
    }
  };

  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{customer.name}</CardTitle>
        {getStatusIcon()}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mt-1">{customer.notes}</p>
        <div className="flex gap-2 mt-4">
          <Badge variant="outline" className="flex items-center gap-1">
            <FileText className="h-3 w-3" />
            {customer.template}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <User className="h-3 w-3" />
            Voice Actor
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/customer/${customer.id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
