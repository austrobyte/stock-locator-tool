import React from "react";
import { SupPartResult as ResultType } from "../../modules/graphql/generated";
import { IncomingColors } from "../../types";
type Props = {
    result: ResultType;
    isShowingAll: boolean;
    handleShowAllClick: () => void;
    handleShowFewerClick: () => void;
    theme: IncomingColors;
};
declare const ShowButton: ({ result, isShowingAll, handleShowAllClick, handleShowFewerClick, theme, }: Props) => React.JSX.Element;
export default ShowButton;
