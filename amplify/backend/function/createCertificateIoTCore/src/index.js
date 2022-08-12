/* Amplify Params - DO NOT EDIT
	API_AMPLIFYIOTBACKEND_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYIOTBACKEND_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWSAppSyncClient = require("aws-appsync").default;
const gql = require("graphql-tag");
global.fetch = require("node-fetch");
const {
  IoTClient,
  CreateKeysAndCertificateCommand,
  AttachPolicyCommand,
} = require("@aws-sdk/client-iot");

const env = process.env;
const client = new IoTClient({ region: env.REGION });

const createKeysAndCertificate = async () => {
  const params = { setAsActive: true };
  const command = new CreateKeysAndCertificateCommand(params);
  return await client.send(command);
};

const attachPolicy = async (certificateId, policyName) => {
  const params = {
    policyName,
    target: certificateId,
  };
  const command = new AttachPolicyCommand(params);
  return await client.send(command);
};

const createCertificateMutation = /* GraphQL */ `
  mutation CreateCertificate($input: CreateCertificateInput!) {
    createCertificate(input: $input) {
      id
      deviceID
      certificateId
      certificateArn
      createdAt
      updatedAt
    }
  }
`;

const createCertificate = async ({
  deviceID,
  certificateId,
  certificateArn,
}) => {
  const graphql_auth = {
    type: "AWS_IAM",
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      sessionToken: env.AWS_SESSION_TOKEN,
    },
  };
  const graphqlClient = new AWSAppSyncClient({
    url: env.API_AMPLIFYIOTBACKEND_GRAPHQLAPIENDPOINTOUTPUT,
    region: env.REGION,
    auth: graphql_auth,
    disableOffline: true,
  });
  const certificateInput = {
    mutation: gql(createCertificateMutation),
    variables: {
      input: {
        deviceID,
        certificateId,
        certificateArn,
      },
    },
  };
  return await graphqlClient.mutate(certificateInput);
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  try {
    const {
      certificateId,
      certificateArn,
      certificatePem,
      keyPair: { PrivateKey, PublicKey },
    } = await createKeysAndCertificate();
    await attachPolicy(certificateArn, `enviiewer-${process.env.ENV}`);
    const { data } = await createCertificate({
      deviceID: event.arguments.deviceID,
      certificateId,
      certificateArn,
    });
    return {
      ...data.createCertificate,
      certificatePem,
      privateKey: PrivateKey,
      publicKey: PublicKey,
    };
  } catch (error) {
    console.log(error.message);
  }
};
