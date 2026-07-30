# Rey Cardama — Portfolio

A personal portfolio site built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Publish on GitHub Pages

**1. Create a new GitHub repository**
Go to https://github.com/new and create a repo. Note the exact name you choose — you'll need it below.
Suggested name: `portfolio`

**2. Match the repo name in `vite.config.js`**
Open `vite.config.js` and make sure `base` matches your repo name exactly:
```js
base: '/your-repo-name/',
```
(If you plan to deploy to a root domain like `yourusername.github.io`, set `base: '/'` instead.)

**3. Push this project to GitHub**
From this folder, run:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

**4. Turn on GitHub Pages**
In your GitHub repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

That's it — a workflow (`.github/workflows/deploy.yml`) is already included. Every time you push to `main`, it will automatically build the site and publish it.

Your site will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## Updating content later

All the resume content (experience, skills, education) lives in data arrays near the top of `src/App.jsx` — edit those, commit, and push. The site will redeploy automatically.
