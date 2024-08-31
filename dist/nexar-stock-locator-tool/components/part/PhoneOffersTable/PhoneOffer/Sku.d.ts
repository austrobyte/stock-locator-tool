import React from "react";
import { SupOffer as OfferType } from "../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../types";
type Props = {
    isExpanded: Boolean;
    offer: OfferType;
    theme: IncomingColors;
};
declare const Sku: ({ isExpanded, offer, theme }: Props) => React.JSX.Element;
export default Sku;
