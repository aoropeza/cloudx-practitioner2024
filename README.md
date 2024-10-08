### Reference

CDK with typescript
- https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html

Packaging
- https://docs.aws.amazon.com/lambda/latest/dg/typescript-package.html

### Tools 
NPM Workspaces
- https://docs.npmjs.com/cli/v7/using-npm/workspaces

Turbo build
- https://turbo.build/

Github Repo
- https://github.com/aoropeza/cloudx-practitioner2024

Github Credentials
- https://github.com/aws-actions/configure-aws-credentials

### Steps


1.- Create cdk project `cdk init --language=typescript`<br/>
2.- Create insfrastruture folders<br/>
3.- Move cdk code into `infrastructure` folder<br/>
4.- Create new nextjs app `npx create-next-app@latest` and use `app` as project name.<br/>
5.- Configure next js for static site generation.<br/>
6.- Create package json at root level for better development experience, optional you can settup husky here.<br/>
7.- Start adding CDK code.<br/>
<br/>Testing locally.<br/>
8.- Run you next js app.<br/>
9.- Synt cdk code (npm run synth:local).<br/>
10.- Then you can run cdk deploy, but let's try with github actions.<br/>
<br>
<br>