import Link from "next/link";

const About = () => {
    return (
        <div>
            <button><Link href='/about/mission'>Mission</Link></button>
            <button><Link href='/about/vission'>Vission</Link></button>
        </div>
    );
};

export default About;