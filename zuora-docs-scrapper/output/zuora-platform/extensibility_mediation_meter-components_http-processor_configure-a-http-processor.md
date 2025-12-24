---
title: "Configure a HTTP processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/http-processor/configure-a-http-processor"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:05.129Z"
---

# Configure a HTTP processor

Learn how to configure an HTTP processor to enable real-time data enrichment by calling external APIs within a mediation flow.

The HTTP processor enables real-time data enrichment by calling external APIs within a mediation flow. To configure a HTTP processor:

1.  Navigate to Mediation > Meters.
2.  Create a new Custom meter.
3.  Select and drag the HTTP processor type on to the meter stream page.
4.  In the HTTP settings page, enter a Name for the processor.
    A unique Operator ID for this processor component is displayed. This unique ID is used for event logging. You can copy this ID to be used in external applications.

    ![HTTP processor settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8b15bdca-c1cf-40b4-a9b6-8bd71eee4755?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhiMTViZGNhLWMxY2YtNDBiNC1hOWI2LThiZDcxZWVlNDc1NSIsImV4cCI6MTc2NjY0MDYwMywianRpIjoiMjEzNWM0MDNhN2FlNDE5MGE2MDgyZGM0NjcyMmJjODkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.vdtWT5j6jW6KAk-1I8m236Ae2P9GQmvOUIJ_DTd6PdE)

5.  From the Method drop-down list, select the method to be used for the API call.
6.  Select the Connection to be used to access the resource.
    When configuring the HTTP Operator, you must select an existing connection from the Connection dropdown list. This connection defines the base URL, authentication, and headers used in your HTTP requests. If the connection you need is not visible in the dropdown, it may not yet be registered in your environment.

    To include a connection or host in the list, submit a request to [Zuora Global Support](https://www.zuora.com/support-center/). Include the following information in your request:

    -   The connection name as you want it to appear in the dropdown.

    -   Base URL of the target service.

    -   Authentication type (API key, Basic Auth and Bearer Auth).

    -   Authentication details.

    -   Any required headers or parameters.


    The Zuora Support team will add the connection to your tenant configuration. Once added, the connection will automatically appear in the dropdown for selection.

7.  If needed, you can enter the Path to the specific resource.
    You can use variables in this path.
    `https://api.partner.com/{{event.customerId}}`

8.  Click the Headers tab to specify the key value pairs which will be sent as a part of the API call.
9.  Click \+ Add Field and specify a Key and Value for each header.
    `Content-Type` and `application/json`.

10.  Click the Params tab to specify the query and path parameters.
11.  Click \+ Add Field and specify a Key and Value for each parameter.
12.  Click the Body tab and paste the request body.
     You can use nested JSON or plain text payloads.

13.  Click the Response tab and paste the code for a sample API response.
14.  Below the sample response, map each Source Field from the response to the corresponding Target Field in the event, to be enriched.
15.  Click Advanced Settings to configure the timeout value (in milliseconds) and to specify the number of times the API call should be retried, if the initial attempt fails.
     The default timeout value is set to 30000 milliseconds.

16.  If you want to pipeline processing to continue even if the HTTP call fails, select the Pass on event in case of error check box.
17.  After configuring the processor, click Save.

The HTTP processor is configured for the custom meter.
