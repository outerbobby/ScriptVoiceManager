import { useRoute } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getCustomerById } from "@/lib/mock-data";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export default function CustomerView() {
  const [, params] = useRoute("/customer/:id");
  const { toast } = useToast();
  
  const customer = getCustomerById(params?.id || "");

  if (!customer) {
    toast({
      title: "Customer not found",
      description: "The requested customer could not be found.",
      variant: "destructive",
    });
    return <Link to="/">Return to home</Link>;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">{customer.name}</h1>
        </div>

        <Tabs defaultValue="script" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="script">Script Builder</TabsTrigger>
            <TabsTrigger value="voice">Voice Actor</TabsTrigger>
            <TabsTrigger value="qc">Quality Control</TabsTrigger>
            <TabsTrigger value="flow">Flow Training Map</TabsTrigger>
          </TabsList>

          <TabsContent value="script">
            <Card>
              <CardHeader>
                <CardTitle>Script Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  className="w-full min-h-[300px] p-4 rounded-md border"
                  defaultValue={customer.scriptContent}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="voice">
            <Card>
              <CardHeader>
                <CardTitle>Voice Actor Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  className="w-full min-h-[300px] p-4 rounded-md border"
                  defaultValue={customer.voiceActorNotes}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="qc">
            <Card>
              <CardHeader>
                <CardTitle>Quality Control Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button
                    variant={customer.qcStatus === 'approved' ? 'default' : 'outline'}
                  >
                    Approve
                  </Button>
                  <Button
                    variant={customer.qcStatus === 'rejected' ? 'destructive' : 'outline'}
                  >
                    Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="flow">
            <Card>
              <CardHeader>
                <CardTitle>Flow Training Map</CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  className="w-full min-h-[300px] p-4 rounded-md border"
                  defaultValue={customer.flowMap}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
