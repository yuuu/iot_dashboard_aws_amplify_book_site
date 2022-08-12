/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
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
          certificatePem
          privateKey
          publicKey
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
          temperature
          humid
          pressure
          status
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
export const getMeasurement = /* GraphQL */ `
  query GetMeasurement($deviceID: ID!, $timestamp: Int!) {
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
    $timestamp: ModelIntKeyConditionInput
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
