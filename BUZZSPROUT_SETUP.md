# Buzzsprout API Integration Setup

## Overview

The Connected Circles website is now integrated with the Buzzsprout API to automatically fetch and display podcast episodes. This integration ensures that new episodes published on Buzzsprout will automatically appear on the website.

## Setup Instructions

### 1. Find Your Podcast ID

1. Log into your Buzzsprout account
2. Navigate to your podcast dashboard
3. Look at the URL in your browser - it will be: `https://www.buzzsprout.com/PODCAST_ID`
4. The number after the last slash is your Podcast ID

### 2. Configure Environment Variables

Add the following to your `.env` file:

```
VITE_BUZZSPROUT_PODCAST_ID=YOUR_ACTUAL_PODCAST_ID
```

Replace `YOUR_ACTUAL_PODCAST_ID` with the ID you found in step 1.

### 3. API Token

The API token is already configured in the code:

- Token: `96156725a08a598bc6d43cffe30892d1`

## How It Works

### Episode Fetching

- The website automatically fetches episodes from Buzzsprout when pages load
- Episodes are sorted by publication date (newest first)
- Only public, active episodes are displayed
- Private or inactive episodes are filtered out

### Featured Episodes

- The homepage displays the **3 most recent episodes** as featured episodes
- These update automatically when new episodes are published

### Fallback System

- If the Buzzsprout API is unavailable or not configured, the website falls back to static episode data
- This ensures the website always displays content, even if there are API issues

### Episode Data Transformation

Buzzsprout episodes are automatically transformed to match the website's format:

- **Title**: Direct from Buzzsprout
- **Summary**: Uses Buzzsprout's summary or description
- **Image**: Uses Buzzsprout's artwork_url
- **Duration**: Converted from seconds to "X min" format
- **Topics**: Extracted from Buzzsprout's tags field
- **Audio URL**: Direct link to the episode audio

## Testing the Integration

### 1. Check Console Logs

Open browser developer tools and check the console for:

- Success messages when episodes load
- Warning if podcast ID is not configured
- Error messages if API calls fail

### 2. Verify Episode Display

- Homepage should show 3 most recent episodes
- Episodes page should show all episodes
- Episodes should be sorted by publication date

### 3. Publish a Test Episode

1. Publish a new episode on Buzzsprout
2. Refresh the website
3. The new episode should appear at the top of the list

## Troubleshooting

### No Episodes Showing

1. Check that `VITE_BUZZSPROUT_PODCAST_ID` is set correctly in `.env`
2. Verify the podcast ID is correct
3. Check browser console for error messages
4. Ensure episodes are published (not private) on Buzzsprout

### API Errors

- Check network connectivity
- Verify the API token is correct
- Check Buzzsprout service status

### Fallback Episodes

If you see the static/fallback episodes instead of Buzzsprout episodes:

1. Check the podcast ID configuration
2. Verify episodes exist and are public on Buzzsprout
3. Check browser console for API errors

## File Structure

### API Integration Files

- `client/src/lib/buzzsprout.ts` - Buzzsprout API service
- `client/src/lib/types.ts` - TypeScript types for episodes
- `client/src/data/episodes.ts` - Episode data management with fallbacks

### Components Using API

- `client/src/components/home/FeaturedEpisodes.tsx` - Homepage featured episodes
- `client/src/pages/Episodes.tsx` - All episodes page

## Environment Variables Summary

```bash
# Required for Buzzsprout integration
VITE_BUZZSPROUT_PODCAST_ID=YOUR_ACTUAL_PODCAST_ID

# Other existing variables
WEB3FORMS_ACCESS_KEY=91706b95-f8a1-4d6d-b44f-5b4b878f70db
BUZZSPROUT_API_TOKEN=96156725a08a598bc6d43cffe30892d1
BUZZSPROUT_PODCAST_ID=YOUR_PODCAST_ID
```

## Next Steps

1. Set the correct podcast ID in the environment variables
2. Test the integration with existing episodes
3. Publish a new episode to verify automatic updates
4. Monitor the console for any API issues

The integration is now complete and ready to automatically display your Connected Circles podcast episodes!
