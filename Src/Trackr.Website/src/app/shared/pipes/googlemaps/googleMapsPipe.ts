import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "addressToGmaps" })
export class GoogleMapsPipe implements PipeTransform {
  private gmapsEmbedUrl = "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s{0}!6i13";

  /**
   * Convert a given address to a Google Maps Embed URL.
   *
   * @param address The address to transform.
   */
  transform(address: string): string {

    // Split the address, replacing spaces with plus.
    const splittedAddress = address.split(" ").join("+");

    // Put the converted address string in the Google Maps embed URL, and return it.
    return this.gmapsEmbedUrl.replace("{0}", splittedAddress);
  }
}
