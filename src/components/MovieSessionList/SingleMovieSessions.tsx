import * as React from 'react';
import styled from 'styled-components';
import { Times } from '../../types';
import {
  SingleSession,
  SessionExperiences,
  SessionTime,
} from '../SingleSession/SingleSession';
import LoadingOverlay from 'react-loading-overlay';
import { H6 } from '../Typography/Typography';

interface SessionsContainerProps {
  filmId: string;
}

interface SessionsContainerState {
  sessions?: any[];
  filmTitle?: string;
  loading?: boolean;
}

interface SessionListProps {
  date: string;
  times?: Times[];
}

const LoadingOverlayStyled = styled(LoadingOverlay)`
  position: unset !important;
`;

const MovieSessionContainer = styled.div`
  margin-bottom: 2rem;
  & ${H6} {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
`;

export class SessionsContainer extends React.Component<
  SessionsContainerProps,
  SessionsContainerState
> {
  constructor(props) {
    super(props);
    this.state = {
      filmTitle: '',
      sessions: [],
      loading: true,
    };
    this.getShowtimes = this.getShowtimes.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }
  getShowtimes() {
    fetch(
      `https://movieshowbizapi.peachdigital.com/movies/55/7917/${this.props.filmId}?expandAttributes=true`
    )
      .then((results) => results.json())
      .then((data) => {
        if (data.Sessions !== undefined && data.Sessions.length > 0) {
          this.setState({
            filmTitle: data.Title,
            sessions: data.Sessions,
            loading: false,
          });
        } else {
          this.setState({
            sessions: [],
            loading: false,
          });
        }
      });
  }

  setLoading(val) {
    this.setState({
      loading: val,
    });
  }

  componentDidMount() {
    this.getShowtimes();
  }

  render() {
    return (
      <>
        <LoadingOverlayStyled
          spinner={true}
          active={this.state.loading}
          fadeSpeed={300}
        />
        {this.state.sessions.length > 0 &&
          this.state.sessions.map((sessionList, i) => (
            <SingleMovieSessions
              key={i}
              date={sessionList.DisplayDate}
              times={sessionList.Times}
            />
          ))}
      </>
    );
  }
}

export const SingleMovieSessions: React.FunctionComponent<SessionListProps> = (
  props
) => {
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
              {singleSession.Experience && singleSession.Experience.length > 0 && (
                <SessionExperiences>
                  {singleSession.Experience.map((experience, i) => (
                    <span>{experience.ExternalId}</span>
                  ))}
                </SessionExperiences>
              )}
            </SingleSession>
          ))}
      </div>
    </MovieSessionContainer>
  );
};
