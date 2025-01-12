import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import SearchHeader from "@/components/search-header";
import AddCustomerDialog from "@/components/add-customer-dialog";
import { mockCustomers, searchCustomers } from "@/lib/mock-data";
import { Link, useLocation } from "wouter";

export default function AdminPanel() {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useLocation();

  const customers = searchQuery ? searchCustomers(searchQuery) : mockCustomers;

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setLocation("/templates")}
          >
            Manage Templates
          </Button>
          <Button
            onClick={() => setShowAddDialog(true)}
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            Add New Customer
          </Button>
        </div>
      </div>

      <SearchHeader
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="p-4 border rounded-md cursor-pointer hover:shadow"
            onClick={() => setLocation(`/customer/${customer.id}`)}
          >
            <h2 className="text-lg font-semibold">{customer.name}</h2>
            {customer.notes && (
              <p className="text-sm text-muted-foreground mt-1">
                {customer.notes.slice(0, 80)}{customer.notes.length > 80 ? "..." : ""}
              </p>
            )}
          </div>
        ))}
      </div>

      <AddCustomerDialog
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
      />
    </div>
  );
}