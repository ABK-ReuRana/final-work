import React from 'react';

const Post = () => {
  return (
    <div className="block items-center  bg-white space-x-4 w-full mx-auto border border-slate-200 mb-8 p-6">
      <div className='flex space-x-2'>
        <img src="https://tse1.mm.bing.net/th?id=OIP.IPwwqavUwyoc-4fisXK35wHaLH&pid=Api&P=0" alt="Profile" className="w-10 h-8 rounded-full ml-2 mt-2" />
        <div className="block items-center space-x-2">
          <h2 className="font-semibold ml-2">Riya Rana </h2>
          <p className='text-gray-500 text-sm flex'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mt-1">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
            </svg> 14 min ago on <b className='ml-1 '> Figma community</b>
          </p>
        </div>
      </div>

      <p className="text-gray-700 mt-2">What is the reason guys.Yesterday I upoladed some type of content and they approved it.</p>
      <img src='https://tse4.mm.bing.net/th?id=OIP._RmeNfZWqWU0p8CBLNOJdQHaFj&pid=Api&P=0' alt='Post' className='w-full h-25 mt-3 mb-3 mx-auto' />
      <div className="flex items-center mt-2 space-x-4">
        <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z" />
          </svg>

          <span>1.9K</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>

          <span>45</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z" />
          </svg>
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center mt-4">
          <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.IPwwqavUwyoc-4fisXK35wHaLH&pid=Api&P=0" alt="Profile" />
          </div>
          <div className="ml-3 flex-grow">
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Write a comment..."
            />
          </div>
          <div className="ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
          </div>
          <div className="ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>

          </div>
        </div>
      </div>

    </div>
  );
}
export default Post;