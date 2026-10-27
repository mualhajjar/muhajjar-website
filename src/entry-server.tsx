import { renderToString } from 'react-dom/server';
import { App } from './App';
import { allRoutes, pathFor, resolve, type Route } from './routes';
import { head } from './seo';

export function render(route: Route) {
  return {
    html: renderToString(<App route={route} />),
    head: head(route),
    lang: route.lang,
    dir: route.lang === 'ar' ? 'rtl' : 'ltr',
  };
}

export { allRoutes, pathFor, resolve };
