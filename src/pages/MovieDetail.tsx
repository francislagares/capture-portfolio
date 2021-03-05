/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { IAward, IMovie } from '../interfaces/Movie';
import { MovieState } from '../movieState';

const Details = styled.div`
  color: white;
`;
const Headlines = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 50%;
    background: #23d997;

    /* prettier-ignore */
    height: .5rem;
    margin: 1rem 0;
  }

  p {
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({ title, description }: IAward): JSX.Element => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className='line'>
        <p>{description}</p>
      </div>
    </AwardStyle>
  );
};

const MovieDetail = (): JSX.Element => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState<IMovie[]>(MovieState);
  const [movie, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    const currentMovie = movies.filter(stateMovie => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details>
          <Headlines>
            <h2>{movie?.title}</h2>
            <img src={movie?.mainImg} alt='Movie' />
          </Headlines>
          <Awards>
            {movie.awards.map(award => (
              <Award
                key={award.title}
                title={award.title}
                description={award.description}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt='Movie' />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

export default MovieDetail;
