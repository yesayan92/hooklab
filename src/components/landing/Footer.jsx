export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading font-semibold text-lg">
              Performance Content Agency
            </p>
          </div>
          <p className="font-mono text-xs text-background/40">
            © {new Date().getFullYear()} — Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}