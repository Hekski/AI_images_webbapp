import React from "react";
import { logo } from "../assets";

export default function Info() {
   return (
      <section className="max-w-5xl mx-auto mt-4 relative">
         <h1 className="font-extrabold text-text-light text-4xl">Info</h1>
         <div>
            <p className="text-text text-xl mt-4 leading-8 z-10 relative">
               This is a collection of AI generated images created using the DALL-E model. The images are generated
               randomly based on a text description provided by the user in the input field in the Create section.
               Images are saved to the database and can be viewed in the Gallery section. For storing images, I use
               Cloudinary and for the database, I use MongoDB. The frontend is built with React/Next and TailwindCSS and
               the backend is built with Node.js and Express. Deployed on Netlify and Render.
            </p>
            <img
               src={logo}
               alt="logo"
               className="absolute w-10/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto object-cover opacity-30 z-0"
            />
         </div>
         <p className="text-text text-xl mt-6 leading-8 z-10 relative">
            DALL-E is an AI model developed by Mira Murati at OpenAI and released in 2021. It's an OpenAI GPT-3 model
            trained on the image dataset from ImageNet. The model is known for its ability to generate realistic images
            and objects based on a text description, such as "a green bird with a crown on its head playing the piano
            with the feet". 12 billion parameters were used to train the model, which is 10 times more than the GPT-3
            model.
         </p>
      </section>
   );
}
