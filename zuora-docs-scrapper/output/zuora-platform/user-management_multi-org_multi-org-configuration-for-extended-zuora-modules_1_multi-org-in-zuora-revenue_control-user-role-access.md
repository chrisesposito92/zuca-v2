---
title: "Control user role access"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-for-extended-zuora-modules_1/multi-org-in-zuora-revenue/control-user-role-access"
product: "zuora-platform"
scraped_at: "2026-01-15T22:00:26.955Z"
---

# Control user role access

Learn how to assign organizations to user roles to control access and data processing capabilities.

Complete the following steps to assign different organizations to different user roles:

1.  Navigate to Setups > Security . The Roles page is opened.
2.  Hover the mouse over the line of the target role and click the pencil icon .
3.  In the Edit Role window, click Assign Orgs .
4.  From the Available Organization list, select the organizations that you want the current role to access.
5.  Use the arrow icon to move your selection to the Selected Organization list.
6.  Save your changes and close the window.
7.  Repeat Step 2 - 6 for other user roles if necessary.

After the changes are saved, each user role can access and process the data only for the assigned organizations after the user logs in.

For example, settings in the following graphic ensure that data of all organizations can be accessed by the superuser role.

![user-role-control.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/415e4fa2-adbc-47b3-8b38-67d2943b9f68?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQxNWU0ZmEyLWFkYmMtNDdiMy04YjM4LTY3ZDI5NDNiOWY2OCIsImV4cCI6MTc2ODYwMDgyMiwianRpIjoiOTE2MzhlMTMyN2IxNDI2ZTgwYmM4NzdjMWNkYmUzYmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.GDAtEUWEBve4TGZcVV9pEuQ9-KNspGtxPN8Yf9iheKs)
