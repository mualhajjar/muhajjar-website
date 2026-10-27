import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import { resolve } from './routes';
import './styles/global.css';

const el = document.getElementById('root')!;
// Prerendered pages declare their route; the dev server falls back to the URL.
const raw = el.dataset.route || '';
const route = raw.startsWith('{') ? JSON.parse(raw) : resolve(location.pathname);

if (el.hasChildNodes()) {
  hydrateRoot(el, <App route={route} />);
} else {
  // `npm run dev`: no prerendered HTML, so render on the client and set the document language here.
  document.documentElement.lang = route.lang;
  document.documentElement.dir = route.lang === 'ar' ? 'rtl' : 'ltr';
  createRoot(el).render(<App route={route} />);
}
