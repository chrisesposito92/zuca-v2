---
title: "Create a new job in Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/create-a-new-job-in-data-loader"
product: "zuora-platform"
scraped_at: "2025-12-24T05:11:12.863Z"
---

# Create a new job in Data Loader

Learn how to create a new job in Data Loader for data migration tasks.

1.  From the main menu, navigate to Administration > Data Loader.

    Data Loader screen opens.

2.  Click \+ New and select Import.

    The Create Import Job screen appears.

    ![Create import job](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_management/data_loader/_media/DL_OV_Create_a_new_job.png)

    Note: The stepper at top of the window shows the progress of the job workflow.

3.  Select Source File to import.

    1.  In the Select Object drop-down, select the object to load data.

        All objects supported by the Data Loader is displayed alphabetically.

    2.  Populate the source file with the required fields .

        Note: Zuora recommends to download the template file from the target tenant to ensure all fields are available in the template.

        1.  Select Download Sample Template.

            These templates are specific to the object and action, helping standardize data migration. You can navigate to the Data Dictionary for objects on data accuracy before populating the CSV template with data.

        2.  Open the template and populate the necessary fields. Fields marked with \* are mandatory.

        3.  Save the template in CSV format.


    3.  Under Select File, upload the CSV file for data ingestion.

        The Source File Header Fields preview area below the stepper shows the header row from the uploaded file so you can verify that you selected the correct file.

    4.  Provide a Job Name.
    5.  (optional) Provide a Description .
    6.  Select Next
4.  Map source and target fields.

    Data Loader automatically attempts to map fields from the source file to the target fields. However, you can customize the mapping if the existing fields are not mapped. Data Loader allows only one-one mapping.

    Use the typeahead search in the drop-down lists to quickly find target fields. Click on the header field for a preview. The Data Preview section on the right of the screen also allows you to preview the data type supported by the field.

    ![Field mapping](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_management/data_loader/_media/Zuora_Field_Mapping.png)

    1.  Adjust the mappings if necessary and click Next.
5.  Preview and Submit the job.
    1.  Review the data preview showing the captured source data and mapped fields.

        The exceptions in the data are highlighted in red text placed in amber colored cells. Use the Filter rows with errors toggle to show only rows containing errors.

        Note: You can make in-line edits directly in the preview grid to fix data issues before it is sent to the Zuora tenant.

6.  Click Submit to initiate the data ingestion job.

    The job is listed on the Data Loader page with the status as Submitted. Select Refresh to update the job status.


click [job status No Content found for /db/organizations/zuora/repositories/prod-sitemap/content/documents/external\_publications/platform/data\_management/data\_loader/topics/view\_data\_loader\_jobs\_and\_status.dita](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_management/data_loader/topics/view_data_loader_jobs_and_status.dita)to know about workflow details.
