# Julius Laggah — Portfolio

Personal website built with [Eleventy](https://www.11ty.dev/). Every menu item is its own folder in `src/`,
so to change a page you only open that page's folder.

## Where to edit what

| Menu item    | Edit this file                  | Add posts to                 |
|--------------|---------------------------------|------------------------------|
| Home         | `src/index.njk` (top section)   | (shows the 3 newest posts)   |
| About        | `src/about/index.md`            | `src/about/posts/`           |
| Research     | `src/research/index.md`         | `src/research/posts/`        |
| Experience   | `src/experience/index.md`       | `src/experience/posts/`      |
| Education    | `src/education/index.md`        | `src/education/posts/`       |
| Publications | `src/publications/index.md`     | `src/publications/posts/`    |
| Contact      | `src/contact/index.md`          | `src/contact/posts/`         |

- **Name, email, location, menu:** `src/_data/site.js`
- **Colours and styling:** `src/assets/css/styles.css` (the greens are at the top)
- **Photo and images:** `src/assets/img/`

Each page file has two parts:

1. **The settings block** between the `---` lines: title, intro, and lists like jobs, degrees or papers.
2. **The text below it**, written in Markdown (`**bold**`, `## Heading`, `- bullet`, `[link](url)`).

## Writing a post (like a blog post)

Create a new file in the `posts/` folder of the page it belongs to, e.g.
`src/research/posts/2026-12-01-my-new-project.md`:

```markdown
---
title: My new project
date: 2026-12-01
summary: One sentence shown on the post card.
image: /assets/img/my-photo.jpg   # optional cover image
---

Write your post here in Markdown.
```

It automatically appears:
- on that page (e.g. Research) under **Latest updates**, and
- on the **Home** page if it's one of the 3 newest.

Its web address is `/<page>/<file-name-without-date>/`, e.g. `/research/my-new-project/`.

## Run it on your computer

```bash
npm install
npm start
```

Then open http://localhost:8080. The page reloads as you save files.

## Publish changes

```bash
git add -A
git commit -m "Describe your change"
git push
```

If the site is connected to Vercel, every push deploys automatically
(build command `npm run build`, output folder `_site`; both are already set in `vercel.json`).
