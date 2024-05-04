# NEXT JS Notes

## What is NEXT JS?

- A framework for building fast and search engine friendly websites

```Answer
 A framework = libs + tools + conventions
```

- In Next JS, we will not use route like react router because next js provides us with all the features of react router.

### What is a node js runtime?

- Web Browser for client side and Node js for server side.

### Server Side Rendering

- in react we use only client side rendering it means we will make another project for backend
- in next we can use server side rendering it means we will make backend and frontend in one project

- Server side rendering is faster than client side rendering it make the website faster and search engine friendly

## Setting for environment

- node js
- vs code

### create next js

```bash
npx create-next-app@latest
```

#### options

- name
- use typescript
- eslint = for linting syntax errors in code
- tailwind = for styling
- app-router = for routing

## Routing and Navigation

- Routing is the process of moving from one page to another page
- we use Link tag in next js for routing because a tag reloads the page and we not need to refresh the page for routing so this purposes of Link tag is to not reload the page

## Client Side and Server Side Rendering

### Client Side Rendering

- large bundle
- recource intensive
- No SEO
- Less secure

### Server Side Rendering

- small bundle
- resource efficient
- SEO
- More secure

##### Server side can not

- listen to browser events
- Access browser APIs
- Mantain state
- use effects

## How we control api data rendering

```jsx
let data = await fetch("https://jsonplaceholder.typicode.com/users", {
  next: { revalidate: 10 },
});
let users = await data.json();
```
