import { useNavigate } from "react-router-dom";
import Button from './Button'
const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-between border-black border-b-2'>
            <div className='w-32 font-bold text-3xl m-5 ml-40 '>
                Medium
            </div>
            <div className='flex space-x-5 m-4 mr-40'>
                <div className='flex  space-x-12 m-2'>
                <HeaderButton text='Our story' nav="/about"></HeaderButton>
                <HeaderButton text='Membership' nav="/membership"></HeaderButton>
                <HeaderButton text='Write' nav="/signup"></HeaderButton>
                <HeaderButton text='Sign in' nav="/signin"></HeaderButton>
                </div>
                <div>
                    <Button text='Get Started' plpr={2} onclick={()=>{
                        navigate("/signup")
                    }}/>
                </div>
            </div>

        </div>
    )
}


function HeaderButton({ text, nav}: { text: string,nav:string }) {
    const navigate = useNavigate()
    return <>
        <div className='cursor-pointer hover:text-slate-600 transition-all ease-in' onClick={()=>{
            navigate(nav)
        }}>
            {text}
        </div>
    </>
}
export default Header
