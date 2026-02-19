---
title: "Manage connections in meters"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/http-processor/manage-connections-in-meters"
product: "zuora-platform"
scraped_at: "2026-02-19T03:26:42.776Z"
---

# Manage connections in meters

The Manage Connections feature in Zuora Mediation lets you create and maintain reusable HTTP connections that can be selected when configuring an HTTP processor in a meter flow.

1.  Navigate to .
2.  Click the Manage Connections button at the top of the page.
    The Manage Connections window is displayed and lists all existing HTTP connections with the connection details- connection name and base URL.

3.  To edit the connection details, click Edit. To remove a connection, click Delete.
    A managed connection can be reused by multiple meters and HTTP processors and changes to a connection can affect all dependent flows. Before editing or deleting a connection, review which meters use it and plan any required testing.

4.  Click Create New to create a new connection.
5.  Enter a descriptive and unique Name for the connection.
6.  Specify the Base URL. This is root URL of the target HTTP service.
    When you configure the HTTP processor, you specify the URL path and query parameters. At runtime, the HTTP processor combines the base URL from the connection with the path and parameters from the processor configuration.
    https://api.partner.com

7.  From the Authentication Type drop-down list, select the authentication scheme to be used when the HTTP processor calls this endpoint.
    Depending on the selected authentication type, additional fields appear, such as user name and password, or header key and value pairs.
    1.  When the endpoint does not require auth headers, select No Auth.
    2.  To use basic authentication, select Basic Auth and specify the User Name and Password.
    3.  To use bearer token-based authentication, select Bearer Auth and paste the Token.
8.  Click the Test Authentication button to verify that the connection works.
9.  Click Save.

The connection will appear in the list of connections that can be used when configuring a HTTP Processor.
