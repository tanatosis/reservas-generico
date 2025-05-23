import React, { useMemo, useState } from "react";
import NavBar from "@/components/NavBar/Navbar";
import ServiceCatalog from "@/components/ServiceCatalog/ServiceCatalog";
import { ServiceContext } from "@/ServiceContext/ServiceContext";

function App() {
  const [selectedServices, setSelectedServices] = useState([]);
  const value = useMemo(() => ({ selectedServices, setSelectedServices }), [selectedServices, setSelectedServices]);

  return (
      <ServiceContext.Provider value={value}>
        <NavBar />
        <ServiceCatalog />
      </ServiceContext.Provider>
  );
}

export default App;
