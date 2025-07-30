# Heart & Household Podcast Website

A responsive website for the Heart & Household podcast, featuring episode listings, newsletter signup, contact form, and interactive polls.

## Local Development

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- PostgreSQL database (for production)

### Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example` and add your database connection string
4. Run the development server:
   ```
   npm run dev
   ```

## Building for Production

To build the project for production:

```
npm run build
```

This will create a `dist` directory with the compiled client and server code.

## Deploying to Netlify

### Method 1: Netlify UI

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to Netlify and click "New site from Git"
3. Select your repository and configure the build settings:
   - Build command: `npm run netlify:build`
   - Publish directory: `dist/public`
4. Configure environment variables in the Netlify UI:
   - Add `DATABASE_URL` with your PostgreSQL connection string
5. Deploy the site

### Method 2: Netlify CLI

1. Install the Netlify CLI:
   ```
   npm install -g netlify-cli
   ```
2. Login to Netlify:
   ```
   netlify login
   ```
3. Initialize your site:
   ```
   netlify init
   ```
4. Deploy your site:
   ```
   netlify deploy --prod
   ```

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to `production` for production builds
- `PORT`: Server port (default: 5000, only used in development)

## Troubleshooting npm Issues

If you encounter issues with npm commands on Windows:

1. Make sure you're using the latest version of npm:

   ```
   npm install -g npm@latest
   ```

2. Use the cross-env package for environment variables:

   ```
   npm run dev
   ```

3. If you get ENOENT errors, check your file paths for correct casing and slashes.

4. For permission issues, try running your terminal as administrator.

## Project Structure

- `client/`: Frontend React application
- `server/`: Backend Express API
- `shared/`: Shared code between client and server
- `netlify/functions/`: Serverless functions for Netlify deployment
