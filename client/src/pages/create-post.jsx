import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";
import { useState } from "react";

const CreatePost = () => {
   const navigate = useNavigate();
   const [form, setForm] = useState({
      name: "",
      prompt: "",
      photo: "",
   });

   const [generatingImg, setGeneratingImg] = useState(false);
   const [generated, setGenerated] = useState(false);
   const [loading, setLoading] = useState(false);

   const generateImg = async () => {
      if (form.prompt) {
         try {
            setGeneratingImg(true);
            const res = await fetch("https://ai-images-backend.onrender.com/api/v1/dalle", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ prompt: form.prompt }),
            });

            const data = await res.json();
            setForm({
               ...form,
               photo: `data:image/jpeg;base64,${data.photo}`,
            });
            setGenerated(true);
         } catch (error) {
            alert(error);
         } finally {
            setGeneratingImg(false);
         }
      } else {
         alert("Please enter a prompt");
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (form.prompt && form.photo) {
         setLoading(true);
         try {
            const response = await fetch("https://ai-images-backend.onrender.com/api/v1/post", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ ...form }),
            });

            if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`);
            } else {
               const data = await response.json();
               console.log(data);
               navigate("/");
            }
         } catch (error) {
            alert(error);
         } finally {
            setLoading(false);
         }
      } else {
         alert("Please generate an image with proper details");
      }
   };

   const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSurprice = () => {
      const randomPrompt = getRandomPrompt(form.prompt);
      setForm({ ...form, prompt: randomPrompt });
   };

   return (
      <section className="max-w-5xl mx-auto mt-4">
         <div>
            <h1 className="font-extrabold text-purple-400 text-4xl">Create</h1>
         </div>
         <form className="mt-4 flex flex-row mobile:flex-col" onSubmit={handleSubmit}>
            <section className="w-9/12 mr-12 mt-4">
               <p className="text-gray-400 text-lg">Create images with the DALL-E AI generated images</p>
               <div className="flex flex-col gap-5">
                  <FormField
                     labelName="Your Name"
                     type="text"
                     name="name"
                     placeholder="Your name"
                     value={form.name}
                     handleChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-5">
                  <FormField
                     labelName="Prompt"
                     type="text"
                     name="prompt"
                     placeholder="an syntheziser in the shape of an spaceship"
                     value={form.prompt}
                     handleChange={handleChange}
                     isSurprice
                     handleSurprice={handleSurprice}
                  />
               </div>
               <button
                  type="button"
                  onClick={generateImg}
                  className="bg-teal-500 flex items-center justify-center w-full mt-8 px-3 py-2 rounded-md h-[47px] text-lg font-semibold text-white hover:bg-teal-400 ease-in-out duration-300"
               >
                  {generatingImg ? "Generating..." : "Generate"}
               </button>
               {generated && !generatingImg && (
                  <div className="ease-in-out duration-300">
                     <p className="text-gray-400 text-lg mt-4">
                        Nice image. Want to share it with the community and add it to the gallery?
                     </p>
                     <button
                        type="submit"
                        className="mt-[14px] text-white bg-[#6469ff] font-semibold rounded-md text-lg w-full h-[47px] p-3 text-center hover:bg-indigo-400 ease-in-out duration-300"
                     >
                        {loading ? "Sharing..." : "Share"}
                     </button>
                  </div>
               )}
            </section>

            <div className="flex flex-col justify-center mb-8">
               <div className="relative bg-gray-600 border border-gray-900 text-gray-900 rounded-lg focus:ring-purple-500 focus:border-purple-500 p-3 flex justify-center items-center">
                  {form.photo ? (
                     <img src={form.photo} alt={form.prompt} className="relative z-0 w-full h-full object-contain" />
                  ) : (
                     <img
                        src={preview}
                        alt="preview"
                        className="relative z-0 w-6/12 h-6/12 opacity-40 object-contain"
                     />
                  )}

                  {generatingImg && (
                     <div className="absolute inset-0 z-100 flex justify-center items-center rounded-lg">
                        <Loader />
                     </div>
                  )}
               </div>
            </div>
         </form>
      </section>
   );
};

export default CreatePost;
