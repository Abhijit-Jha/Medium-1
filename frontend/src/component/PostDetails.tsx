import axios from "axios";
import { useEffect, useState } from "react";
interface PostDetailsType {
  title: string,
  description: string,
  authorId: string,
  postId: string,
  category: string
}
const PostDetails = ({ postId }: { postId: string | undefined }) => {
  const [postDetails, setPostDetails] = useState<PostDetailsType>();
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  const URL = "http://127.0.0.1:8787"; // Base URL of your API
  const [usernames, setUsernames] = useState();
  useEffect(() => {
    async function fetchPostDetails() {
      try {
        const postD = await axios.get(`${URL}/api/get-post-by-id/${postId}`, {
          withCredentials: true,
        });
        const postDetailsData = postD.data;
        setPostDetails(postD.data);


        const resp = await axios.get(`${URL}/api/getUser/${postDetailsData.authorId}`, {
          withCredentials: true
        });
        console.log(resp)


        setUsernames(resp.data.name);
        console.log(postD.data)
      } catch (error) {
        console.error("Error fetching post details:", error);
        setError("Failed to fetch post details");
      } finally {
        setLoading(false);
      }
    }
    fetchPostDetails();
  }, [postId]);

  if (loading) {
    return <div>Loading post details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!postDetails) {
    return <div>No post details available</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg h-screen">
      <h1 className="text-3xl font-bold mb-4">{postDetails.title}</h1>
      <p className="text-gray-600 mb-6">By {usernames}</p>
      <p className="text-lg text-gray-800">{postDetails.description}</p>
    </div>
  );
};

export default PostDetails;
