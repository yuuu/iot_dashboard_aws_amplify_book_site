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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMeasurement = /* GraphQL */ `
  query GetMeasurement($deviceId: ID!, $timestamp: Int!) {
    getMeasurement(deviceId: $deviceId, timestamp: $timestamp) {
      deviceId
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const listMeasurements = /* GraphQL */ `
  query ListMeasurements(
    $deviceId: ID
    $timestamp: ModelIntKeyConditionInput
    $filter: ModelMeasurementFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMeasurements(
      deviceId: $deviceId
      timestamp: $timestamp
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        deviceId
        timestamp
        temperature
        humid
        pressure
      }
      nextToken
    }
  }
`;
