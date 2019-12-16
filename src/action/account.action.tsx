import * as accountActionTypes from '../type/account.type'

export function registerAccountAction(payload: any = {}): accountActionTypes.AccountActionTypes {
  return {
    type: accountActionTypes.REGISTER_SUCCESS,
    payload
  }
}
