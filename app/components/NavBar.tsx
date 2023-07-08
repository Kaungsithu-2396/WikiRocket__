import Search from "./Search";

export default function NavBar() {
    return (
        <nav className=" bg-slate-300 p-6 text-black flex justify-around items-center ">
            <h1 className="text-5xl">WikiRocket</h1>
            <Search />
        </nav>
    );
}
