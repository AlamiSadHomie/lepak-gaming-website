# Gaming Website

A personal gaming website for reviews, news, and gaming content built with 11ty.

## Features

- Responsive design using Bootstrap
- Game reviews with rating system
- Gaming news articles
- Feature content and guides
- Easy to maintain with markdown files

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone this repository
   ```
   git clone https://github.com/yourusername/gaming-website.git
   cd gaming-website
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Run the development server
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

- `src/`: Source files
  - `_data/`: Site configuration and navigation
  - `_includes/`: Template parts (layouts, components)
  - `assets/`: Static assets (CSS, JS, images)
  - `reviews/`: Game reviews content
  - `news/`: News articles
  - `features/`: Feature content
  - `guides/`: Game guides
  - `about/`: About page content
  - `index.njk`: Homepage

## Adding Content

### Creating a New Review

1. Create a new markdown file in `src/reviews/` with a descriptive filename (e.g., `game-name.md`)
2. Add the required frontmatter:
   ```yaml
   ---
   layout: layouts/post.njk
   title: "Game Title: Subtitle"
   date: 2025-05-01
   type: review
   rating: 8.5
   verdict: "Worth Playing"
   featuredImage: /assets/images/game-image.jpg
   tags:
     - Genre
     - Platform
   pros:
     - Great feature one
     - Great feature two
   cons:
     - Drawback one
     - Drawback two
   ---
   ```
3. Write your review content in markdown format below the frontmatter

### Creating a News Article

1. Create a new markdown file in `src/news/` with a descriptive filename
2. Add the required frontmatter:
   ```yaml
   ---
   layout: layouts/post.njk
   title: "News Article Title"
   date: 2025-05-01
   type: news
   featuredImage: /assets/images/news-image.jpg
   tags:
     - News Category
   ---
   ```
3. Write your news article content in markdown format

## Building for Production

To build the site for production:

```
npm run build
```

The built site will be in the `public/` directory, ready to be deployed to your hosting provider.

## Deployment

This site can be easily deployed to Netlify, Vercel, GitHub Pages, or any static site hosting provider.

### Netlify Deployment

1. Push your repository to GitHub
2. Connect your GitHub repository to Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `public`

## Customization

### Changing Site Information

Edit the `src/_data/site.json` file to update site information such as name, description, and social media links.

### Modifying Navigation

Edit the `src/_data/navigation.json` file to update the navigation links.

### Changing the Design

The site uses Bootstrap 5 for layout and styling. To customize the design:

1. Edit the `src/assets/css/main.css` file for custom styling
2. Modify the templates in `src/_includes/` to change the HTML structure

## License

This project is licensed under the MIT License - see the LICENSE file for details.