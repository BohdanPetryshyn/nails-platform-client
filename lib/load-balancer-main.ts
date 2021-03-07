import {Construct} from "@aws-cdk/core";
import {
    ApplicationListener,
    ApplicationLoadBalancer,
    IApplicationListener,
    IApplicationLoadBalancer
} from "@aws-cdk/aws-elasticloadbalancingv2";
import {StringParameter} from "@aws-cdk/aws-ssm";

export class LoadBalancerMain extends Construct {
    readonly loadBalancer: IApplicationLoadBalancer;
    readonly httpListener: IApplicationListener;

    constructor(scope: Construct, id: string) {
        super(scope, id);

        const loadBalancerArn = StringParameter.valueFromLookup(this, 'nails-load-balancer-main-arn');
        const httpListenerArn = StringParameter.valueFromLookup(this, 'nails-load-balancer-main-http-listener-arn');

        this.loadBalancer = ApplicationLoadBalancer.fromLookup(this, 'load-balancer-main', {
            loadBalancerArn
        });

        this.httpListener = ApplicationListener.fromLookup(this, 'load-balancer-main-http-listener', {
            listenerArn: httpListenerArn
        });
    }
}