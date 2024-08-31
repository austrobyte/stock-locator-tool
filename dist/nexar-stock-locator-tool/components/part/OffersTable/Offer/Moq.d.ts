import React from "react";
import { SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    country: string;
    offer: OfferType;
    theme: IncomingColors;
};
declare const Moq: ({ country, offer, theme }: Props) => React.JSX.Element;
export default Moq;
