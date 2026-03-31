import "./App.css";
import Navbar from "./components/Navbar"; 
import Banner from "./components/Banner"; 
import Status from "./components/Status";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
     <Status></Status>
     <MainContainer></MainContainer>
    </>
  );
}

export default App;