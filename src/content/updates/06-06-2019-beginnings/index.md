---
id: 'project-1'
path: "/updates/beginnings"
date: '2019-06-07'
type: "update"
title: "Beginnings"
description: 'Write-up for website launch'
---

Welcome! First, some introductions: My name is Casey Primel and I'm a full stack developer based in Boston. I work primarily with the JavaScript and Python ecosystems with a smattering of PHP, Java and whatever else is needed to get the job done (e.g., GraphQL or SQL). I am primarily interested in building scalable, user-centric applications for data-intensive environments whether tools for data visualization or complete data platforms. That being said, I enjoy any chance to tackle complex engineering problems and develop simple, intuitive solutions for them.

As for this site, I've set it up as a central place to host and showcase various projects beyond the usual GitHub repository. So, what will you find here? The core of the site is [the projects page](https://cprimel.io/projects) where you will be able to quickly see, sort and read about projects I've worked or are currently working on. (Note: There is not a whole lot to see yet, but I will be updating the content frequently in the coming months as I wrap a few things up.) The page you are reading now is part of the other half, :sparkles: [a blog](https://cprimel.io/updates) :sparkles: where I will be posting more in-depth write-ups about projects.

## A quick technical rundown
The site is generated with [Gatsby.js](https://www.gatsbyjs.org), a framework for developing and building static sites and [progressive web applications](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps). Gatsby is built on top of the [React.js library](https://reactjs.org/) lending it to the same declarative patterns that React offers in other contexts--hierarchical UI structures, componentization, and unidirectional data-flows. It also has the advantages of a build system based around Webpack and Babel allowing for relatively seamless integration of much of the rest of what the modern web development environment has to offer (SCSS, JSX, ES7, etc.). Oh, and site data (like the text of this page) is fetchable through a handy [GraphQL API](https://graphql.org).[^1]

The page structure of the site is fairly straightforward. It's with the UI components where the interesting stuff happens. So, for more, see [the project write-up](https://cprimel.io/projects) and [the source code.](https://github.com/cprimel/cprimelio)


[^1]: At present, there is a discrepancy between how the API handles GraphQL queries from pages versus components which leads to a lot of unnecessary fetching at build time (e.g., I need only this very specific image but I have to fetch ALL images and then filter for the one I want). A change to how querying from components works has been proposed so will hopefully be rolled out soon. See the proposed feature on GitHub [here](https://github.com/gatsbyjs/gatsby/issues/10482).
