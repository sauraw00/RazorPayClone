import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Section_1 from './component/Section_1';
import Section_2 from './component/Section_2';
import Section_3 from './component/Section_3';
import Section_4 from './component/Section_4';
import Section_5 from './component/Section_5';
import Section_6 from './component/Section_6';
import Section_7 from './component/Section_7';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section_1/>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Section_5/>
      <Section_6/>
      <Section_7/>
      <Footer/>
    </div>
  );
}

export default App;
