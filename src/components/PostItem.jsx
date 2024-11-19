import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";


const PostItem = function (props) {

  let navigate = useNavigate();

  return(
    <div className="post">

      <div className="post__content">
        <span className="post__id">{props.post.id}</span>
        <div className="post__wrap">
            <h3 className="post__title">{props.post.title}</h3>
            <p className="post__body">{props.post.body}</p>
        </div>
        
      </div>
      <div className="post__btn">
            <MyButton onClick = {()=> {navigate(`/posts/${props.post.id}`)}}>Открыть</MyButton> 
            <MyButton onClick = {() => props.remove(props.post)}>Удалить</MyButton>
      </div>

    </div>
  )
}

export default PostItem;