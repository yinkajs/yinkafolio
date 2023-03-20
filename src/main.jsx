import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { AppProvider } from "./contexts/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
// patGeRpmH5XaAr8Nr.0829f9589cf6c020ac84867fc06cd5d02ea6211633820410d4400251a8773f26