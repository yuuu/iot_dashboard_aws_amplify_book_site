/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
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
export const onCreateMeasurement = /* GraphQL */ `
  subscription OnCreateMeasurement {
    onCreateMeasurement {
      deviceId
      timestamp
      temperature
      humid
      pressure
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMeasurement = /* GraphQL */ `
  subscription OnUpdateMeasurement {
    onUpdateMeasurement {
      deviceId
      timestamp
      temperature
      humid
      pressure
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMeasurement = /* GraphQL */ `
  subscription OnDeleteMeasurement {
    onDeleteMeasurement {
      deviceId
      timestamp
      temperature
      humid
      pressure
      createdAt
      updatedAt
    }
  }
`;
