import Blog from "@/Components/Blog";

export const metadata = {
    title: {
        absolute: "Blog page only"
    },
    keywords: "blog page "
}

const page = () => {
    return (
        <div>
            <Blog/>
        </div>
    );
};

export default page;