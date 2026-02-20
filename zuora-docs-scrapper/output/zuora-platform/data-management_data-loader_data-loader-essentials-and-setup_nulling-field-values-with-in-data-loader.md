---
title: "Nulling field values with in Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/nulling-field-values-with-in-data-loader"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:25.472Z"
---

# Nulling field values with in Data Loader

The article instructs on how to set field values to null using Data Loader by following a series of steps, including creating a job, selecting the update operation, and modifying a CSV template.

Nulling a field sets its value to blank or removes the existing value. You can null field values using the Update operation in Data Loader.

1.  From the main menu, navigate to Administration > Data Loader.
2.  Click \+ New and select Update.
3.  Select the appropriate template and select Download CSV Template.
4.  In the downloaded CSV file:

    -   Enter True in the IsMarker column, if applicable for the object.
    -   Enter a valid Record ID for each row. This is mandatory for updates.
    -   Retain only the columns to update.
    -   For the fields you want to null, enter Null in the corresponding cells.
    -   Delete any unused columns from the template.

    Note:

    -   You can update field values and null other fields in the same job.
    -   Ensure the field you are nulling is not required in the schema.
    -   For custom fields, verify that the default value is blank. Otherwise, Data Loader resets the field to its default value instead of leaving it blank.

5.  Upload the updated CSV file and run the job.

-   [Sample File 1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7f221923-296b-4f19-9d8c-a61f1ee21848?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdmMjIxOTIzLTI5NmItNGYxOS05ZDhjLWE2MWYxZWUyMTg0OCIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiYzM0ZDM4YjUwN2U1NDM4YjlkM2IyNDc3MjIxYjY4NTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Dz0Ryt6XXFl1iuhI5o3uL3o0sZAYUchnFvSkQLpjYIU&response-content-disposition=attachment%3B+filename%3D%22Sample_File_Nulling_1.csv%22)

-   [Sample File 2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f7eae496-722b-4063-9a93-fafe0f8b4acf?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY3ZWFlNDk2LTcyMmItNDA2My05YTkzLWZhZmUwZjhiNGFjZiIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiYTk5MWY5ODUzNzBiNDk0ZjkyYzc1ZTkwOWNiZWFiMDAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.bjmxfSeWWwHugNgdu0MaLA1a-TEFHtJTjTlfKfZCQ9I&response-content-disposition=attachment%3B+filename%3D%22Sample_File_Nulling_2.csv%22)
