import { ContactBand, Footer } from './components/Contact';
import { Header } from './components/Header';
import { useReveal } from './components/motion';
import { Home } from './pages/Home';
import { About, Experience, Expertise, NotFound, ProjectDetail, Projects, Work } from './pages/Inner';
import type { Route } from './routes';

const PAGES = { home: Home, about: About, experience: Experience, projects: Projects, project: ProjectDetail, work: Work, expertise: Expertise, notfound: NotFound };

export function App({ route }: { route: Route }) {
  useReveal();
  const Page = PAGES[route.page];
  return (
    <div className="site" id="top">
      <Header route={route} />
      <main id="main" tabIndex={-1}>
        <Page route={route} />
      </main>
      <ContactBand route={route} />
      <Footer route={route} />
    </div>
  );
}
