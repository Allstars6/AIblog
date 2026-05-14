import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary hover:text-accent transition-colors"
        >
          AI Blog
        </Link>
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className="text-muted hover:text-primary transition-colors"
          >
            首页
          </Link>
          <Link
            href="/about"
            className="text-muted hover:text-primary transition-colors"
          >
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}