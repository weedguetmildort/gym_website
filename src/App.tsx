import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SlctdPage } from "@/shared/types";



function App() {
  const [selectedPage, setSelectedPage] = useState<SlctdPage>(SlctdPage.Home);

  return <div className='app bg-gray-20'>
    <Navbar 
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  </div>;
}

export default App
