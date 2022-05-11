import { App } from "cdktf";
import * as dotenv from "dotenv";

import { AwsBasicStack } from './aws-basic-stack';

dotenv.config();

const app = new App();
new AwsBasicStack(app, "aws-basic-stack");
app.synth();