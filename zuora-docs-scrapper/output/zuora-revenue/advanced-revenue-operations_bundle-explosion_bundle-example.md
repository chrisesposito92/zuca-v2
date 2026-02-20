---
title: "Bundle example"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/bundle-explosion/bundle-example"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:19:43.428Z"
---

# Bundle example

This example demonstrates how Zuora Revenue splits a sales order line into three child lines across different product categories.

In this example, Zuora Revenue is expected to split one sales order line into three child lines that fall into different product categories.

To achieve this goal, the following actions are required:

1.  Three POB templates are created for the three child lines. For information about how to create POB templates, see Create POB Template . ![children-line-pob.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a5b9c0b2-88f6-4b79-b511-37eaedd3a880?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE1YjljMGIyLTg4ZjYtNGI3OS1iNTExLTM3ZWFlZGQzYTg4MCIsImV4cCI6MTc3MTcwODc3NiwianRpIjoiNTg4YWNiNDI4YzUzNDkyZjljMmJmZDIwNDljZjE3MDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.A1PA822VdpcUEMlPvvhlS2-eL9r-d8twXQ1gui3XNKc)

2.  The advanced assignment rule is created and associated with each POB template. The following graphic shows the rule that is associated with the Maintenance\_OverTime POB template as an example. ![POB-rule-maintenance.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/00f58447-1811-45e1-86c1-3b852b6c533f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAwZjU4NDQ3LTE4MTEtNDVlMS04NmMxLTNiODUyYjZjNTMzZiIsImV4cCI6MTc3MTcwODc3NiwianRpIjoiMmI4YjEyN2JhNjZiNDMyMTg3ZmQ1YmExMTZkOTQ0ZmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.fo8DQFLObRwApq-byFZAV78UyOVlaW9hGDv_dXRSHnc) When you click the button in the Actions column, you can see this rule has "Product Category = Maintenance" as the criteria. It is also the parent line. ![maintenance-criteria.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/288448c9-e89c-4e85-8d0d-088758abff47?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI4ODQ0OGM5LWU4OWMtNGU4NS04ZDBkLTA4ODc1OGFiZmY0NyIsImV4cCI6MTc3MTcwODc3NiwianRpIjoiNGI1ZGUxZTdiYzVjNDZhZGE3OTkwNzQyZjVjYjM1YjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.6BF286klsJzYSxUhlkP1D_Ur4C-PB7BF2egyYNlbsLQ) The other two rules associated with other POB templates have "Product Category = Services" or "Product Category = Licenses" as the criteria. For information about how to define POB assignment rules, see Define POB Assignment Rules .

3.  Create a bundle template. In the Field Mapping tab, enable the Bundle Cfg Item Num and Product Category fields as the bundle criteria. The Bundle Upload Option is set to The combination of bundle criteria AND reference to the Parent Item Num identifies the Parent/Children Line(s) relationship .

4.  In the downloaded bundle file, fill in the data as follows and then upload the bundle definitions to Zuora Revenue.

    Note:

    In the uploaded bundle file, the line with the Split Type value specified is considered as the parent line. Its child lines must have the Parent Item Num value specified to build a correlation between the parent and the child. If multiple parent and child lines are uploaded in the same file, the correlation between the different parent and child lines must be maintained based on this logic so that bundle split can happen correctly.

    | Bndl Cfg Valid From | Bndl Cfg Valid Until | Parent Item Num | Sell Price Split Type | Sell Price Split Val | List Price Split Type | List Price Split Val | Bndl Cfg Quantity | Bndl Cfg Duration | Bndl Cfg Item Num | Product Category |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | 01/01/2019 |  |  | PCT_OF_SP |  | PCT_OF_LP |  | 1 |  | 101 | Maintenance |
    | 01/01/2019 |  | 101 |  | 60 |  | 60 | 1 | 12 | 102 | Licenses |
    | 01/01/2019 |  | 101 |  | 40 |  | 40 | 1 | 12 | 103 | Services |


## Result

After a sales order line is uploaded to Zuora Revenue as one single parent line, the sales order line is split into three lines in the Workbench as shown in the following graphic.

![bundle-rc-example.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2a1c2796-7c87-440f-b029-5f328704cf16?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJhMWMyNzk2LTdjODctNDQwZi1iMDI5LTVmMzI4NzA0Y2YxNiIsImV4cCI6MTc3MTcwODc3NiwianRpIjoiMzBkNmUwNzMyMmQwNDEwMTg3MmIwMDEwZmJmNWI0ODMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.HAR2XIU6atXNP41PR6xjKdzy2kP1_AH6rwVogcMsKK0) .
