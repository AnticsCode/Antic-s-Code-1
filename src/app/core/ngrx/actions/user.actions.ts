import { props, createAction } from '@ngrx/store';
import { User, Interaction, MostActive } from '@app/shared/interfaces/interfaces';

// GET ALL USERS
export const get =
  createAction('[Users API] Get All Users');

export const getSuccess =
  createAction('[Users API] Get All Users Success',
  props<{ users: User[] }>());

export const getFailure =
  createAction('[Users API] Get All Users Failure',
  props<{ error: string }>());

// GET USER BY NAME
export const getByName =
  createAction('[Users API] Get User By Name',
  props<{ name: string }>());

export const getByNameSuccess =
  createAction('[Users API] Get User By Name Success',
  props<{ user: User }>());

export const getByNameFailure =
  createAction('[Users API] Get User By Name Failure',
  props<{ error: string }>());

// GET MOST ACTIVE USERS
export const getMostActive =
  createAction('[Users API] Get Most Active Users');

export const getMostActiveSuccess =
  createAction('[Users API] Get Most Active Users Success',
  props<{ active: MostActive[] }>());

export const getMostActiveFailure =
  createAction('[Users API] Get Most Active Users Failure',
  props<{ error: string }>());

// SET USER
export const set =
  createAction('[Users API] Set User',
  props<{ user: User }>());

export const setSuccess =
  createAction('[Users API] Set User Success',
  props<{ user: User }>());

export const setFailure =
  createAction('[Users API] Set User Failure',
  props<{ error: string }>());

// SET USER EMAIL
export const setEmail =
  createAction('[Users API] Set User Email',
  props<{ email: string }>());

export const setEmailSuccess =
  createAction('[Users API] Set User Email Success',
  props<{ email: string }>());

export const setEmailFailure =
  createAction('[Users API] Set User Email Failure',
  props<{ error: string }>());

// VERIFY TOKEN
export const verifyToken =
  createAction('[Users API] Verify Token');

export const verifyTokenSuccess =
  createAction('[Users API] Verify Token Success',
  props<{ user: User }>());

export const verifyTokenFailure =
  createAction('[Users API] Verify Token Failure',
  props<{ error: string }>());

// REFRESH TOKEN
export const refreshToken =
  createAction('[Users API] Refresh Token',
  props<{ id: string }>());

export const refreshTokenSuccess =
  createAction('[Users API] Refresh Token Success',
  props<{ user: User }>());

export const refreshTokenFailure =
  createAction('[Users API] Refresh Token Failure',
  props<{ error: string }>());

// USER LOGOUT
export const userLogOut =
  createAction('[Users API] User Log Out');

// RESET USER
export const resetUserName =
  createAction('[Users API] Reset User Name');


