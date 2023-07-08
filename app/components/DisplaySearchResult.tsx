import Link from "next/link";

type Props = {
    results: Result;
};

export default function DisplaySearchResult({ results }: Props) {
    return (
        <article className="flex gap-5 my-5 m-auto  justify-center">
            {results.thumbnail ? (
                <img
                    src={results.thumbnail?.source}
                    alt=""
                    className=" w-[10%]"
                />
            ) : (
                <div className=" w-[10%] h-[10%] border-2 p-7 text-center ">
                    ?
                </div>
            )}
            <div className="flex flex-col justify-center">
                <Link
                    href={`https://en.wikipedia.org/?curid=${results.pageid}`}
                    target="_blank"
                >
                    {results.title}
                </Link>

                <h2>{results.extract}</h2>
            </div>
            <br />
        </article>
    );
}
