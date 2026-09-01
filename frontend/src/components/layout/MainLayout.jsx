import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

export function MainLayout({ children, showSidebar = false, isHome = false, isAuth = false }) {
  return (
    <div className="app-shell">
      {isHome || isAuth ? null : <Navbar />}
      <div className="app-shell__body">
        {showSidebar ? <Sidebar /> : null}
        <main className="app-shell__main">{children}</main>
      </div>
      {isHome || isAuth ? null : <Footer />}
    </div>
  );
}
