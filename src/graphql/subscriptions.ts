/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
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
export const onCreateCurrentMeasurement = /* GraphQL */ `
  subscription OnCreateCurrentMeasurement {
    onCreateCurrentMeasurement {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const onUpdateCurrentMeasurement = /* GraphQL */ `
  subscription OnUpdateCurrentMeasurement {
    onUpdateCurrentMeasurement {
      deviceID
      timestamp
      temperature
      humid
      pressure
    }
  }
`;
export const onDeleteCurrentMeasurement = /* GraphQL */ `
  subscription OnDeleteCurrentMeasurement {
    onDeleteCurrentMeasurement {
      deviceID
      timestamp
      temperature
      humid
      pressure
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
