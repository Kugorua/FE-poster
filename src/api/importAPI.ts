import { useFetch } from "@/hook/reactQueryHook";

const Import= {
  get: (params?:object) => useFetch<any>('/get-auction-nft/10',{...params},{keepPreviousData: true})
} ;

export default Import;
