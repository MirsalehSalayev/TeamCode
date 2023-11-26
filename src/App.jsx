import './App.scss';
import Navbar from './Sections/Navbar';
import Pushing from './Sections/PushingClouds';
import Footer from './Sections/Footer'
import OurMission from './Sections/OurMission';
import RecomendedForYou from './Sections/RecomendedForYou';
import BooksOnSale from './Sections/BookSale';


function App() {
  return (
    <>
      <Navbar />
      <Pushing />
<RecomendedForYou/>
      <OurMission/>
      <BooksOnSale/>
      <Footer />
    </>

  );
}

export default App;
