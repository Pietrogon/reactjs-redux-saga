import { Appointment } from '../interfaces/Appointment.interface';
import { SET_APPOINTMENT, CLEAR_APPOINTMENT } from './types';

const setAppointment = (appointment: Appointment) => ({
  type: SET_APPOINTMENT,
  payload: appointment,
});

const clearAppointment = () => ({
  type: CLEAR_APPOINTMENT,
});

export default {
  setAppointment,
  clearAppointment,
};
