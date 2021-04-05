import { Project } from '../interfaces/Project.interface';
import { SET_PROJECTS } from './types';

const setProjects = (project: Project[]) => ({
  type: SET_PROJECTS,
  payload: project,
});

export default {
  setProjects,
};
