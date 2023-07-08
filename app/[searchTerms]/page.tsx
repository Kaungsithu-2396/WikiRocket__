type Props = {
    params: { searchTerms: string };
};
import getWikiResults from "@/lib/getWikiResults";
import DisplaySearchResult from "../components/DisplaySearchResult";
import { Metadata } from "next";
export default async function page({ params: { searchTerms } }: Props) {
    const result: Promise<SearchResult> = getWikiResults(searchTerms);
    const searchResult = await result;
    const searchOutcome: Result[] | undefined = searchResult?.query?.pages;
    const resultRenderContent = searchOutcome ? (
        Object.values(searchOutcome).map((el) => {
            return (
                <>
                    <DisplaySearchResult key={el.pageid} results={el} />
                </>
            );
        })
    ) : (
        <h1 className="flex justify-center items-center h-screen">
            <span className="text-orange-500 text-5xl m-5">{searchTerms}</span>{" "}
            not found
        </h1>
    );
    return resultRenderContent;
}
export async function generateMetadata({ params: { searchTerms } }: Props) {
    const result: Promise<SearchResult> = getWikiResults(searchTerms);
    const searchResult = await result;
    const displayTerms = searchTerms.replaceAll("%20", "");
    if (!searchResult?.query?.pages) {
        return {
            title: `${searchTerms} not found`,
        };
    }
    return {
        title: displayTerms,
        description: `page for ${displayTerms}`,
    };
}
