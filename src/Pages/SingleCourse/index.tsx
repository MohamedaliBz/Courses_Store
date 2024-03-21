import { useParams } from "react-router-dom"
import { courses } from "../../util/constant";

export default function SingleCourse() {
        // recuperer l'id de cours depuis l'URL en utilisant le useParams()
        const {id}=useParams(); 
        console.log(id);

        // chercher le cours par l'id equivalent
        const course =courses?.find((item)=> item.id===Number(id))  // l'id est de type string là car on l'a récuperé depuis l'url , c'est pourquoi on a utilisé Number()
        console.log("course informations",course); // affichage les details d'un cours
        
  return (
    <div>
        
        <h1>SINGLE COURSE PAGE</h1>
        <h2>COURSE TITLE : {course?.title}</h2>
        <h2>COURSE PRICE : {course?.price}</h2>
        <h2>DESCRIPTION : {course?.description}</h2>
        <h2>DURATION : {course?.duration}</h2>
        
    </div>
  )
}