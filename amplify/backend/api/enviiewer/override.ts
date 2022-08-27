import { AmplifyApiGraphQlResourceStackTemplate } from "@aws-amplify/cli-extensibility-helper";

export function override(resources: AmplifyApiGraphQlResourceStackTemplate) {
  if (!resources?.models["Measurement"]?.modelDDBTable) return;

  resources.models["Measurement"].modelDDBTable.timeToLiveSpecification = {
    attributeName: "ttl",
    enabled: true,
  };
}
