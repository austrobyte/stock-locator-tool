/// <reference types="react" />
import { SupOffer as OfferType } from "../../../../../modules/graphql/generated";
import { IncomingColors } from "../../../../../types";
type Props = {
    country: string;
    currency: string;
    offer: OfferType;
    theme: IncomingColors;
};
declare const PriceTable: ({ country, currency, offer, theme }: Props) => JSX.Element;
export default PriceTable;
