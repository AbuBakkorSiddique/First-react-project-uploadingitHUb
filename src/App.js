import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation.js';

import Hero from './Hero.js';
import Features from './Features.js';
import Multicarosule from './Multicarosule.js';
import MainItem from './MainItem.js';
import Footer from './Footer.js';



function App() {


const  duty = " Hello world , How are you bro " ; 





  return (
   <>
   
<Navigation /> 


<Hero />

<Features />
<Multicarosule />
< MainItem  men={duty} />

<Footer />
   
   
   
   
   
   
   
   </>
  );
}

export default App;
