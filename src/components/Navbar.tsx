import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const switchLanguage = (lang: 'fr' | 'en') => {
    if (lang === 'en') {
      navigate('/en');
    } else {
      navigate('/');
    }
  };

  const navItems = isEnglish 
    ? [
        { label: "Home", href: "hero" },
        { label: "Services", href: "services" },
        { label: "Contact", href: "contact" }
      ]
    : [
        { label: "Accueil", href: "hero" },
        { label: "Services", href: "services" },
        { label: "Contact", href: "contact" }
      ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="hover:opacity-80 transition-opacity"
            aria-label="Retour à l'accueil"
          >
            <img 
              src={logo} 
              alt="Logo Cyril LAY - Expert IA et Machine Learning" 
              className="h-16 w-16 object-contain"
              width="64"
              height="64"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  {isEnglish ? 'EN' : 'FR'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background">
                <DropdownMenuItem className="cursor-pointer" onClick={() => switchLanguage('fr')}>
                  🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => switchLanguage('en')}>
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="hero" 
              size="default"
              onClick={() => scrollToSection('contact')}
            >
              {isEnglish ? 'Get a quote' : 'Obtenir un devis'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 space-y-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Globe className="h-4 w-4" />
                    {isEnglish ? 'English' : 'Français'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="bg-background">
                  <DropdownMenuItem className="cursor-pointer" onClick={() => switchLanguage('fr')}>
                    🇫🇷 Français
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" onClick={() => switchLanguage('en')}>
                    🇬🇧 English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                variant="hero" 
                size="default"
                className="w-full"
                onClick={() => scrollToSection('contact')}
              >
                {isEnglish ? 'Get a quote' : 'Obtenir un devis'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
