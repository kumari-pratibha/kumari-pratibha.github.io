# Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This portfolio is designed to showcase your work, skills, and projects in a clean, professional manner.

## Features

- 🎨 Modern, clean design inspired by contemporary portfolio websites
- 📱 Fully responsive across all devices
- ⚡ Smooth animations and transitions with Framer Motion
- 🚀 Optimized for performance and SEO
- 🌐 Ready for GitHub Pages deployment
- 🎯 Accessible and user-friendly

## Sections

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About**: Personal information and professional summary
- **Skills**: Technology stack and expertise areas
- **Projects**: Featured work with project details and links
- **Contact**: Multiple ways to get in touch

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following in `app/page.tsx`:

1. **Name**: Replace "Shubham" with your name
2. **Email**: Update the email address in the contact section
3. **Social Links**: Update LinkedIn and GitHub URLs
4. **About Section**: Modify the personal description
5. **Projects**: Replace the sample projects with your actual work
6. **Skills**: Update the technology stack to match your expertise

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors in the `tailwind.config.js` file
- Typography and spacing in the component files
- Animations and transitions in the Framer Motion components

### Images

Replace placeholder images with your actual photos and project screenshots:

1. Add your profile photo to the about section
2. Add project images to the projects section
3. Update the favicon in the `public` folder

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. Go to your repository's Settings > Pages
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy your site

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out` folder
3. Push the `out` folder contents to the `gh-pages` branch

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GitHub Pages** - Hosting platform

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, pull requests are welcome!

## Support

If you have any questions or need help customizing this portfolio, please open an issue on GitHub.
