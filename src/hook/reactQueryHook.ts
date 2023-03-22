import { api } from "@/api/method";
import { ListResponse } from "@/model";
import {QueryFunctionContext, useQuery, UseQueryOptions } from "react-query";

type QueryKeyT = [string, object | undefined];

/**
 * @description 
 * @param data QueryFunctionContext<QueryKeyT>
 * @returns Promise<ListResponse<T>>
 */
function fetcher <T>(data: QueryFunctionContext<QueryKeyT>): Promise<ListResponse<T>>  {
  const [url, params] = data.queryKey;
  const pageParam = data.pageParam
  return api
    .get(url, { params: { ...params, pageParam } })
    .then((res:any) => ({list:res.data, total_pages: res.total_pages,...res}))
    .catch((error) => {throw new Error(error.message)});
};


/**
 * 
 * @param url string
 * @param params object
 * @param config UseQueryOptions
 * @returns query
 */
export function useFetch<T>(
  url: string | null,
  params?: object,
  config?: UseQueryOptions<ListResponse<T>, Error, ListResponse<T>, QueryKeyT>
){
  const context = useQuery<ListResponse<T>, Error, ListResponse<T>, QueryKeyT>(
    [url!, params],
    (data) => fetcher(data),
    {
      enabled: !!url,
      staleTime:3000,
      ...config,
    }
  );

  return context;
};



