import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import CaseStudy from './components/CaseStudy';
// import Services from './components/Services';
// import Process from './components/Process';
// import About from './components/About';
// import WhyChooseMe from './components/WhyChooseMe';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Portfolio />
      <CaseStudy />
      {/* Services and other sections will be enabled in subsequent phases */}
      {/* <Services /> */}
      {/* <Process /> */}
      {/* <About /> */}
      {/* <WhyChooseMe /> */}
      {/* <FAQ /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
