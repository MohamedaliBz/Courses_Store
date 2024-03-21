import { useState } from "react";
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { handleAddedItems } from "../../Data/slices/courses";



export function AddButton( {courseId} : {courseId: number}) {

  const [isClicked, setisClicked] = useState(false);
  // dispatch : envoyer
  const dispatch = useDispatch();

  function handleClick(type : "remove" | "add") {
  
    console.log('Course that have id :'+courseId +" is clicked with action type :" + type);
    setisClicked(!isClicked)

    // handleAddedItems is a reducer action , that's why we need to call it using the dispatch function
    dispatch(handleAddedItems({courseId , type})) 
}
  // lire la variable addeItems (information) depuis le store à travers le useSelector() function
  // const {addedItems} = useSelector((state:RootState) => state.courses)

  return (

      <button className="cart-btn" onClick={()=>handleClick(isClicked? "remove" : "add")}>
      <span className="icon-container"> 
          <FontAwesomeIcon icon={faCartPlus}/>
      </span>
      <p className="text">{isClicked  ? "Remove from " : "Add to "}Cart</p>
    </button>

  )
}