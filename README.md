# Synapsis Next.JS Blog

## Overview

this is web-based blog app that use https://gorest.co.in/ API data that can view blog list and view blog detail, and able to CRUD user

## How to Use

- theres 3 page on this app, such as home page (/), blog page (/blog), and user page (/user)
- blog page (/blog) contain lists of blog, if one blog clicked it will Link to (/blog/:blogID) and serve with blog full content and comment

-user page (/user) contain list of user, visitor can do CRUD on user's data

## How to Run

### Run in Vercel Deployment

- visit this link : https://next-js-blog-synapsis.vercel.app/

### Run in Local

- clone repo with this command on yout terminal / git bash
  ```
  git clone https://github.com/ILHAM2134/NextJS-Blog-Synapsis.git
  ```
- change to 'NextJS-Blog-Synapsis' directory with command
  ```
  cd NextJS-Blog-Synapsis
  ```
- install dependencies with command
  ```
  npm install
  ```
- run the app

  - development environment
    ```
    npm run dev
    ```
  - production environment

    ```
    npm run build

    npm run start
    ```
