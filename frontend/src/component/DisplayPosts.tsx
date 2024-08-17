import axios from "axios";
import { useEffect, useState } from "react";
import PostCards from "./PostCards";
import { useNavigate } from "react-router-dom";

interface Post {
  postId: string;
  authorId: string;
  title: string;
  description: string;
  category: string;
}

const DisplayPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [usernames, setUsernames] = useState<{ [key: string]: string }>({});
  

  const navigate = useNavigate();
  const URL = "http://127.0.0.1:8787";
  
  useEffect(() => {
    async function getAllPost() {
      try {
        const response = await axios.get(`${URL}/api/get-all-posts`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        console.log("Full Response:", response);
        console.log("Response Data:", response.data);

        if (response && response.data) {
          setPosts(response.data); // Set the posts in state
          const usernamesData: { [key: string]: string } = {};
          for (const post of response.data) {
            const resp = await axios.get(`${URL}/api/getUser/${post.authorId}`,{
              withCredentials:true
            });
            usernamesData[post.authorId] = resp.data.name;
          }
          setUsernames(usernamesData);
        } else {
          setError("No data found");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false); 
      }
    }

    getAllPost();
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {posts.map((data) => {
        console.log(data)
        
        function navigateTo() {
          console.log(`Navigating to /post/${data.postId}`);
          navigate(`/post/${data.postId}`);
        }

        //fetching name
        
        return (
          <PostCards
            key={data.postId} // Add key prop for each element
            title={data.title}
            description={data.description}
            postedBy={usernames[data.authorId]}
            onclick={navigateTo}
          />
        );
      })}
    </div>
  );
};

export default DisplayPosts;
