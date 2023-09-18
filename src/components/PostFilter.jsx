import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                placeholder='Поиск....'
                onChange={e => setFilter({...filter, query:e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                defaultValue={'Сортировать по'}
                option={[
                    {value:'body', name:'По описанию'},
                    {value:'title', name: 'По названию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;