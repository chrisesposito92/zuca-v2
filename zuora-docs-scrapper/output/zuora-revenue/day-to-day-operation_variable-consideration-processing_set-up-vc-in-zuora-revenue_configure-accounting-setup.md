---
title: "Configure accounting setup"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/variable-consideration-processing/set-up-vc-in-zuora-revenue/configure-accounting-setup"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:19:27.698Z"
---

# Configure accounting setup

Guide to setting up VC-related accounts in Zuora Revenue, including liability, revenue, and clearing accounts.

The following VC related accounts must be defined in Zuora Revenue for VC processing:

-   A liability account for accrual
-   A revenue account for VC revenue
-   A clearing account

Complete the following steps to set up an account in Zuora Revenue:

1.  Navigation to Setups > Applications .
2.  Open the side menu and click Accounting Setup . The Account Setup page is displayed.
3.  Click Unfreeze to make any changes to the accounting setup.
4.  To add an account type, click the Account Type tab and click the add icon on the Account Type page.
5.  In the New Account Type window, enter the account type in the Account Type field and select the account type ID from the Account Type ID list.
6.  To specify the account type, toggle the appropriate account type switch to Yes .
7.  Ensure that the VC Account switch and the Enabled switch are toggled to Yes . The following graphic shows an example of a VC account setup.![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1a791663-9fcc-400b-82b4-e473ae4ed54e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFhNzkxNjYzLTlmY2MtNDAwYi04MmI0LWU0NzNhZTRlZDU0ZSIsImV4cCI6MTc3MTcwODc2MywianRpIjoiYTQ5NDRkZTJhZWMxNDBkMjg0YmVmOWNhMDBmZTRlYzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.-Yl1B4X6q3CghzFu8x2KCtl70cq_jqd9YXEbtYp2p7I)
8.  Click the save icon to create the account type and close the window.
9.  (Optional) To edit the account mapping for the new account, locate the account type on the Account Type page and click the second pencil icon on the right.
10.  (Optional) In the Edit Account Mapping window, change the account mapping and save your changes.
11.  Repeat Step 4 ~ 10 to create all the required VC-related accounts.
12.  To freeze the accounting setup after your updates, click the Account Setup tab and then click Freeze .
