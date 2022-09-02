/* Amplify Params - DO NOT EDIT
	API_ENVIIEWER_GRAPHQLAPIENDPOINTOUTPUT
	API_ENVIIEWER_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWSAppSyncClient = require("aws-appsync").default;
const gql = require("graphql-tag");
global.fetch = require("node-fetch");
const {
  IoTClient,
  UpdateCertificateCommand,
  DeleteCertificateCommand,
  DetachPolicyCommand,
  DeletePolicyCommand,
} = require("@aws-sdk/client-iot");

const env = process.env;
const client = new IoTClient({ region: env.REGION });

const detachPolicy = async (certificateArn, policyName) => {
  const params = {
    policyName,
    target: certificateArn,
  };
  const command = new DetachPolicyCommand(params);
  return await client.send(command);
};

const deletePolicy = async (policyName) => {
  const params = {
    policyName,
  };
  const command = new DeletePolicyCommand(params);
  return await client.send(command);
};

const updateCertificateIoT = async (certificateId) => {
  const params = { certificateId, newStatus: "INACTIVE" };
  const command = new UpdateCertificateCommand(params);
  return await client.send(command);
};

const deleteCertificateIoT = async (certificateId) => {
  const params = { certificateId };
  const command = new DeleteCertificateCommand(params);
  return await client.send(command);
};

const getCertificateQuery = /* GraphQL */ `
  query GetCertificate($id: ID!) {
    getCertificate(id: $id) {
      id
      certificateArn
      certificateId
    }
  }
`;

const getCertificate = async (id) => {
  const graphql_auth = {
    type: "AWS_IAM",
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      sessionToken: env.AWS_SESSION_TOKEN,
    },
  };
  const graphqlClient = new AWSAppSyncClient({
    url: env.API_ENVIIEWER_GRAPHQLAPIENDPOINTOUTPUT,
    region: env.REGION,
    auth: graphql_auth,
    disableOffline: true,
  });
  return await graphqlClient.query({
    query: gql(getCertificateQuery),
    fetchPolicy: "network-only",
    variables: { id },
  });
};

const deleteCertificateMutation = /* GraphQL */ `
  mutation DeleteCertificate($input: DeleteCertificateInput!) {
    deleteCertificate(input: $input) {
      id
      deviceID
      certificateId
      certificateArn
      createdAt
      updatedAt
    }
  }
`;

const deleteCertificate = async (id) => {
  const graphql_auth = {
    type: "AWS_IAM",
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      sessionToken: env.AWS_SESSION_TOKEN,
    },
  };

  const graphqlClient = new AWSAppSyncClient({
    url: env.API_ENVIIEWER_GRAPHQLAPIENDPOINTOUTPUT,
    region: env.REGION,
    auth: graphql_auth,
    disableOffline: true,
  });
  const deleteCertificateInput = {
    mutation: gql(deleteCertificateMutation),
    variables: {
      input: {
        id,
      },
    },
  };
  return await graphqlClient.mutate(deleteCertificateInput);
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  try {
    const {
      data: {
        getCertificate: { certificateId, certificateArn },
      },
    } = await getCertificate(event.arguments.id);

    const policyName = `enviiewer-${process.env.ENV}-${certificateId}`;
    await detachPolicy(certificateArn, policyName);
    await deletePolicy(policyName);
    await updateCertificateIoT(certificateId);
    await deleteCertificateIoT(certificateId);
    const { data } = await deleteCertificate(event.arguments.id);
    return data.deleteCertificate;
  } catch (error) {
    console.log(error.message);
  }
};
