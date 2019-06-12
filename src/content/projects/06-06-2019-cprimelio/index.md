---
id: 'project-1'
path: "/projects/cprimelio"
date: '2019-06-06'
type: "project"
title: "cprimel.io"
tags: [
  'JavaScript',
  'React',
  'GatsbyJS'
  ]
imgName: 'sky-palms-la_cropped.jpg'
description: 'Portfolio website built with React and GatsbyJS'
---

(insert github-style status table here)

## Purpose

## UI components

(insert component tree showing where props are passed down, queries happen, page and layout relations--useaciiflow

pages -> layouts -> components -> components

index.js -> PageLayout -> LandingMenu -> NavPrimary
                                      -> NavSocial

about.js -> PageLayout ->
updates.js (allUpdates query) -> PageLayout ->
projects.js (allProjects query) -> PageLayout -> ProjectBoard -> ProjectCard -> CardImage (StaticQuery)
                                          -> ProjectFilter
contact.js -> PageLayout ->
                |     |
           Sidebar & Header -> HeaderImage (StaticQuery)

)



## Handling queries in dynamically-generated components