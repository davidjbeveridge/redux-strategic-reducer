var strategicReducer;

strategicReducer = require('../lib').strategicReducer;

describe('strategicReducer', function() {

  describe('the returned reducer', function() {
    var defaultState = {};
    var reducer = strategicReducer(defaultState, {
      CUSTOM_ACTION: function(state, action) {
        return {
          foo: action.payload
        };
      }
    });

    context('when called with a matching action', function() {
      it('returns the new state', function() {
        expect(reducer({}, {
          type: 'CUSTOM_ACTION',
          payload: 'bar'
        })).to.eql({
          foo: 'bar'
        });
      });
    });

    context('when called with a non-matching action', function() {
      it('returns the current state', function() {
        expect(reducer({ foo: 'whiz' }, {
          type: 'SOME_OTHER_ACTION',
          payload: 'bar'
        })).to.eql({
          foo: 'whiz'
        });
      });
    });
  });
});
