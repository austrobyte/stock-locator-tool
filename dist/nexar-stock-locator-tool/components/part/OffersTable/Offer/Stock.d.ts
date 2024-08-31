import React from "react";
import { SupPartSeller as SellerType, SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    offer: OfferType;
    seller: SellerType;
    country: string;
    theme: IncomingColors;
};
declare const Stock: ({ country, offer, seller, theme }: Props) => React.JSX.Element;
export default Stock;
