export interface Environment {
    // ** Signals if this is the production environment */
    production: boolean;
    // ** Domain at which this website is running */
    url: string;
    // ** URL of the api service */
    apiUrl: string;
    // ** Defines the type of logging and how certain errors, such as http, should be handled */
    logging: LoggingType;
    // ** Name of the application */
    name: string;
    // ** Domain for which the cookies are save */
    cookieDomain: string;

}

type LoggingType = "console" | "sentry" | "notification" | "none";
