---
title: "Creating My Portfolio Website"
description: "I discuss creating my personal portfolio website and where I plan on going from here."
publishedAt: 2024-06-01
updatedAt: 2024-06-01
author: "andrew-weisbeck"
category: "Programming"
heroImage: "/assets/images/blog/portfolio-website-post.png"
pinned: false
published: true
lang: "EN"
tags:
  - logseq
  - tailwindcss
  - astro
  - "digital garden"
  - GeauxCode
---

It has been a while since I maintained a real personal website due to certain life circumstances. I decided it was time to seriously sit down and engineer a real personal portfolio website as I am really pushing to land a full-time developer job, hopefully sooner rather than later. My approach to this particular project was pretty unconventional, even for me. But I like the way it has come together in it's first functional version and am excited that there are still a lot of big changes to come.

This post will discuss how I created this website, the technologies used, and the beautiful future I have planned for [GeauxWeisbeck4.dev](https://geauxweisbeck4.netlify.app).

## Planning, Research, and Getting Started 

So I have a major problem with becoming obsessed over how my website should look, what framework I must use, and how cool people will think I am when they realize I have designed and planned out the perfect portfolio website. This causes me to browse the web and read through the documentation on various JavaScript frameworks and static website builders, which invariably leads to me scrolling through hundreds of different Jamstack templates from some of my favorite theme collections like [JamstackThemes.dev](https://jamstackthemes.dev/), [Astro's awesome starter themes](https://astro.build/themes/), or even [11ty's starter projects page](https://www.11ty.dev/docs/starter/).

While getting inspiration from others can be useful, obsessively checking through these starter project collections becomes a time wasting and mindless activity. There is a fine line that must respected when conducting this planning and research phase of designing websites if any progress is to be made. I honestly have seen almost every Jamstack and/or modern stack template on the web, so it is not nearly as much of a problem for me as it has been in the past. I use the templates as a starting off point once I have made a decision on the framework, language, and type of website I will be making.

For this particular project, I already knew that I would use my favorite web framework, Astro. I won't say that your wrong for liking another web framework more than Astro but there really isn't a better web framework for building fast and beautiful websites. The community for Astro is a huge advantage for this static site generator/web framework as it contains many plugins, templates, and countless open source projects that serve as great models for structuring and designing your own project. Astro just makes things so easy and since it uses the island architecture for interactivity, it ships HTML to the browser and makes your website killer fast.

One of the great things about Astro is that it is compatible with any JavaScript framework - you can literally import a React component and a Svelte component into an Astro component and enjoy the benefits of both on the same page! As I mentioned, the ease of adding other technologies like Tailwind CSS and website hosting services like Netlify and Vercel, make Astro an easy choice for creating my personal portfolio website.

I started to create the layout on Penpot but never really finished it because I got impatient and just started coding the project. I did do some sprint planning on Asana so I could stay organized on features that I want to implement and what bugs I need to squash.

## Website Features and Technology Choices

This portfolio was initially created to also be my digital garden but upon further reflection, I have decided to implement a separation of concerns strategy and I will be creating my digital garden in a whole separate project. Here are some points I considered when making this decision so you can understand my reasoning:

- While my digital garden is a collection of professional ideas and content, there are a lot of random and personal notes, essays, and ramblings that I don't want to clutter my portfolio with.
- I have a whole different project to plan for with my digital garden as I have a vast collection of notes, resources, writings, and things that don't necessarily belong on a website that is supposed to impress employers which...
- ...brings me to my final point: I want to make a good first impression on potential employers. I want them to be able to easily see my skills, experience, projects, and also be able to quickly access my resume. I don't need them reading about free form journal entries or my thoughts on authority - if they want to read that stuff, they can find the link to it on my projects page!

However, right now you will see a digital garden section that houses notes for you to read. This is just a temporary solution where I can share professional notes with y'all while I construct my digital garden with my bare hands.

The main features you will find on this website, other than my digital garden notes, are this blog, a project portfolio page, an about me section, and links to my social media websites and GitHub profile page. A pretty standard and not overly exciting solution, but hopefully you will find that the overall design is neat and the code is eloquent.

Technologies that I have chose for this project thus far are listed below:

- Tailwind CSS: Wonderful solution for crafting a simple and elegant website.
- React: The most often used JavaScript UI library makes it easy to create components that call for a little more complexity than an Astro component can handle.
- Svelte: I haven't used it in a component yet, but I will have probably used it for something by the time you read this post.
- MDX: Just like Svelte, haven't used it yet, but it is highly likely it will be used when I work on the project pages in depth.
- Astro DB: I have added the integration to the project, but haven't used it yet. Will probably use to track and display blog post views, add a comments section, and to eventually store post and project information.
- Partytown: Will be used to offload resource intensive scripts when working on site performance and doing testing.
- Jest/Puppetteer/Mocha/Chai: Or add any testing framework here. They have yet to be added, but that is a big next step for this project.

That is about all for technology choices up to this point, but there is a lot that will change as I implement changes to my portfolio website.

## The Future of GeauxWeisbeck4.dev

The site you see today will hardly be recognizable after I implement many of the changes I have planned. Here is a list of some to-dos that I have planned:

- Work experience and skill sections on the home page
- A download resume button on the home page
- Section and page for YouTube videos
- A newsletter subscription form for newsletter I'm working on
- A contact form so you can say hi or complain about me
- Guestbook for visitors to let me know they stopped by

This list is not exhaustive for things I want to change. For example, I want to update the design of certain components like my blog post cards. I would like for the hover animation to include a cool color-gradient glow movement or something of the sort. I also will be changing the website colors and likely updating the font.

## Conclusion

Hopefully this post was informative and not too confusing for those of you who are trying to learn more about the creation of my portfolio website. My intentions were to give you a look inside the mind of Andrew Weisbeck as he created the first version of this website and provide you a unique opportunity to get a preview of his vision for this beautiful collection of web pages that share the domain of [GeauxWeisbeck4.dev](https://geauxweisbeck4.dev).

Thank you for reading and please provide any feedback you may have (once I have made that possible).