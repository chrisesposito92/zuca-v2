---
title: "Meters overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/meters-overview"
product: "zuora-platform"
scraped_at: "2026-02-19T03:26:08.142Z"
---

# Meters overview

A meter quantifies customer activity into structured usage records for billing, tracking usage like CPU hours or data transferred.

A meter converts the events captured from customer activity to structured usage records that are ready for billing. Metering is about quantifying the usage in a way that is meaningful for the business and for the customer. For example, in a cloud computing context, metering might involve tracking the number of CPU hours, GBs of storage, or data transferred by each user. Instead of tracking every CPU second, a cloud computing provider can create a meter to summarize by the hour. Metering systems keep an ongoing tally of usage over time, ensuring that every unit of service used is accounted for.

You can create a meter from pre-defined templates, or you can create a custom meter.

Mediation currently supports a maximum of 5 concurrently running meters per tenant. If you try to start another meter when 5 meters are already running, the meter does not start and the following error message is displayed: `maximum running meter count exceeded`. To start an additional meter, wait for one of the running meters to complete or stop a running meter before starting a new one.

## View the list of Meters

To access meters and related functionality, navigate to Mediation > Meters in the left navigation menu. You can view a history of meters and their statuses. In addition, you can sort the list view by clicking on the column names.

You can perform various actions on an existing meter. The options to run the meter and view the audit trail are provided alongside each meter in the list. Click on the ![Meter actions icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d0a3929f-c524-49b2-9403-dc4cba52272c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQwYTM5MjlmLWM1MjQtNDliMi05NDAzLWRjNGNiYTUyMjcyYyIsImV4cCI6MTc3MTU1Nzk2MywianRpIjoiZmEzNWZjMGVhMGFiNDUzNDllMGY0NDkzODkwNjBjN2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.c7n-WkXsk_wMDjWROuWxlGIBc0XyLQbLj0qghkzKOkc) icon to view additional meter actions.

A meter can have one of the following statuses:

| Status | Description |
| --- | --- |
| Never Run | The meter hasn't been run since it was created. |
| Running | The meter is being run live. |
| Stopped | The meter run is stopped. |
| Error | Configuration error in meter pipeline. |
| Canceled | The meter run is canceled. |
| Testing | The meter is being run in test mode. |
| Testing passed | The meter has passed the test. |
| Completed | The meter run is completed. |
