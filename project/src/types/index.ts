export interface ServiceCategory {
  title: string;
  icon: React.ReactNode;
  services: Service[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
}