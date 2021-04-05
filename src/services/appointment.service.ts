import { Appointment } from '../interfaces/Appointment.interface';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/appointments';

const save = (appointments: Appointment) => {
  return fetch(API_URL, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      ...authHeader(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointments),
  });
};

export default {
  save,
};
