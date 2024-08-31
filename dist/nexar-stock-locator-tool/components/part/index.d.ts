import React from "react";
import { SupPartResult as Result } from "../../modules/graphql/generated";
import { IncomingColors, IncomingColumns, IncomingParams } from "../../types";
type Props = {
    country: string;
    currency: string;
    query: string;
    result: Result;
    searchParameters: IncomingParams;
    theme: IncomingColors;
    hideColumns?: IncomingColumns;
};
declare const Part: ({ country, currency, query, result, searchParameters, theme, hideColumns, }: Props) => React.JSX.Element;
export default Part;
