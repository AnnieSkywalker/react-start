import React, {useState} from "react";
import PostItem from "./components/PostItem";

import './stales/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

  const [posts, setPosts] = useState([
      {id: 1, title: 'javascript', body: 'discription' },
      {id: 2, title: 'javascript2', body: 'discription' },
      {id: 3, title: 'javascript3', body: 'discription' },
    ]
  )

  const [post, setPost] = useState({title: '', body: ''})

  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');

  const addNewPost = (e)=> {
    e.preventDefault();

    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''});
  }

  return (
    <div className="App">
      <form>
        <MyInput type='text' placeholder='Название поста' value={post.title} onChange={e => setPost({...post, title: e.target.value})}></MyInput>
        <MyInput type='text' placeholder='Описание поста' value={post.body} onChange={e => setPost({...post, body: e.target.value})}></MyInput>
        <MyButton  onClick={addNewPost}>Добавить</MyButton>
      </form>

      <PostList posts={posts} title='Список постов'/>

    </div>
  );
}

export default App;
