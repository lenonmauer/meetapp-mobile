import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  loading: false,
});

export const Types = {
  POST_SIGNIN_REQUEST: '@auth/POST_SIGNIN_REQUEST',
  POST_SIGNIN_SUCCESS: '@auth/POST_SIGNIN_SUCCESS',
  POST_SIGNIN_FAILURE: '@auth/POST_SIGNIN_FAILURE',
  POST_SIGNUP_REQUEST: '@auth/POST_SIGNUP_REQUEST',
  POST_SIGNUP_SUCCESS: '@auth/POST_SIGNUP_SUCCESS',
  POST_SIGNUP_FAILURE: '@auth/POST_SIGNUP_FAILURE',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.POST_SIGNIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case Types.POST_SIGNIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        token: payload.token,
      };
    }

    case Types.POST_SIGNIN_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.POST_SIGNUP_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case Types.POST_SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.POST_SIGNUP_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export const Actions = {
  postSigninRequest: data => ({
    type: Types.POST_SIGNIN_REQUEST,
    payload: { data },
  }),

  postSigninSuccess: token => ({
    type: Types.POST_SIGNIN_SUCCESS,
    payload: { token },
  }),

  postSigninFailure: () => ({
    type: Types.POST_SIGNIN_FAILURE,
    payload: {},
  }),

  postSignupRequest: data => ({
    type: Types.POST_SIGNUP_REQUEST,
    payload: {
      data,
    },
  }),

  postSignupSuccess: () => ({
    type: Types.POST_SIGNUP_SUCCESS,
    payload: {},
  }),

  postSignupFailure: () => ({
    type: Types.POST_SIGNUP_FAILURE,
    payload: {},
  }),
};

export const AuthActions = Actions;
export const AuthTypes = Types;
