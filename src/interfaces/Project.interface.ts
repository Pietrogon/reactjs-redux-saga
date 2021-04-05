import { Appointment } from "./Appointment.interface";
import { User } from "./User.interface";

export interface Project {
  id: number;
  name: string;
  users: User[];
  appointments: Appointment[];
}