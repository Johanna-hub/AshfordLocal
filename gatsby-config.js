require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Ashford Local.Life`,
    description: `Getting the word out for the local community and businesses during the COVID-19 lockdown`,
    image: "/images/ashford.jpeg",
    url: "https://www.ashfordlocal.life"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `${process.env.GOOGLE_ANALYTICS_ID}`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
