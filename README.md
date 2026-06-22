# reneebe.github.io

Personal portfolio and development journal. Built as Day 1 of my [50 projects in 50 weekdays challenge](https://reneebe.github.io/50projects).

**[Live site →](https://reneebe.github.io)**

## What's here

- **Portfolio** — projects, links, and background
- **50 Projects grid** — tracks progress on the challenge with a click-to-peek modal for each completed project
- **Blog** — development journal covering what I built, what broke, and what I learned

## Stack

- [Next.js](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS v4](https://tailwindcss.com/)
- MDX for blog posts
- Deployed to GitHub Pages via Actions

## Running locally

```bash
npm install
npm run dev
```

## Adding a project

Edit `content/challenge.ts` — add an entry to `challengeProjects` with `completed: true` once it's shipped.

## Adding a blog post

Create a `.mdx` file in `content/blog/` with this frontmatter:

```yaml
---
title: "Post title"
date: "YYYY-MM-DD"
excerpt: "One sentence summary."
tags: ["day-01", "other-tag"]
---
```

The `day-XX` tag is what connects a blog post to its project in the peek modal.
