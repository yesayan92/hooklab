export default function Header({ onCTAClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 bg-background/80 backdrop-blur-md border-b border-border/40">
      <span className="font-heading font-bold text-xl tracking-tight text-foreground">
        Hook<span className="text-accent">Lab</span>
      </span>
      <button
        onClick={onCTAClick}
        className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        Оставить заявку →
      </button>
    </header>
  );
}