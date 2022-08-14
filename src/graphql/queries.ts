/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
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
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCertificate = /* GraphQL */ `
  query GetCertificate($id: ID!) {
    getCertificate(id: $id) {
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
export const listCertificates = /* GraphQL */ `
  query ListCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCurrentMeasurement = /* GraphQL */ `
  query GetCurrentMeasurement($deviceID: ID!) {
    getCurrentMeasurement(deviceID: $deviceID) {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const listCurrentMeasurements = /* GraphQL */ `
  query ListCurrentMeasurements(
    $deviceID: ID
    $filter: ModelCurrentMeasurementFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCurrentMeasurements(
      deviceID: $deviceID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        deviceID
        timestamp
        temperature
        humid
        pressure
      }
      nextToken
    }
  }
`;
export const getMeasurement = /* GraphQL */ `
  query GetMeasurement($deviceID: ID!, $timestamp: AWSDateTime!) {
    getMeasurement(deviceID: $deviceID, timestamp: $timestamp) {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const listMeasurements = /* GraphQL */ `
  query ListMeasurements(
    $deviceID: ID
    $timestamp: ModelStringKeyConditionInput
    $filter: ModelMeasurementFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMeasurements(
      deviceID: $deviceID
      timestamp: $timestamp
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        deviceID
        timestamp
        temperature
        humid
        pressure
      }
      nextToken
    }
  }
`;
export const endpointIoT = /* GraphQL */ `
  query EndpointIoT {
    endpointIoT {
      address
    }
  }
`;
