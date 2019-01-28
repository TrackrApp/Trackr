import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiEndpointPrefixer implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isLocalAssetRequested = request.url.startsWith(".") ? true : false;

    // First clone the request.
    let clone = request;

    if (!isLocalAssetRequested) {
      // The API URL is called from here.

      // Clone the request, with the URL prefixed.
      clone = request.clone({ url: environment.endpointUrl + request.url });
    }

    // Send the modified request.
    return next.handle(clone);
  }
}
