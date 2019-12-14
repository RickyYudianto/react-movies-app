import React from 'react';

import format from 'date-fns/format';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import Movie from '../model/movie.model';
import { EndpointConstant } from '../constant/endpoint.constant';

import 'react-circular-progressbar/dist/styles.css';
import './movie.component.css';

interface MovieProps {
  movie: Movie;
}

export default class MovieComponent extends React.Component<MovieProps> {

  render() {
    const { movie } = this.props;

    const percentage = movie.vote_average;
    return (
      <div className='movie-wrapper'>
        <img className='movie-image'
              alt={`${EndpointConstant.IMAGE_URL + movie.poster_path}`}
              src={`${EndpointConstant.IMAGE_URL + movie.poster_path}`} />

        <div className='desc-wrapper'>
          <div className='movie-desc-header-wrapper'>
            <CircularProgressbar className='rate' value={percentage} maxValue={10}
                                text={`${percentage * 10}%`} background backgroundPadding={6}
                                styles={buildStyles({
                                  textColor: 'white',
                                  pathColor: this.generateRateColor(percentage),
                                  backgroundColor: 'black'
                                })}/>
            <h5>{movie.title}</h5>
          </div>
          <h6>{format(new Date(movie.release_date), 'MMMM dd yyyy')}</h6>
          <span>{movie.overview}</span>
        </div>
      </div>
    );
  }

  generateRateColor(rate: number) {
    if (rate >= 7.0) {
      return 'green';
    } else if(rate >= 4.0) {
      return 'yellow';
    }

    return 'red';
  }
}