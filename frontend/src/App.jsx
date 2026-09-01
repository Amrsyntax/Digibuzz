import { MainLayout } from './components/layout';
import { DirectoryPage, HomePage, LoginPage, RegisterPage } from './pages';
import { usePath } from './hooks';

function resolvePage(path) {
  if (path === '/login') {
    return <LoginPage />;
  }
  if (path === '/register') {
    return <RegisterPage />;
  }
  if (path === '/directory') {
    return <DirectoryPage />;
  }
  return <HomePage />;
}

function App() {
  const path = usePath();

  return (
    <MainLayout isHome={path === '/'} isAuth={path === '/login' || path === '/register'}>
      {resolvePage(path)}
    </MainLayout>
  );
}

export default App;
