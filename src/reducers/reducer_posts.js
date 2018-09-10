import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
    // Transform an array 
    // [{id: '2', ...}, {id: '4', ...}]
    // to an object mapped by keys
    // {'2':{id: '2', ...}, '4':{id: '4', ...}}
    return _.mapKeys(action.payload.data, 'id');    
    default:
      return state;
  }
}