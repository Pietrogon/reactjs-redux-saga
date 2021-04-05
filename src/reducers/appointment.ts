import { SET_APPOINTMENT, CLEAR_APPOINTMENT } from '../actions/types';

const initialState = {};

export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case SET_APPOINTMENT:
      return { appointment: payload };

    case CLEAR_APPOINTMENT:
      return { appointment: '' };

    default:
      return state;
  }
}
