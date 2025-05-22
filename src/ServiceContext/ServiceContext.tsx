import { createContext } from "react";

export const ServiceContext = createContext({
    selectedServices: [],
    setSelectedServices: (services: any) => {},
});