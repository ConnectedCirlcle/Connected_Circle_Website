# Connected Circles Website

A modern podcast website for Connected Circles - focused on personal growth, community building, and meaningful conversations.

## 🌟 Features

- **Buzzsprout API Integration**: Automatic episode fetching from Buzzsprout podcast hosting
- **Responsive Design**: Mobile-first design with modern UI/UX
- **Community Features**: Multiple platform integration (YouTube, Twitch, Discord, Reddit)
- **Contact Forms**: Web3Forms integration for contact and topic suggestions
- **SEO Optimized**: Proper meta tags and structured content
- **Performance Optimized**: Fast loading with modern build tools

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ConnectedCirlcle/Connected_Circle_Website.git
cd Connected_Circle_Website
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:

```env
# Buzzsprout API configuration
BUZZSPROUT_API_TOKEN=your_api_token_here
BUZZSPROUT_PODCAST_ID=2489424

# Web3Forms access key
WEB3FORMS_ACCESS_KEY=your_web3forms_key_here

# Database (if needed)
DATABASE_URL=your_database_url_here
```

5. Start the development server:

```bash
npm run dev
```

## 📦 Deployment

### Netlify Deployment

This project is configured for Netlify deployment with:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Functions Directory**: `netlify/functions`

#### Environment Variables for Netlify:

Set these in your Netlify dashboard:

```
NODE_ENV=production
VITE_BUZZSPROUT_PODCAST_ID=2489424
VITE_BUZZSPROUT_API_TOKEN=96156725a08a598bc6d43cffe30892d1
WEB3FORMS_ACCESS_KEY=91706b95-f8a1-4d6d-b44f-5b4b878f70db
```

**Note**: DATABASE_URL is not required for this deployment as we're using Web3Forms for all form submissions.

#### Automatic Deployment:

- Connect your Netlify account to this GitHub repository
- Enable automatic deployments from the `main` branch
- The site will automatically rebuild when you push changes

### Manual Deployment:

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Routing**: Wouter
- **API Integration**: Buzzsprout API
- **Forms**: Web3Forms
- **Deployment**: Netlify
- **Version Control**: Git/GitHub

## 📁 Project Structure

```
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and API functions
│   │   ├── data/          # Static data and configurations
│   │   └── index.css      # Global styles
├── server/                # Backend server (if needed)
├── netlify/               # Netlify functions
├── shared/                # Shared types and schemas
└── netlify.toml          # Netlify configuration
```

## 🔧 Configuration

### Buzzsprout Integration

The website automatically fetches episodes from Buzzsprout using:

- **Podcast ID**: 2489424
- **API Token**: Configured in environment variables

### Web3Forms Integration

Contact forms and topic suggestions use Web3Forms for:

- Contact form submissions
- Topic suggestion submissions
- Newsletter signups

## 🎨 Customization

### Brand Colors

The website uses a custom color palette defined in `tailwind.config.ts`:

- **Electric Blue**: #007BFF
- **Vibrant Green**: #28A745
- **Rich Violet**: #6F42C1
- **Medium Purple**: #8E44AD

### Content Updates

- **Episodes**: Automatically fetched from Buzzsprout
- **Host Information**: Update in `client/src/data/hosts.ts`
- **Testimonials**: Update in `client/src/data/testimonials.ts`

## 📱 Social Media Integration

The website includes integration with:

- **YouTube**: https://youtube.com/@connectedcircles?si=MOcqdqUBEthj9xRf
- **Twitch**: https://twitch.tv/connectedcircles (Coming Soon)
- **Discord**: Community server (Coming Soon)
- **Reddit**: Discussion community (Coming Soon)

## 🔒 Security

- Environment variables for sensitive data
- CSRF protection on forms
- Input sanitization with DOMPurify
- Secure API token handling

## 📈 Analytics & SEO

- Proper meta tags and Open Graph data
- Structured data for search engines
- Performance optimized with lazy loading
- Mobile-first responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Support

For technical support or questions:

- Email: hello@connectedcircles.com
- GitHub Issues: Create an issue in this repository

## 🚀 Deployment Status

- **Production**: https://connectedcircles.netlify.app (or your custom domain)
- **Repository**: https://github.com/ConnectedCirlcle/Connected_Circle_Website
- **Build Status**: [![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)

---

Built with ❤️ for the Connected Circles community
