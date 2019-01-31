import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: "safe" })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  /**
   * Sanitize an URL (XXS-safe) for use in an iframe.
   *
   * @param url The URL to sanitize.
   */
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
