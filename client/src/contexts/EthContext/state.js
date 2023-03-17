const actions = {
  init: 'INIT',
  setLoading: 'SET_LOADING',
};

const initialState = {
  loading: false,
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
    default:
      throw new Error('Undefined reducer action type');
  }
};

export { actions, initialState, reducer };
