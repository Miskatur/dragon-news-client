import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../../Hooks/useSetTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';


const Home = () => {
    const news = useLoaderData();
    useSetTitle('Home')

    return (
        <div>
            <div>
                {
                    news.map(news => <NewsSummaryCard
                        key={news._id}
                        news={news}
                    ></NewsSummaryCard>)
                }



            </div>
        </div>
    );
};

export default Home;