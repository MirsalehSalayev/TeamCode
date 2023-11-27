import './App.scss';
import Navbar from './Sections/Navbar';
import Footer from './Sections/Footer';
import Pushing from './Sections/PushingClouds';
import OurMission from './Sections/OurMission';

import Bookland from './Sections/BooklandIsBestChoiceForLearners';

import RecomendedForYou from './Sections/RecomendedForYou';
import BooksOnSale from './Sections/BookSale';
import OurPricing from './Sections/OurPricing';
import WhatCustomerSay from './Sections/WhatCustomerSaid';


function App() {
      return (
            <>
                  <Navbar />
                  <Pushing />
                  <Bookland />
                  <RecomendedForYou />
                  <OurMission />
                  <BooksOnSale />
                  <WhatCustomerSay/>
                  
                  <OurPricing />
                  <Footer />
    </>

  );

    

}

export default App;
