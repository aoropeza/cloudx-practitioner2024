import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  aws_s3,
  aws_cloudfront,
  aws_cloudfront_origins,
  aws_s3_deployment,
} from "aws-cdk-lib";
import { CfnOutput } from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as path from "path";

export class CloudxPractitionerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hostingBucket = new aws_s3.Bucket(
      this,
      "cloudx-practitioner-bucket",
      {
        blockPublicAccess: aws_s3.BlockPublicAccess.BLOCK_ALL,
      }
    );
    new CfnOutput(this, "cloudx-practitioner-bucket-output", {
      value: hostingBucket.bucketName,
    });

    const distribution = new aws_cloudfront.Distribution(
      this,
      "cloudx-practitioner-distribution",
      {
        defaultBehavior: {
          origin:
            aws_cloudfront_origins.S3BucketOrigin.withOriginAccessControl(
              hostingBucket
            ),
        },
        defaultRootObject: "index.html",
        errorResponses: [
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
          },
        ],
      }
    );
    new CfnOutput(this, "cloudx-practitioner-distribution-output", {
      value: distribution.distributionId,
    });

    new aws_s3_deployment.BucketDeployment(this, "BucketDeployment", {
      sources: [aws_s3_deployment.Source.asset("../app/out")],
      destinationBucket: hostingBucket,
      distribution,
      distributionPaths: ["/*"],
    });

    new lambda.Function(this, "lambda-function", {
      runtime: lambda.Runtime.NODEJS_20_X,
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      handler: "handler.main",
      code: lambda.Code.fromAsset(path.join(__dirname, "../api")),
    });
  }
}
