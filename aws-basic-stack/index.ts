import { Construct } from "constructs";
import { TerraformStack, TerraformOutput } from "cdktf";

import { AwsProvider, ec2 } from "../.gen/providers/aws";

export class AwsBasicStack extends TerraformStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);
  
      new AwsProvider(this, "AWS", {
        region: process.env.AWS_REGION,
        accessKey: process.env.AWS_ACCESS_KEY,
        secretKey: process.env.AWS_SECRET_KEY
      });
  
      const instance = new ec2.Instance(this, "compute", {
        ami: "ami-0c1bc246476a5572b",
        instanceType: "t2.micro",
      });
  
      new TerraformOutput(this, "public_ip", {
        value: instance.publicIp,
      });
    }
  }