# Public deployment

## GitHub Pages (GitHub Free)

Use a public repository; a private repository requires an eligible paid plan for Pages. This portfolio is a static build and needs no paid server.

1. Create a public repository, e.g. portfolio, on the intended GitHub account.
2. Push the source to main (exclude node_modules, dist, .git and .openai from an exported copy).
3. In Settings → Pages, choose GitHub Actions as the build source.
4. The included .github/workflows/pages.yml builds with npm ci, uploads dist and deploys with GitHub's short-lived OIDC credentials. No personal token or hosting secret is needed by the workflow.
5. Inspect Actions and the deployment URL before sharing it.

The workflow uses configure-pages base_path, so it supports a repository subpath, an account-level github.io site or a configured custom domain. Images and favicons use Vite BASE_URL. Native section links need no SPA rewrite.

## Cloudflare Pages alternative

Connect the same GitHub repository. Build command: npm run build. Output directory: dist. Runtime version: Node 22. Base path stays /. Configure a custom domain in the hosting dashboard if desired. Git pushes can trigger deployment.

## Current hosting

The Site publication can be public independently of GitHub. GitHub repository creation and Pages deployment must be verified separately; the current Site URL does not prove a GitHub deployment.

## Contact

The contact terminal downloads a local draft; it does not deliver email.
