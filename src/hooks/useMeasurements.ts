import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import { useQuery } from "@tanstack/react-query";
import { ListMeasurementsQuery } from "../../src/API";
import * as queries from "../../src/graphql/queries";

export const useFetchMeasurements = (deviceId: string) => {
  const { data: measurements } = useQuery(
    [`devices/${deviceId}/measurements`],
    async () => {
      const { data } = (await API.graphql({
        query: queries.listDevices,
        variables: {
          deviceId,
          sortDirection: "ASC",
        },
      })) as GraphQLResult<ListMeasurementsQuery>;
      return data?.listMeasurements?.items.flatMap((d) =>
        d === null ? [] : [d]
      );
    }
  );
  return measurements;
};
