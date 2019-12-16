import React from 'react';

import { LabelConstant } from '../../constant/label.constant';

import './error.component.css';

interface ErrorProps {
  message: string
}
export default class ErrorComponent extends React.Component<ErrorProps> {

  render() {
    return (
      <div className='error-wrapper'>
        <div className='site'>
          <div className='sketch'>
            <div className='bee-sketch red'></div>
            <div className='bee-sketch blue'></div>
          </div>

        <h1>{LabelConstant.ERROR}:
          <small>{this.props.message}</small></h1>
        </div>
      </div>
    );
  }
}