# Michelle Matillosa — IT Student Portfolio

A clean, responsive personal portfolio website for an IT student. Built with pure HTML, CSS, and JavaScript — no frameworks or build tools required.

---

## Project Structure

```
michell-motillosa.github.io/
├── index.html      # Main HTML file
├── style.css       # All styles and responsive layout
├── script.js       # Scroll animations, nav behavior, contact form
└── resume.pdf      # Downloadable resume (replace with your own)
```

---

## Sections

- **Hero** — Introduction, stats card, and CTA buttons
- **About Me** — Academic background and career goals
- **Experience** — Timeline of internships, OJT, and academic projects
- **Tech Stack** — Categorized tools and technologies
- **Projects** — Showcased works with descriptions and tech used
- **Certifications** — Certificates, seminars, and trainings
- **Contact** — Contact form and social links

---

## Customization

Before deploying, update the following placeholders in `index.html`:

| Placeholder | Location | Replace with |
|---|---|---|
| `Michelle Matillosa` | Nav, hero, footer | Your full name |
| `michelle.matillosa@example.com` | Contact section | Your email address |
| `Polytechnic University of the Philippines` | About, contact | Your school name |
| `#` | Project and social links | Your actual URLs |
| `resume.pdf` | Hero and nav button | Your resume file |
| DiceBear avatar URLs | Hero card, about image | Your actual photo |

---

## Deploying to GitHub Pages

This portfolio is deployed as a **GitHub User Page**, which means it will be live at:

```
https://<your-github-username>.github.io/
```

> **Why this format?** GitHub gives every account one special User Page. The trick is that your repository must be named exactly `<your-github-username>.github.io`. For example, if your GitHub username is `divino-richard`, your repository name must be `divino-richard.github.io` and your site will be live at `https://divino-richard.github.io/` — no subfolder in the URL.

### Prerequisites

- A [GitHub account](https://github.com)
- [Git](https://git-scm.com/downloads) installed on your computer
- The portfolio files ready on your local machine

---

### Step 1 — Create the Repository with the Special Name

1. Go to [github.com](https://github.com) and sign in.
2. Click the **+** icon in the top-right corner and select **New repository**.
3. Fill in the details:
   - **Repository name:** `<your-github-username>.github.io`
     *(e.g., if your username is `divino-richard`, name it exactly `divino-richard.github.io`)*
   - **Visibility:** Public
   - Leave **"Initialize this repository with a README"** unchecked
4. Click **Create repository**.

> The repository name must match your GitHub username exactly — including hyphens and capitalization. This is what tells GitHub to treat it as your User Page.

---

### Step 2 — Initialize Git in Your Project Folder

Open your terminal, navigate to the portfolio folder, and run:

```bash
cd /path/to/michelle-portfolio
git init
git add .
git commit -m "Initial commit: portfolio website"
```

---

### Step 3 — Connect and Push to GitHub

Copy the repository URL from GitHub (e.g., `https://github.com/divino-richard/divino-richard.github.io.git`), then run:

```bash
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git branch -M main
git push -u origin main
```

Enter your GitHub credentials when prompted.

> **Note:** GitHub recommends using a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) instead of your account password when pushing via HTTPS.

---

### Step 4 — GitHub Pages is Enabled Automatically

For User Pages (`<username>.github.io` repositories), GitHub Pages is **automatically enabled** — no manual settings required.

You can verify it by going to:

1. Your repository on GitHub
2. **Settings → Pages**
3. You should see it is already set to deploy from the `main` branch

---

### Step 5 — Wait for Deployment

GitHub will build and publish your site within **1–3 minutes**.

Once live, visit your portfolio at:

```
https://<your-github-username>.github.io/
```

For example: `https://divino-richard.github.io/`

---

### Step 6 — Push Updates Anytime

Whenever you make changes, push them and the site will automatically redeploy:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Redeployment usually takes 1–2 minutes.

---

## User Page vs. Project Page — Quick Comparison

| | User Page | Project Page |
|---|---|---|
| **Repository name** | `username.github.io` | Any name (e.g., `portfolio`) |
| **Live URL** | `https://username.github.io/` | `https://username.github.io/portfolio/` |
| **Pages setup** | Automatic | Manual (Settings → Pages) |
| **Limit** | One per account | Unlimited |

---

## Troubleshooting

**Site shows a 404 error**
- Double-check that the repository name exactly matches your GitHub username (e.g., `divino-richard.github.io`).
- Make sure your main file is named exactly `index.html` (lowercase).
- Wait a few more minutes — first deployments can take up to 5 minutes.

**Changes are not showing up**
- Hard-refresh your browser with `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac).
- Check the **Actions** tab in your repository to see if the deployment is still in progress.

**Images or styles not loading**
- Ensure all file paths in `index.html` are relative (e.g., `style.css`, not `/style.css`).

**Push is rejected**
- Run `git pull origin main --rebase` first to sync with the remote, then push again.

---

## License

This project is open for personal use. Feel free to adapt it for your own portfolio.
