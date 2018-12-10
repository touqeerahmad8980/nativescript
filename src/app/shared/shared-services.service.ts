import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class sharedServices {
    private serverUrl = "https://touqeer8980.auth0.com";

    constructor(private http: HttpClient) { }
    postData(data: any) {
        let options = this.createRequestOptions();
        return this.http.post(`${this.serverUrl}/dbconnections/signup`, { data }, { headers: options });
    }

    private createRequestOptions() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    }   
}