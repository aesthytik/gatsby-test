// In src/prismic-configuration.js
export const linkResolver = doc => {
  console.log("doc", doc)

  // URL for a category type

  // URL for a product type
  if (doc.type === "product") {
    return `/product/${doc.uid}`
  }
  // URL for a page type

  // Backup for all other types
  return "/"
}
