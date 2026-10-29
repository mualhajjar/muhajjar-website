import { ContactBand, Footer } from './components/Contact';
import { ConsentBanner } from './components/Consent';
import { Header } from './components/Header';
import { useReveal } from './components/motion';
import { Home } from './pages/Home';
import { About, Experience, Expertise, Journal, NotFound, Privacy, ProjectDetail, Projects, Work } from './pages/Inner';
import type { Route } from './routes';

const PAGES = { home: Home, about: About, experience: Experience, projects: Projects, project: ProjectDetail, work: Work, journal: Journal, expertise: Expertise, privacy: Privacy, notfound: NotFound };

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
      <ConsentBanner route={route} />
    </div>
  );
}
