import SearchBar from "./SearchBar";
import Link from "next/link";
export default function NavBar() {
    return (
        <nav className="p-5 bg-slate-400  text-black text-4xl flex justify-around items-center">
            <Link href={"/"}>
                <h1>WikiRocket</h1>
            </Link>
            <SearchBar />
        </nav>
    );
}
