
import { Facebook, Linkedin, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/azynctra',
      icon: Facebook
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/azynctra',
      icon: Linkedin
    }
  ];
  
  return (
    <footer className="bg-azynctra-muted pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and info */}
          <div className="space-y-4">
            <img src="/azynctra-logo.png" alt="Azynctra" className="h-10" />
            <p className="text-foreground/60">
              Empowering businesses through intelligent AI solutions and innovative software products.
            </p>
            {/* Social links */}
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-foreground/60">
              <li>Phone: +94-72163 2131</li>
              <li>Email: info@azynctra.com</li>
              <li>Location: Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-border/30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-foreground/60 text-sm">
          <p>© {currentYear} Azynctra. All Rights Reserved.</p>
          <div className="flex items-center mt-2 md:mt-0">
            <p className="inline-flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Azynctra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
