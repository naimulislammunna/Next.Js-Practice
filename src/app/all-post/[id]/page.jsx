import React from 'react';

export const generateMetadata = async ({params})=>{
    // fetch data
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const postData = await post.json();

    return {
        title: {
            absolute: postData.title
        },
        description: postData.body,
        keywords : postData.body.split(' ')
    }
}

const postDetails = async ({ params }) => {
    const getAllPost = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        const data = await res.json();
        return data;
    }
    const {title, body}= await getAllPost();

    return (
        <div>
            <div className="border-2 p-5 rounded-lg w-1/2 mx-auto my-10  space-y-2">
                <h1 className="text-lg font-semibold">Title: {title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default postDetails;