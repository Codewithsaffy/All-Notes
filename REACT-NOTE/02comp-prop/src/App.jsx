import { useState } from "react";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./index.css";
import "./components/app.css";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col w-full justify-between item-center">
        <Navebar />
        <div className="flex flex-wrap gap-4 p-4 justify-center">
          <Card title="Card 1" description="This is card 1" />
          <Card title="Card 2" description="This is card 2" />
          <Card title="Card 3" description="This is card 3" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
