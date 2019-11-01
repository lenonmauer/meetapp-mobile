import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  data: [],
  cancellingList: [],
  subscribingList: [],
  loading: false,
});

export const Types = {
  GET_SUBSCRIPTIONS_REQUEST: '@subscription/GET_SUBSCRIPTIONS_REQUEST',
  GET_SUBSCRIPTIONS_SUCCESS: '@subscription/GET_SUBSCRIPTIONS_SUCCESS',
  GET_SUBSCRIPTIONS_FAILURE: '@subscription/GET_SUBSCRIPTIONS_FAILURE',
  POST_SUBSCRIBE_REQUEST: '@subscription/POST_SUBSCRIBE_REQUEST',
  POST_SUBSCRIBE_SUCCESS: '@subscription/POST_SUBSCRIBE_SUCCESS',
  POST_SUBSCRIBE_FAILURE: '@subscription/POST_SUBSCRIBE_FAILURE',
  DELETE_SUBSCRIPTION_REQUEST: '@subscription/DELETE_SUBSCRIPTION_REQUEST',
  DELETE_SUBSCRIPTION_SUCCESS: '@subscription/DELETE_SUBSCRIPTION_SUCCESS',
  DELETE_SUBSCRIPTION_FAILURE: '@subscription/DELETE_SUBSCRIPTION_FAILURE',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.GET_SUBSCRIPTIONS_REQUEST: {
      const cancellingList = !payload.clearPrevious ? state.cancellingList : [];
      const data = !payload.clearPrevious ? state.data : [];

      return {
        ...state,
        data,
        loading: true,
        cancellingList,
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
        subscribingList: [...state.subscribingList, payload.id],
      };
    }

    case Types.POST_SUBSCRIBE_SUCCESS: {
      return {
        ...state,
        loading: false,
        subscribingList: state.subscribingList.filter(
          item => item !== payload.id,
        ),
      };
    }

    case Types.POST_SUBSCRIBE_FAILURE: {
      return {
        ...state,
        loading: false,
        subscribingList: state.subscribingList.filter(
          item => item !== payload.id,
        ),
      };
    }

    case Types.DELETE_SUBSCRIPTION_REQUEST: {
      return {
        ...state,
        loading: true,
        cancellingList: [...state.cancellingList, payload.id],
      };
    }

    case Types.DELETE_SUBSCRIPTION_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: state.data.filter(item => item.id !== payload.id),
        cancellingList: state.cancellingList.filter(
          item => item !== payload.id,
        ),
      };
    }

    case Types.DELETE_SUBSCRIPTION_FAILURE: {
      return {
        ...state,
        loading: false,
        cancellingList: state.cancellingList.filter(
          item => item !== payload.id,
        ),
      };
    }

    default:
      return state;
  }
};

export const Actions = {
  getSubscriptionsRequest: (limit, clearPrevious) => ({
    type: Types.GET_SUBSCRIPTIONS_REQUEST,
    payload: {
      limit,
      clearPrevious,
    },
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

  postSubscribeSuccess: id => ({
    type: Types.POST_SUBSCRIBE_SUCCESS,
    payload: {
      id,
    },
  }),

  postSubscribeFailure: id => ({
    type: Types.POST_SUBSCRIBE_FAILURE,
    payload: {
      id,
    },
  }),

  deleteSubscriptionRequest: id => ({
    type: Types.DELETE_SUBSCRIPTION_REQUEST,
    payload: {
      id,
    },
  }),

  deleteSubscriptionSuccess: id => ({
    type: Types.DELETE_SUBSCRIPTION_SUCCESS,
    payload: {
      id,
    },
  }),

  deleteSubscriptionFailure: id => ({
    type: Types.DELETE_SUBSCRIPTION_FAILURE,
    payload: {
      id,
    },
  }),
};

export const SubscriptionActions = Actions;
export const SubscriptionTypes = Types;
