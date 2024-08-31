import React from "react";
import { IncomingParams, IncomingStyles, IncomingColumns } from "../types";
type Props = {
    searchParameters: IncomingParams;
    styles?: IncomingStyles;
    hideColumns?: IncomingColumns;
};
export declare const StockLocatorTool: ({ searchParameters, styles, hideColumns, }: Props) => React.JSX.Element;
export {};
