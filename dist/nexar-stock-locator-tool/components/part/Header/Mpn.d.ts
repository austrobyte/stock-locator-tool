import React from "react";
import { SupPartResult as ResultType } from "../../../modules/graphql/generated";
import { IncomingColors } from "../../../types";
type Props = {
    query: string;
    result: ResultType;
    theme: IncomingColors;
};
declare const Mpn: ({ query, result, theme }: Props) => React.JSX.Element;
export default Mpn;
