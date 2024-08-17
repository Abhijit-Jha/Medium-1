import { useState } from "react"
import Button from "./Button"
import Input from "./Input"
import { useRecoilState } from "recoil"
import { emailAtom, passwordAtom } from "../store/atoms/signupAtom"
import { signInSchema } from "../../../common"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const URL = "http://127.0.0.1:8787"
const SigninComponent = () => {
    const [email, setEmail] = useRecoilState(emailAtom)
    const [password, setPassword] = useRecoilState(passwordAtom)
    const [emailError, setEmailError] = useState("")
    const [passwordError, setpasswordError] = useState("")
    
    const navigate = useNavigate()
    const handleSignin = async () => {
        const data = {
            email,
            password
        }
        const response = signInSchema.safeParse(data)
        // console.log(response.error?.issues)
        if (!response.success) {
            response.error?.issues.forEach((err) => {
                if (err.path[0] == "email") {
                    setEmailError(err.message)
                } else if (err.path[0] == "password") {
                    setpasswordError(err.message)
                }
            })
            return
        }

        const user = await axios.post(`${URL}/auth/signin`,data)
        console.log(user)
        if(user.data.errorMessage){
            setEmailError("User doesn't exist")
            alert(user.data.errorMessage)
            return
        }
        navigate("/home")
    }
    return (
        <div className="flex justify-center items-center w-1/2">
            <div>
                <Input type="text" placeholder="Enter Your Email..." label="Email" onchange={(e) => {
                    setEmailError("")
                    setEmail(e.target.value)
                }} errorMessage={emailError}></Input>
                <Input type="password" placeholder="Enter Your Password.." label="Password" onchange={(e) => {
                    setpasswordError("")
                    setPassword(e.target.value)
                }} errorMessage={passwordError}></Input>
                <div className="flex justify-center items-center mt-4">
                    <Button text="Login" plpr={50} onclick={handleSignin} />
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                    <div>
                    Doesn't have an account? </div><a className="text-blue-400 underline" href="/signup"> Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default SigninComponent