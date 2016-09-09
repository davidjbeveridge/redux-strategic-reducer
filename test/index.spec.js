var r = require('../lib');
var strategicReducer = r.strategicReducer
var setProperty = r.setProperty
var clearProperty = r.clearProperty

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

describe('setProperty', function() {
  var setFoo = setProperty('foo');

  describe('the returned reducer function', function(){
    it('sets the named property to the value of the payload', function(){
      expect(setFoo({}, {type: 'SET_FOO', payload: 'bar'})).to.eql({
        foo: 'bar'
      })
    });
  });
});

describe('clearProperty', function() {
  var clearFoo = clearProperty('foo');

  describe('the returned reducer function', function(){
    it('clears the named property', function(){
      expect(clearFoo({
        foo: 'bar',
        whiz: 'bang'
      }, {
        type: 'CLEAR_FOO',
      })).to.eql({
        whiz: 'bang'
      })
    });
  });
});
