import React from 'react';

import { EndpointConstant } from '../../constant/endpoint.constant';

import './credit.component.css';

interface CreditProps {
  name: string
  job: string
  profilePath: string
}

export default class CreditComponent extends React.Component<CreditProps> {

  render() {
    const { name, job, profilePath } = this.props;

    const imagePath = profilePath ? `${EndpointConstant.IMAGE_URL + profilePath}` : require('./../../default-photo.png');

    return (
      <div className='credit-wrapper'>
        <img className='credit-image'
              alt={imagePath}
              src={imagePath} />
        
        <div className='credit-detail-wrapper'>
          <div className='credit-name'>{name}</div>
          <div className='credit-job'>{job}</div>
        </div>
      </div>
    );
  }
}