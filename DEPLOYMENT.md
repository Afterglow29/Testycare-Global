# How to Deploy Your Website to Vercel (Free)

Since your code is now on GitHub, the easiest and best way to deploy your website is to connect Vercel to your GitHub repository. This ensures that every time you push a change to GitHub, your live website automatically updates!

## Step 1: Sign Up / Log In to Vercel
1. Go to [vercel.com](https://vercel.com).
2. Click **"Sign Up"** (or Log In).
3. **IMPORTANT**: Choose **"Continue with GitHub"**. This will link your Vercel account to your GitHub account easily.

## Step 2: Import Your Project
1. Once logged in to the Vercel Dashboard, click **"Add New..."** (usually a dropdown button) -> **"Project"**.
2. You will see a list of your GitHub repositories.
3. Find **`Testycare-Global`** in the list and click **"Import"**.

## Step 3: Configure and Deploy
1. **Framework Preset**: Vercel should automatically detect **"Vite"**. If not, select "Vite" from the dropdown.
2. **Root Directory**: Leave as `./` (default).
3. **Build Command**: Leave as `vite build` (default).
4. **Output Directory**: Leave as `dist` (default).
5. **Environment Variables**: You don't need any for now unless you have API keys.
6. Click **"Deploy"**.

## Step 4: Live!
- Vercel will take a minute or two to build your site.
- Once finished, you will see a "Congratulations!" screen with a screenshot of your site.
- Click the domain link (e.g., `testycare-global.vercel.app`) to view your live website.

## Note on React Router
Your project uses React Router. We have already included a `vercel.json` file in your repository which tells Vercel to handle page routing correctly (redirecting all requests to `index.html`). This ensures that if you refresh the page while on `/inventory`, it won't crash.

## Future Updates
To update your website in the future:
1. Make changes on your computer.
2. Run `git add .`, `git commit -m "update msg"`, and `git push`.
3. Vercel will automatically detect the push and update the live site within minutes!
