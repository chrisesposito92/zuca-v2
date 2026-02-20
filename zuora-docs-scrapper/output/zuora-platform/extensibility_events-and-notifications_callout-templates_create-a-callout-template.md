---
title: "Create a callout template"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/callout-templates/create-a-callout-template"
product: "zuora-platform"
scraped_at: "2026-02-20T17:48:29.993Z"
---

# Create a callout template

Learn how to create callout templates in the Zuora UI.

1.  Navigate to in the left navigation menu.
2.  Click the Callout Templates tab.
3.  On the Callout Templates page, click \+ Add New Callout Template.
4.  In the displayed Create Callout Template dialog, configure the following settings:

    -   Basic information:
        | Field | Required? | Description |
        | --- | --- | --- |
        | Name | Yes | Specify the name of the callout template.The name must be unique across all callout templates. |
        | Related Event | Yes | Select a standard or custom event associated with the callout template from the dropdown list.In the dropdown list, events are grouped into the following categories:BillingFinancePaymentsSystem |
        | Description |  | Specify the description of the callout template. |
        | Active |  | Switch the toggle to activate or inactivate the callout template.Zuora will not trigger callout notifications if the associated callout template is inactive. |

    -   Available merge fields:
        | Field | Required? | Description |
        | --- | --- | --- |
        | Field Type |  | Select an object on which the merge field you want to use is defined.The available objects vary depending on the callout template's related event. |
        | Field |  | Select the merge field.You must select the field type before specifying the merge field. |
        | Merge Field Tag |  | When the Field Type and Field fields are specified, Zuora auto-generates and displays the corresponding merge field string in this field.You can copy the merge field tag and paste it into the Request URL and Request Body fields or the Header Name and Header Value fields of custom callout headers. |

    -   Request information:
        | Field | Required? | Description |
        | --- | --- | --- |
        | Http Method | Yes | Select the HTTP method to use with the callout. The default value is POST. Zuora supports the following methods:POSTGETPUTPATCHDELETEThe customer API response to the Zuora callout must be HTTP status code 200, or the system considers the callout as a failure. |
        | Request URL | Yes | Specify the path to the receiver service of the callout.You must specify a URL using the HTTP Secure (https://) protocol. Zuora uses port 443 to send callout notifications by default. If you want to use other ports, submit a request at Zuora Global Support.Zuora supports adding merge fields to the request URL. For example, you can specify a request URL as https://mywebsite.com/zuora/{{DataSource.Account.Id}}.A maximum of 1000 characters is allowed for the request URL. |

    -   Request body:
        | Field | Required? | Description |
        | --- | --- | --- |
        | Merge Fields |  | Select the merge fields you want to include in the callout request body from the list. |

    -   Request Authentication: Some fields in the following table apply only to specific authentication types. For more information, see [Callout authentication](/zuora-platform/extensibility/events-and-notifications/callout-templates/callout-template-overview#concept-ac-1321__callout-authentication).
        | Field | Required? | Description |
        | --- | --- | --- |
        | Authentication Type |  | Select the callout authentication type from the list. Valid options are as follows:NoneUsername/Password (Basic and NTLM authentication)OAuth 2.0 |
        | Username | This field is required if the Authentication Type is Username/Password. | Specify the username associated with the callout receiver service.This field applies only to the Username/Password authentication type. |
        | Password | This field is required if the Authentication Type is Username/Password. | Specify the password associated with the username.This field applies only to the Username/Password authentication type. |
        | Domain |  | Specify the domain that contains multiple users in an NTLM-authentication-enabled system.This field applies only to the Username/Password authentication type. |
        | Enable Preemptive Authentication |  | If this checkbox is selected, Zuora transmits credentials in the Authentication header field in the first HTTP request when sending callout notifications to the callout receiver.The credential is a combination of username and password in base64 format. Note that Zuora does not provide the Authorization field in the first HTTP request by default. For more information, see Message sequence for callout basic authentication.This field applies only to the Username/Password authentication type. |
        | Provider Name | This field is required if the Authentication Type is OAuth 2.0. | Select an OAuth 2.0 provider from the dropdown list. For more information about how to create OAuth 2.0 providers, see Add an OAuth 2.0 Provider.This field applies only to the OAuth 2.0 authentication type. |

    -   Additional settings:
        | Field | Required? | Description |
        | --- | --- | --- |
        | Retriable |  | Select this checkbox to apply the callout retry rules.The default number of retry attempts is three at intervals of 30 minutes. You can configure the default retry number and intervals. For more information, see Configure callout settings. |
        | Confirm success by parsing response content |  | Controls how Zuora determines whether callout notifications to your system succeed or fail:If not selected, Zuora determines the result based solely on the HTTP response status code.If selected, and the HTTP response status code is 200, Zuora evaluates the callout response and considers the notification successful only if the Content-Type header is set to application/json, and the response body contains a success field set to true. |
        | HMAC |  | Select this checkbox to enable Hash-based Message Authentication Code (HMAC). For more information, see HMAC authentication. |
        | Algorithm | This field is required if HMAC is selected. | Select the hash function Zuora uses to generate the signed data.Valid options are as follows:MD5SHA-1SHA-224SHA-256SHA-384SHA-512This field is available only if the HMAC checkbox is selected. |
        | Output Text Format | This field is required if HMAC is selected. | Select the format of the signed data.Valid options are as follows:BASE64HEXThis field is available only if the HMAC checkbox is selected. |
        | Secret Key | This field is required if HMAC is selected. | Specify the shared secret key that Zuora uses to generate the signed data.This field is available only if the HMAC checkbox is selected. |
        | Data | This field is required if HMAC is selected. | Specify the message to be authenticated. You can use merge fields in the Data value:{{Request.Headers.<header_name>}}: Refers to the value of a particular request header. For example, {{Request.Headers.Date}} refers to the value of the request header called Date.{{Request.Body}}: Refers to the request body.Other merge fields supported by callout templates.This field is available only if the HMAC checkbox is selected. |
        | Header Key | This field is required if HMAC is selected. | Specify the header key that Zuora uses to send the header value, which typically contains the signed data.This field is available only if the HMAC checkbox is selected. |
        | Header Value | This field is required if HMAC is selected. | Specify the header value. You can use merge fields in this value:{{Request.HMAC.Signed}}: Refers to the signed data.Other merge fields supported by callout templates.The following is a header value example:The algorithm is SHA-256 and the signed data is {{Request.HMAC.Signed}}.This field is available only if the HMAC checkbox is selected. |
        | SSL Certificate |  | Select this checkbox and enter the SSL certificate of your callout receiver server's domain in the expanded text area.The value must be in Privacy-Enhanced Mail (PEM) format, which typically starts with -----BEGIN CERTIFICATE----- and ends with -----END CERTIFICATE-----.You can eliminate SSL certificate errors (HTTP status code 495) for callout notifications by specifying the SSL certificate. |


5.  (Optional) Add custom callout headers:
    1.  In the Additional Settings section, click \+ Add Custom Callout Header .
    2.  Specify the following fields. You can add merge fields in the header name or header value.

        -   Header Name: Enter the header name of the custom callout header.

        -   Header Value: Enter the header value of the custom callout header.


    3.  Repeat steps a and b to add more custom callout headers.
6.  (Optional) Preview the callout request. For more information, see [Preview the callout request of a callout template](/zuora-platform/extensibility/events-and-notifications/callout-templates/preview-the-callout-request-of-a-callout-template).
7.  Click Save.
