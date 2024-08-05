import React, {useState} from "react";
import PostItem from "./components/PostItem";

import './stales/App.css'
import PostList from "./components/PostList";

function App() {

  const [posts, setPosts] = useState([
      {id: 1, title: 'javascript', body: 'discription' },
      {id: 2, title: 'javascript2', body: 'discription' },
      {id: 3, title: 'javascript3', body: 'discription' },
    ]
  )

  return (
    <div className="App">
      <PostList posts={posts} title='Список постов'/>

    </div>
  );
}

export default App;
