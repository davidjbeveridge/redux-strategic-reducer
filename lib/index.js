module.exports = {
  strategicReducer: function strategicReducer(defaultState, reducers) {
    return function(state, action) {
      state = state != null ? state : defaultState
      if ( reducers && typeof reducers[action.type] === 'function') {
        return reducers[action.type](state, action)
      }
      return state
    };
  },
};
