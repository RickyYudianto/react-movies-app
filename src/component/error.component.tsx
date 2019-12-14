import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

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

        <h1>Error:
          <small>Oops Something Went Wrong</small></h1>
        </div>
      </div>
    );
  }
}