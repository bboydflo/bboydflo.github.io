# Personal Website

Tech Stack:

- Next.js

- Tailwind

Deployed on github pages (`gh-pages` branch) and has a custom domain at cloudflare (where username is my gmail address)

My personal website built from scratch

## Workflow/Deployment

```sh
git add .
git commit -m "deploy"
git push
```

There is a `deploy-blog` github action that will run everytime I merge/push something to master. That will build the project and deploy the output to `gh-pages` branch.

### Todo's

- preact (if possible)
- simple experiment page
- smart css spliting (page, component, lazy, above the fold etc)
- lighthouse ci -> github actions?
- some sort of docker deployment pipeline
- github actions to automatically redeploy my blog on push (https://javascript.plainenglish.io/deploy-your-next-js-app-on-github-pages-using-the-github-action-525271137409)
