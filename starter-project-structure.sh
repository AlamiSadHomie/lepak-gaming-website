gaming-website/
├── .eleventy.js              # 11ty configuration file
├── package.json              # NPM dependencies
├── .gitignore                # Git ignore file
├── src/                      # Source files
│   ├── _data/                # Site-wide data files
│   │   ├── site.json         # Site settings
│   │   └── navigation.json   # Navigation structure
│   ├── _includes/            # Template parts
│   │   ├── layouts/          # Page layouts
│   │   │   ├── base.njk      # Base template
│   │   │   └── post.njk      # Post template
│   │   ├── components/       # Reusable components
│   │   │   ├── header.njk    # Site header
│   │   │   ├── footer.njk    # Site footer
│   │   │   └── reviews/      # Review-specific components
│   │   │       └── rating.njk # Rating component
│   ├── assets/               # Static assets
│   │   ├── css/              # CSS files
│   │   │   └── main.css      # Main stylesheet
│   │   ├── js/               # JavaScript files
│   │   │   └── main.js       # Main script file
│   │   └── images/           # Image files
│   │       └── logo.png      # Site logo
│   ├── reviews/              # Game reviews
│   │   ├── index.njk         # Reviews landing page
│   │   └── game-title.md     # Individual review
│   ├── news/                 # News articles
│   │   ├── index.njk         # News landing page
│   │   └── news-title.md     # Individual news article
│   ├── features/             # Feature articles
│   │   └── feature-title.md  # Individual feature
│   ├── guides/               # Game guides
│   │   └── guide-title.md    # Individual guide
│   ├── about/                # About page
│   │   └── index.njk         # About page content
│   └── index.njk             # Homepage
└── public/                   # Built site (generated)