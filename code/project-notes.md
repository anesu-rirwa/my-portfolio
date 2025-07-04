# Portfolio Project Details

Next.Js Version Used: @15.3.3

## Folder Structure

```fs
/app
  /about
    page.js
  /blog
    /[slug]
      page.js
    page.js
  /contact
    page.js
  /projects
    page.js
  /api
    /contact
      route.js
  layout.js
  page.js
/components
  BlogCard.js
  Footer.js
  Navbar.js
  ProjectCard.js
  SkillBadge.js
  SocialIcon.js - LinkedIn, Kaggle, Github
/content
  /blog
    my-first-post.mdx
/lib
  posts.js
/public
  /images
    profile.jpg
/styles
  globals.css
```

- app/: Contains route segments and pages.
- components/: Reusable React components.
- content/: MDX blog posts.
- lib/: Utility functions (e.g., MDX parsing).
- public/: Static assets like images.
- styles/: Global CSS.

## Packages Installed

- Tailwind
- react-icons
- react-fast-marquee
  > React Fast Marquee is a lightweight React component that harnesses the power of CSS animations to create silky smooth marquees.
- motion
- swiper
  > Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.
- @headlessui/react
  > A set of completely unstyled, fully accessible UI components for React, designed to integrate beautifully with Tailwind CSS.
- react-type-animation

### No longer in use

- react-fast-marquee
