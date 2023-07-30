import React from "react";
import { download } from "../assets";
import { downloadFile } from "../utils";

const Card = (post) => {
   return (
      <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
         <img className="w-full h-auto object-cover rounded-xl" src={post.photo} alt={post.prompt} />
         <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md transition duration-500 opacity-0 group-hover:opacity-100 group-hover:transition-opacity">
            <p className="text-white text-sm overflow-y-auto prompt">{post.prompt}</p>

            <div className="mt-5 flex justify-between items-center gap-2">
               <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full object-cover bg-purple-700 flex justify-center items-center text-white text-xs font-bold">
                     {post.name[0]}
                  </div>
                  <p className="text-white text-sm">{post.name}</p>
               </div>
               <button
                  type="button"
                  onClick={() => downloadFile(post._id, post.photo)}
                  className="outline-none bg-transparent border-none"
               >
                  <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Card;
