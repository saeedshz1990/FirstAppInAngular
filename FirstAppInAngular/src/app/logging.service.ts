import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  public title: string = 'default';

  constructor(private http: HttpClient) {
  }

  public log(messsag: string) {
    console.log(messsag);
  }
}
