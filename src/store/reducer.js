import { combineReducers } from 'redux';

// import todosReducer from './features/todos/todosSlice'
// import filtersReducer from './features/filters/filtersSlice'
import memoReducer from './slice/memoSlice';

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    memos: memoReducer,
    // todos: todosReducer,
    // filters: filtersReducer,
});

export default rootReducer;
