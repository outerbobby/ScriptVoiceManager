import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import AdminPanel from "@/pages/adminPanel";
import CustomerView from "@/pages/customer-view";
import NotFound from "@/pages/not-found";
import LoginPage from "@/pages/login";
import TemplatesPage from "@/pages/templates";
import GlobalHeader from "@/components/global-header";

function Router() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/admin" component={AdminPanel} />
      <Route path="/customer/:id" component={CustomerView} />
      <Route path="/templates" component={TemplatesPage} />
      <Route path="/" component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalHeader />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;