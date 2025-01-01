import Loading from "@/app/loading";
import {fetcher} from "@/utils/api";
import useSWR, {useSWRConfig} from "swr";

export default function useFetch<TypeOfReceivedData>(endPoint: string) {
  const {mutate} = useSWRConfig();

  const {data, isLoading, error} = useSWR<TypeOfReceivedData>(
    "/api/register",
    fetcher
  );
  if (isLoading) return <Loading />;

  if (error || !data) {
    console.log(error);
    return <div>Error incurred.</div>;
  }

  return {data, mutate}; // mutate is a function that can be used to update the data in the cache. It can be used to update the data in the cache. It can be used to update the data in the cache. It can be used to update the data in the cache. It can be used to
}
