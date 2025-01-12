export interface Customer {
  id: string;
  name: string;
  notes: string;
  template: string;
  scriptContent?: string;
  voiceActorNotes?: string;
  qcStatus?: 'pending' | 'approved' | 'rejected';
  flowMap?: string;
  comments?: string; // New field
}

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Acme Corporation',
    notes: 'Enterprise client - handle with priority',
    template: 'Corporate',
    scriptContent: 'Welcome to Acme Corp...',
    voiceActorNotes: 'Deep professional voice required',
    qcStatus: 'approved',
    flowMap: 'Initial greeting -> Menu options -> Department routing',
    comments: 'Important client with high contract value.'
  },
  {
    id: '2',
    name: 'TechStart Solutions',
    notes: 'Startup - modern casual tone',
    template: 'Startup',
    scriptContent: 'Hey there! Thanks for reaching out...',
    voiceActorNotes: 'Energetic and friendly tone',
    qcStatus: 'pending',
    flowMap: 'Greeting -> Product info -> Support',
    comments: 'Might need updates after Q2.'
  }
];

export function searchCustomers(query: string): Customer[] {
  const lowercaseQuery = query.toLowerCase();
  return mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(lowercaseQuery) ||
    customer.notes.toLowerCase().includes(lowercaseQuery)
  );
}

export function getCustomerById(id: string): Customer | undefined {
  return mockCustomers.find(customer => customer.id === id);
}