const redux = require("redux");

// Actions for Redux
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// Action Creators

const addToDo = (text)=>({text, type: ADD_TODO});
const toggleToDo = (index)=>({index, type : TOGGLE_TODO});

//Initial state
const initialState = {
    todos:[]
}

// Reducers
// Reducers must return updated state
function todoReducers(state=initialState, action){
    switch(action.type){
        case ADD_TODO: {
          return {
            ...state,
            todos:[...state.todos,
                {
                    text : action.text,
                    completed: false
                }
            ]
          }
        }
        case TOGGLE_TODO:{
            return {
                ...state,
                todos: state.todos.map((todo, i)=>{
                    if(i==action.index){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        }
        default:
            return state;
    }
}

// Creating Store
const store = redux.createStore(todoReducers);

//dispatch actions
store.dispatch(addToDo("Study at 8"));
store.dispatch(addToDo("Office at 9"));
store.dispatch(toggleToDo(0));

// Read data from store
console.log(store.getState());