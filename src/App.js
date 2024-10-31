// import './App.css';
// import React, { useState } from'react';
// import Navbar from './components/Navbar';
// // import About from './components/About';
// import TextForm from './components/TextForm';

// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// // } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState('light');

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#333';
//       document.body.style.color = 'white';
//       document.getElementById('text').style.backgroundColor = 'gray';
//       document.getElementById('texts').textContent = 'Light mode';

//     }
//     else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       document.body.style.color = 'black';
//       document.getElementById('text').style.backgroundColor = 'white';
//       document.getElementById('texts').textContent = 'Dark mode';

//     }
//   };

//   // return (
//   //   // <Router>
//   //     <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
//   //     <div className="container my-3">
//   //     // <Routes>
//   //         // <Route path="/about" element={<About />} />
//   //         <TextForm heading="Enter the text" /> 
//   //     // </Routes>
//   //      </div>
//   //   // </Router>
//   // );

//   return (
//     <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
//     <div className="container my-3">
//       <TextForm heading="Enter the text" /> 
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333';
      document.body.style.color = 'white';
      document.getElementById('text').style.backgroundColor = 'gray';
      document.getElementById('texts').textContent = 'Light mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.getElementById('text').style.backgroundColor = 'white';
      document.getElementById('texts').textContent = 'Dark mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text" /> 
      </div>
    </>
  );
}

export default App;

