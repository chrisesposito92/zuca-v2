---
title: "Create a meter based on a meter type"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/create-a-meter-based-on-a-meter-type"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:15.170Z"
---

# Create a meter based on a meter type

Create a meter using predefined types that send results to Zuora Billing.

You can create a meter based on a set of predefined meter types. All predefined meter types send the results to Zuora Billing. The following predefined meter types are available:

| Meter Type | Definition |
| --- | --- |
| Direct | Provides a way to ingest events through an API and maps them directly, without any transformations, to Usage Records in Zuora Billing. |
| Delta | Returns the difference between the current and previous event quantities according to the event time and loads events as Usage Records to Zuora Billing. |
| Sum | Returns the sum of the event quantity during a specific period and loads events as Usage Records to Zuora Billing. |
| Max | Returns the event maximum quantity during the accumulation period and loads events as Usage Records to Zuora Billing. |
| Min | Returns the event minimum quantity during the accumulation period and loads events as Usage Records to Zuora Billing. |
| Count | Returns the count of events during the accumulation period and loads events as Usage Records to Zuora Billing. |

Meters map event data fields to target fields. You can configure the required and optional fields. It also allows the association of the custom fields on the optional fields.

You can preview the example payload and event ingestion data of the meters.

1.  Click Create Meter on the Meters home page.
2.  Enter a name for the meter and select a meter type.
3.  Click Create. The Meter Stream window opens.
4.  Configure the Event Source:
    1.  Select the Source Type from the drop-down list.
        This could be a Streaming API or an Upload File.

    2.  Click the Select button to specify the event definition.
        The event definition is a data schema and describes the structure of the event data. You can create a new event definition, select an existing one from the list, or import a definition.

5.  Click the Field Mapping link at the lower right corner of the page to proceed with field mapping.
    Field mapping involves mapping event header fields to target fields.

6.  In the Required Fields section, select the Event Fields from the drop-down lists that are to be mapped to the corresponding Target Fields that are displayed.
    If needed, specify additional mappings in the Optional Fields section.

7.  After field mapping has been completed, click the Options / Examples link at the lower right corner of the page to proceed.
    The Options / Examples page displays an example payload based on the event definition and the field mappings.

8.  Inspect the payload to ensure that it meets the requirement of the meter. Click the Download button to save the payload as a `.json` file and review it using any editor.

The meter is created. Click the Test button to initiate a test run for the meter. Click Run to perform a live run.
