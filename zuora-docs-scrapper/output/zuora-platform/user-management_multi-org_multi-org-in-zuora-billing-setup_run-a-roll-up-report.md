---
title: "Run a roll-up report"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-in-zuora-billing-setup/run-a-roll-up-report"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:24.118Z"
---

# Run a roll-up report

Learn how to consolidate standard reports at the parent org level and create a roll-up report for selected org units.

All standard reports will be consolidated and available at the parent/root org level.

The report preview will display the individual org units selected for the roll-up along with the cumulative value.

The gif below demonstrates an example of creating a rollup for an invoice data source:

![Create a rollup](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/52f57287-3d7c-42a8-8aaf-7261a1cc4505?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUyZjU3Mjg3LTNkN2MtNDJhOC04YWFmLTcyNjFhMWNjNDUwNSIsImV4cCI6MTc3MTU1NzkxOSwianRpIjoiMDlkMDBhZjMyNjA5NGE2M2IyODZkYjZlY2E4ODgyOTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.jaaUIAGep-vk_bvyCC9KmComWH2_1u0Wn_4YtGWtyDU)

1.  Navigate to the Org Switcher on the right-hand top of the screen.
2.  Select all the org units that you wish to include in the roll-up report.
3.  On the left navigation go to Reporting > Reporting
4.  Click Create New Report
5.  Create a Summary Report Follow the steps mentioned in [Create a Summary Report](/zuora-platform/data/reporting/use-reporting/create-a-summary-report) to select a data source and customize the report.

    The report preview will display the individual org units selected for the roll-up along with the cumulative value.

    ![Create a roll-up](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/52f57287-3d7c-42a8-8aaf-7261a1cc4505?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUyZjU3Mjg3LTNkN2MtNDJhOC04YWFmLTcyNjFhMWNjNDUwNSIsImV4cCI6MTc3MTU1NzkxOSwianRpIjoiMzJhZmNhMzFhMzI4NGJhN2E0YWUyOTlmNmE5OWI0ZWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.UjetaHAMCWbEIDwY5pa8bR3DJyIoDzlQXodTcPuUwHk)

    The gif below demonstrates an example of creating a rollup for an invoice data source:

6.  The user first uses the org switcher to select the Org Units to be included in the roll-up report creation.
7.  Navigates to the Reporting screen to Create a New Report.
8.  Selects the data source (Invoice in our example). You can also customize the view of your report here.
9.  On running the report, you can see that the Organizations included in the report are the ones the user selected in Step 1.
