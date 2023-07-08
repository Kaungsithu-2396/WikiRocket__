"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
        router.push(`/${search}/`);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name=""
                    id=""
                    className=" px-5 py-4 rounded-md mx-4 "
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="search"
                    value={search}
                />
                <button className="text-2xl">👊🏻</button>
            </form>
        </>
    );
}
