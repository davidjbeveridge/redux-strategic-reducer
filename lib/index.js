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

  setProperty: function(propertyName) {
    return function(state, action) {
      var stateChange = {};
      stateChange[propertyName] = action.payload;
      return Object.assign({}, state, stateChange);
    };
  },

  clearProperty: function(propertyName) {
    return function(state, action) {
      return Object.keys(state)
        .filter(function(key) {
          return key != propertyName;
        })
        .reduce(function(obj, key) {
          obj[key] = state[key]
          return obj;
        }, {});
    };
  },
};
