import React, { useEffect, useState } from 'react';

import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/loader/Loader';
import MyModal from '../components/UI/MyModal/MyModal';
import Pagination from '../components/UI/pagination/Pagination';

import PostService from '../API/PostService';
import { getPageCount } from '../utils/pages';

import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import StubError from 'components/UI/stubError/StubError';


function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
    // let pagesArray = getPagesArray(totalPages);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        fetchPosts(limit, page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const createPost = newPost => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = post => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    const changePage = page => {
        setPage(page);
        fetchPosts(limit, page);
    };

    return (
        <div className='App'>
            <section className='management'>
                <MyButton onClick={() => setModal(true)}> </MyButton>

                <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
            </section>

            {postError && <StubError postError={postError}>!Произошла ошибка:</StubError>}

            {isPostsLoading 
                ? (<div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>) 
                : (<PostList remove={removePost} posts={sortedAndSearchPosts} title='Список постов' />)
            }
            

            <Pagination page={page} totalPages={totalPages} changePage={changePage}></Pagination>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}></PostForm>
            </MyModal>
        </div>
    );
}

export default Posts;
