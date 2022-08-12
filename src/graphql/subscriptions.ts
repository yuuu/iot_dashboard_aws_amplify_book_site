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
      certificates {
        items {
          id
          deviceID
          certificateId
          certificateArn
          certificatePem
          privateKey
          publicKey
          test
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
      certificates {
        items {
          id
          deviceID
          certificateId
          certificateArn
          certificatePem
          privateKey
          publicKey
          test
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
      certificates {
        items {
          id
          deviceID
          certificateId
          certificateArn
          certificatePem
          privateKey
          publicKey
          test
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
export const onCreateCertificate = /* GraphQL */ `
  subscription OnCreateCertificate {
    onCreateCertificate {
      id
      deviceID
      certificateId
      certificateArn
      certificatePem
      privateKey
      publicKey
      test
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
export const onUpdateCertificate = /* GraphQL */ `
  subscription OnUpdateCertificate {
    onUpdateCertificate {
      id
      deviceID
      certificateId
      certificateArn
      certificatePem
      privateKey
      publicKey
      test
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
export const onDeleteCertificate = /* GraphQL */ `
  subscription OnDeleteCertificate {
    onDeleteCertificate {
      id
      deviceID
      certificateId
      certificateArn
      certificatePem
      privateKey
      publicKey
      test
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
export const onCreateMeasurement = /* GraphQL */ `
  subscription OnCreateMeasurement {
    onCreateMeasurement {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const onUpdateMeasurement = /* GraphQL */ `
  subscription OnUpdateMeasurement {
    onUpdateMeasurement {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const onDeleteMeasurement = /* GraphQL */ `
  subscription OnDeleteMeasurement {
    onDeleteMeasurement {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
