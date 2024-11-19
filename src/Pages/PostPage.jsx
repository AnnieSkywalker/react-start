import PostService from 'API/PostService';
import Loader from 'components/UI/loader/Loader';
import { useFetching } from 'hooks/useFetching';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostPage() {
	let params = useParams();
	let [post, setPost] = useState({});
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data)

	});

	useEffect(() => {
		fetchPostById(params.id);
	}, [])

  return (
	
	<div>
		<h1>вы открыли страницу поста c ID {params.id}</h1>
		{isLoading
			? <Loader />
			: <div>{post.id}. {post.title}</div>
		}
	</div>
  )
}

export default PostPage