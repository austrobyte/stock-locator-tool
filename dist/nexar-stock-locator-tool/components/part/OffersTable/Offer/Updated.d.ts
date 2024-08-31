import React from "react";
import { SupPartSeller as SellerType, SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    offer: OfferType;
    seller: SellerType;
    theme: IncomingColors;
};
declare const Updated: ({ offer, seller, theme }: Props) => React.JSX.Element;
export default Updated;
