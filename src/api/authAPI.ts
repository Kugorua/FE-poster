import { ListResponse } from "@/model";
import httpRequest from "./axiosClient";

const Auth = {
login(data: any): Promise<ListResponse<any>> {
  // console.log('%cauthAPI.ts line:6 data', 'color: #007acc;', data);
  let url = '/login'
    return httpRequest.post(url,data);
  },
};

export default Auth;
