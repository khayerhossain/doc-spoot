import React from 'react';
import { useLoaderData } from 'react-router';

const Blogs = () => {
    const blogData=useLoaderData()
    // console.log(blogData)
    return (
        <>
    {
        blogData.map(data=>
            <div key={data.id} className="bg-white shadow-md rounded-2xl p-6 max-w-5xl mb-10 mt-10 mx-auto w-full">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 border-b-2 border-dashed border-gray-200 pb-4">
            {data.id} Question: {data.question}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
               Answer: {data.answer}
            </p>
          </div>
        )
    }
        </>
    );
};

export default Blogs;