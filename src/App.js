import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import AllCourses from './Pages/AllCourses/AllCourses';
import Course from './Pages/Course/Course';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Forms from './Pages/Form/Form';
function App() {
  return (
    // setup routing for the app so that / is home component
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* if there on / redirect them to home*/}
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Courses" element={<AllCourses />} /> 
          <Route exact path="/Courses/:courseID" element={<Course />} />
          <Route path="/Forms" element={<Forms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
