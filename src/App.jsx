import { WagmiConfig, createClient } from "wagmi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getDefaultProvider } from "ethers";
import HomePage from "./HomePage.jsx";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function App() {
  return (
    <WagmiConfig client={client}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path="*" element={<App />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </WagmiConfig>
  );
}

export default App;
