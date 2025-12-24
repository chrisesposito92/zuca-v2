---
title: "FAQs"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/export-bulk-pdf-files/faqs"
product: "zuora-billing"
scraped_at: "2025-12-24T18:41:30.256Z"
---

# FAQs

This article contains answers to frequently asked questions about exporting bulk PDF files. These FAQs are designed to address common inquiries and assist you in utilizing the functionality more effectively.

If you have a question that is not covered here, don't hesitate to ask in the Community Group or contact [Zuora Global Support](https://web.archive.org/web/20241009163235/https://www.zuora.com/ace/?_ga=2.172625635.176980731.1693150186-663368165.1681877703&_gl=1*zhq3y9*_ga*NjYzMzY4MTY1LjE2ODE4Nzc3MDM.*_ga_MY8CQ650DH*MTY5MzIzMDQyOS41MC4xLjE2OTMyMzI4ODcuNTEuMC4w).

1\. Is there a User Interface (UI) screen to trigger the job or track its status?

A. No, the job can only be triggered using APIs. Tracking its status is also managed through API responses.

2\. What functionalities does the system cover?

A. The system focuses on generating bulk PDF files based on document type and object IDs. It does not include export functionality or filtering of invoices/credit/debit memos. Filtering is expected to be done outside the system, and the filtered objects' document types and IDs need to be passed as input.

3\. What does the index file contain?

A. The index file contains metadata information about the zip files and can be formatted as JSON or CSV.

{"\_metadata": \[ { "accountNumber":"A00002993", "documentType":"Invoice" ,"documentNumber":"INVCA00002468", "documentCreatedOn":"2024-03-12T11:45:24Z", "pdfFileName":"INVCA00002468\_A00002993\_01012024.pdf", "pdfFileCreatedOn":"2024-03-14T08:32:05Z"},{"accountNumber":"A00002993","documentType":"Invoice","documentNumber":"INVCA00002471","documentCreatedOn":"2024-03-13T03:09:03Z", "pdfFileName":"INVCA00002471\_A00002993\_01012024.pdf","pdfFileCreatedOn":"2024-03-13T03:11:18Z"} \] }

Index file CSV format:

| accountNumber | documentType | documentNumber | documentCreatedOn | pdfFileName | pdfFileCreatedOn |
| --- | --- | --- | --- | --- | --- |
| A0001 | Invoice | INV001 | 2024-03-27T08:03:11.910Z | A0001-INV001-20230101001.pdf | 2024-03-27T10:04:12.921Z |

4\. Is the Index file configurable?

A. No, the Index file is not configurable.

5\. Is the Index file associated with each zip file?

A. Yes, each zip file contains an Index file.

6\. Does the order of files packed in the zip file match the order in the index file?

A. Yes, the order of files in the zip file aligns with the order in the index file. However, it's advisable to cross-verify the file names listed in the index file with the actual file names to ensure accuracy during individual file processing.

7\. Can the ZIP file URL for download be regenerated once it expires?

A. No. Once the ZIP file URL expires, you cannot regenerate it.

8\. What should I consider before triggering a job for zipping PDF files?

A. It is recommended you generate all PDF files before triggering the job. If any PDF files are missing, the job will generate them synchronously and sequentially before proceeding with the zipping process.

9\. Is retrying a failed job supported?

A. No, retrying a failed job is not supported. If a job fails, you must start it afresh.

10\. What happens if the generateMissingPDF attribute is set to true?

A. If the generateMissingPDF attribute is true, the application will attempt to generate PDFs for documents that do not have one. If there are multiple failures in PDF generation, only the latest failure will be visible in the Job GET API response. The job will not stop or fail due to PDF generation failures and will continue to zip the available PDFs.

11\. What is the validity period of the pre-signed URL for the generated zip file?

A. The pre-signed URL is valid for only 24 hours after the zip file is generated. It will expire after this period.

12\. Can archived document-type PDFs be included in the job request?

A. No, it cannot be part of the job request. Including archived document-type PDFs in the request will result in job failure.

13\. Are there any limitations or constraints associated with the API?

A. Yes, there are limitations and constraints to be aware of:

-   Each API request is limited to a maximum of 50,000 document IDs.

-   Pre-signed URLs for accessing the generated zip files expire after 24 hours.

-   The generated zip files are retained for only one day.

-   Retry of failed jobs is not supported; if a job fails, it must be initiated again from the beginning.

-   Archived document-type PDFs should not be included in the request, as their presence will cause the job to fail.

-   Failures in the on-demand generation of PDFs for documents will not affect the zipping process but will be logged for reference.


14\. Does the Job Trigger API support filtering functionality for documents?

A. No, the Job Trigger API does not include document filtering functionality. Document ID filtering must be performed separately, and only filtered document IDs should be passed in the request payload.

15\. How many document IDs can be included per request?

A. Up to 50,000 document IDs per request are supported.

16\. Is there a limit on the total number of document IDs at the tenant level?

A. No, there is no limit on the total number of document IDs at the tenant level.

17\. What is the expiry time for the pre-signed URL?

A. The pre-signed URL will expire after 24 hours.

18\. How are the files organized in the response?

A. The response will return multiple file URLs. The number of invoice IDs determines the number of zip files. Every 1000 document IDs creates a zip file.

19\. Are the file names of PDFs within the zip files modified?

A. No, the file names of PDFs in the zip files are kept unchanged. However, you can configure the file names of PDFs in Billing Settings.

20\. What are the different states of Job Status in the Bulk PDF Generation process?

A. The job status progresses through various states:

-   Submitted: The job is triggered and moves to the Submitted status.

-   Completed: The job status is marked as Completed when all tasks are successfully completed.

-   PartialComplete: If any task fails, the job is marked as PartialComplete, and the latest task failure error is recorded in the message field.


21\. What is the recommended approach to utilize the Bulk PDF Generation API/functionality?

A. The recommended methods include:

-   Utilizing Zuora Workflow.

-   Employing any API client tool to invoke the provided REST API(s).


22\. Are there any pre-defined workflow tasks available for this functionality?

A. No, there are no pre-defined tasks for this functionality on the Workflow page. However, you can integrate this API into your workflow and monitor its status through the GET API.

23\. How can I find out which documents failed to export PDF files?

A. If any documents fail to export to PDF files, you can utilize the FailedDocuments field in the response. This field will contain a list of documents that encountered issues during the export process. You can refer to this list to identify the specific documents that failed and take necessary actions such as analyzing the issues or retrying the export.

24\. Can you provide a high-level definition of a sample workflow?

A. The same workflow detailed here is to select daily invoices with posted status, zip them, and export them to an external server. The steps are as follows:

1.  Filter documents using the Export task.

2.  Use CSV translator to convert to JSON format.

3.  Employ JSON Transform task with JSONata as a processor to convert JSON object to API request body JSON. Here is a sample conversion:

    { "documents" : \[ { "docType" : "Invoice", "objectIds" : $count(CSVTranslator.Invoice) = 1 ? \[CSVTranslator.Invoice.Id\] : CSVTranslator.Invoice.($.Id) } \], "fileName" : "invoice\_dec\_21\_2023", "name" : "TestV1", "indexFileFormat" : "JSON", "generateMissingPDF" : true }

    Here, `CSVTranslator` is the value of Payload Placement from Step 2.

4.  Call the Trigger API with the output of the previous step as the request payload. Here is the sample Request Body Definition:

    {{Data.JSONTransform | to\_json}}

    Here, `JSONTransform` is the value of Payload Placement from Step 3.

5.  Poll the GET API of the job and take actions based on its status.

6.  If Completed/PartialComplete, proceed to iterate each zip file, download from S3, and export to the External server using SFTP Upload task. If Error, debug the failure, and refer to FAQs or support for assistance. Else, wait for a few seconds and repeat Step 5.
