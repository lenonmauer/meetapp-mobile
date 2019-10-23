import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

export const Types = {
  GET_MEETUPS_REQUEST: '@meetup/GET_MEETUPS_REQUEST',
  GET_MEETUPS_SUCCESS: '@meetup/GET_MEETUPS_SUCCESS',
  GET_MEETUPS_FAILURE: '@meetup/GET_MEETUPS_FAILURE',
  CLEAR_LIST: '@meetup/CLEAR_LIST',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.GET_MEETUPS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case Types.GET_MEETUPS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, ...payload.data],
      };
    }

    case Types.GET_MEETUPS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.CLEAR_LIST: {
      return {
        ...state,
        data: [],
      };
    }

    default:
      return state;
  }
};

export const Actions = {
  getMeetupsRequest: (limit, clear = false) => ({
    type: Types.GET_MEETUPS_REQUEST,
    payload: {
      limit,
      clear,
    },
  }),

  getMeetupsSuccess: data => ({
    type: Types.GET_MEETUPS_SUCCESS,
    payload: { data },
  }),

  getMeetupsFailure: () => ({
    type: Types.GET_MEETUPS_FAILURE,
    payload: {},
  }),

  clearList: () => ({
    type: Types.CLEAR_LIST,
    payload: {},
  }),
};

export const MeetupActions = Actions;
export const MeetupTypes = Types;
