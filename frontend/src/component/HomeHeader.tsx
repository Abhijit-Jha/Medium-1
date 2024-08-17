import { useRecoilValue } from "recoil";
import "../index.css"
import ProfileIcon from "./ProfileIcon";
import { nameAtom } from "../store/atoms/signupAtom";
import { useNavigate } from "react-router-dom";
const HomeHeader = () => {
  const name = useRecoilValue(nameAtom)
  const n = useNavigate()
  return (
    <div className="flex justify-between bg-white">
      <div className=" flex space-x-2">
        <span className="font-serif text-3xl font-bold m-2 mr-0">Medium</span>
        <div className="bg-slate-100 rounded-full mb-2 h-8 mt-3 ">
          <SearchBar />
        </div>
      </div>

      <div className="mt-2 flex space-x-8 mr-10 font-extralight text-slate-400" onClick={()=>{
        n("/write")
      }}>
        <div className="flex mt-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          <span className="">Write</span>
        </div>
        <div className="mt-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </div>
        <div className="mt-1 cursor-pointer">
          <ProfileIcon name={name}/>
        </div>
      </div>

    </div>
  )
}

function SearchBar() {
  return (
    <div className="flex items-center rounded-full  bg-slate-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 ml-3 text-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        type="search"
        placeholder="Search"
        className="h-2 p-4 pl-2 w-40 focus:outline-none bg-slate-100 rounded-full"
      />
    </div>
  );
}

export default HomeHeader
