import React from "react";

function CreatePost() {
    return (
        <div className="w-full mx-auto bg-white p-6">
            <div className="flex">
                <h2 className="text-2xl font-medium text-gray-800 mb-5 gap-64 ">Create a Post</h2>
                <section className="ml-14 ml-auto">
                    <select>
                        <option value="both">Image/Video</option>
                        <option value="Image">Image</option>
                        <option value="Video">Video</option>
                    </select>
                </section>

            </div>

            <label><h3>Title</h3></label>
            <input
                type="text"
                placeholder=""
                className="w-full bg-gray-100 px-4 py-2 rounded-sm border border-gray-300 mb-4 focus:outline-none "
            />
            <textarea
                placeholder="Text"
                className="w-full px-4 rounded-sm border border-gray-300 mb-0 focus:outline-none"
                style={{ fontFamily: "Roboto", fontSize: "16px", lineHeight: "24px" }}
            ></textarea>
            <div className="flex items-center justify-between border border-grey-200 mb-3">
                <div className="flex items-center ">
                    <button className="ml-1 mr-3">
                        <b>B </b>
                    </button>
                    <button className="ml-1 mr-3">
                        <b><em>I</em></b>
                    </button>
                    <button className="ml-1 mr-3">
                        <b>U</b>
                    </button>
                    <button className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex justify-end">
                <button className="bg-white text-black py-2 px-4 rounded-sm mr-2 hover:bg-gray-400 focus:outline-none focus:ring border border-gray-300">
                    Cancel
                </button>
                <button className="bg-white text-black py-2 px-4 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring border border-gray-300">
                    Post
                </button>
            </div>
        </div>
    );
}

export default CreatePost;
