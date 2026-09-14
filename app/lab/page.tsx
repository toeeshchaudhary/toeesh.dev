import { redirect } from 'next/navigation';

// The lab's prose was folded into the filterable /projects index.
export default function LegacyLabPage() {
  redirect('/projects');
}
