import Course from "../../Components/Course"
import "./index.css"
import { useSelector } from "react-redux"
import { RootState } from "../../Data/store"

export default function Courses() {

  //now we should get courses data from store using useSelector()
  const {coursesData} = useSelector((state:RootState) => state.courses)

  return (
    <div className="courses">
        {
            // using map function to display all courses 
            coursesData?.length >0 && coursesData?.map(({title,price,id},index)=>(
                    <Course key={index} title={title} price={price} id={id}/>
            ))
        }
    </div>
  )
}