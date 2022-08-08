export type AmplifyDependentResourcesAttributes = {
  function: {
    createCertificateIoTCore: {
      Name: "string";
      Arn: "string";
      Region: "string";
      LambdaExecutionRole: "string";
    };
  };
  auth: {
    amplifyiotbackend73c41568: {
      IdentityPoolId: "string";
      IdentityPoolName: "string";
      UserPoolId: "string";
      UserPoolArn: "string";
      UserPoolName: "string";
      AppClientIDWeb: "string";
      AppClientID: "string";
    };
  };
  api: {
    amplifyiotbackend: {
      GraphQLAPIIdOutput: "string";
      GraphQLAPIEndpointOutput: "string";
    };
  };
};
