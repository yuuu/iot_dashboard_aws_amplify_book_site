/* Amplify Params - DO NOT EDIT
	API_AMPLIFYIOTBACKEND_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYIOTBACKEND_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const {
  IoTClient,
  CreateKeysAndCertificateCommand,
  CreatePolicyCommand,
  AttachPolicyCommand,
} = require("@aws-sdk/client-iot");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const client = new IoTClient({ region: "ap-northeast-1" });

  const createKeysAndCertificate = async () => {
    const params = { setAsActive: true };
    const command = new CreateKeysAndCertificateCommand(params);
    return await client.send(command);
  };
  const createPolicy = async (name) => {
    const params = {
      policyName: name,
      policyDocument:
        '{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": "*", "Resource": "*" } ] }',
    };
    const command = new CreatePolicyCommand(params);
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

  try {
    const {
      certificateId,
      certificateArn,
      certificatePem,
      keyPair: { PrivateKey, PublicKey },
    } = await createKeysAndCertificate();
    const { policyName } = await createPolicy(`policy-${certificateId}`);
    await attachPolicy(certificateArn, policyName);
    return {
      statusCode: 200,
      body: JSON.stringify({
        certificatePem,
        PrivateKey,
        PublicKey,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};
