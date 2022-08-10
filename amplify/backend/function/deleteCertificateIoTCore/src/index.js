const {
  IoTClient,
  UpdateCertificateCommand,
  DeleteCertificateCommand,
  DetachPolicyCommand,
} = require("@aws-sdk/client-iot");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const client = new IoTClient({ region: "ap-northeast-1" });
  const certificateId =
    "78ba4c5528886c990f4476e76c4e9052a128cf3a36df0e1e523260255b28884c";
  const certificateArn = `arn:aws:iot:ap-northeast-1:333187377846:cert/${certificateId}`;
  const policyName = `enviiewer-${process.env.ENV}`;

  const detachPolicy = async (certificateArn, policyName) => {
    const params = {
      policyName,
      target: certificateArn,
    };
    const command = new DetachPolicyCommand(params);
    return await client.send(command);
  };

  const updateCertificate = async (certificateId) => {
    const params = { certificateId, newStatus: "INACTIVE" };
    const command = new UpdateCertificateCommand(params);
    return await client.send(command);
  };

  const deleteCertificate = async (certificateId) => {
    const params = { certificateId };
    const command = new DeleteCertificateCommand(params);
    return await client.send(command);
  };

  try {
    await detachPolicy(certificateArn, policyName);
    await updateCertificate(certificateId);
    await deleteCertificate(certificateId);

    return {
      statusCode: 200,
      body: JSON.stringify({ certificateId }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};
