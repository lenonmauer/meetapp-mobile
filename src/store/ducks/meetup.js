import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

export const Types = {
  GET_MEETUPS_REQUEST: '@meetup/GET_MEETUPS_REQUEST',
  GET_MEETUPS_SUCCESS: '@meetup/GET_MEETUPS_SUCCESS',
  GET_MEETUPS_FAILURE: '@meetup/GET_MEETUPS_FAILURE',
  SET_SUBSCRIBING: '@meetup/SET_SUBSCRIBING',
  REMOVE_MEETUP: '@meetup/REMOVE_MEETUP',
  CLEAR_MEETUPS: '@meetup/CLEAR_MEETUPS',
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

    case Types.SET_SUBSCRIBING: {
      const data = state.data.map(meetup => {
        if (meetup.id === payload.id) {
          return {
            ...meetup,
            subscribing: payload.subscribing,
          };
        }

        return meetup;
      });

      return {
        ...state,
        data,
      };
    }

    case Types.REMOVE_MEETUP: {
      const data = state.data.filter(meetup => meetup.id !== payload.id);

      return {
        ...state,
        data,
      };
    }

    case Types.CLEAR_MEETUPS: {
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
  getMeetupsRequest: (date, limit, clearPrevious = false) => ({
    type: Types.GET_MEETUPS_REQUEST,
    payload: {
      date,
      limit,
      clearPrevious,
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

  clearMeetups: () => ({
    type: Types.CLEAR_MEETUPS,
    payload: {},
  }),

  setSubscribing: (id, subscribing) => ({
    type: Types.SET_SUBSCRIBING,
    payload: {
      id,
      subscribing,
    },
  }),

  removeMeetup: id => ({
    type: Types.REMOVE_MEETUP,
    payload: {
      id,
    },
  }),
};

export const MeetupActions = Actions;
export const MeetupTypes = Types;
