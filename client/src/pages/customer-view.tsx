import { useRoute } from "wouter";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getCustomerById } from "@/lib/mock-data";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import ScriptBuilderTab from "@/components/tabs/script-builder-tab";
import VoiceActorTab from "@/components/tabs/voice-actor-tab";
import QualityControlTab from "@/components/tabs/quality-control-tab";
import FlowTrainingTab from "@/components/tabs/flow-training-tab";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CustomerView() {
  const [, params] = useRoute("/customer/:id");
  const { toast } = useToast();
  const customer = getCustomerById(params?.id || "");
  const [openInfo, setOpenInfo] = React.useState(false);

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
        {/* Header Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">{customer.name}</h1>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Apply Template" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Corporate">Corporate</SelectItem>
                <SelectItem value="Startup">Startup</SelectItem>
                <SelectItem value="Enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Collapsible Info */}
        <Collapsible open={openInfo} onOpenChange={setOpenInfo}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Client Info</h2>
            <CollapsibleTrigger
              className={buttonVariants({ variant: "outline" })}
            >
              {openInfo ? "Hide Info" : "Show Info"}
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Basic Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Notes:</strong> {customer.notes}</p>
                <p className="mt-2"><strong>Comments:</strong> {customer.comments || "No comments"}</p>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Tabs */}
        <Tabs defaultValue="script">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="script">Script Builder</TabsTrigger>
            <TabsTrigger value="voice">Voice Actor</TabsTrigger>
            <TabsTrigger value="qc">Quality Control</TabsTrigger>
            <TabsTrigger value="flow">Flow Training Map</TabsTrigger>
          </TabsList>

          <TabsContent value="script">
            <ScriptBuilderTab />
          </TabsContent>
          <TabsContent value="voice">
            <VoiceActorTab />
          </TabsContent>
          <TabsContent value="qc">
            <QualityControlTab />
          </TabsContent>
          <TabsContent value="flow">
            <FlowTrainingTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}