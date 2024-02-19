export interface LayoutProps {
  children: React.ReactNode;
}

export interface InvoiceProps {
  currencyName: string;
  exchange: string;
  type: string;
  amount: string;
  network: string;
  date: string;
  status: string;
  details: any;
}
