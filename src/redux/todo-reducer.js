import {ADD_TODO, MARK_TODO_COMPLETED, SET_TODO_COMPLETED} from './action-types';
import Immutable from 'seamless-immutable';

const initialState = [
    {text: 'Use JavaScript', completed: true},
    {text: 'Explore Custom Elements v1', completed: false},
    {text: 'Reduxify your app logic', completed: false}
];

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload);
    case SET_TODO_COMPLETED:
      return Immutable.setIn(state, [action.payload.index, 'completed'], action.payload.completed);
    default:
      return state
  }
}
