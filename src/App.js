import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllConference from "./pages/AllConference";
import ConferenceForm from "./components/conferences/ConferenceForm";
import FavouriteConference from "./pages/FavouriteConference";
import { FavouriteContextProvider } from "./store/Context";

function App() {
  return (
    <FavouriteContextProvider>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route exact path="/" element={<AllConference />} />
          <Route path="/new-conference" element={<ConferenceForm />} />
          <Route path="/favourite-conferences" element={<FavouriteConference />} />
        </Routes>
      </BrowserRouter>
    </FavouriteContextProvider>
  );
}

export default App;
