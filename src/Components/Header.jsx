"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
    const pathName = usePathname();
    const router = useRouter();
    // console.log(pathName, router);
    
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'category',
            path: '/category'
        },
        {
            title: 'Post',
            path: '/all-post'
        },
    ]
    return (
        <nav className="bg-slate-500 py-5">
            <ul className="flex justify-end items-center gap-5 text-white mr-10">
                {
                    links.map((link, idx) => <Link
                        key={idx}
                        href={link.path}
                        className={`${link.path === pathName && 'text-red-500'}`}

                        >{link.title}</Link>)
                }
            </ul>
        </nav>
    );
};

export default Header;