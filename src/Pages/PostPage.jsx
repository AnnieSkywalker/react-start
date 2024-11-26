import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostPage() {
    let params = useParams();
    let [post, setPost] = useState({});

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
    }, [])

    return (
        <div className='post-page'>
            <h2 className='post-page__id'>Пост {params.id}</h2>
            {isLoading
                ? 
                <Loader />
                : 
                (<div className='post'>
                    <div className="post__content">
                        <div className="post__wrap">
                            <h3 className="post-page__title post__title">{post.title}</h3>
                            <p className="post-page__body post__body">{post.body}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default PostPage
