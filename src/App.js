import './App.css';
import Notifications from './components/Notifications';
import Options from './components/Options';
import VideoPlayer from './components/VideoPlayer';
import { FcVideoCall } from 'react-icons/fc';
import { FaDev } from 'react-icons/fa';

function App() {
  return (
    <>
      <header>
        <div className="header__logo">
         <FcVideoCall className='header__icon' /> JustChat App
        </div>
      </header>

      <section>
        <VideoPlayer />
        <Options>
        <Notifications />
        </Options>
      </section>
      
      <footer>
        All rights reserved { new Date().getFullYear() } 
        <div style={{marginTop:'1.5rem'}}>Made with love by <FaDev className='icon' style={{color:'white'}} /> Alvin</div>
      </footer>
    </>
  );
}

export default App;
