"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBar() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/${search}/`);
        setSearch("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="searchBar"
                id=""
                value={search}
                className="px-5 py-2 rounded-lg mx-5 text-2xl"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className=" hover:scale-125 transition-transform duration-300 delay-200 ">
                😡
            </button>
        </form>
    );
}
