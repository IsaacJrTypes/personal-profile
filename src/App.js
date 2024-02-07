import './App.css';
import { Profile } from './components/profile';
import { Hobbies } from './components/hobbies';
import bgImage from './img/mario_bg.png';



function App() {
  return (

    <div className=" h-screen mx-auto flex flex-col justify-center items-center  " style={{ backgroundImage: `url(${bgImage})` }}>
      <div className=' mx-auto '>
        <Profile />
        <Hobbies />
      </div>
    </div>


  );
}

export default App;
