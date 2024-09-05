// // index.js or App.js
// import React from "react";
// import { createRoot } from "react-dom/client"; // Updated import
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./store";
// import { Provider , positions, transitions } from "react-alert";
// import { ToastContainer } from "react-toastify"; // Import ToastContainer
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast

// const options = {
//   position: positions.BOTTOM_CENTER,
//   timeout: 5000,
//   transition: transitions.SCALE,
// };

// // Create root and render the app
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement); // Create a root using createRoot
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AlertProvider template={AlertTemplate} {...options}>
//         <App />
//         <ToastContainer /> {/* Add ToastContainer here */}
//       </AlertProvider>
//     </Provider>
//   </React.StrictMode>
// );


import React from "react";
import { createRoot } from "react-dom/client"; // Updated import
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
// Remove the import related to react-alert
// import { Provider as AlertProvider, positions, transitions } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// Create root and render the app
const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create a root using createRoot
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Remove AlertProvider */}
      <App />
    </Provider>
  </React.StrictMode>
);

