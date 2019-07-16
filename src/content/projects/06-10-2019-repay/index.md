---
id: 'project-2'
path: "/projects/smart-repay"
date: '2019-07-15'
type: "project"
title: "SmartRepay Dashboard"
tags: [
  'JavaScript',
  'React.js',
  'GraphQL',
  'Apollo Client',
  'Python',
  'Django',
  ]
imgName: 'amortization-chart.png'
description: 'Tool to generate and visualize amortization schedules and compare different loan repayment strategies based on user-provided data'
---

**Table of Contents:**
- [Introduction](#Introduction)
- [Technical summary](#Technical-summary)
- [Roadmap](#Roadmap)
- [Repository](#Repository)

## Introduction

What is the optimal loan repayment strategy for a student loan borrower? The answer, of course, is not straightforward. How much money does the hypothetical borrower owe? How much disposable income do they have and how much of that are they willing to divert to making extra payments? Consolidation or refinancing is not always worth it--so, is it worth it in this particular situation?

Even though student loan debt has far outpaced credit card debt in the US, there are surprisingly few tools to help borrowers calculate repayment stategies. Adjustable loan amortization schedules are easy to find online and great for calculating payments for single loans. More customizable or user-oriented tools, perhaps best exemplified by sites like [NerdWallet](https://www.nerdwallet.com), also existed but are geared towards the origination of new loans and the consolidation and refinancing of existing loans. None of these tools provide a simple means for users to balance strategies for repaying multiple small- to medium-sized amortized loans, as is often the case for student loan repayment, where each loan can have a different interest rate and attached repayment benefits (e.g., .5% interest rate reduction after 12 months repayment). The different repayment options provided by loan servicers adds an additional layer of complexity to the situation. In such cases, the calculations needed to determine the optimal repayment strategy for a given individual's financial situation and preferences are far from trivial. For instance, a simple maximizing individual would need to balance decreasing the overall interest paid over the lifetime of the combined loans while also decreasing the total required monthly payments in order to--if they so desired--dedicate more cash flow to paying down loan principal. While there is always Excel, the process of creating multiple amortization schedules and linking them up in a useful way can be an hours long process even if someone is accustomed to working with Excel functions and conditional logic (trust me--I've done it.)

This tool[^1] generates and visualizes amortization schedules for one or more loans based on user-provided loan data and allows users to experiment with, save and compare different loan repayment strategies for the lifetime of those loans. It takes into consideration such variables as extra payments, rate reduction and waived payment benefits often offered by loan originators and servicers to provide users a fuller picture of their options compared to a straight amortization schedule provides. The final version of the tool will include a feature to auto-generate repayment strategies based on user-provided criteria.


## Technical summary

The tool consists of two applications: **1)** a GraphQL API built on the Django framework in Python to store and serve up users' loan data, and **2)** a dashboard built in Javascript with the React.js library that allows users to create, visualize and interact with loan data.

The [Apollo GraphQL Client](https://www.apollographql.com/) is used on the frontend application for interacting with the GraphQL API and for local state management. Visualizations are created from user data with the [React-Vis](https://uber.github.io/react-vis/) charting library.


## Roadmap
* Develop feature to auto-generate repayment strategies.
* Deploy API and basic tool (sans auto-generated repayment strategies).
* Add user authentication.
* (*in progress*) Developing frontend for basic features, including amortization schedule visualizations.
* ~~Integrate Apollo client into frontend React application for fetching data and local state management.~~
* ~~Inital prototyping of UI in wireframe.~~
* ~~Handle client-side generation of amortization schedules based off of sample fixture data.~~
* ~~Create GraphQL API for storing and serving user loan data.~~

## Repository

The source code will be hosted on GitHub with the initial deployment.

[^1]: I'm still working on a final name for the tool. Suggestions welcome!