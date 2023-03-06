import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ConferenceList from "./components/conferences/ConferenceList"
import ConferenceForm from "./components/conferences/ConferenceForm";
import { FavouriteContextProvider } from "./store/Context";

function App() {
  return (
    <FavouriteContextProvider>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route exact path="/" element={<ConferenceList />} />
          <Route path="/new-conference" element={<ConferenceForm />} />
        </Routes>
      </BrowserRouter>
    </FavouriteContextProvider>
  );
}

export default App;
