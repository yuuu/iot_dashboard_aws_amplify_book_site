import { AmplifyApiGraphQlResourceStackTemplate } from "@aws-amplify/cli-extensibility-helper";

export function override(resources: AmplifyApiGraphQlResourceStackTemplate) {
  resources.models["Measurement"].modelDDBTable.timeToLiveSpecification = {
    attributeName: "ttl",
    enabled: true,
  };
}
