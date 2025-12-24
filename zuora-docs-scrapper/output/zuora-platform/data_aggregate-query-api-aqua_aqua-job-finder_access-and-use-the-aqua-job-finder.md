---
title: "Access and use the AQuA job finder"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/aqua-job-finder/access-and-use-the-aqua-job-finder"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:14.606Z"
---

# Access and use the AQuA job finder

Learn how to access and use the AQuA Job Finder in the Zuora application to manage data integration tasks.

Follow these steps to open the AQuA Job Finder in the Zuora application:

1.  Log in to the Zuora with administrative privileges.
2.  Click your username at the upper-right corner and select Reporting .
3.  On the Reporting Settings page, click AQuA job finder .

    The Aqua Job Finder page opens with the following information:

    | Column name | Description |
    | --- | --- |
    | Start Time | The timestamp indicating when the AQuA job started. |
    | Partner | The unique identifier for a data integration partner. • Use together with the Project field to uniquely identify a data integration target.The dropdown list shows partner IDs used within the past 30 days.Required only in stateful mode. In stateless mode, this field can be left blank.Example: For a continuous AQuA session retrieving incremental data for Salesforce Org 00170000011K3Ub, set Partner to "Salesforce" and Project to "00170000011K3Ub".Note:Zuora highly recommends you use the stateless mode instead of the stateful mode to extract bulk data. See Bulk data extraction from Zuora using AQuA for best practices.Submit a request at Zuora Global Support to obtain a partner ID. |
    | Project | The unique identifier for a data integration project for a particular partner. • Must be used together with the Partner field.The dropdown list displays project IDs from the past 30 days.Required only in stateful mode. In stateless mode, this field can be left blank. |
    | Status | Displays the current state of each AQuA job:Submitted - The job was successfully submitted after validation of the JSON request.Executing - The job is currently processing.Completed - The job executed successfully. Click Completed to download a .gzip archive of the results.Error - The JSON input contains validation errors, and no Job ID was generated.Aborted - The execution stopped because one of the queries failed. Review the error code and message for details.Cancelled - The job was manually cancelled. |
