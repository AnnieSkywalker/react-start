import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <div>
                <MyInput
                    value={filter.query}
                    onChange={e => setFilter({...filter , query: e.target.value})}
                    placeholder='Поиск...'
                ></MyInput>
                <MySelect
                    defaultValue='Сортировка'
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    options={[
                        {value: 'title', name: 'по заголовку' },
                        {value: 'body', name: 'по телу' }
                    ]}
                >
                </MySelect>
            </div>
        </div>
    );
}

export default PostFilter;
