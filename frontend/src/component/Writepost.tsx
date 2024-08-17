import {useState} from 'react'
import Input from './Input'
import Button from './Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
//  type, placeholder, label ,onchange,errorMessage
const URL = "http://127.0.0.1:8787";
const Writepost = () => {
    const [title,setTitle] = useState()
    const [description,setDscription] = useState()
    const navigate = useNavigate()
    async function addApost(){
        const resp = await axios.post(`${URL}/api/post-a-blog`,{
            title,
            description,
            category : "any"
        },{
            withCredentials:true
        })
        if(resp && resp.data){
            navigate("/home")
        }
    }
  return (
    <div>
      <Input type='text' placeholder='Enter Title' label='Title' onchange={(e)=>{
        setTitle(e.target.value)
      }} errorMessage=''/>
      <Input type='' placeholder='Enter Description' label='Description' onchange={(e)=>{
        setDscription(e.target.value)
      }} errorMessage=''/>
      <Button plpr={2} text='Add Post' onclick={addApost}/>
    </div>
  )
}

export default Writepost
