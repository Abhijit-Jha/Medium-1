import { useParams } from "react-router-dom"
import PostDetails from "../component/PostDetails"


const Post = () => {
    const params = useParams()
    console.log(params)   
  return (
    <div>
      <PostDetails postId={params.id}/>
    </div>
  )
}

export default Post
