import { toast } from 'react-toastify';
import { courses } from '../../util/constant';

// 1 : importer la fonction createSlice
import {createSlice , PayloadAction} from '@reduxjs/toolkit';

// 2 : créer un objet initialState
const initialState = {
    addedItems :{} as Record <number,number> , // déclarer un objet addeItems dont key & value sont de type number
    coursesData :courses
}

// 3: créer le slice
const slice = createSlice({
    name:"courses",
    initialState,
    // les actions mte3 slice yet7atou ta7t l'objet reducers{}
    // donc l 'objet reducers{} contient un ensemble des actions( ou bien fonctions)
    // le param state contient les donnees de initialState : dans notre cas state contient l'objet addedItems
    reducers:{
        handleAddedItems(state,action:PayloadAction<{courseId:number , type : "remove" | "add"}>){
            const {courseId,type} = action.payload
            console.log("RECEIVED FROM STORE :" , courseId , type);

            state.coursesData.map((course)=>{
                if(courseId === course.id){
                    course.isAdded = type=== "add" ? true : false;
                    type=== "add" ? toast.success("course added successfully",{autoClose:2000 , position:'top-center'}) : toast.error("course removed successfully" , {autoClose:2000 ,position:'top-center'})
                }
            })

            if (type === "add"){
                state.addedItems[courseId]=1
                
            }
            else if(type === "remove"){
                delete state.addedItems[courseId]
            }
        }
    }
})

export const {handleAddedItems} = slice.actions
export default slice 
export const reducer=slice.reducer 

// don't forget to wrap the application <App/> under the provider in the file index.tsx
//      <Provider store={store}>
//          <App />
//       </Provider>