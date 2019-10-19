import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

export const Types = {
  GET_SUBSCRIPTIONS_REQUEST: '@subscription/GET_SUBSCRIPTIONS_REQUEST',
  GET_SUBSCRIPTIONS_SUCCESS: '@subscription/GET_SUBSCRIPTIONS_SUCCESS',
  GET_SUBSCRIPTIONS_FAILURE: '@subscription/GET_SUBSCRIPTIONS_FAILURE',
  POST_SUBSCRIBE_REQUEST: '@subscription/POST_SUBSCRIBE_REQUEST',
  POST_SUBSCRIBE_SUCCESS: '@subscription/POST_SUBSCRIBE_SUCCESS',
  POST_SUBSCRIBE_FAILURE: '@subscription/POST_SUBSCRIBE_FAILURE',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.GET_SUBSCRIPTIONS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case Types.GET_SUBSCRIPTIONS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload.data,
      };
    }

    case Types.GET_SUBSCRIPTIONS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.POST_SUBSCRIBE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case Types.POST_SUBSCRIBE_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.POST_SUBSCRIBE_FAILURE: {
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
  getSubscriptionsRequest: () => ({
    type: Types.GET_SUBSCRIPTIONS_REQUEST,
    payload: {},
  }),

  getSubscriptionsSuccess: data => ({
    type: Types.GET_SUBSCRIPTIONS_SUCCESS,
    payload: { data },
  }),

  getSubscriptionsFailure: () => ({
    type: Types.GET_SUBSCRIPTIONS_FAILURE,
    payload: {},
  }),

  postSubscribeRequest: id => ({
    type: Types.POST_SUBSCRIBE_REQUEST,
    payload: {
      id,
    },
  }),

  postSubscribeSuccess: () => ({
    type: Types.POST_SUBSCRIBE_SUCCESS,
    payload: {},
  }),

  postSubscribeFailure: () => ({
    type: Types.POST_SUBSCRIBE_FAILURE,
    payload: {},
  }),
};

export const SubscriptionActions = Actions;
export const SubscriptionTypes = Types;
