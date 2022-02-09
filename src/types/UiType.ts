export interface TUi {
  stateModal: boolean,
  authModal: boolean,
  authModalView: string
}

interface authModalView {
  FORGOT_PASSWORD_VIEW: string,
  SIGNUP_VIEW: string,
  LOGIN_VIEW: string,
  EMAIL_VERIFICATION_VIEW: string,
}
export const authModalViewT: authModalView = {
  FORGOT_PASSWORD_VIEW: 'FORGOT_PASSWORD_VIEW',
  SIGNUP_VIEW: 'SIGNUP_VIEW',
  LOGIN_VIEW: 'LOGIN_VIEW',
  EMAIL_VERIFICATION_VIEW: 'EMAIL_VERIFICATION_VIEW',
};
