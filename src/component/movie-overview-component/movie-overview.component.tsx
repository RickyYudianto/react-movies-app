import React from 'react';

import format from 'date-fns/format';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { EndpointConstant } from '../../constant/endpoint.constant';
import { FormatConstant } from '../../constant/format.constant';
import { generateRateColor } from '../../helper/util';
import Movie from '../../model/movie.model';

import 'react-circular-progressbar/dist/styles.css';
import './movie-overview.component.css';


interface MovieProps {
  movie: Movie;
}

export default class MovieOverviewComponent extends React.Component<MovieProps> {

  render() {
    const { movie } = this.props;

    const percentage = movie.vote_average;
    const imagePath = movie.poster_path ? `${EndpointConstant.IMAGE_URL + movie.poster_path}` : require('./../../no-poster-available.jpg');
    const backdropPath = movie.backdrop_path ? `${EndpointConstant.IMAGE_URL + movie.backdrop_path}` : require('./../../default-cover.png');

    const genre = movie.genres.map((genre) => <div key={genre.id} className='genre-overview'>{genre.name}</div>);

    return (
      <div style={{
        backgroundImage: `linear-gradient(black, black), url(${backdropPath})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundBlendMode: 'saturation'
      }}>
        <div className='movie-overview-wrapper'>
          <img className='movie-overview-image'
                alt={imagePath}
                src={imagePath} />

          <div className='desc-overview-wrapper col-md-6'>
            <div className='movie-overview-desc-header-wrapper'>
              <CircularProgressbar className='rate-overview' value={percentage} maxValue={10}
                                  text={`${percentage * 10}%`} background backgroundPadding={6}
                                  styles={buildStyles({
                                    textColor: 'white',
                                    pathColor: generateRateColor(percentage),
                                    backgroundColor: 'black'
                                  })}/>
              <h3 className='title-overview'>{movie.title} ({format(new Date(movie.release_date), FormatConstant.DATE_YEAR_FORMAT)})</h3>
            </div>
            <span className='movie-detail-overview'>{movie.overview}</span>
            <div className='genre-wrapper'>
              {genre}
            </div>
          </div>
        </div>
      </div>
    );
  }

  
}