/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice($owner: String) {
    onCreateDevice(owner: $owner) {
      id
      name
      temperature
      humid
      pressure
      status
      pinned
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice($owner: String) {
    onUpdateDevice(owner: $owner) {
      id
      name
      temperature
      humid
      pressure
      status
      pinned
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice($owner: String) {
    onDeleteDevice(owner: $owner) {
      id
      name
      temperature
      humid
      pressure
      status
      pinned
      createdAt
      updatedAt
      owner
    }
  }
`;
