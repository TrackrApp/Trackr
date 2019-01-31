import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "addressToGmaps" })
export class GoogleMapsPipe implements PipeTransform {
  private gmapsEmbedUrl = "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s{0}!6i13";

  transform(address: string): string {

    const splittedAddress = address.split(" ").join("+");

    return this.gmapsEmbedUrl.replace("{0}", splittedAddress);
  }
}
