export interface Service  {
  id: number;
  category: string;
  title: string;
  duration: number;
  price: number;
  description?: string;
  image?: string;
};
export interface ServiceContextType {
  selectedServices: Service[];
  setSelectedServices: React.Dispatch<React.SetStateAction<Service[]>>;
}