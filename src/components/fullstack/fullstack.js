import axios from "axios";
import { useEffect,useState } from "react";
function Form(){
    const [data,setData] = useState({
        name:'',
        age:'',
        gender:''
    })
    const handler = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const createUser = () => {
        console.log(data);
        axios.post('http://localhost:6969/',data)
        .then(()=>{
            console.log('Created')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return <>
    <h1>Register</h1>
    <p>Name</p>
    <input onChange={handler} name="name"/>
    <p>Age</p>
    <input type="number" onChange={handler} name="age"/>
    <p>Gender</p>
    <input type="radio" value="male" name="gender" onChange={handler}/><label>Male</label>
    <input type="radio" value="female" name="gender" onChange={handler}/><label>Female</label>
    <button onClick={createUser}>Submit</button>
    </>
}
export default Form