import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Logo } from '@/components/icons';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-primary font-headline">
                TIP-TOP SOLUTION HOSPITAL
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Providing compassionate and quality medical services across Nigeria.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/doctors" className="text-muted-foreground hover:text-primary">Find a Doctor</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Patient Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/book-appointment" className="text-muted-foreground hover:text-primary">Book Appointment</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="/emergency" className="text-muted-foreground hover:text-primary">Emergency Info</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Custom Bus-Stop, 4, Kwaru Way, Off Abaranje Rd</li>
              <li>Emergency: 0806 909 8086</li>
              <li>General: 0806 909 8086</li>
              <li>info@tiptopsolutionhospital.ng</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TIP-TOP SOLUTION HOSPITAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
