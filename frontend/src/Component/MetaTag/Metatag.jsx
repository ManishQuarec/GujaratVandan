import React from "react";
import PropTypes from "prop-types";
// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet";

// const metaDecorator = require("../../data/metaDecorator.json");

const MetaDecorator = ({ title, description, imageUrl, imageAlt, link }) => (
  <Helmet>
    {/* <html lang="en">
      <head >
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="l7ico8hINxmL8zVcvp3I6QQ992u5L-eSJfhbANijzBU" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="googlebot" content="noodp, noydir" />
        <meta name="robots" content="max-image-preview:large" />
        <meta http-equiv="refresh" content="60" />
        <title>{title}</title> */}

        {/* <link rel="canonical" href={link}/>  */}
        <meta property="og:url" content={link} />
        {/* <meta property="og:type" content="article"/>
    <meta property="og:site_name" content="Gujarat Vandan"/>
    <meta name="db:version" content="1.23.30"/> */}

        <meta property="og:site_name" content="Gujarat Vandan" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />

        <meta name="description" content={description} data-react-helmet="true" />
        <meta name="title" content={title} data-react-helmet="true" />
        <meta name="msapplication-TileImage" content={process.env.REACT_APP_API_URL + imageUrl} />


        <meta property="og:title" content={title} data-react-helmet="true" />
        <meta property="og:description" content={description} data-react-helmet="true" />
        <meta property="og:image" itemprop="image" content={process.env.REACT_APP_API_URL + imageUrl} data-react-helmet="true" />
        <meta property="og:image:secure_url" content={process.env.REACT_APP_API_URL + imageUrl} data-react-helmet="true" />
        <meta property="og:url" content="https://www.gujaratvandan.com/" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:url"
          content={process.env.REACT_APP_FRONT_FILES + window.location.pathname + window.location.search}
          data-react-helmet="true"
        />

        <meta property="twitter:url" content={process.env.REACT_APP_FRONT_FILES + window.location.pathname + window.location.search} data-react-helmet="true" />
        <meta property="twitter:title" content={title} data-react-helmet="true" />
        <meta property="twitter:description" content={description} data-react-helmet="true" />


        <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
        <meta name="twitter:image" content={imageAlt} data-react-helmet="true" />

        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" data-rh="true" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta name="robots" content="max-image-preview:large" />
        <script defer="defer" src="/static/js/main.56023cf9.js"></script>
        <link href="/static/css/main.e59a6049.css" rel="stylesheet" />
      </head>

      <body>
        <div id="root"></div>
        <script></script>
      </body>

    </html> */}
    {/* <meta name="twitter:site" content={metaDecorator.twitterUsername} /> */}
  </Helmet>
);

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default MetaDecorator;