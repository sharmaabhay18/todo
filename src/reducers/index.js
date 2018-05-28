import { combineReducer } from 'redux';
import todoListReducer from './todoListReducer';

export default combineReducer({
   todoList: todoListReducer
});
