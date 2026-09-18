"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchProducts } from "@/data/products";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/format";

export function SearchBar() {
  return null;
}

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchResults = searchQuery.length > 0 ? searchProducts(searchQuery).slice(0, 6) : [];

  useEffect(() => {
    if (open) {
      setSearchQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-ink/40" onClick={onClose} role="dialog" aria-modal="true" aria-label="Search">
      <div
        className="border-b border-border bg-ivory px-4 py-6 shadow-lg sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto max-w-3xl">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="search"
              placeholder="Search home, outdoor, travel..."
              className="h-12 rounded-none border-0 border-b border-border bg-transparent pl-8 pr-10 text-base shadow-none focus-visible:ring-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </button>
          </form>

          {searchQuery.trim().length > 0 && (
            <div className="mt-4">
              {searchResults.length > 0 ? (
                <ul>
                  {searchResults.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/product/${product.slug}`}
                        className="flex items-center gap-4 py-3 transition-colors hover:bg-cream"
                        onClick={onClose}
                      >
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-cream">
                          <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="56px" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{product.category}</p>
                        </div>
                        <p className="ml-auto text-sm">{formatPrice(product.salePrice ?? product.price)}</p>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      className="w-full py-3 text-left text-sm font-medium uppercase tracking-[0.16em] text-accent"
                      onClick={() => {
                        router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                        onClose();
                      }}
                    >
                      View all results for “{searchQuery}”
                    </button>
                  </li>
                </ul>
              ) : (
                <p className="py-6 text-sm text-muted-foreground">No products found for “{searchQuery}”.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
