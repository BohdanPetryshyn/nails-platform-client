import {Construct} from "@aws-cdk/core";
import {Bucket, IBucket} from "@aws-cdk/aws-s3";
import {StringParameter} from "@aws-cdk/aws-ssm";

export class S3Buckets extends Construct {
    readonly userPhotos: IBucket;

    constructor(scope: Construct, id: string) {
        super(scope, id);

        const userPhotosBucketArn = StringParameter.valueFromLookup(
            this,
            'nails-user-photos-bucket-arn',
        );

        this.userPhotos = Bucket.fromBucketArn(this, 'user-photos-s3-bucket', userPhotosBucketArn);
    }
}