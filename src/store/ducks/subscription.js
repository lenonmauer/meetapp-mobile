import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  data: [],
});

export const Types = {
  GET_KKKK_REQUEST: '@user/GET_KKKK_REQUEST',
  GET_KKK_SUCCESS: '@user/GET_KKK_SUCCESS',
  GET_KKK_FAILURE: '@user/GET_KKK_FAILURE',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.GET_KKKK_REQUEST: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export const Actions = {
  getKkkkRequest: () => ({
    type: Types.GET_KKKK_REQUEST,
    payload: {},
  }),
};

export const SubscriptionActions = Actions;
export const SubscriptionTypes = Types;
