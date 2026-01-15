---
title: "Nulling field values with in Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/nulling-field-values-with-in-data-loader"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:16.838Z"
---

# Nulling field values with in Data Loader

The article instructs on how to set field values to null using Data Loader by following a series of steps, including creating a job, selecting the update operation, and modifying a CSV template.

Nulling a field means setting its value to blank or removing the existing value. With Data Loader, you can null field using the Update action. Follow these steps to null field values:

1.  Click \+ New to create a new job drop-down.
2.  Select the Update operation.
3.  Choose the appropriate template for the object you want to update.
4.  Click Download CSV Template .
5.  In the downloaded CSV file:

    -   Enter True in the IsMarker column (if applicable for the object).
    -   Provide a valid Record ID for each row — this is mandatory for updates.
    -   Select and retain only the columns you want to update.
    -   For the fields you want to null, type the word Null in the corresponding cells.


You can delete unused columns from the template to simplify the file.

-   You can combine field updates and nulling in a single job — Data Loader supports updating and nulling different fields in the same record.
-   Make sure the field you are nulling is not a required field in the schema.
-   If you are nulling a custom field, make sure its default value is blank. Else, Data Loader will reset the field to its default value instead of keeping it blank.

Sample Files:

[Sample File 1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7f221923-296b-4f19-9d8c-a61f1ee21848?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdmMjIxOTIzLTI5NmItNGYxOS05ZDhjLWE2MWYxZWUyMTg0OCIsImV4cCI6MTc2ODYwMDY5NCwianRpIjoiMjUwZTZhYTdkODQ2NDdlMDkxMmVhNjU3NDU0ZTY4ZTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.cXAKlmerWdh5JeYrS32A0wtf9ytaflGj95XQ32eFXos&response-content-disposition=attachment%3B+filename%3D%22Sample_File_Nulling_1.csv%22)

[Sample File 2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f7eae496-722b-4063-9a93-fafe0f8b4acf?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY3ZWFlNDk2LTcyMmItNDA2My05YTkzLWZhZmUwZjhiNGFjZiIsImV4cCI6MTc2ODYwMDY5NCwianRpIjoiYzllZjIyMmQyNWFlNDA0ZDhjM2I4OTFiYTM3ODE3OTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.gQ0lUJ12hz8L3I6yvP7xIqM9NyZrL6zEIS8gBiiFAd4&response-content-disposition=attachment%3B+filename%3D%22Sample_File_Nulling_2.csv%22)
