import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import CustomerCard from "@/components/customer-card";
import AddCustomerDialog from "@/components/add-customer-dialog";
import SearchHeader from "@/components/search-header";
import { mockCustomers, searchCustomers } from "@/lib/mock-data";

export default function Home() {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const customers = searchQuery ? searchCustomers(searchQuery) : mockCustomers;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Voice Actor Manager</h1>
          <Button onClick={() => setShowAddDialog(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Customer
          </Button>
        </div>

        <SearchHeader 
          value={searchQuery}
          onChange={setSearchQuery}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {customers.map((customer) => (
            <CustomerCard key={customer.id} customer={customer} />
          ))}
        </div>

        <AddCustomerDialog 
          open={showAddDialog} 
          onOpenChange={setShowAddDialog}
        />
      </div>
    </div>
  );
}
