import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  data: {},
  loading: false,
});

export const Types = {
  GET_PROFILE_REQUEST: '@profile/GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS: '@profile/GET_PROFILE_SUCCESS',
  GET_PROFILE_FAILURE: '@profile/GET_PROFILE_FAILURE',
  PUT_PROFILE_REQUEST: '@profile/PUT_PROFILE_REQUEST',
  PUT_PROFILE_SUCCESS: '@profile/PUT_PROFILE_SUCCESS',
  PUT_PROFILE_FAILURE: '@profile/PUT_PROFILE_FAILURE',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.GET_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case Types.GET_PROFILE_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        loading: false,
      };
    }

    case Types.GET_PROFILE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.PUT_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case Types.PUT_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.PUT_PROFILE_FAILURE: {
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
  getProfileRequest: data => ({
    type: Types.GET_PROFILE_REQUEST,
    payload: { data },
  }),

  getProfileSuccess: data => ({
    type: Types.GET_PROFILE_SUCCESS,
    payload: { data },
  }),

  getProfileFailure: () => ({
    type: Types.GET_PROFILE_FAILURE,
    payload: {},
  }),

  putProfileRequest: (data, callback) => ({
    type: Types.PUT_PROFILE_REQUEST,
    payload: {
      data,
      callback,
    },
  }),

  putProfileSuccess: () => ({
    type: Types.PUT_PROFILE_SUCCESS,
    payload: {},
  }),

  putProfileFailure: () => ({
    type: Types.PUT_PROFILE_FAILURE,
    payload: {},
  }),
};

export const ProfileActions = Actions;
export const ProfileTypes = Types;
