import {ADD_TODO, MARK_TODO, REMOVE_TODO} from './action-types';
import Immutable from 'seamless-immutable';

const initialState = Immutable.from([
    {text: 'Use JavaScript', marked: true},
    {text: 'Explore Custom Elements v1', marked: false},
    {text: 'Reduxify your app logic', marked: false}
]);


export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({text: action.payload, marked: false});
    case MARK_TODO:
      return Immutable.setIn(state, [action.payload, 'marked'], !state[action.payload].marked);
    case REMOVE_TODO:
      return state.filter((item, index) => index !== action.payload);
    default:
      return state;
  }
}
