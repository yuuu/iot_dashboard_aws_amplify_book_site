/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      name
      pinned
      certificates {
        items {
          id
          deviceID
          certificateId
          certificateArn
          certificatePem
          privateKey
          publicKey
          createdAt
          updatedAt
        }
        nextToken
      }
      currentMeasurement {
        deviceID
        timestamp
        temperature
        humid
        pressure
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      name
      pinned
      certificates {
        items {
          id
          deviceID
          certificateId
          certificateArn
          certificatePem
          privateKey
          publicKey
          createdAt
          updatedAt
        }
        nextToken
      }
      currentMeasurement {
        deviceID
        timestamp
        temperature
        humid
        pressure
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      name
      pinned
      certificates {
        items {
          id
          deviceID
          certificateId
          certificateArn
          certificatePem
          privateKey
          publicKey
          createdAt
          updatedAt
        }
        nextToken
      }
      currentMeasurement {
        deviceID
        timestamp
        temperature
        humid
        pressure
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCurrentMeasurement = /* GraphQL */ `
  mutation CreateCurrentMeasurement(
    $input: CreateCurrentMeasurementInput!
    $condition: ModelCurrentMeasurementConditionInput
  ) {
    createCurrentMeasurement(input: $input, condition: $condition) {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const updateCurrentMeasurement = /* GraphQL */ `
  mutation UpdateCurrentMeasurement(
    $input: UpdateCurrentMeasurementInput!
    $condition: ModelCurrentMeasurementConditionInput
  ) {
    updateCurrentMeasurement(input: $input, condition: $condition) {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const deleteCurrentMeasurement = /* GraphQL */ `
  mutation DeleteCurrentMeasurement(
    $input: DeleteCurrentMeasurementInput!
    $condition: ModelCurrentMeasurementConditionInput
  ) {
    deleteCurrentMeasurement(input: $input, condition: $condition) {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const createMeasurement = /* GraphQL */ `
  mutation CreateMeasurement(
    $input: CreateMeasurementInput!
    $condition: ModelMeasurementConditionInput
  ) {
    createMeasurement(input: $input, condition: $condition) {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const updateMeasurement = /* GraphQL */ `
  mutation UpdateMeasurement(
    $input: UpdateMeasurementInput!
    $condition: ModelMeasurementConditionInput
  ) {
    updateMeasurement(input: $input, condition: $condition) {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const deleteMeasurement = /* GraphQL */ `
  mutation DeleteMeasurement(
    $input: DeleteMeasurementInput!
    $condition: ModelMeasurementConditionInput
  ) {
    deleteMeasurement(input: $input, condition: $condition) {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const createCertificate = /* GraphQL */ `
  mutation CreateCertificate(
    $input: CreateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    createCertificate(input: $input, condition: $condition) {
      id
      deviceID
      certificateId
      certificateArn
      certificatePem
      privateKey
      publicKey
      device {
        id
        name
        pinned
        certificates {
          nextToken
        }
        currentMeasurement {
          deviceID
          timestamp
          temperature
          humid
          pressure
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCertificate = /* GraphQL */ `
  mutation UpdateCertificate(
    $input: UpdateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    updateCertificate(input: $input, condition: $condition) {
      id
      deviceID
      certificateId
      certificateArn
      certificatePem
      privateKey
      publicKey
      device {
        id
        name
        pinned
        certificates {
          nextToken
        }
        currentMeasurement {
          deviceID
          timestamp
          temperature
          humid
          pressure
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCertificate = /* GraphQL */ `
  mutation DeleteCertificate(
    $input: DeleteCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    deleteCertificate(input: $input, condition: $condition) {
      id
      deviceID
      certificateId
      certificateArn
      certificatePem
      privateKey
      publicKey
      device {
        id
        name
        pinned
        certificates {
          nextToken
        }
        currentMeasurement {
          deviceID
          timestamp
          temperature
          humid
          pressure
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCertificateIoT = /* GraphQL */ `
  mutation CreateCertificateIoT($deviceID: ID!) {
    createCertificateIoT(deviceID: $deviceID) {
      id
      deviceID
      certificateId
      certificateArn
      certificatePem
      privateKey
      publicKey
      device {
        id
        name
        pinned
        certificates {
          nextToken
        }
        currentMeasurement {
          deviceID
          timestamp
          temperature
          humid
          pressure
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCertificateIoT = /* GraphQL */ `
  mutation DeleteCertificateIoT($id: ID!) {
    deleteCertificateIoT(id: $id) {
      id
      deviceID
      certificateId
      certificateArn
      certificatePem
      privateKey
      publicKey
      device {
        id
        name
        pinned
        certificates {
          nextToken
        }
        currentMeasurement {
          deviceID
          timestamp
          temperature
          humid
          pressure
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
