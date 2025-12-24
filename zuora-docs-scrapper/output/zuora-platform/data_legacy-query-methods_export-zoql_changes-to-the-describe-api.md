---
title: "Changes to the Describe API"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/export-zoql/changes-to-the-describe-api"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:38.250Z"
---

# Changes to the Describe API

The "Describe object" API call in Zuora WSDL 85 includes fields not available for data source exports, requiring integration checks for field availability.

You can use the "Describe object" API call to determine API names for use in Export ZOQL queries.

By default, the information returned by the "Describe object" API call corresponds to the latest version of the Zuora WSDL. You can access information for an earlier WSDL by specifying the version number before `/describe` in the endpoint. For example, `84/describe/InvoiceItem` . However, prior to WSDL 85, the "Describe object" API call was in development and was subject to change without notice.

Starting with version 85 of the Zuora WSDL, the "Describe object" API call lists some fields that are not available for use in data source exports. For each field in the response, the `<contexts>` element specifies the availability of the field. Fields that are available for use in data source exports have the `export` context.

For example, in WSDL 85, the response of a call to `.../describe/RatePlanCharge` contains a field called `RolloverBalance` :

<field> <name>RolloverBalance</name> ... <type\>Decimal</type\> <contexts> <context>soap</context> </contexts> </field>

The `RolloverBalance` field is only available in the RatePlanCharge SOAP API object; the field is not available for use in data source exports.

The response of a call to `.../84/describe/RatePlanCharge` does not contain the `RolloverBalance` field.

## Guidance

If you have an integration that uses the "Describe object" API call, Zuora strongly recommends that your integration checks the `<contexts>` element of each field in the API response.

If you have an integration that uses the URL `.../describe/{object}` and does not check `<contexts>` elements, your integration may produce incorrect results as of WSDL 85. Specifically, your integration may process fields that are not available for use in data source exports. To ensure that your integration continues to work correctly, you must either:

-   Modify your integration to check the `<contexts>` element for each field

-   Modify your integration to use the URL `.../84/describe/{object}` instead of `.../describe/{object}`
