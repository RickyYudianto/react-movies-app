import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as accountActions from '../../action/account.action';
import { AppState } from '../../helper/reducer.index';

import './register.container.css';
import { AccountActionTypes } from '../../type/account.type';

const mapStateToProps = (state: AppState) => {
}

const mapDispatcherToProps = (dispatch: Dispatch<AccountActionTypes>) => {
  return {
    registerAccountAction: (payload: any) => dispatch(accountActions.registerAccountAction(payload))
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class RegisterContainer extends React.Component<ReduxType> {
  render() {
    return (
      <div>

      </div>
    );
  }

}
export default connect(mapStateToProps, mapDispatcherToProps,)(RegisterContainer);
