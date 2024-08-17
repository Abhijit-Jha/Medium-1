import Quote from '../component/Quote'
import SigninComponent from '../component/SigninComponent'
const Signin = () => {
    return (
        <div className='flex'>
            <SigninComponent />
            <Quote quote='Karm Karo Parth' author='Krishn'></Quote>
        </div>
    )
}

export default Signin
