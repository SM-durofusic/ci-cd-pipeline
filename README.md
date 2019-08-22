# CI/CD Pipeline

### How it works?

- For development I integrated ESLint and Prettier
- Git Hooks for consistent code, ESLint check and Prettier fix on changed files
- On every push to master application is deployed to Amazon S3 ([http://ci-cd-pipeline11.s3-website.eu-central-1.amazonaws.com/](http://ci-cd-pipeline11.s3-website.eu-central-1.amazonaws.com/))
- CircleCI is used to watch the master branch
- Consists of 2 jobs, **build** and **test**

### Workflow

### BUILD

1. Checkout onto branch
2. `npm run install`
3. `npm run test`
4. `npm run build`
5. Deployed onto S3 bucket

### TEST

1. Checkout onto branch
2. `npm run install`
3. `npm run test`

---

- Build is used to deploy the application on S3
- Test is used on every change on master and on the pull requests
