# Next.js Pokemon dynamic comparison example (SSR)

## Do **not** look to this repo as an example of good practices

This repo is a quick and dirty example of splitting on a slug and fetching multiple results for comparing against each other.

Here is an example path: `/compare/magikarp-vs-abra`

### But...but why?

Just to show that even when a template/route is highly dynamic by nature, the HTML is still rendered on the server so there are no SEO crawling issues as long as you have links or a sitemap of all the routes you want crawled.

I've even included a file of example `curl` output in the `ssr-curl-examples` folder.
