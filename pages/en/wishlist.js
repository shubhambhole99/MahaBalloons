// import React from "react";
import { Helmet } from "react-helmet";
// import { useParams } from "";
// import CommBanner from "components/Common/Banner/Index";
// import WishlistBody from "components/Wishlist/index";
const banner = "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/Home.jpg";
import styles from "../wishlist.module.css";
function Wishlist() {
  // const { lang } = useParams();
  const lang="en"

  return (
    <div>
      <Helmet>
        {/* <title> Maha Hot Air Balloons in Dubai</title>
        <meta name="title" content="Maha Hot Air Balloons in Dubai" />
        <meta name="description" content="" />
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }wishlist`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }wishlist`}
        /> */}
      </Helmet>
      {/* <CommBanner title="Wishlist" path="Home - Wishlist" /> */}
      {/* <WishlistBody /> */}
   


    </div>
    
  );
}

export default Wishlist;
