import './App.css';
import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import desk from './Components/images/desk.png';
import { Button } from "react-bootstrap";
import image2 from './Components/images/image2.png';
import image3 from './Components/images/image3.png';
import mm from './Components/images/mm.png';
import pp from './Components/images/pp.png';

function App() {
  return (
    <div className="App">
      <div>
      <Header />
      </div>
      <div className='img-container'>
  <img src={desk} alt="Image" className="img" />
  </div>
<div class="container">
  <p>We crush your competitors, goals, and sales records - without the B.S.</p>
  <Button>
        Get free consultation
      </Button>
</div>



 
  <div class="container2">
  <img src={image2} alt="Image" />
  <div>
    <h1>Web & Mobile App Development</h1>
    <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
    <button>LEARN MORE</button>
    </div>
  </div>


  <div class="container3">
  
  <div>
    <h1>Digital Strategy Consulting</h1>
    <p>Your digital strategy should complement the overall marketing strategy of the company. 
      In online marketing, each component will never work in isolation and every business needs a 
      different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
    <button>LEARN MORE</button>
    </div>
    <img src={image3} alt="Image" />
  </div>



  

  <div class="container4">
  <h1>Frequently asked questions</h1>

  <div class="containersub1">
    <div class="text3">
      <h2>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h2>
      <img src={mm} alt="Image" />
       
  </div>
 
         </div> 
         <div class="text4">
  <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
         Sapien massa morbi risus sagittis tortor integer.</p>
         </div>

  <div class='text1'>
    <p>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</p>
    <img src={pp} alt="Image" />
  </div>

  <div class='text2'>
    <p>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</p>
    <img src={pp} alt="Image" />
  </div>
</div>
<Footer/>

</div>


  );
}

export default App;
