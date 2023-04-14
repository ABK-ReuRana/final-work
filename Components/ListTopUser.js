import React from "react";


const users = [
    {
        id: 1,
        Profile: "Ridwan Beler",
        avatar: "https://tse1.mm.bing.net/th?id=OIP.C0bvF852Rrb8-Oa0OiL5KgHaHa&pid=Api&P=0",
        reach: "99 hits in last 2 days",
    },
    {
        id: 2,
        Profile: "Riya Rana",
        avatar: "https://tse1.mm.bing.net/th?id=OIP.C0bvF852Rrb8-Oa0OiL5KgHaHa&pid=Api&P=0",
        reach: "90 hits in last 2 days",
    },
    {
        id: 3,
        Profile: "Siya Beler",
        avatar: "https://tse1.mm.bing.net/th?id=OIP.C0bvF852Rrb8-Oa0OiL5KgHaHa&pid=Api&P=0",
        reach: "80 hits in last 2 days",
    },
    {
        id: 4,
        Profile: "Nitendra Rana",
        avatar: "https://tse1.mm.bing.net/th?id=OIP.C0bvF852Rrb8-Oa0OiL5KgHaHa&pid=Api&P=0",
        reach: "70 hits in last 2 days",
    },
    {
        id: 5,
        Profile: "Neha Kumari",
        avatar: "https://tse1.mm.bing.net/th?id=OIP.C0bvF852Rrb8-Oa0OiL5KgHaHa&pid=Api&P=0",
        reach: "60 hits in last 2 days",
    },
];



export default function ListTopUser() {
    return (
        <div className="p-4">
            <div className='flex text-center ml-2 p-2'>
                <h3><b>Top users</b></h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <ul>
                {users.map((user) => (
                    
                    <li key={user.id} className="flex items-center space-x-4 mb-2 mt-3">
                        <p><b>{user.id} </b></p>
                        <img
                            src={user.avatar}
                            alt="pic"
                            className="w-8 h-8 rounded-full"
                        />
                        <div>
                            <p className="font-medium">{user.Profile}</p>
                            <p
                                className="text-sm text-gray-500">
                                {user.reach}
                            </p>
                        </div>

                        <div className="ml-2">
                           <button className="border border-gray-200 text-sm">view Profile</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

