# GitHub Actions Microsite

Simple Node.js microsite demonstrating CI/CD using GitHub Actions and GitHub Pages.

## Developer Workflow

Create a feature branch:

    git checkout main
    git pull origin main
    git checkout -b feature/my-change

Make the required changes.

Test locally:

    npm ci
    npm run lint
    npm run format:check
    npm test
    npm run build

Commit and push:

    git add .
    git commit -m "feat: update microsite"
    git push -u origin feature/my-change

Create a Pull Request:

    feature/my-change -> main

## Pull Request Validation

When a Pull Request is created against main, GitHub Actions automatically runs:

- Install dependencies
- Lint
- Formatting check
- Unit tests
- Build validation

The Pull Request should be merged only after validation succeeds.

## Deployment

After the Pull Request is merged into main:

    Push to main
         |
         v
    Build and Test
         |
         v
    Upload Pages Artifact
         |
         v
    Deploy GitHub Pages

The deployment job runs only after the build and test job succeeds.

## GitHub Pages

The site is deployed using the GitHub Pages environment:

    github-pages

## Pipeline Flow

    Feature Branch
          |
          v
    Pull Request
          |
          v
    Build + Test
          |
          v
    Merge to main
          |
          v
    Build + Test
          |
          v
    Upload Artifact
          |
          v
    GitHub Pages

## Security and Permissions

The workflow uses:

- contents: read
- pages: write
- id-token: write

## Evidence

Pipeline execution can be verified using:

- GitHub Actions workflow runs
- Successful lint and formatting checks
- Successful unit tests
- Successful build
- Uploaded GitHub Pages artifact
- GitHub Pages deployment job
- github-pages environment deployment history
- Live GitHub Pages URL
