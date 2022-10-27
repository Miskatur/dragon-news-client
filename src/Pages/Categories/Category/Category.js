import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../../Hooks/useSetTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData()
    useSetTitle('Category')
    return (
        <div>
            {
                categoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;