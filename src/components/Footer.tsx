const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal-deep border-t border-border/30">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              Nex<span className="text-primary">Evate</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} NexEvate. All rights reserved. Invitation only.
          </p>

          {/* Minimal Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
