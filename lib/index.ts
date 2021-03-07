import * as cdk from '@aws-cdk/core';

export interface PlatformClientProps {
  // Define construct properties here
}

export class PlatformClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, props: PlatformClientProps = {}) {
    super(scope, id);

    // Define construct contents here
  }
}
