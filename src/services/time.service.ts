import { Appointment } from '../interfaces/Appointment.interface';

const getTimeDifference = (startTime: string, endTime: string) => {
  const startTimeDate = new Date(startTime);
  const endTimeDate = new Date(endTime);

  const diffTime = Math.abs(Number(endTimeDate) - Number(startTimeDate));
  return diffTime;
};

const getFormat = (msDuration: number) => {
  const hh = Math.floor(msDuration / 1000 / 60 / 60);
  const mm = Math.floor((msDuration / 1000 / 60 / 60 - hh) * 60);

  const minutes: string = `${mm}`.padStart(2, '0');
  const hours: string = `${hh}`.padStart(2, '0');

  return `${hours}h ${minutes}m`;
};

const getAllTimeDifference = (
  appointments: Appointment[],
  userId: number,
  isAdmin: boolean
) => {
  let difference = 0;
  appointments.map((appointment: Appointment) => {
    if (appointment.user.id === userId || isAdmin) {
      difference += getTimeDifference(
        appointment.startTime,
        appointment.endTime
      );
    }
    return null;
  });
  return difference;
};

const getMementString = (addition: number) => {
  const today = new Date(Number(new Date()) + addition * 1000 * 60 * 60);
  const dd = String(today.getDate()).padStart(2, '0');
  const MM = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const hh = String(today.getHours()).padStart(2, '0');
  const mm = String(today.getMinutes()).padStart(2, '0');

  return yyyy + '-' + MM + '-' + dd + 'T' + hh + ':' + mm;
};

export default {
  getTimeDifference,
  getFormat,
  getAllTimeDifference,
  getMementString,
};
