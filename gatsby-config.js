/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins:[
    {
    resolve:`@mangoart/gatsby-plugin-purechat`,
    options:{
      enabled:true,
      websiteId:`ef458d92-15e8-4837-b1c7-782e941f9699`
    }
  }
]
}
