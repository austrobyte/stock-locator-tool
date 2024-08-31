import React from "react";
import { SupOffer as OfferType } from "../../../../../modules/graphql/generated";
type Props = {
    country: string;
    isTable?: boolean;
    offer: OfferType;
    qty: number;
};
declare const Price: ({ country, isTable, offer, qty }: Props) => React.JSX.Element | null;
export default Price;
