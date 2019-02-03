import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiEndpointPrefixer implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isLocalAssetRequested = request.url.startsWith(".") ? true : false;

    // First clone the request.
    let clone = request;

    if (!isLocalAssetRequested) {
      // The API URL is called from here.

      // Clone the request, with the URL prefixed.
      clone = request.clone({ url: environment.endpointUrl + request.url });
    }

    // Send the modified request, and catch errors if needed.
    return next.handle(clone)
      .pipe(
        catchError(
          (error: any, caught: Observable<HttpEvent<any>>) => {
            // If the HTTP response code is 404, navigate to the 404 page.
            if (error.status === 404) {
              this.router.navigate(["/", "not-found"]);
            }

            // Don't rethrow the error.
            return of(error);
          }
        )
      );
  }
}
