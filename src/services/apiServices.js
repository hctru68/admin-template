import { Observable } from "rxjs";
import axios from "axios";
import config from "../config";

const API_HOST = config.apiService.host;

export default class ApiServices {
  static getAccountList = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/as/v1.0.0/account/entitlements/`, {
        data: {},
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Pragma: "no-cache",
          Expires: "0"
        }
      })
    );
}
