
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Col} from 'react-bootstrap'
import Navbar from './components/navbar/Navbar'
import SignIn from './components/signin/SignIn'
import LandingPage from './components/landingPage/LandingPage'
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Add from './components/addMsq/Add'
import ChatbotInfo from './components/chatbotInfo/ChatbotInfo'
import Signup from './components/signup/SignUp'
import ChatWindow from './components/chat-window/ChatWindow'
import Dashboard from './components/dashboard/Dashboard'
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <BrowserRouter basename="/">
    
  <div>
    
<Navbar />



{/* link between pages */}
<Routes>
  <Route path="/mainpage" element={<LandingPage />} />
  <Route path="/signin" element= {<SignIn />} />
  <Route path="/add" element= {<Add />} />
  <Route path="/chatbot" element= {<ChatbotInfo />} />
  <Route path="/signup" element= {<Signup />} />
  <Route path="/chatbotwindow" element= {<ChatWindow />} />
  <Route path="/dashboard" element= {<Dashboard />} />

</Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
