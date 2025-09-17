# React Portfolio + Blog (Static) — Demo Project

**What this is**
- A simple React single-page app that is a hybrid *Portfolio + Blog*.
- Blog posts are plain **Markdown** files stored in `public/posts/`.
- Designed to be deployed to **GitHub Pages** (uses `gh-pages` package).

**What's included**
```
react-portfolio-blog/
├─ public/
│  ├─ index.html
│  └─ posts/
│     ├─ posts.json
│     ├─ welcome.md
│     └─ web-dev-tips.md
├─ src/
│  ├─ components/
│  │  └─ Navbar.js
│  ├─ pages/
│  │  ├─ About.js
│  │  ├─ Blog.js
│  │  ├─ Contact.js
│  │  ├─ Home.js
│  │  └─ Post.js
│  ├─ App.js
│  ├─ index.js
│  └─ styles.css
├─ package.json
└─ README.md
```

---

## Quick start (local development)

1. Install Node.js (LTS) and npm if you don't have them:
   - https://nodejs.org/

2. Unzip the project and open a terminal:
```bash
cd react-portfolio-blog
```

3. Install dependencies:
```bash
npm install
```

4. Start the dev server:
```bash
npm start
```
Open `http://localhost:3000` in your browser. The app uses `HashRouter`, so client-side routes will work on GitHub Pages.

---

## How to deploy to GitHub Pages

1. Create a GitHub repository (public). Example: `react-portfolio-blog`.

2. In `package.json`, edit the `"homepage"` field:
```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/REPO-NAME"
```
Replace `YOUR-GITHUB-USERNAME` and `REPO-NAME`.

3. Commit and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/REPO-NAME.git
git push -u origin main
```

4. Deploy using the included script:
```bash
npm run deploy
```

This runs `npm run build` and publishes the `build` directory to the `gh-pages` branch. After a few moments your site will be available at the `homepage` URL you specified.

**Notes**
- Because the app uses `HashRouter`, no extra GitHub Pages configuration is required for client-side routing.
- If you prefer `BrowserRouter`, you'll need to create a `404.html` copy of `index.html` in the published branch so refreshes on subpaths still serve your app.

---

## Adding blog posts

1. Add a new Markdown file in `public/posts/`, e.g. `new-post.md`.
2. Add a new entry in `public/posts/posts.json`:
```json
{
  "slug": "new-post",
  "title": "My New Post",
  "date": "2025-09-17",
  "summary": "Short summary shown in the list."
}
```
3. Visit `/#/blog` and click the post.

---

## Customize

- Replace text, images, and content with your own.
- Change styles in `src/styles.css`.
- Swap `HashRouter` for `BrowserRouter` if you know how to handle SPA routing on your host.

---

## Troubleshooting

- If posts don't load on local dev, make sure `/public/posts/posts.json` exists and the app is served from `npm start`.
- If deploy fails, ensure your `homepage` is correct and you have permission to push to the repository.

---

If you want, I can:
- Replace the `homepage` automatically with your GitHub username & repo name and create a GitHub repo for you (I can't push to your GitHub account, but I can give exact git commands).
- Add more sample posts or convert posts to support frontmatter (date, author).
- Convert the project to Vite for faster builds.

Happy to help—tell me which changes you'd like and I'll update the ZIP.
"# react-portfolio-blog" 
