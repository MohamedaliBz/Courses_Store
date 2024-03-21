import { NavLink } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../Data/store";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { handleAddedItems } from "../../Data/slices/courses";


export default function Header(){

    // useSelector:hook de React Redux , qui permet de lire|récuperer depuis unbe slice de store
    // equivalent à : const x= useSelector((state:RootState) => state.courses.addedItems)
    // just distructing directly the addedItems value
    const {addedItems} = useSelector((state:RootState) => state.courses)
    
    //useEffect permet de déclencher un effet | une action lorsque la valeur de addedItems se change
    useEffect(() => {
        // l'effet |l'action
        console.log("ITEMS HAS BEEN CHANGED ", addedItems);
    },[addedItems])

    const {coursesData} = useSelector((state:RootState) => state.courses)
    const addedElements = coursesData.filter((course)=> course.isAdded===true)

    const [isModalOpen, setisModalOpen] = useState(false);
    function handleClick(){
        setisModalOpen(!isModalOpen)
        console.log("isModalOpen = " + isModalOpen);
  }
  const dispatch = useDispatch();
  function removeFromCart(id : number){
    const courseId =id 
    const type ="remove"
    dispatch(handleAddedItems({courseId , type}))
  }

  // disabling scroll when modal is opened
  if (isModalOpen){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }
    return(
        <header>
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                    <li><NavLink to={"/courses"}>Courses</NavLink></li>
                    <li><NavLink to={"/aboutus"}>About us</NavLink></li>
                    <li><NavLink to={"/contactus"}>Contact</NavLink></li>
                </ul>
            </nav>
            <div className="buttons">
                <button>sign in</button>
                <button>sign up</button>
            </div>
            <div className="cart" onClick={handleClick}>  
                <FontAwesomeIcon icon={faCartShopping} />    
                {/* <div>{Object.keys(addedItems).length}</div> */}
                <div>{addedElements.length}</div>
            </div>

            {
                isModalOpen && (
                    <Modal onclose={()=>setisModalOpen(false)}>
                        <h1>Items added to cart !</h1>
                        
                            <table className="modal-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {addedElements.map((course, index) => (
                                    <tr key={index}>
                                        <td>{course.id}</td>
                                        <td>{course.title}</td>
                                        <td>{course.price}</td>
                                        <td>
                                            <FontAwesomeIcon 
                                                icon={faTrashCan} 
                                                style={{color: "#ff0000",}} 
                                                onClick={
                                                    ()=>removeFromCart(course.id)
                                                    }/>
                                        </td>
                                    </tr>
                                    ))}

                                </tbody>
                            </table>
                    </Modal>
                )
            }
        </header>
    )
        
    // {Object.keys(addedItems).length} : donne nombre total d'éléments d'un objet .
}