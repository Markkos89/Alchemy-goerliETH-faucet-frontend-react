import "./index.css";

import { getDefaultProvider } from "ethers";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createClient, WagmiConfig } from "wagmi";

import App from "./App.jsx";
import Layout from "./layout";
import reportWebVitals from "./reportWebVitals";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
// Path direct us to the right page
root.render(
  <WagmiConfig client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </WagmiConfig>
);

reportWebVitals();
