import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviderApp from "./Components/AuthProviderApp/AuthProviderApp.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      
       <AuthProviderApp>
             <App />
       </AuthProviderApp>
     
    </QueryClientProvider>
  </React.StrictMode>
);
