import React from "react";
import { SupPartSeller as SellerType } from "../../../../modules/graphql/generated";
type Props = {
    seller: SellerType;
};
declare const IsAuthorized: ({ seller }: Props) => React.JSX.Element;
export default IsAuthorized;
