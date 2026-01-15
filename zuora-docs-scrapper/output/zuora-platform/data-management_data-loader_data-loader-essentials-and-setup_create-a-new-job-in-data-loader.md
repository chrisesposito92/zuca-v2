---
title: "Create a new job in Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/create-a-new-job-in-data-loader"
product: "zuora-platform"
scraped_at: "2026-01-15T21:56:29.044Z"
---

# Create a new job in Data Loader

Learn how to create a new job in Data Loader for data migration tasks.

1.  From the main menu, navigate to Administration > Data Loader.

    Data Loader screen opens.

2.  Click \+ New and select Import.

    The Create Import Job screen appears.

    ![Create import job](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9776eb35-1980-4584-bf35-5ceadac7c171?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk3NzZlYjM1LTE5ODAtNDU4NC1iZjM1LTVjZWFkYWM3YzE3MSIsImV4cCI6MTc2ODYwMDU4NiwianRpIjoiOTI0NWNlNzE0ZTQyNDI1YmE4OGE4NGQ1OGMxN2Y4MjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.859EV70XMapCQThbI4p_1Zj-XanHTIJ3zQYmvKdoeXo)

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

    ![Field mapping](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3c318342-faf9-4223-ac8e-0a06f128b574?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNjMzE4MzQyLWZhZjktNDIyMy1hYzhlLTBhMDZmMTI4YjU3NCIsImV4cCI6MTc2ODYwMDU4NiwianRpIjoiYThjYzY0NGI2ZWU2NDZlMzg2OGE5YzY2NDhkNjRmZjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.8fsxjG9XQJXnMRFmdsQou0fv7g3OIltlLdkNvXt-VTI)

    1.  Adjust the mappings if necessary and click Next.
5.  Preview and Submit the job.
    1.  Review the data preview showing the captured source data and mapped fields.

        The exceptions in the data are highlighted in red text placed in amber colored cells. Use the Filter rows with errors toggle to show only rows containing errors.

        Note: You can make in-line edits directly in the preview grid to fix data issues before it is sent to the Zuora tenant.

6.  Click Submit to initiate the data ingestion job.

    The job is listed on the Data Loader page with the status as Submitted. Select Refresh to update the job status.


click [job status](/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/data-loader-job-status-and-result-details) to know about workflow details.
