import { SET_PROJECTS } from '../actions/types';

const initialState = {};

export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case SET_PROJECTS:
      return { projects: payload };

    default:
      return state;
  }
}
