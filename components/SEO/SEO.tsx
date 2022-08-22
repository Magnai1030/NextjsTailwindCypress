import React from "react";
import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  css?: string;
  js?: string;
  image?: string;
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  css,
  js,
  image,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta
      name="viewport"
      content="width=device-width,minimum-scale=1,initial-scale=1"
    />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:site_name" content="Proper Noun" />
    <meta property="og:url" content={`${canonical}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="@propernounco" />
    <meta name="twitter:creator" content="@propernounco" />
    {css && <link rel="stylesheet" href={`${css}`} />}
    {image ? (
      <meta property="og:image" content={`${image}`} />
    ) : (
      <meta
        property="og:image"
        content={`https://media-exp1.licdn.com/dms/image/C4E03AQHAS5YfVUOb0Q/profile-displayphoto-shrink_800_800/0/1615534563638?e=1666828800&v=beta&t=xwuMPMkTwsx_uI9EFyMUU0d8718Nvm8fnSXKOf7vRq0`}
      />
    )}
    {image && <meta name="twitter:image" content={`${image}`} />}
    {canonical && <link rel="canonical" href={`${canonical}`} />}
  </Head>
);

export default SEO;
