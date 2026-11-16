'use client';

import { useEffect } from 'react';

// Opens the print dialog. Printing shows the whole resume, so collapsed rows open for the print and close again after.
export default function PrintButton({ label }: { label: string }) {
  useEffect(() => {
    let reopened: HTMLDetailsElement[] = [];
    const open = () => {
      // beforeprint can fire twice before afterprint, so add to the list instead of replacing it.
      const closed = Array.from(document.querySelectorAll<HTMLDetailsElement>('details:not([open])'));
      closed.forEach((d) => (d.open = true));
      reopened.push(...closed);
    };
    const close = () => {
      reopened.forEach((d) => (d.open = false));
      reopened = [];
    };
    window.addEventListener('beforeprint', open);
    window.addEventListener('afterprint', close);
    return () => {
      window.removeEventListener('beforeprint', open);
      window.removeEventListener('afterprint', close);
    };
  }, []);

  return (
    <button type="button" className="pdf" onClick={() => window.print()}>
      {label}
    </button>
  );
}
