import React from "react";
import { SupPartResult as Result } from "../../../modules/graphql/generated";
import { IncomingColors, IncomingParams } from "../../../types";
type Props = {
    query: string;
    result: Result;
    searchParameters: IncomingParams;
    theme: IncomingColors;
};
declare const Header: ({ query, result, searchParameters, theme }: Props) => React.JSX.Element;
export default Header;
