import { Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Cyril LAY</h3>
            <p className="text-sm opacity-90">Senior AI Engineer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/cyril-lay-2017/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/cyrillay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@lays.pro"
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} Cyril LAY. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
