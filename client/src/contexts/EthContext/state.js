const actions = {
  init: 'INIT',
  setLoading: 'SET_LOADING',
  setUserTokens: 'SET_USER_TOKENS',
};

const initialState = {
  loading: false,
  userTokens: 0,
  gnaToken: null,
  gnaTokenSale: null,
  kycContract: null,
};

const reducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case actions.init:
      return { ...state, ...data };
    case actions.setLoading:
      return { ...state, loading: data };
    case actions.setUserTokens:
      return { ...state, userTokens: data };
    default:
      throw new Error('Undefined reducer action type');
  }
};

export { actions, initialState, reducer };
