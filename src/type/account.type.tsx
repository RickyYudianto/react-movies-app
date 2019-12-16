import { AnyAction } from 'redux';

export const REGISTER: string = 'REGISTER';
export const REGISTER_SUCCESS: string = 'REGISTER_SUCCESS';
export const REGISTER_FAILED: string = 'REGISTER_FAILED';

export interface AccountState {
  
}

interface RegisterAction extends AnyAction {
  type: typeof REGISTER
  payload: any
}

interface RegisterSuccessAction extends AnyAction {
  type: typeof REGISTER_SUCCESS
}

interface RegisterFailedAction extends AnyAction {
  type: typeof REGISTER_FAILED
}

export type AccountActionTypes =
  RegisterAction
  | RegisterSuccessAction
  | RegisterFailedAction;