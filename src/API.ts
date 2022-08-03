/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDeviceInput = {
  id?: string | null,
  name: string,
  temperature?: number | null,
  humid?: number | null,
  pressure?: number | null,
  status?: string | null,
  pinned: string,
};

export type ModelDeviceConditionInput = {
  name?: ModelStringInput | null,
  temperature?: ModelFloatInput | null,
  humid?: ModelFloatInput | null,
  pressure?: ModelFloatInput | null,
  status?: ModelStringInput | null,
  pinned?: ModelStringInput | null,
  and?: Array< ModelDeviceConditionInput | null > | null,
  or?: Array< ModelDeviceConditionInput | null > | null,
  not?: ModelDeviceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Device = {
  __typename: "Device",
  id: string,
  name: string,
  temperature?: number | null,
  humid?: number | null,
  pressure?: number | null,
  status?: string | null,
  pinned: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateDeviceInput = {
  id: string,
  name?: string | null,
  temperature?: number | null,
  humid?: number | null,
  pressure?: number | null,
  status?: string | null,
  pinned?: string | null,
};

export type DeleteDeviceInput = {
  id: string,
};

export type ModelDeviceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  temperature?: ModelFloatInput | null,
  humid?: ModelFloatInput | null,
  pressure?: ModelFloatInput | null,
  status?: ModelStringInput | null,
  pinned?: ModelStringInput | null,
  and?: Array< ModelDeviceFilterInput | null > | null,
  or?: Array< ModelDeviceFilterInput | null > | null,
  not?: ModelDeviceFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDeviceConnection = {
  __typename: "ModelDeviceConnection",
  items:  Array<Device | null >,
  nextToken?: string | null,
};

export type CreateDeviceMutationVariables = {
  input: CreateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type CreateDeviceMutation = {
  createDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    temperature?: number | null,
    humid?: number | null,
    pressure?: number | null,
    status?: string | null,
    pinned: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateDeviceMutationVariables = {
  input: UpdateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type UpdateDeviceMutation = {
  updateDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    temperature?: number | null,
    humid?: number | null,
    pressure?: number | null,
    status?: string | null,
    pinned: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteDeviceMutationVariables = {
  input: DeleteDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type DeleteDeviceMutation = {
  deleteDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    temperature?: number | null,
    humid?: number | null,
    pressure?: number | null,
    status?: string | null,
    pinned: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetDeviceQueryVariables = {
  id: string,
};

export type GetDeviceQuery = {
  getDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    temperature?: number | null,
    humid?: number | null,
    pressure?: number | null,
    status?: string | null,
    pinned: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListDevicesQueryVariables = {
  filter?: ModelDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDevicesQuery = {
  listDevices?:  {
    __typename: "ModelDeviceConnection",
    items:  Array< {
      __typename: "Device",
      id: string,
      name: string,
      temperature?: number | null,
      humid?: number | null,
      pressure?: number | null,
      status?: string | null,
      pinned: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDeviceSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateDeviceSubscription = {
  onCreateDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    temperature?: number | null,
    humid?: number | null,
    pressure?: number | null,
    status?: string | null,
    pinned: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateDeviceSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateDeviceSubscription = {
  onUpdateDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    temperature?: number | null,
    humid?: number | null,
    pressure?: number | null,
    status?: string | null,
    pinned: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteDeviceSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteDeviceSubscription = {
  onDeleteDevice?:  {
    __typename: "Device",
    id: string,
    name: string,
    temperature?: number | null,
    humid?: number | null,
    pressure?: number | null,
    status?: string | null,
    pinned: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
