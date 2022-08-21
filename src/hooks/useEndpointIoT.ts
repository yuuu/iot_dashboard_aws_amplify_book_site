import endpoint from "../data/endpoint";
import Endpoint from "../types/endpoint";

export const useEndpointIoT = (): Endpoint => {
  return endpoint as Endpoint;
};
