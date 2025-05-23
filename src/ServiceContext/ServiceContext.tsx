import { ServiceContextType } from "@/types/Service";
import { createContext } from "react";


export const ServiceContext = createContext<ServiceContextType>({
    selectedServices: [],
    setSelectedServices: () => {},
});
