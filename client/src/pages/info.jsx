import React from "react";

export default function Info() {
   return (
      <section className="max-w-5xl mx-auto mt-4">
         <h1 className="font-extrabold text-text-light text-4xl">Info</h1>
         <p className="text-text text-xl mt-8 leading-9">
            This is a collection of AI generated images created using the DALL-E model. DALL-E is an AI model developed
            by Mira Murati at OpenAI and released in 2021. Its a OpenAi GPT-3 model trained on the image dataset from
            ImageNet.
         </p>
         <p className="text-text text-xl mt-8 leading-9">
            The model is known for its ability to generate realistic images and objects based on a text description,
            such as "a green bird with a crown on its head playing the piano with the feet". 12 billion parameters were
            used to train the model, which is 10 times more than the GPT-3 model.
         </p>
      </section>
   );
}
