import React from "react";


const users = [
  {
    id: 1,
    Profile: "Indonesia UI Designer",
    avatar: "https://tse1.mm.bing.net/th?id=OIP.C0bvF852Rrb8-Oa0OiL5KgHaHa&pid=Api&P=0",
    Number: "734 members",
  },
  {
    id: 2,
    Profile: "Indonesia UX Resea...",
    avatar: "https://tse1.mm.bing.net/th?id=OIP.C0bvF852Rrb8-Oa0OiL5KgHaHa&pid=Api&P=0",
    Number: "125 members",
  },
  {
    id: 3,
    Profile: "Prototyping Club",
    avatar: "https://tse1.mm.bing.net/th?id=OIP.C0bvF852Rrb8-Oa0OiL5KgHaHa&pid=Api&P=0",
    Number: "891 members",
  },
  {
    id: 4,
    Profile: "Indonesia UI Designer",
    avatar: "https://tse1.mm.bing.net/th?id=OIP.C0bvF852Rrb8-Oa0OiL5KgHaHa&pid=Api&P=0",
    Number: "241 members",
  },
];



export default function MyCommunity() {
  return (
    <div className="p-4 ml-0">
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex items-center space-x-4 mb-2 mb-4">
            <img
              src={user.avatar}
              alt="pic"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-medium">{user.Profile}</p>
              <p
                className="text-sm text-gray-500">
                {user.Number}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

