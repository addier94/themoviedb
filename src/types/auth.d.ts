import * as FireAuth from 'firebase/auth';

export interface IRegister {
  name: string,
  email: string,
  password: string,
  cf_password: string
}

export interface authState {
  currentUser?: IAuth,
  loading: boolean
}

export interface IAuth extends FireAuth.user {}

export interface ILogin {
  email: string,
  password: string
}
