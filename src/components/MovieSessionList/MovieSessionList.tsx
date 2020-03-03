import * as React from 'react';
import styled from 'styled-components';
import { Times } from '../../types';
import { SingleSession, SessionExperiences, SessionTime } from '../SingleSession/SingleSession';
import {H6} from '../Typography/Typography';

interface SessionListProps {
  date: string;
  times?: Times[];
}

const MovieSessionContainer = styled.div`
 & ${H6} {
   margin-top:0rem;
   margin-bottom:0rem;
 }
`;

const MovieSessionList: React.FunctionComponent<SessionListProps> = props => {
  return (
    <MovieSessionContainer>
      <H6>{props.date}</H6>
      <div className='grid grid--4-col mt-1'>
        {props.times &&
          props.times.length > 0 &&
          props.times.map((singleSession, i) => (
            <SingleSession
              key={i}
              soldOut={singleSession.SoldOut}
              notBookable={singleSession.NotBookable}
              sessionExpired={singleSession.SessionExpired}
            >
              <SessionTime>{singleSession.StartTime}</SessionTime>
              {singleSession.Experience && 
              singleSession.Experience.length > 0 &&
                <SessionExperiences>
                  {singleSession.Experience.map((experience, i) => (
                    <span>{experience.ExternalId}</span>
                  ))}
                </SessionExperiences>
              }
            </SingleSession>
          ))}
      </div>
    </MovieSessionContainer>
  );
};

export default MovieSessionList;
