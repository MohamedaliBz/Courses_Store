import { NavLink } from "react-router-dom"
import { AddButton } from "../AddToCartButton"
import "./index.css"


export default function Course({title , price, id} : 
    {
        id : number,
        title: string,
        price : number
}) {

    return (
        <div className="course" key={id}>
            <NavLink  to={`/courses/${id}`} className="course-link">
                <h1>{title}</h1>
            </NavLink>
            <h2>{price}</h2>
            <AddButton courseId ={id}/>
        </div>
  )
}