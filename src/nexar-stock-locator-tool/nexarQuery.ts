import { IncomingParams } from "./types";

const endpoint = "https://api.nexar.com/graphql/";

export const runQuery = async (searchParameters: IncomingParams) => {
  return await fetch(endpoint, {
    method: "POST",
    headers: {
      authorization: "Bearer " + searchParameters.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query mpnSearch(
      $q: String
      $country: String!
      $currency: String!
      $start: Int
      $limit: Int
      # $sort: string
      $sortDir: SupSortDirection
      $inStockOnly: Boolean
      $filters: Map
      $distributorApi: Boolean
      $distributorApiTimeout: String!
      # $customPricingCredentials: SupApiCredentials
      $authorizedOnly: Boolean!
    ) {
      supSearchMpn(
        q: $q
        country: $country
        currency: $currency
        start: $start
        limit: $limit
        # sort: $sort
        sortDir: $sortDir
        inStockOnly: $inStockOnly
        filters: $filters
        distributorApi: $distributorApi
        distributorApiTimeout: $distributorApiTimeout # customPricingCredentials: $customPricingCredentials
      ) {
        hits
        appliedFilters {
          shortname
          name
          values
          displayValues
        }
        results {
          _cacheId
          akaMpn
          description
          part {
            _cacheId
            bestImage {
              url
            }
            category {
              id
            }
            descriptions {
              text
            }
            freeSampleUrl
            id
            manufacturer {
              id
              isVerified
              name
            }
            manufacturerUrl
            medianPrice1000 {
              _cacheId
              convertedCurrency
              convertedPrice
            }
            mpn
            sellers(authorizedOnly: $authorizedOnly) {
              _cacheId
              company {
                homepageUrl
                id
                isDistributorApi
                isVerified
                name
                slug
              }
              isAuthorized
              isBroker
              isRfq
              offers {
                _cacheId
                clickUrl
                id
                inventoryLevel
                moq
                packaging
                prices {
                  _cacheId
                  conversionRate
                  convertedCurrency
                  convertedPrice
                  currency
                  price
                  quantity
                }
                sku
                updated
              }
            }
            series {
              id
              name
              url
            }
            slug
            v3uid
          }
        }
      }
    }`,
      variables: {
        q: searchParameters.q,
        country: searchParameters.country,
        currency: searchParameters.currency,
        distributorApiTimeout: "5s",
        authorizedOnly: searchParameters.authorizedOnly
          ? searchParameters.authorizedOnly
          : false,
        inStockOnly: searchParameters.inStockOnly
          ? searchParameters.inStockOnly
          : false,
        limit: searchParameters.limit,
      },
    }),
  });
};
