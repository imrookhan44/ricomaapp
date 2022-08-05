
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Footer from './components/Footer/Footer';
import logo from './images/logo.svg'
import Testimonails from './components/Testimonails/Testimonails';
import image1 from './images/5dfbd03aab1fd7.62443161 copy 7.png';
import personImage from './images/unsplash_iFgRcqHznqg.png'
import qouteImage from './images/I WANT INTEREST-FREE.png'
import videoPic from './images/Group 14.svg'
import homeIcon from './images/Shape.png'
import productIcon from './images/Vector.png'
import groupIcon from './images/Group.png'
import navIcon from './images/Side menu logo.png'

function App() {
  return (
    <div className="App">
      <Navbar homeIcon={homeIcon} productIcon={productIcon} groupIcon={groupIcon} navIcon={navIcon} />
      <Login playIcon={videoPic} />
      <Testimonails image={image1} person={personImage} qoute={qouteImage} />
      <Footer Logo={logo} playIcon={videoPic} />
    </div>
  );
}

export default App;
