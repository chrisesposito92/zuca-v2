---
title: "Create a NetSuite Connector user"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/create-a-netsuite-connector-user"
product: "zuora-platform"
scraped_at: "2025-12-24T05:51:18.466Z"
---

# Create a NetSuite Connector user

Learn how to create a NetSuite Connector user

Many of the custom fields in NetSuite have been restricted to the Administrator. A user with the Administrator privilege can modify the permissions of these custom fields.

Zuora recommends that the integration user uses the all-access System Admin role to simplify the setup process. If you want to create a custom role, use the following instructions to create and configure the role.

## Creating a web services user

You need to setup Web Services Preferences with a specific User and Web Services Default Role of Administrator. In NetSuite, select Setup > Integration > Web Services Preferences.

Note:

If you have a SuiteCloud Plus License, and would like to use concurrent sessions and multithreaded syncing to increase performance, you will need to check the box for Concurrent Web Services User on the Access tab of the employee you wish to use Web Services for NetSuite Connector.

![Concurrent Web Services User](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4169bf2f-92f6-4447-8a85-052b8f320373?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQxNjliZjJmLTkyZjYtNDQ0Ny04YTg1LTA1MmI4ZjMyMDM3MyIsImV4cCI6MTc2NjY0MTg3NSwianRpIjoiMTI0MDcwZmU0NjM3NDZhZDhkYTRlMjVhNWMwZWM4MTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.xCKoYnfW7DTJQNR7SmwhMRCeKESjtoIEPb48JXwaJPY)

Create the Web Services user if you want to create a custom role to manage NetSuite Connector, and not use the standard Administrator role. The User and Role configured for Web Services must have sufficient permissions to access the objects required by NetSuite Connector. To simplify setup, Zuora recommends that you use either a Web Services user that you configure, or a default Administrator user or role. The NetSuite Connector user (either Web Services or Administrator) must have the following permissions:

| Object | Category | Permission Level |
| --- | --- | --- |
| Customers | List | Full |
| Items | List | Full |
| Customer Payment | Transaction | Full |
| Customer Refund | Transaction | Full |
| Credit Memo | Transaction | Full |
| Invoice | Transaction | Full |
| Order or Sales Order | Transaction | Full |
| Accounts | List | View |
| CRM Groups | List | View |
| Payment Methods | List | View |
| Accounting Lists | Setup | View |
| Other Lists | Setup | View |
| Web Services | Setup | Full |
| Currencies | List | Full |
| Locations | List | Full |
| Classes | List | Full |
| Departments | List | Full |
| Subsidiaries(NetSuite OneWorld Edition Only) | List | Full |

## Removing role restrictions

You must remove any restrictions related to Departments, Classes, Locations, or Subsidiaries that are used in the integration or Zuora record configuration. Select Setup > User/Roles > Manage Roles, then click Customize or Edit to edit the restrictions associated with a user role.

## Verifying users and roles

To verify the User or Role in NetSuite, select Setup > User/Roles > Manage Users or Manage Roles. View Manage Users to see the Role assigned to a user, and view Manage Roles to see the list of available roles.
