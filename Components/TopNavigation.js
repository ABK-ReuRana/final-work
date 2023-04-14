import React from "react";

export default function TopNavigation() {
    return (
        <nav className="w-full flex items-center justify-between flex-wrap bg-white-800 border border-slate-100 rounded-sm">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="flex items-center flex-shrink-0 text-black mr-9">
                    <span className="flex gap-1 font-semibold text-sm tracking-tight ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
                    </svg>Community</span>
                </div>
                <div className="text-sm lg:flex-grow">
                    <a href="" className="block mt-3 lg:inline-block lg:mt-0 md:bg-gray-100 md:focus:bg-white text-black hover:text-gray-400 mr-3 p-1">
                        Explore
                    </a>
                    <a href=""
                        className="block mt-3 lg:inline-block lg:mt-0 md:bg-gray-100 md:focus:bg-white text-black hover:text-gray-400 mr-3 p-1"
                    > Community Feed</a>
                </div>

                <div className="flex">
                    <label class="relative block mt-3">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg class="h-4 w-4 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10"
                                height="20" viewBox="0 0 30 30">
                                <path
                                    d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                                </path>
                            </svg>
                        </span>
                        <input
                            class="w-lg bg-white placeholder:font-italitc border border-slate-200 rounded-sm py-2 pl-8 pr-4 focus:outline-none"
                            placeholder="Search..." type="text" />
                    </label>

                    <a
                        href=""
                        className="inline-block text-black border border-slate-200 p-1 mt-3 h-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path d="M4.214 3.227a.75.75 0 00-1.156-.956 8.97 8.97 0 00-1.856 3.826.75.75 0 001.466.316 7.47 7.47 0 011.546-3.186zM16.942 2.271a.75.75 0 00-1.157.956 7.47 7.47 0 011.547 3.186.75.75 0 001.466-.316 8.971 8.971 0 00-1.856-3.826z" />
                            <path fill-rule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.94 32.94 0 003.256.508 3.5 3.5 0 006.972 0 32.933 32.933 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zm0 14.5a2 2 0 01-1.95-1.557 33.54 33.54 0 003.9 0A2 2 0 0110 16.5z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a
                        href="#profile"
                        className="mt-2 inline-block text-white hover:text-gray-400 mr-3"
                    > </a>

                    <h2 className="mt-3 border border-slate-200 rounded-sm p-2 mr-3 h-10"> Riya Rana </h2>
                    <div className="flex items-center">
                        <div className="w-15 rounded-full mt-2">
                            <img
                                src="https://tse1.mm.bing.net/th?id=OIP.IPwwqavUwyoc-4fisXK35wHaLH&pid=Api&P=0"
                                alt="Profile"
                                className="rounded-full h-12 w-12 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}