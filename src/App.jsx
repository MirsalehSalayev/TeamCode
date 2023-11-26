import './App.scss';
import Navbar from './Sections/Navbar';
import Footer from './Sections/Footer';
import Pushing from './Sections/PushingClouds';
import OurMission from './Sections/OurMission';
import Bookland from './Sections/BooklandIsBestChoiceForLearners';

function App() {
  return (
    <>
      <Navbar />
      <Pushing />
      <Bookland></Bookland>

      <OurMission/>

      <Footer />
    </>

  );
}

export default App;
