import About from "@/Components/About";
import Header from "@/Components/Header";

export const metadata ={
    title: "about",
    description: "about us page"
}
const page = () => {
    return (
        <div>
            <About/>
        </div>
    );
};

export default page;