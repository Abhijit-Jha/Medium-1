
import ProfileIcon from "./ProfileIcon"

interface PostInputs {
  title: string,
  description: string,
  postedBy: string,
  onclick : ()=>void
}
const PostCards = ({ title, description, postedBy ,onclick}: PostInputs) => {
  JSON.stringify(onclick)
  return (
    <div className="shadow-xl h-40 w-1/2 p-4 cursor-pointer" onClick={onclick}>
      <div className="font-extrabold">{title}</div>
      <div className="font-extralight h-20">{description}</div>
      <div className="items-end flex justify-end mr-2 ">
        ~<ProfileIcon name={postedBy} />
        <div className="flex items-center mb-1 ">
          {postedBy}
        </div>
      </div>
    </div>
  )
}

export default PostCards
