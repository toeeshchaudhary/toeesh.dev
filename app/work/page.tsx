import { redirect } from 'next/navigation';

// The FinStocks page became a section of /about.
export default function LegacyWorkPage() {
  redirect('/about');
}
