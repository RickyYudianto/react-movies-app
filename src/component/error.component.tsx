import React from 'react';

import { LabelConstant } from '../constant/label.constant';

import './error.component.css';

export default class ErrorComponent extends React.Component {

  render() {
    return (
      <div className='error-wrapper'>
        <div className='site'>
          <div className='sketch'>
            <div className='bee-sketch red'></div>
            <div className='bee-sketch blue'></div>
          </div>

        <h1>{LabelConstant.ERROR}:
          <small>{LabelConstant.SOMETHING_WENT_WRONG}</small></h1>
        </div>
      </div>
    );
  }
}