import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  token: null,
});

export const Types = {
  SET_TOKEN: '@auth/SET_TOKEN',
  CLEAR_TOKEN: '@auth/CLEAR_TOKEN',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.SET_TOKEN: {
      return {
        token: payload.token,
      };
    }

    case Types.CLEAR_TOKEN: {
      return {
        token: null,
      };
    }

    default:
      return state;
  }
};

export const Actions = {
  setToken: token => ({
    type: Types.SET_TOKEN,
    payload: {
      token,
    },
  }),

  clearToken: () => ({
    type: Types.CLEAR_TOKEN,
    payload: {},
  }),
};

export const AuthActions = Actions;
export const AuthTypes = Types;
