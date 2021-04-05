import { Appointment } from "./Appointment.interface";
import { Project } from "./Project.interface";

export interface User {
  id: number;
  name: string;
  email: string;
  anabled: string;
  password: string;
  username: string;
  role: string;
  projects: Project[];
  Appointments: Appointment[];
}