const { IoTClient, DescribeEndpointCommand } = require("@aws-sdk/client-iot");

const env = process.env;
const client = new IoTClient({ region: env.REGION });

const describeEndpoint = async () => {
  const params = {
    endpointType: "iot:Data-ATS",
  };
  const command = new DescribeEndpointCommand(params);
  return await client.send(command);
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  try {
    const { endpointAddress } = await describeEndpoint();
    return {
      address: endpointAddress,
    };
  } catch (error) {
    console.log(error.message);
  }
};
