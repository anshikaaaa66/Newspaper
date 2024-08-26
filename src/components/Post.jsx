import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Post.css'; // Ensure you have custom styles in this file

const Post = () => {
  const [newsPosts, setNewsPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [aiPosts, setAiPosts] = useState([]); // State for AI-generated posts
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [aiPostName, setAiPostName] = useState("");
  const [aiPostDescription, setAiPostDescription] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=ac2b4e90eb52408db0e8f090ee05d126');
      setNewsPosts(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handlePost = () => {
    const newPost = {
      name: postName,
      description: postDescription,
      username: "AK", // Replace with actual username
    };
    setUserPosts([newPost, ...userPosts]);
    setPostName("");
    setPostDescription("");
  };

  const handleAIPost = async () => {
    try {
      const aiSearchTerm = aiPostName || aiPostDescription;
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(aiSearchTerm)}&apiKey=ac2b4e90eb52408db0e8f090ee05d126`);
      
      const articles = response.data.articles;
      const firstArticle = articles.length > 0 ? articles[0] : null;

      const newAIPost = {
        name: aiPostName,
        description: aiPostDescription,
        username: "AI Bot", // Or whatever username you want to assign
        articleTitle: firstArticle ? firstArticle.title : "No title available",
        articleDescription: firstArticle ? firstArticle.description : "No description available",
        articleUrl: firstArticle ? firstArticle.url : "#",
      };

      setAiPosts([newAIPost, ...aiPosts]);
      setAiPostName("");
      setAiPostDescription("");
    } catch (error) {
      console.error("Error fetching related articles:", error);
    }
  };

  return (
    <div className="dashboard">
      {/* Ongoing News Posts Section */}
      <motion.div
        className="news-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Ongoing News Posts</h2>
        <div className="news-posts">
          {newsPosts.map((post, index) => (
            <motion.div
              key={post.url} // Use a unique key
              className="news-post"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              {post.urlToImage && <img src={post.urlToImage} alt={post.title} />}
              <a href={post.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* User Post Section */}
      <motion.div
        className="user-post-section"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Create a Post</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Post Name"
            value={postName}
            onChange={(e) => setPostName(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="button-container">
          <button onClick={handlePost}>Post</button>
        </div>
      </motion.div>

      {/* AI Generated Post Section */}
      <motion.div
        className="ai-post-section"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Create AI Post</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="AI Post Name"
            value={aiPostName}
            onChange={(e) => setAiPostName(e.target.value)}
          />
          <textarea
            placeholder="AI Post Description"
            value={aiPostDescription}
            onChange={(e) => setAiPostDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="button-container">
          <button onClick={handleAIPost}>Generate AI Post</button>
        </div>
      </motion.div>

      {/* User Posts Section */}
      <motion.div
        className="user-posts-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>User Posts</h2>
        <div className="user-posts">
          {userPosts.map((post, index) => (
            <motion.div
              key={index}
              className="user-post"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{post.name}</h3>
              <p>{post.description}</p>
              <p><strong>Posted by:</strong> {post.username}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Posts Section */}
      <motion.div
        className="ai-posts-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>AI Generated Posts</h2>
        <div className="ai-posts">
          {aiPosts.map((post, index) => (
            <motion.div
              key={index}
              className="ai-post"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{post.name}</h3>
              <p>{post.description}</p>
              {post.articleTitle && (
                <>
                  <h4>Related Article: {post.articleTitle}</h4>
                  <p>{post.articleDescription}</p>
                  <a href={post.articleUrl} target="_blank" rel="noopener noreferrer">Read more</a>
                </>
              )}
              <p><strong>Posted by:</strong> {post.username}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Post;
