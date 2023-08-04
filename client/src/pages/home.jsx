import React, { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

const RenderCards = ({ data, title }) => {
   if (data?.length > 0) return data.map((post) => <Card key={post._id} {...post} />);
   return <h2 className="font-base uppercase text-secondary font-bold text-xl, mt-3">{title}</h2>;
};

const Home = () => {
   const [loading, setLoading] = useState(false);
   const [posts, setPosts] = useState(null);
   const [search, setSearch] = useState("");
   const [searchedPosts, setSearchedPosts] = useState(null);
   const [searchTimeout, setSearchTimeout] = useState(null);

   const handleSearchPosts = async (e) => {
      setSearch(e.target.value);

      if (searchTimeout) clearTimeout(searchTimeout);

      setSearchTimeout(
         setTimeout(() => {
            const searchResults = posts.filter(
               (post) =>
                  post.name.toLowerCase().includes(search.toLowerCase()) ||
                  post.prompt.toLowerCase().includes(search.toLowerCase())
            );
            setSearchedPosts(searchResults);
         }, 500)
      );
   };

   useEffect(() => {
      const getPosts = async () => {
         try {
            setLoading(true);
            const res = await fetch("https://ai-images-backend.onrender.com/api/v1/post", {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
               },
            });

            if (res.ok) {
               const data = await res.json();
               setPosts(data.data.reverse());
               console.log(data);
            }
         } catch (error) {
            alert(error);
         } finally {
            setLoading(false);
         }
      };
      getPosts();
   }, []);

   return (
      <section className="max-w-5xl mx-auto mt-4">
         <div>
            <h1 className="font-extrabold text-text-light text-4xl">AI images collection</h1>
         </div>

         <div className="mt-4">
            <FormField
               labelName={"Search posts"}
               type="text"
               name="text"
               placeholder="Search..."
               value={search}
               handleChange={handleSearchPosts}
            />
         </div>

         <div className="mt-4">
            {loading ? (
               <div className="flex justify-center items-center">
                  <Loader />
               </div>
            ) : (
               <>
                  {search && (
                     <>
                        <h2 className="font-base text-primary text-xl mb-3">
                           Search results for <span className="text-primary">"{search}" </span>
                        </h2>
                     </>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                     {search ? (
                        <RenderCards data={searchedPosts} title="No results found" />
                     ) : (
                        <RenderCards data={posts} title="No posts found" />
                     )}
                  </div>
               </>
            )}
         </div>
      </section>
   );
};

export default Home;
