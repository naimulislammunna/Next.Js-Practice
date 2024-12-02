import Link from "next/link";

const getAllPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

const allPost = async () => {
    const posts = await getAllPost();

    return (
        <div className="w-[90%] mx-auto">
            <h2>All POST</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    posts.slice(0, 10).map(({ title, id, body }) =>
                        <div key={id} className="border-2 p-5 rounded-lg  space-y-2">
                            <h1 className="text-lg font-semibold">Title: {title}</h1>
                            <p>{body}</p>
                            <Link href={`all-post/${id}`}><button className="btn mt-2">Details</button></Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default allPost;