import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Section from "./UI/section/Section";

const PostList = function ({posts, title, remove}) {

    if(!posts.length) {
        return (
            <Section margin={true}>
                <h2 className="section-title">
                    Посты не найдены!
                </h2>
            </Section>
        )
    }

    return(
        <div>
            <h2 className="section-title">
                {title}
            </h2>
            <TransitionGroup>
                {posts.map((post, index) =>
                <CSSTransition
                key={post.id}
                timeout={500}
                classNames="post"
                >
                <PostItem remove={remove} number={index + 1} post={post}/>
                </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList;
