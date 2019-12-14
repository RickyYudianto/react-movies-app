import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

import './loading.component.css';

export default class LoadingComponent extends React.Component {

  render() {
    return (
      <div className='spinner-container'>
        <Spinner animation='border' role='status' variant="primary">
          <span className='sr-only'>Loading...</span>
        </Spinner>
      </div>
    );
  }
}