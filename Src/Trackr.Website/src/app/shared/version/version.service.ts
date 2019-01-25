
export class AppVersionService {

  /**
   * Get the application version from the package.json.
   *
   * @returns The application version.
   */
  public getVersion(): string {
    // Read the app version from the package.json file.
    const { version: appVersion } = require("../../../../package.json");

    // Return its value.
    return appVersion;
  }
}
