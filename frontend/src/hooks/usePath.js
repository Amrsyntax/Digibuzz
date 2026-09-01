import { useEffect, useState } from 'react';

export function navigate(to) {
  if (to.startsWith('#')) {
    const el = document.querySelector(to);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
}

export function usePath() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return path;
}
