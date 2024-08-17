import Button from "./Button"
import background from "../store/firstPage_background.webp"
import { useNavigate } from "react-router-dom"
const FirstSection = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between border-b-2 border-black h-[590px]">
      <div>
      <div className='ml-40 mt-32'>
        <Text text="Human" />
        <Text text="stories & ideas" />
      </div>
      <div className='ml-40 mt-10 text-2xl font-[sans]'>
        A place to read,write and deepen your understanding
      </div>
      <div className="ml-40 mt-10">
      <Button text="Start Reading" plpr={8} onclick={()=>{
        navigate("/signup")
      }}/>
      </div>
      </div>
      <div>
        <img src={background} className="w-[460px] h-[600px]"></img>
      </div>
    </div>
  )
}

function Text({ text }: { text: any }) {

  return <>
    <h1 className='font-extrabold text-8xl italic w-fit font-[sans]'>
      {text}
    </h1>
  </>
}

export default FirstSection
