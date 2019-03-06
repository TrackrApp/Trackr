import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Session } from "../shared/domain/session.interface";

@Injectable()
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get the Session for the given id.
   *
   * @param id The id of the Session.
   */
  public getSession(id: number): Promise<Session> {
    return this.httpClient.get<Session>("session/v1/" + id).toPromise();
  }
}
