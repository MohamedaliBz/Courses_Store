import { combineReducers } from "@reduxjs/toolkit";
import { reducer as coursesReducer } from "../slices/courses"

const rootReducer=combineReducers({
    // definir le nom du slice qu'on veut utiliser
    courses: coursesReducer,    
})

export default rootReducer ;

