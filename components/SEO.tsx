import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    schema?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
    title = "Testycare Global Services | Premium Automotive Dealer",
    description = "Premium foreign used vehicles curated for those who demand excellence. Verified history, accident-free, and meticulously inspected by our CEO, Mr. Olaoluwa Ogunyemi.",
    image = "/ceo_new.jpg",
    url = "https://testycare-global.com", // Replace with actual domain when live
    type = "website",
    schema
}) => {
    const siteTitle = title === "Testycare Global Services | Premium Automotive Dealer"
        ? title
        : `${title} | Testycare Global Services`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Testycare Global Services" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};
