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
      temperature
      humid
      pressure
      status
      pinned
      certificates {
        items {
          id
          deviceID
          certificateId
          certificateArn
          createdAt
          updatedAt
        }
        nextToken
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
      temperature
      humid
      pressure
      status
      pinned
      certificates {
        items {
          id
          deviceID
          certificateId
          certificateArn
          createdAt
          updatedAt
        }
        nextToken
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
      temperature
      humid
      pressure
      status
      pinned
      certificates {
        items {
          id
          deviceID
          certificateId
          certificateArn
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      device {
        id
        name
        temperature
        humid
        pressure
        status
        pinned
        certificates {
          nextToken
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
      device {
        id
        name
        temperature
        humid
        pressure
        status
        pinned
        certificates {
          nextToken
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
      device {
        id
        name
        temperature
        humid
        pressure
        status
        pinned
        certificates {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMeasurement = /* GraphQL */ `
  mutation CreateMeasurement(
    $input: CreateMeasurementInput!
    $condition: ModelMeasurementConditionInput
  ) {
    createMeasurement(input: $input, condition: $condition) {
      deviceId
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
      deviceId
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
      deviceId
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
