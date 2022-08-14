export type Certificate = {
  id: string;
  certificateArn: string;
  certificateId: string;
  certificatePem: string;
  publicKey: string;
  privateKey: string;
  deviceID: string;
};

const certificates: Certificate[] = [
  {
    id: "1",
    certificateArn: "arn:aws:iot:ap-northeast-1:xxxxxxxxxxxx:cert/1",
    certificateId: "1",
    deviceID: "1",
    certificatePem: "",
    publicKey: "",
    privateKey: "",
  },
  {
    id: "2",
    certificateArn: "arn:aws:iot:ap-northeast-1:xxxxxxxxxxxx:cert/2",
    certificateId: "2",
    deviceID: "2",
    certificatePem: "",
    publicKey: "",
    privateKey: "",
  },
  {
    id: "3",
    certificateArn: "arn:aws:iot:ap-northeast-1:xxxxxxxxxxxx:cert/3",
    certificateId: "3",
    deviceID: "3",
    certificatePem: "",
    publicKey: "",
    privateKey: "",
  },
  {
    id: "4",
    certificateArn: "arn:aws:iot:ap-northeast-1:xxxxxxxxxxxx:cert/4",
    certificateId: "4",
    deviceID: "4",
    certificatePem: "",
    publicKey: "",
    privateKey: "",
  },
];

export default certificates;
