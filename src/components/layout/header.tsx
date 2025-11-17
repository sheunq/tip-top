"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, User, Mail } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card sticky top-0 z-40 w-full border-b">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-xs">
          <div className="flex items-center gap-4">
            <Phone className="h-4 w-4" />
            <span>Emergency: 0806 909 8086</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="flex items-center gap-2 hover:text-secondary">
              <User className="h-4 w-4" />
              <span>Patient Portal</span>
            </Link>
            <Link href="/contact" className="flex items-center gap-2 hover:text-secondary">
              <Mail className="h-4 w-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center gap-2 mr-8">
          <Logo className="h-10 w-10 text-primary" />
          <span className="font-bold text-lg text-primary font-headline uppercase">
            TIP-TOP SOLUTION<br/>HOSPITAL
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary uppercase font-bold",
                pathname === link.href ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2 md:ml-4">
          <Button asChild className="hidden md:flex" variant="secondary">
            <Link href="/book-appointment">Book an Appointment</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="font-bold text-lg text-primary font-headline uppercase">
                      TIP-TOP SOLUTION<br/>HOSPITAL
                    </span>
                  </Link>
                  <SheetTrigger asChild>
                     <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-5 w-5" />
                     </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-4 p-4 text-lg font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "transition-colors hover:text-primary py-2 uppercase",
                        pathname === link.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground hover:text-primary py-2 uppercase">Contact Us</Link>
                </nav>
                <div className="mt-auto p-4 border-t">
                  <Button asChild className="w-full" variant="secondary" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/book-appointment">Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
