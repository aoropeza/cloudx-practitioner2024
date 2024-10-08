<ol>
<li>Create cdk project `cdk init --language=typescript`</li>
<li>Create insfrastruture folders</li>
<li>Move cdk code into `infrastructure` folder</li>
<li>Create new nextjs app `npx create-next-app@latest` and use `app` as project name.</li>
<li>Configure next js for static site generation</li>
<li>Create package json at root level for better development experience, optional you can settup husky here.</li>
<li>Start adding CDK code.</li>
Testing locally
<li>Run you next js app</li>
<li>Synt cdk code (npm run synth:local)</li>
<li>Then you can run cdk deploy, but let's try with github actions</li>
</ul>

<br>
<br>

CDK with typescript
https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html

NPM Workspaces
https://docs.npmjs.com/cli/v7/using-npm/workspaces

Turbo build
https://turbo.build/

Github Repo
https://github.com/aoropeza/cloudx-practitioner2024

Github Credentials
https://github.com/aws-actions/configure-aws-credentials