import React from "react";
import { SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    country: string;
    currency: string;
    offer: OfferType;
    theme: IncomingColors;
};
declare const Currency: ({ country, currency, offer, theme }: Props) => React.JSX.Element;
export default Currency;
