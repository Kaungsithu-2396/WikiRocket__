import React from "react";
type props = {
    params: {
        searchTerms: string;
    };
};
export default function page({ params: { searchTerms } }: props) {
    return (
        <div>
            <h1 className="text-4xl">{searchTerms}</h1>
        </div>
    );
}
