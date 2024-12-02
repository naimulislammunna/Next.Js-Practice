import Link from "next/link";

const Blog = () => {
    return (
        <div>
            {
                blogs.map(blog => <div key={blog.id} className="border border-sky-800 w-96 mx-auto my-5 p-5">
                    <h1 className="text-xl font-bold my-2">{blog.title}</h1>
                    <p>{blog.description}</p>
                    <Link href={`blog/${blog.id}`}><button className="bg-blue-950 p-2 text-white">Details</button></Link>
                </div>)
            }
        </div>
    );
};

const blogs = [
    {
      "id": 10001,
      "title": "Mastering JavaScript: Tips and Tricks",
      "description": "Explore advanced JavaScript techniques and best practices for building scalable and maintainable applications."
    },
    {
      "id": 10002,
      "title": "The Ultimate Guide to Remote Work",
      "description": "Learn how to stay productive, connected, and balanced while working remotely in the digital age."
    },
    {
      "id": 10003,
      "title": "10 Healthy Habits for a Better Life",
      "description": "Discover simple habits to improve your physical, mental, and emotional well-being every day."
    },
    {
      "id": 10004,
      "title": "Getting Started with Machine Learning",
      "description": "A beginner-friendly introduction to the fundamentals of machine learning and its real-world applications."
    },
    {
      "id": 10005,
      "title": "Top Travel Destinations for 2024",
      "description": "A curated list of must-visit destinations for adventurers and explorers in the upcoming year."
    }
  ]  

export default Blog;