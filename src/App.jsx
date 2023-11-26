import './App.scss';
import Navbar from './Sections/Navbar';
import Footer from './Sections/Footer';
import Pushing from './Sections/PushingClouds';
import OurMission from './Sections/OurMission';

import Bookland from './Sections/BooklandIsBestChoiceForLearners';

import RecomendedForYou from './Sections/RecomendedForYou';
import BooksOnSale from './Sections/BookSale';

function App() {
  return (
    <>
      <Navbar />
      <Pushing />
      <Bookland/>

      <OurMission/>
<RecomendedForYou/>
      <OurMission/>
      <BooksOnSale/>
      <Footer />
    </>

  );
}

export default App;
