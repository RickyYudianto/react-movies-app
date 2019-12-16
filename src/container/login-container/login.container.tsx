import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as accountActions from '../../action/account.action';
import ErrorComponent from '../../component/error-component/error.component';
import { LabelConstant } from '../../constant/label.constant';
import { MenuConstant } from '../../constant/menu.constant';
import { AppState } from '../../helper/reducer.index';
import { AccountActionTypes } from '../../type/account.type';

import './login.container.css';

const mapStateToProps = (state: AppState) => {
  return {}
}

const mapDispatcherToProps = (dispatch: Dispatch<AccountActionTypes>) => {
  return {
    registerAccountAction: (payload: any) => dispatch(accountActions.registerAccountAction(payload))
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class LoginContainer extends React.Component<ReduxType> {
  render() {
    return (
      <div>
        <ErrorComponent message={MenuConstant.LOGIN + ' ' + LabelConstant.PAGE_UNDER_CONSTRUCTION} />
      </div>
    );
  }

}
export default connect(mapStateToProps, mapDispatcherToProps,)(LoginContainer);
