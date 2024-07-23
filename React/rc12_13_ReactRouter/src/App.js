import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Teacher from "./pages/Teacher";
import CourseCard from "./pages/CourseCard";
import ContactForm from "./pages/ContactForm";
import Paths from "./pages/Paths";
import TeacherDetails from "./pages/TeacherDetails";

function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/:id" element={<TeacherDetails />} />

          <Route path="/courses" element={<CourseCard />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/paths" element={<Paths />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
