import { Construct } from '@aws-cdk/core';
import { IVpc, Vpc } from '@aws-cdk/aws-ec2';
import { StringParameter } from '@aws-cdk/aws-ssm';

export class VpcMain extends Construct {
  readonly vpc: IVpc;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const vpcId = StringParameter.valueFromLookup(this, 'nails-vpc-main-id');

    this.vpc = Vpc.fromLookup(this, 'vpc-main', {
      vpcId,
    });
  }
}
