import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

// Post component with delete and edit functionalities
const Post = React.forwardRef(({ username, post, onDelete, onEdit }, ref) => (
  <div className="post" ref={ref}>
    <h1>{username}</h1>
    <p>{post}</p>
    <button onClick={onDelete}>Delete</button>
    <button onClick={onEdit}>Edit</button>
  </div>
));

// Input component with forwarded ref
const Input = React.forwardRef(({ onClick, inputChange, charCount }, ref) => (
  <div>
    <input type="text" placeholder="Tweets" onChange={inputChange} ref={ref} />
    <button onClick={onClick}>Post</button>
    <span>{charCount}</span>
  </div>
));

// Function to calculate remaining characters
const calculateCharCount = (str) => {
  return 250 - str.length;
};

const App = () => {
  const [charCount, setCharCount] = useState(250);
  const [tweets, setTweets] = useState([]);
  const [postRefs, setPostRefs] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {

    setPostRefs((postRefs) =>
      Array(tweets.length)
        .fill()
        .map((_, i) => postRefs[i] || React.createRef())
    );
  }, [tweets]);

  const handleInputChange = () => {
    const str = inputRef.current.value;
    setCharCount(calculateCharCount(str));
  };

  const handlePost = () => {
    const str = inputRef.current.value;
    if (str.length > 0) {
      setTweets((prevTweets) => [
        ...prevTweets,
        { id: Date.now(), username: "User", post: str },
      ]);
      inputRef.current.value = "";
      setCharCount(250);
    }
  };

  const handleDelete = (id) => {
    setTweets((prevTweets) => prevTweets.filter((tweet) => tweet.id !== id));
  };

  const handleEdit = (id, index) => {
    const post = postRefs[index].current.querySelector('p').innerText;
    const newPost = prompt("Edit your post:", post);
    if (newPost !== null) {
      setTweets((prevTweets) =>
        prevTweets.map((tweet) =>
          tweet.id === id ? { ...tweet, post: newPost } : tweet
        )
      );
    }
  };

  return (
    <div className="App">
      <Input
        onClick={handlePost}
        charCount={charCount}
        inputChange={handleInputChange}
        ref={inputRef}
      />
      {tweets.map((tweet, index) => (
        <Post
          key={tweet.id}
          username={tweet.username}
          post={tweet.post}
          onDelete={() => handleDelete(tweet.id)}
          onEdit={() => handleEdit(tweet.id, index)}
          ref={postRefs[index]}
        />
      ))}
    </div>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
