import { emailAtom, nameAtom, passwordAtom } from "../store/atoms/signupAtom";
import Button from "./Button";
import Input from "./Input";
import { useRecoilState } from "recoil";
import { signUpSchema } from "../../../common/index";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const URL = "http://127.0.0.1:8787"
const SignupComponent = () => {
    const [name, setName] = useRecoilState(nameAtom);
    const [email, setEmail] = useRecoilState(emailAtom);
    const [password, setPassword] = useRecoilState(passwordAtom);
    const navigate = useNavigate();

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSignUp = async () => {
        const data = { name, email, password };
        const response = signUpSchema.safeParse(data);

        if (!response.success) {
            response.error?.issues.forEach((error) => {
                if (error.path[0] === "email") {
                    setEmailError(error.message);
                } else if (error.path[0] === "password") {
                    setPasswordError(error.message);
                }
            });
            return;
        }
        
        try {
            const newUser = await axios.post(
                `${URL}/auth/signup`,
                data,
                {
                    withCredentials:true,
                }
            );
            console.log(newUser);

            if (newUser.data.message) {
                setEmailError(newUser.data.message);
            } else {
                navigate("/home");
            }
        } catch (error) {
            console.error('Error during signup:', error);
            // Handle different types of errors here if needed
            setEmailError("An error occurred during signup. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center w-1/2">
            <div>
                <Input
                    type="text"
                    placeholder="Enter your fullname..."
                    label="Full name"
                    onchange={(e) => setName(e.target.value)}
                    errorMessage={""}
                />
                <Input
                    type="text"
                    placeholder="Enter Your Email..."
                    label="Email"
                    onchange={(e) => {
                        setEmailError("");
                        setEmail(e.target.value);
                    }}
                    errorMessage={emailError}
                />
                <Input
                    type="password"
                    placeholder="Enter Your Password.."
                    label="Password"
                    onchange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError("");
                    }}
                    errorMessage={passwordError}
                />
                <div className="flex justify-center items-center mt-4">
                    <Button text="Get Started" plpr={50} onclick={handleSignUp} />
                </div>
                <div className="flex justify-center mt-2 space-x-2">
                    <div>Already have an account? </div>
                    <a className="text-blue-400 underline" href="/signin"> Sign in</a>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;
