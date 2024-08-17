import Quote from "../component/Quote"
import SignupComponent from "../component/SignupComponent"


const Signup = () => {
  return (
    <div className="flex">
      <Quote quote="If you build it, they will come." author="Joe Jackson"/>
      <SignupComponent/>
    </div>
  )
}

export default Signup
