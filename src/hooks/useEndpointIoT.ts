import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import { useQuery } from "@tanstack/react-query";
import { EndpointIoTQuery, Endpoint } from "../API";
import * as queries from "../../src/graphql/queries";

export const useEndpointIoT = (): Endpoint => {
  const { data: endpoint } = useQuery(["endpointIoT"], async () => {
    const { data } = (await API.graphql({
      query: queries.endpointIoT,
    })) as GraphQLResult<EndpointIoTQuery>;
    console.log(data);
    return data?.endpointIoT;
  });
  return endpoint as Endpoint;
};
