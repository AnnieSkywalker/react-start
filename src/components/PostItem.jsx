import React from "react";

const PostItem = function () {

  return(
    <div className="post">
      <div className="post__content">
        <strong>1. JavaScript</strong>
        <div>
          Javascript - язык програмированния
        </div>
      </div>
      <div className="post__btn">
        <button>Удалить</button>
      </div>
    </div>
  )
}

export default PostItem;