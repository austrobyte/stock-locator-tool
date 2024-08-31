import React from "react";
import { SupPartResultSet } from "../modules/graphql/generated";
import { IncomingColors, IncomingParams } from "../types";
type Props = {
    query: string;
    response: SupPartResultSet | undefined;
    theme: IncomingColors;
    searchParameters: IncomingParams;
};
declare const NoResultsFound: ({ query, response, theme, searchParameters, }: Props) => React.JSX.Element;
export default NoResultsFound;
