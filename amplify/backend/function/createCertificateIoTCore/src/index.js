/* Amplify Params - DO NOT EDIT
	API_AMPLIFYIOTBACKEND_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYIOTBACKEND_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const {
  IoTClient,
  CreateKeysAndCertificateCommand,
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
    await attachPolicy(certificateArn, `enviiewer-${process.env.ENV}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        certificateId,
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
