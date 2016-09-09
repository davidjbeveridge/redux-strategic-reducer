# strategicReducer

Strategy pattern for Redux reducers

[Redux][redux] is a godsend. But, you may have noticed that all
the [Redux Docs][redux-docs] use JavaScript's not-so-useful `switch`/`case`
construct. If you prefer re-usable, composable, function-based reducers,
`redux-strategic-reducer` offers a better way.

## Installation

To install the stable version:

```
npm install --save redux-create-reducer
```

## Usage

### strategicReducer

Create a strategy-based reducer thus:

```javascript
import { strategicReducer } from 'redux-create-reducer';

const defaultState = { title: null };

export default const counter = strategicReducer(defaultState, {
  'SET_TITLE': (state, action) =>
    Object.assign({}, state, { title: action.payload })
,
  'CLEAR_TITLE': (state, action) =>
    Object.assign({}, state, { title: null })
});
```

as opposed to the `switch`-based version

```javascript
export default function counter(state = 0, action) {
  switch (action.type) {

  case 'SET_TITLE':
    return Object.assign({}, state, { title: action.payload })

  case 'CLEAR_TITLE':
    return Object.assign({}, state, { title: null })

  default:
    return state
  }
}
```

