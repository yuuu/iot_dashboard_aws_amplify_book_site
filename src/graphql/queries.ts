/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
      id
      name
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
        pinned
        createdAt
        updatedAt
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
