import { Inter } from 'next/font/google'
import Card from "../Components/Card"
import LeftNavigationCard from "../Components/LeftNavigationCard"
import TopNavigation from "../Components/TopNavigation"
import CreatePost from "../Components/CreatePost"
import Post from "../Components/Post"
import MyCommunity from "../Components/MyCommunity"
import ListTopUser from "../Components/ListTopUser"
import Profile from "../Components/Profile"



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex mt-2 max-w-7xl mx-auto gap-3 ">
      <div className="w-1/4 mt-14">
        <LeftNavigationCard />
        <hr className='mt-8' />
        <div className='mt-6'>
          <h2 className='ml-1'><b>My community</b> </h2>
          <MyCommunity />
          <div className="flex gap-1 ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            <p>show 5 more</p>
          </div>
        </div>
      </div>


      <div className="w-full">
        <div> <TopNavigation /></div>
        <div>
          <Profile />
        </div>

        <div className="flex gap-2">
          <div className="w-full">
            <div className="mb-5">
              <CreatePost />
            </div>
            <div className="block">
              <Post />
              <Post />
            </div>
          </div>

          <div className="block w-1/2">
            <div className='ml-2 bg-white rounded-lg mr-2 mb-5'>
              <ListTopUser />
            </div>

            <div className='ml-2 mt-6 bg-white rounded-lg mr-2'>
              <div className='flex gap-20 text-center ml-4 p-2'>
                <h3><b>Top users</b></h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <hr className='w-50 mt-3' />
              <MyCommunity />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}