---
title: "Nested objects handling for CSV templates"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/nested-objects-handling-for-csv-templates"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:26.010Z"
---

# Nested objects handling for CSV templates

This guide walks you through preparing a CSV file for Data Loader, with a focus on nested objects and marker columns that simplify the data import process.

## Preparing the CSV file for Data Loader

Nested objects are data structures in which one object is placed within another, creating a hierarchy of related information. Imagine it as a series of containers within containers, each holding a specific set of related data. This structure helps organize data and shows the connection between the main object and its sub-components.

For example, an Invoice in Zuora Billing contains a collection of Invoice Items and Custom Rates. Each Invoice Item includes its own details, like Tax and Discount Items, creating a clear and organized data relationship. In Data Loader, this hierarchy is clearly defined using `IsMarker` columns, which help identify when a new object needs to be created within another, streamlining the data import process.

Nested Object CSV file Template for Standalone Invoices:

![Nested object CSV template](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/178079f5-a27b-43c6-9e43-cf0d621d3262?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE3ODA3OWY1LWEyN2ItNDNjNi05ZTQzLWNmMGQ2MjFkMzI2MiIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiZWE0OTMyZTY0NDMzNDlkYzgxNDk5ZmNjNWU3MjJiODciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.YfZLweOo3kvdZLKYm0cDTCF665MAuXFCK3zd5DDMtkQ)

-   The `IsMarker` column in Data Loader templates shows when a new object needs to be created. For example, in the Standalone Invoices template, the fields `IsNewInvoiceItem` and `IsNewCustomRates` indicate when a new item or rate needs to be added.

-   The `IsNew` marker columns in the CSV file are used to signal when new records should be created in the context of the file, not within Zuora Billing. For example, when adding an Invoice with multiple Invoice Items, the first row for that Invoice will have `IsNewInvoice =` `True` . The `IsNewInvoiceItem =` `True` indicates a new Invoice Item. Subsequent rows, representing additional Invoice Items for the same Invoice, will have `IsNewInvoice = False` or can be left blank since it is not a new Invoice anymore. This approach allows the CSV to maintain hierarchical relationships within a flat-file format.


![CSV file column values](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d13fa26b-8b7d-4b8d-8341-8969c7ae8501?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQxM2ZhMjZiLThiN2QtNGI4ZC04MzQxLTg5NjljN2FlODUwMSIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiNjI2YzU0NGVmY2NhNDgxYzhhNWRkZWRkZmM1NDg1YWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Qd6T-1s9A1IT0XoQKwEPuGbS84ki2kvUm_0cDrsga-Q)

-   For data accuracy, mapping the `IsMarker` column in the Field Mapping Interface is mandatory when the value of the `IsMarker` column is TRUE.
-   You may provide the value of `Ismarkercolumn` for the child object as True or False, depending on the nesting of the records required for creation.
-   When `IsMarker = True` all mandatory fields for the main object are required.

-   When preparing a CSV for updating records for a nested object, for example `productrateplancharge` the first IsMarker Column should be set to TRUE so that Data Loader is aware that a record has to be modified.


Refer to the following sample CSV files:

-   Importing Standalone Invoice - Sample 1
    -   [CSV Invoice - Sample CSV 1.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f3297275-2c0f-45ab-999e-c725bdbfbee8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYzMjk3Mjc1LTJjMGYtNDVhYi05OTllLWM3MjViZGJmYmVlOCIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiNTUzYzYzYWU3YzQzNDM0NWE1ZDFkNzhmODA4MDcxNGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.dfgUexUmSCRu4ZVDrA-w1FPwcYVQcnlQFErFUf8Jb0g&response-content-disposition=attachment%3B+filename%3D%22CSV_Invoice_-_Sample_CSV_1.csv%22)
-   Importing Standalone Invoice - Sample 2

    -   [CSV Invoice - Sample CSV 2.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/505d5018-586b-4bb5-be22-118c687e9382?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUwNWQ1MDE4LTU4NmItNGJiNS1iZTIyLTExOGM2ODdlOTM4MiIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiZTI1MjNjZjRjYzNjNDY4ZGE1ZjFhYWQ2MGRhM2U5MGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.K5rlak1aqqjyBBn-thJjICwtHu4JS_5Wow54uXQ-tFo&response-content-disposition=attachment%3B+filename%3D%22CSV_Invoice_-_Sample_CSV_2.csv%22)
-   Updating Product Rate Plan Charge Tiers

    -   [UpdateProductRatePlanCharge - Sheet.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7d647692-16b0-4eda-b9f7-ccd9ed5efe76?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdkNjQ3NjkyLTE2YjAtNGVkYS1iOWY3LWNjZDllZDVlZmU3NiIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiODE3ZTcwMDg3NjFjNDQyNzg0MGEwNzE2YjlmYjcyZDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.5tKRhHRiqxNCiLqGONpYj32OYV-5zpdmpf-z_gLUD6Y&response-content-disposition=attachment%3B+filename%3D%22UpdateProductRatePlanCharge_-_Sheet.csv%22)
-   Advance Multi-Action Orders Sample CSV files:

    -   [Add Product with Recurring Flat Fee Charge - Advance Multi Action Orders- Sample 1.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e8ac92ac-216b-4db5-9dee-7802cc29062d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU4YWM5MmFjLTIxNmItNGRiNS05ZGVlLTc4MDJjYzI5MDYyZCIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiZDQ4NTNkZTczYjlkNGE3ZDgwZTdkZmFlZjY1MmFiNjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9._Dr4ZiRDSwQCk04r8XvnzHC6uIW59vCj73x3cn_oL08&response-content-disposition=attachment%3B+filename%3D%22Advance_Multi_Action_Orders-_Sample_1.csv%22)

    -   [Renew Subscription and Remove Product - Advance Multi Action Orders- Sample 2.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/49379add-eab6-451b-970d-05cf72506958?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ5Mzc5YWRkLWVhYjYtNDUxYi05NzBkLTA1Y2Y3MjUwNjk1OCIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiMTYxYmJlZjQwYzliNGZiNmJjZjRhMmY2YzIyZTkyYzQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.-HfmyGNV9PJeJeSnmE5H6n5ukxxCqFNDGYfNSDFj-L0&response-content-disposition=attachment%3B+filename%3D%22Advance_Multi_Action_Orders-_Sample_2.csv%22)

    -   [Create Subscription with Multiple Charges - Advance Multi Action Orders- Sample 3.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/489a2610-2ecc-4121-add5-c0f19ffa2d5c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ4OWEyNjEwLTJlY2MtNDEyMS1hZGQ1LWMwZjE5ZmZhMmQ1YyIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiM2I1OTlhM2UyYTBkNDcwZWIzNmJlYWM0ZmFhZWY4YWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.ZoflkomaCVo9ln53OApNss48gQOg04xjyuQtNbcBOZ8&response-content-disposition=attachment%3B+filename%3D%22Advance_Multi_Action_Orders-_Sample_3.csv%22)

    -   [Create Subscription with Multiple Charges - Advance Multi Action Orders- Sample 4.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/69b5a0a0-37f7-4fa3-9fc9-816e057a3566?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY5YjVhMGEwLTM3ZjctNGZhMy05ZmM5LTgxNmUwNTdhMzU2NiIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiYzk5YTNhMzYzNmQ5NDMyMWE4YmExYzhiZmQ0ZTlkYjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.3vqAHLhwO4mrqhquyf2kiG6bUXlzRDV4mq8xZTpCF10&response-content-disposition=attachment%3B+filename%3D%22Advance_Multi_Action_Orders-_Sample_4.csv%22)

    -   [Create Subscription with Multiple Rate Plans - Advance Multi Action Orders- Sample 5.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/af7a73d5-5486-420c-bed6-00ca5bbd8af1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFmN2E3M2Q1LTU0ODYtNDIwYy1iZWQ2LTAwY2E1YmJkOGFmMSIsImV4cCI6MTc3MTY5NTM4MCwianRpIjoiMTMzN2YwY2UzYzU5NDcyNjk2ZWQ3YjE2NWU4NGMxMTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.XzAyj0w1naqe2E_7i5p4o3tSfiLAfGAUMh8BmJZE3FI&response-content-disposition=attachment%3B+filename%3D%22Advance_Multi_Action_Orders-_Sample_5.csv%22)
