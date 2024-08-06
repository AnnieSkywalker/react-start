import React, {useState} from "react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/MySelect";

import './stales/App.css'
import PostList from "./components/PostList";

function App() {

  const [posts, setPosts] = useState([
      {id: 1, title: 'javascript', body: 'discription' },
      {id: 2, title: 'javascript2', body: 'discription' },
      {id: 3, title: 'javascript3', body: 'discription' },
    ]
  )

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b)=> a[sort].localeCompare(b[sort])))
  }


  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <hr style = {{margin: '15px 0'}}></hr>
      <div>
        <MySelect
          defaultValue='Сортировка'
          value={selectedSort}
          onChange={sortPost}
          options={[
            {value: 'title', name: 'по заголовку' },
            {value: 'body', name: 'по телу' }
          ]}
        >

        </MySelect>
      </div>


      {
      posts.length !== 0
      ?
       <PostList remove={removePost} posts={posts} title='Список постов'/>
      :
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены!
        </h1>
      }

    </div>
  );
}

export default App;
