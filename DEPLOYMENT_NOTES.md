# Deployment Notes for Netlify

## Fixing 404 Errors

If you encounter 404 errors when accessing specific routes on Netlify, this is due to the client-side routing in the React application. The following files have been added to handle this:

1. `public/_redirects` - Netlify-specific redirect configuration
2. `netlify.toml` - Netlify configuration file with redirect rules
3. `_redirects` - Alternative redirect configuration in root directory

The redirect rule forwards all requests to index.html, allowing the React application to handle the routing.

## Build Command

Use the following build command when configuring your Netlify deployment:

```bash
npm run build
```

The output directory should be: `dist/`

## Environment Variables

If you're using the Gemini API functionality, add the following environment variable in Netlify's deployment settings:

- GEMINI_API_KEY: Your Google Gemini API key