import Hero from '../components/home/Hero';
import Problems from '../components/home/Problems';
import Services from '../components/home/Services';
import Work from '../components/home/Work';
import Process from '../components/home/Process';
import Growth from '../components/home/Growth';
import About from '../components/home/About';
import Stack from '../components/home/Stack';
import Credentials from '../components/home/Credentials';
import Contact from '../components/home/Contact';

// Order follows the visitor's questions:
// Who is this? → What can he do for me? → Has he done it? → Can he understand
// my problem? → Who is he? → How do I work with him? → Let's talk.
const Home = () => (
  <>
    <Hero />
    <Problems />
    <Services />
    <Work />
    <Process />
    <Growth />
    <About />
    <Credentials />
    <Stack />
    <Contact />
  </>
);

export default Home;
