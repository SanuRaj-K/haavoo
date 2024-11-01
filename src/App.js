import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/loading";
import HomePage from "./pages/home";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div className="App">
      {/* {isLoading ? (
        <>
          <Loading />
        </>
      ) : ( */}
        <>
          <HomePage />
        </>
      {/* )} */}
    </div>
  );
}

export default App;
