"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SearchOverlay } from "@/components/navbar/search-bar";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  return (
    <>
      <header className="border-b border-border/80 bg-ivory/90 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center gap-6 lg:h-[4.5rem]">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <Link href="/" className="flex shrink-0 items-center" aria-label={company.name}>
              <Image
                src="/logo/logo.svg"
                alt={company.name}
                width={240}
                height={44}
                priority
                className="h-9 w-auto sm:h-10"
              />
            </Link>

            <nav className="hidden flex-1 justify-center lg:flex">
              <ul className="flex items-center gap-1">
                {navigationLinks.map((link) => (
                  <li
                    key={link.href + link.label}
                    className="relative"
                    onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className="px-3 py-2 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                    {link.children && activeDropdown === link.label && (
                      <div className="absolute left-0 top-full z-50 min-w-[230px] border border-border bg-card py-3 shadow-sm">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-cream hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
                <li data-mobile-extra className="mt-2 flex gap-2 border-t border-border pt-3 sm:hidden">
                  <Link href="/wishlist" onClick={() => setMobileOpen(false)} className="flex-1 rounded-md border border-border px-3 py-2 text-center text-sm font-medium hover:bg-muted">Wishlist</Link>
                  <Link href="/account" onClick={() => setMobileOpen(false)} className="flex-1 rounded-md border border-border px-3 py-2 text-center text-sm font-medium hover:bg-muted">Account</Link>
                </li>
              </ul>
            </nav>

            <div className="ml-auto flex items-center gap-0.5">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="h-[18px] w-[18px]" />
              </Button>

              <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex h-10 w-10">
                <Link href="/profile" aria-label="Account">
                  <User className="h-[18px] w-[18px]" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex relative h-10 w-10">
                <Link href="/wishlist" aria-label="Wishlist">
                  <Heart className="h-[18px] w-[18px]" />
                  {wishlist.length > 0 && (
                    <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[9px] font-semibold text-white">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild className="relative h-10 w-10">
                <Link href="/cart" aria-label="Cart">
                  <ShoppingBag className="h-[18px] w-[18px]" />
                  {itemCount > 0 && (
                    <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-semibold text-primary-foreground">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </Button>
            </div>
          </div>
        </Container>

        {mobileOpen && (
          <div className="border-t border-border bg-ivory lg:hidden">
            <Container className="py-4">
              <ul className="space-y-1">
                {navigationLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="block px-2 py-2.5 text-sm font-medium uppercase tracking-[0.16em]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <ul className="mb-2 ml-2 space-y-0.5 border-l border-border pl-3">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-2 py-1.5 text-sm text-muted-foreground"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        )}
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
