export interface TUi {
  stateModal: boolean,
  authModal: boolean,
  authModalView: string
}

interface authModalView {
  FORGOT_VIEW: string,
  SIGNUP_VIEW: string,
  LOGIN_VIEW: string
}
export const authModalViewT: authModalView = {
  FORGOT_VIEW: 'FORGOT_VIEW',
  SIGNUP_VIEW: 'SIGNUP_VIEW',
  LOGIN_VIEW: 'LOGIN_VIEW',
};
