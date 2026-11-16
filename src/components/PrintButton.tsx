'use client';

import { useEffect } from 'react';

// Opens the print dialog. Printing shows the whole resume, so collapsed rows open for the print and close again after.
export default function PrintButton({ label }: { label: string }) {
  useEffect(() => {
    let reopened: HTMLDetailsElement[] = [];
    const open = () => {
      reopened = Array.from(document.querySelectorAll<HTMLDetailsElement>('details:not([open])'));
      reopened.forEach((d) => (d.open = true));
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
