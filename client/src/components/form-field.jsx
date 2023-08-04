import React from "react";
import { dice } from "../assets";

const FormField = ({ labelName, type, name, placeholder, value, isSurprice, handleChange, handleSurprice }) => (
   <div>
      <div className="flex items-center gap-2 mb-3">
         <label htmlFor={name} className="block text-xl font-semibold text-primary">
            {labelName}
         </label>
         {isSurprice && (
            <button
               type="button"
               onClick={handleSurprice}
               className="bg-text-lightest p-1 flex items-center h-8 ml-2 rounded-full text-base pr-4 font-bold text-text hover:bg-accent-light ease-in-out duration-300"
            >
               <img src={dice} alt="Random prompt" className="w-10" />
               Random prompt
            </button>
         )}
      </div>
      <div className="flex items-center">
         <input
            type={type}
            id={name}
            name={name}
            className="block text-lg font-base text-text border bg-text-lightest bg-opacity-20 rounded-full px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
         />
      </div>
   </div>
);

export default FormField;
