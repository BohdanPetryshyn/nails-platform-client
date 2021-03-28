import { Construct } from '@aws-cdk/core';
import { Cluster, ICluster } from '@aws-cdk/aws-ecs';
import { VpcMain } from './vpc-main';
import { StringParameter } from '@aws-cdk/aws-ssm';

export class EcsClusterMain extends Construct {
  readonly cluster: ICluster;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const vpcMain = new VpcMain(this, 'vpc-main').vpc;
    const clusterName = StringParameter.valueFromLookup(
      this,
      'nails-ecs-cluster-main-name',
    );

    this.cluster = Cluster.fromClusterAttributes(this, 'ecs-cluster-main', {
      vpc: vpcMain,
      clusterName,
      securityGroups: [],
    });
  }
}
