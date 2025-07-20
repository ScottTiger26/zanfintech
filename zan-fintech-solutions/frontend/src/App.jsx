// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "./layout/MainLayout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="services" element={<Services />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
