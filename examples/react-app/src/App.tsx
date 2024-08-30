import { useState, useEffect } from "react";
let StockLocatorTool = require("@austrobyte/stock-locator-tool/dist");

const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/token")
      .then((res) => res.json())
      .then((data) => setToken(data.token))
      .catch((err) => console.log(err));
  }, []);
  return (
    <StockLocatorTool
      searchParameters={{
        token: token,
        authorizedOnly: false,
        inStockOnly: true,
        // q: "100",
        country: "GB",
        currency: "GBP",
        enableManufacturerLink: true,
        expandOfferTable: false,
        limit: 10,
      }}
      styles={
        {
          // font: "Comic Neue",
          // customColors: {
          //   background: "#F4F2F1",
          //   button: "#3671B0",
          //   buttonSecondary: "#FFFFFF",
          //   keyText: "#2E654D",
          //   searchFormBackground: "#008375",
          //   partHeaderBackground: "#003057",
          //   // partHeaderMpn: "#3671B0",
          //   partHeaderText: "#F4F2F1",
          //   row1: "#F4F2F1",
          //   row2: "#FFFFFF",
          //   tableHeaderText: "#080706",
          //   text: "#2A241F",
          //   tint: "#E3DFDA",
          // },
        }
      }
      hideColumns={
        {
          // cta: true,
          // currency: true,
        }
      }
    />
  );
};

export default App;
