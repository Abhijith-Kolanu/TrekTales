import React from 'react'
import Feed from './Feed'
import { Outlet } from 'react-router-dom'
import RightSidebar from './RightSidebar'
import useGetAllPost from '@/hooks/useGetAllPost'
import useGetSuggestedUsers from '@/hooks/useGetSuggestedUsers'

const Home = () => {
    console.log("🏡 Home component rendered");

    useGetAllPost();
    useGetSuggestedUsers();
    return (
        <div className="flex max-w-6xl mx-auto mt-8 px-20 gap-8">
            <div className="flex-[2]">
                <Feed />
                <Outlet />
            </div>
            <div className="flex-[1]">
                <RightSidebar />
            </div>
        </div>

    )
}

export default Home