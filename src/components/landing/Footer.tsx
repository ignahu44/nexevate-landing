const Footer = () => {
  return (
    <footer className="relative py-16 bg-obsidian border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-2xl text-gradient-gold">Nexevate</p>
            <p className="text-xs tracking-wide-custom uppercase text-muted-foreground mt-2">
              Where Expansion Begins
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Nexevate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
