export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-500">
      <nav>
        <ul>
          <li>
            <a href="/">Página inicial</a>
          </li>
          <li>
            <a href="/about">Sobre</a>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}