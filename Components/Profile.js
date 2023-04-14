export default function Profile() {
    return (
        <div className="ml-1 mr-2 rounded-t-xl bg-white mb-4 p-3">
            <img src="https://tse1.mm.bing.net/th?id=OIP.cmwRudqnFHNYNxgIoJ7jwQHaCn&pid=Api&P=0" className="w-full h-28" />

            <div className="flex gap-3 ml-4 pt-2 pb-6">
                <img
                    src="https://tse4.mm.bing.net/th?id=OIP.ZfWeFbSv0xE_ym4N1kFsvQHaE8&pid=Api&P=0"
                    alt="Profile"
                    className="w-24 h-24 rounded-full -mt-8"
                />
                <div>
                    <h1 className="font-medium">DesignersIndia</h1>
                    <p className="text-sm text-gray-500">
                        <span >1.2k Members </span>
                        <span>1.2k Members </span>
                    </p>
                </div>
                <p className="ml-auto"> Manage Community</p>
            </div>
            <p className="mt-1">Welcome to <b>DevelopersIndia.</b> This page dedicated to bringing developer togethor from India and around the World to share their knowlegede, experiences, and insights in the field of design . </p>
            <p className="text-gray-500 mt-1"> Created on 14 April 2023</p>
            <p className="mt-1 text-black"><b>Related Tags</b> </p>
            <div className="flex gap-5 pl-3 pr-7 mt-2 pb-3">
               <button className="text-blue-600 border rounded-sm pl-2 pr-2 "> UI design</button>
               <button className="text-blue-600 border rounded-sm pl-2 pr-2"> Coding skills</button>
               <button className="text-blue-600 border rounded-sm pl-2 pr-2"> figma </button>
               <button className="text-blue-600 border rounded-sm pl-2 pr-2"> wordpress</button>
               <button className="text-blue-600 border rounded-sm pl-2 pr-2"> UX design</button>
               <button className="text-blue-600 border rounded-sm pl-2 pr-2"> UI design</button>
               <button className="text-blue-600 border rounded-sm pl-2 pr-2"> UI design</button>
            </div>

        </div>
    )
}