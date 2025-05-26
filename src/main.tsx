import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./utils/AppContext.tsx";
import { store } from "../src/store/store.ts";
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppProvider>
      <App />
      <Toaster/>
    </AppProvider>
  </Provider>
);
