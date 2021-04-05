import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { SET_PROJECTS } from '../../actions/types';
import { ROLE } from '../../enums/Role.enum';
import { Appointment } from '../../interfaces/Appointment.interface';
import { Project } from '../../interfaces/Project.interface';
import dataService from '../../services/data.service';
import timeService from '../../services/time.service';
import Page from '../../shared/Page';
import Toolbar from '../Toolbar/Toolbar';
import { Item, ItemUser, Line, List, ListUser } from './Styled';

export function Projects() {
  const user = useSelector((state: any) => state.auth.user);
  const storeProjects = useSelector((state: any) => state.projects.projects);
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();
  const isAdmin = user ? user.roles.includes(ROLE.ROLE_ADMIN) : false;
  const isUser = user ? user.roles.includes(ROLE.ROLE_USER) : false;

  const componentWillLoad = () => {
    if (user) {
      if (!projects.length) {
        getProjects();
      }
    } else {
      return <Redirect to="/" />;
    }
  };

  const getProjects = () => {
    isAdmin &&
      dataService.getProjects().then(async (res) => {
        const data = await res.json();
        console.log('data', data);
        dispatch({
          type: SET_PROJECTS,
          payload: data,
        });
        setProjects(storeProjects);
      });
    isUser &&
      dataService.getProjectsByUser(user.id).then(async (res) => {
        const data = await res.json();
        dispatch({
          type: SET_PROJECTS,
          payload: data,
        });
        setProjects(data);
      });
  };

  componentWillLoad();

  return (
    <>
      <Toolbar title="Projetos"></Toolbar>
      <Page>
        <List>
          <Item>
            <div>
              <h2>Projetos</h2>
              <span>Total de horas</span>
            </div>
          </Item>
          {projects &&
            projects.map((project: Project) => {
              return (
                <Item key={project.id}>
                  <div>
                    <h2>{project.name}</h2>
                    <span>
                      {timeService.getFormat(
                        timeService.getAllTimeDifference(
                          project.appointments,
                          user.id,
                          isAdmin
                        )
                      )}
                    </span>
                  </div>
                  <Line></Line>
                  <div>
                    <ListUser>
                      {project.appointments &&
                        project.appointments
                          .sort((userA, userB) => {
                            if (userA.user.username > userB.user.username) {
                              return 1;
                            }
                            if (userA.user.username < userB.user.username) {
                              return -1;
                            }
                            return 0;
                          })
                          .map((appointment: Appointment, index) => {
                            return (
                              (appointment.user.id === user.id || isAdmin) && (
                                <ItemUser key={appointment.id}>
                                  <div>
                                    <h2>{appointment.user.username}</h2>
                                    <span>
                                      {timeService.getFormat(
                                        timeService.getTimeDifference(
                                          appointment.startTime,
                                          appointment.endTime
                                        )
                                      )}
                                    </span>
                                  </div>
                                </ItemUser>
                              )
                            );
                          })}
                    </ListUser>
                  </div>
                </Item>
              );
            })}
        </List>
      </Page>
    </>
  );
}
