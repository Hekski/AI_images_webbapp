import React from "react";
import { dice } from "../assets";

const FormField = ({ labelName, type, name, placeholder, value, isSurprice, handleChange, handleSurprice }) => (
   <div>
      <div className="flex items-center justify-between gap-2 mb-3 mt-3">
         <label htmlFor={name} className="block text-xl font-semibold text-gray-50">
            {labelName}
         </label>
         {isSurprice && (
            <button
               type="button"
               onClick={handleSurprice}
               className="bg-teal-500 p-2 w-[60px] h-[57px] ml-4 rounded-full text-xl font-bold text-black hover:text-gray-100 hover:bg-teal-400 ease-in-out duration-300"
            >
               <img src={dice} alt="Random prompt" className="w-14 object-contain" />
            </button>
         )}
      </div>
      <div className="flex items-center">
         <input
            type={type}
            id={name}
            name={name}
            className="block text-lg font-base text-gray-900 border bg-gray-100 rounded-full focus:ring-pink-400 p-3 w-full outline-none focus:border-pink-400"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
         />
      </div>
   </div>
);

export default FormField;
