import './App.css';
import UserProfile from './components/UserProfile.js';
import Hobbies from './components/Hobbies.js';
import bgImage from './img/mario_bg.png';



function App() {
  return (

    <div className=" h-screen mx-auto flex flex-col justify-center items-center  " style={{ backgroundImage: `url(${bgImage})` }}>
      <div className=' mx-auto '>
        <UserProfile name="Mario" />
        <Hobbies />
      </div>
    </div>


  );
}

export default App;