import { React, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/navbar';
import Homepage from './components/Home';
import Footer from './components/footer';
import Cards from './components/cards';
import Chat from './components/chatbot/chat';
import OurMissionPage from './components/about';
// Course Import
import Home from './components/client/Home';
import Personal from './components/Courses/Personal';
import Quize from './components/Courses/quize';
import Prob from './components/Courses/prob_solving/prob';
import Per_quiz from './components/Courses/prob_solving/per_quize';
import Comm from './components/Courses/comm_crea/comm';
import Comz from './components/Courses/comm_crea/comm_quize';
import Out from './components/Courses/outdoors/outdoors';
import Out_quize from './components/Courses/outdoors/out_quize';
import Social from './components/Courses/social/social'; 
import So_quiz from './components/Courses/social/social_quiz';
import Tech from './components/Courses/technology/tech';
import Tech_quiz from './components/Courses/technology/tech_quiz';
import Awar from './components/Courses/carrer_awareness/awar';
import Awar_quiz from './components/Courses/carrer_awareness/awar_quiz';
import Envi from './components/Courses/environmental_awareness/envi';
import Envi_quiz from './components/Courses/environmental_awareness/envi_quiz';
import Cric from './components/Courses/critical_thinking/cric';
import Cric_quiz from './components/Courses/critical_thinking/cric_quiz';
import Health from './components/Courses/health_awareness/health';
import Health_quiz from './components/Courses/health_awareness/health_quiz';
import Ever from './components/Courses/everyday_science/ever';
import Ever_quiz from './components/Courses/everyday_science/ever_quiz';
import Cult from './components/Courses/cultural_awareness/cult';
import Cult_quiz from './components/Courses/cultural_awareness/cult_quiz';
import Digital from './components/Courses/digital_literacy/digital';
import Digital_quiz from './components/Courses/digital_literacy/digital_quiz';
import Time from './components/Courses/time_management/time';
import Time_quiz from './components/Courses/time_management/time_quiz';
import Media from './components/Courses/media_advertisement/media';
import Media_quiz from './components/Courses/media_advertisement/media_quiz';
// Couses Import
import Login from './components/client/Login';
import SignUp from './components/client/SignUp';
import Logout from './components/client/Logout';
import Profile from './components/client/profile';
import Contact from './components/contact';
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  useEffect(() => {
    axios.get('http://localhost:3002/user', { withCredentials: true })
      .then(response => {
        if (response.data.user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false));
  }, []);

  return (
    <BrowserRouter>
      <div className='main'>
        {/* Pass isLoggedIn and setIsLoggedIn to Nav */}
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <div className='main1'>
          <Routes>
            <Route path="/" element={<Homepage />} ></Route>
            <Route path="Progress" element={<Cards />} ></Route>
            {/* Courses Route */}
            <Route path="/home" element={<Home />} />
            <Route path="Per" element={<Personal />} ></Route>
            <Route path="/quiz" element={<Quize />} ></Route>
            <Route path="problem-solving"  element={<Prob/>} ></Route>
            <Route path="per_quize"  element={<Per_quiz/>} ></Route>
            <Route path="communication-creativity"  element={<Comm/>} ></Route>
            <Route path="comm-quize"  element={<Comz/>} ></Route>
            <Route path="out-door"  element={<Out/>} ></Route>
            <Route path="out-quiz"  element={<Out_quize/>} ></Route>
            <Route path="social"  element={<Social/>} ></Route>
            <Route path="social-quiz"  element={<So_quiz/>} ></Route>
            <Route path="techno"  element={<Tech/>} ></Route>
            <Route path="techno-quiz"  element={<Tech_quiz/>} ></Route>
            <Route path="awar"  element={<Awar/>} ></Route>
            <Route path="awar-quiz"  element={<Awar_quiz/>} ></Route>
            <Route path="envi"  element={<Envi/>} ></Route>
            <Route path="envi-quiz"  element={<Envi_quiz/>} ></Route>
            <Route path="cric"  element={<Cric/>} ></Route>
            <Route path="cric-quiz"  element={<Cric_quiz/>} ></Route>
            <Route path="health"  element={<Health/>} ></Route>
            <Route path="health-quiz"  element={<Health_quiz/>} ></Route>
            <Route path="ever"  element={<Ever/>} ></Route>
            <Route path="ever-quiz"  element={<Ever_quiz/>} ></Route>
            <Route path="cult"  element={<Cult/>} ></Route>
            <Route path="cult-quiz"  element={<Cult_quiz/>} ></Route>
            <Route path="digital"  element={<Digital/>} ></Route>
            <Route path="digital-quiz"  element={<Digital_quiz/>} ></Route>
            <Route path="time"  element={<Time/>} ></Route>
            <Route path="time-quiz"  element={<Time_quiz/>} ></Route>
            <Route path="media"  element={<Media/>} ></Route>
            <Route path="media-quiz"  element={<Media_quiz/>} ></Route>
            {/* Course Route Ends */}
            <Route path="/about" element={ <OurMissionPage />} ></Route>
            <Route path="/chat" element={<Chat />} ></Route>
            <Route path='/contact' element={<Contact/>} />
            <Route path="/profile" element={<Profile />} ></Route>
            <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <SignUp setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        </div>
        <br />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
