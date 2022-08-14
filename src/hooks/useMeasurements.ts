import { API } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import { useQuery } from "@tanstack/react-query";
import { ListMeasurementsQuery } from "../../src/API";
import * as queries from "../../src/graphql/queries";

export const useFetchMeasurements = (deviceID: string) => {
  const { data: measurements } = useQuery(
    [`devices/${deviceID}/measurements`],
    async () => {
      const { data } = (await API.graphql({
        query: queries.listMeasurements,
        variables: {
          deviceID,
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
