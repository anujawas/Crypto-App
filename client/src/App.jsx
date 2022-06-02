import React, { useEffect } from "react";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

function App() {
  useEffect(() => {
    document.title = "AAcoin";
  }, []);
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
