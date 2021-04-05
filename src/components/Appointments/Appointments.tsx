import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { SET_PROJECTS } from '../../actions/types';
import { ROLE } from '../../enums/Role.enum';
import { Appointment } from '../../interfaces/Appointment.interface';
import { Project } from '../../interfaces/Project.interface';
import appointmentService from '../../services/appointment.service';
import dataService from '../../services/data.service';
import timeService from '../../services/time.service';
import Button from '../../shared/Button';
import Input from '../../shared/Input';
import Page from '../../shared/Page';
import Title from '../../shared/Title';
import Toolbar from '../Toolbar/Toolbar';
import { FormAppoints } from './Styled';

export function Appointments() {
  const user = useSelector((state: any) => state.auth.user);
  const [time, setTime] = useState({ startTime: '', endTime: '' });
  const [selectProject, setSelectProject] = useState('');
  const storeProjects = useSelector((state: any) => state.projects.projects);
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const componentWillLoad = () => {
    if (user) {
      if (time.startTime === '' && time.endTime === '') {
        setTime({
          startTime: timeService.getMementString(0),
          endTime: timeService.getMementString(2),
        });
      }
      const hasPermission = user.roles.includes(ROLE.ROLE_USER);
      if (hasPermission) {
        if (!storeProjects) {
          getProjects();
        } else if (!projects.length) {
          setProjects(storeProjects);
          setSelectProject(storeProjects[0].id);
          setMessage('');
        }
      }
    } else {
      return <Redirect to="/" />;
    }
  };

  const onChangeTime = (event: any) => {
    setTime({
      ...time,
      [event.target.name]: event.target.value,
    });
    console.log(time);
  };

  const onChangeSelectProject = (event: any) => {
    console.log(selectProject);
    setSelectProject(event.target.value);
    console.log(selectProject);
  };

  const getProjects = () => {
    dataService.getProjectsByUser(user.id).then(async (res) => {
      const data = await res.json();
      dispatch({
        type: SET_PROJECTS,
        payload: data,
      });
      setProjects(data);
      setMessage('');
      setSelectProject(data[0].id);
    });
  };

  const submit = () => {
    setMessage('Carregando...');
    const appointment: Appointment = {
      project: { id: selectProject },
      endTime: time.endTime,
      startTime: time.startTime,
      user: { id: user.id },
    };
    appointmentService.save(appointment).then(
      () => setMessage('Registrado!'),
      (error) => setMessage('Erro: ' + error.message)
    );
  };

  componentWillLoad();

  return (
    <>
      <Toolbar title="Apontamentos"></Toolbar>
      <Page>
        <FormAppoints>
          {message && <h4>{message}</h4>}
          <Title>Preencha o formulário para realizar o apontamento.</Title>
          <label>Projetos:</label>
          <select
            onChange={onChangeSelectProject}
            name="projects"
            id="projects"
          >
            {projects &&
              projects.map((project: Project) => {
                return (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                );
              })}
          </select>
          <label>Hora Inicio:</label>
          <Input
            theme={{ background: 'var(--light)' }}
            placeholder="Hora Inicio:"
            type="datetime-local"
            value={time.startTime}
            onChange={onChangeTime}
            name="startTime"
          ></Input>
          <label>Hora Fim:</label>
          <Input
            theme={{ background: 'var(--light)' }}
            placeholder="Hora Fim:"
            type="datetime-local"
            value={time.endTime}
            onChange={onChangeTime}
            name="endTime"
          ></Input>
          <div>
            <Button onClick={submit}>Registrar</Button>
          </div>
        </FormAppoints>
      </Page>
    </>
  );
}
