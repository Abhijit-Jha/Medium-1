
interface InputTypes {
    type: string,
    placeholder: string
    label: string
    onchange : (e:any)=>void
    errorMessage : string
}
const Input = ({ type, placeholder, label ,onchange,errorMessage}: InputTypes) => {
    return (
        <div>
            <label htmlFor="input" className="block m-2 text-sm font-medium text-gray-900 ">{label}</label>
            <input type={type} id="input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5" placeholder={placeholder}  onChange={onchange}/>
            <div className="text-red-500 text-sm ml-2">{errorMessage?errorMessage : ""}</div>
        </div>
    )
}

export default Input
