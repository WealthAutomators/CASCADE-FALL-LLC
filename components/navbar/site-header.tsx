"use client";

import { company } from "@/data/company";
import { Navbar } from "@/components/navbar/navbar";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-charcoal text-ivory">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-2 text-[11px] uppercase tracking-[0.18em] sm:px-6 lg:px-8">
          <p className="truncate">Complimentary shipping on orders over $75</p>
          <a href={`mailto:${company.email}`} className="hidden shrink-0 hover:text-stone sm:inline">
            {company.email}
          </a>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
