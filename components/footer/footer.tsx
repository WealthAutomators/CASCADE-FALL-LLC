import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-charcoal text-ivory">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl tracking-[0.12em] text-ivory">CASCADE FALL</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.32em] text-stone">LLC</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone">{company.description}</p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-mist">
              {company.name}
              <br />
              {company.address.street}
              <br />
              {company.address.city}, {company.address.state} {company.address.zip}
              <br />
              <a href={`mailto:${company.email}`} className="mt-3 inline-block text-ivory transition-colors hover:text-accent">
                {company.email}
              </a>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-stone">Shop</h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-mist transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-stone">Collections</h3>
            <ul className="space-y-2.5">
              {footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-mist transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-stone">Customer Care</h3>
            <ul className="space-y-2.5">
              {footerLinks.customerCare.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-mist transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-stone">About</h3>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-mist transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 text-[11px] font-medium uppercase tracking-[0.22em] text-stone">Policies</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-mist transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs tracking-wide text-stone">{company.copyright}</p>
          <div className="flex items-center gap-2">
            {paymentMethods.map((method) => (
              <Image
                key={method.name}
                src={method.icon}
                alt={method.name}
                width={40}
                height={28}
                className="opacity-80"
              />
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
