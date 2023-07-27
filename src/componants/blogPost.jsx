import react,{useState} from "react"
import axios from "axios"
function createPost(){
   
        const[imput,setImput]=useState({
          name:'',
          blog:''  
        })
      


    }
    function handleChange(event){
      const {name,value} =event.target ;
      setimput(prevImput=>{
        return{
            ...prevImput,
            [name]:value
        }
      })
    }
function handelClick(event){
    event.preventDefault()
    console.log(imput)
    const newPost={
        name:imput.name,
        content:imput.content
    }
    axios.post('http://localhost:3001/create',newPost)
}

    return <div className="container">
        <h2>createPost</h2>
        <form>
            <div className="form-group">
                <imput onchange={handleChange} name="name" className="form-controll" placeholder="Poster Name"></imput>
            </div>
            <div className="form-group">
                <textarea onchange={handleChange} name="blog" className="form-controll" placeholder="blog" ></textarea>
            </div>
            <button onClick={handelClick}>Post Blog</button>
        </form>
    </div>
    
