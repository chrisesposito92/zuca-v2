---
title: "Platform roles"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/user-roles/platform-roles"
product: "zuora-platform"
scraped_at: "2026-02-20T17:40:45.309Z"
---

# Platform roles

This reference lists the user roles and permissions associated with the Platform role.

See [User roles](/zuora-platform/security-and-identity/administrator-settings/user-roles) for general information about user roles.

## Platform user roles

Your Zuora tenant has the following Platform user roles by default.

-   Administrator: Users with this role can access the Zuora Platform, administer security policies, view users, manage users, and manage user roles.

-   Standard User: Users with this role can only access the Zuora Platform, create test tenants, and have API write access.


You can also create custom Platform user roles as needed by clicking Add new role .

## Platform permissions

The following table describes the Platform user permissions, and shows whether each permission is enabled for Platform Standard Users.

| Permission | Description | Granted to standard user? |
| --- | --- | --- |
| UI Access | The user can access the Zuora UI, including Billing and Payments. | Yes |
| API Write Access | The user can create, update, and delete data using Zuora SOAP and REST APIs. | Yes |
| Audit Trail Access | The user can access Audit Trail in the Zuora UI. To enable the Audit Trail access in the Zuora UI for a user role, administrators must select both the Audit Trail Access and the Data Query UI Access for this role. | No |
| Data Query UI Access | The user can access Data Query in the Zuora UI. | Yes |
| Run Data Queries (In UI Or API) | The user can run or save data queries through the Zuora UI, and manage data queries through the API. | Yes |
| Delete Custom Objects | The user can delete custom object definitions with no records and can delete custom object records. | Yes |
| View Custom Objects | The user can view custom object definitions and records. | Yes |
| Edit Custom Objects | The user can create or edit custom object definitions and records. | Yes |
| Edit Page Layouts | The user can configure the layout of UI pages. For more information, see UI Builder . | No |
| Refresh Central Sandbox | The user can view the Test Environments page and start a developer/central sandbox refresh. | Yes |
| Manage Global Tenants | The user can view and edit the tenant profile including your contact information, locale,and time zone. | No |
| Workflow View Access | Read-only access to Workflow. The user can view details of the workflow definitions, workflow versions, tasks, the Run History tab, and the Metrics tab. However, the user cannot run or manage the workflows. | Yes |
| Workflow Run Access | The user with this permission can run the workflow definitions. | Yes |
| Workflow Manage Access | The user with this permission can create, update, delete and manage workflows definitions and versions. | Yes |
| Workflow Manage Global Settings Access | Administrator of Workflow. The user with this permission can manage Zuora Login, External SMTP, Workflow Global Settings, etc. | Yes |
| View Users | The user can view users in the Zuora tenant. | No |
| Manage Users | The user can manage users. | No |
| Manage Security Policies | The user can manage security policies. | No |
| Manage User Roles | The user can manage user roles and perform all of the tasks described in this topic. | No |
| Deployment Manager | The user can perform migration of metadata objects (Settings, Custom Fields, Notifications, etc) from a source tenant to a target tenant. | Yes |
| Data Loader | The user can perform migration of transactional data on Billing objects | Yes |
| System Health Dashboard | The user can view the system health dashboards. | No |
| View Meters | Read-only access to Mediation. The user can view details of the meters, events, and Audit Trail. However, the user cannot run or manage the meters and event definitions. | Yes |
| Run Meters | The user with this permission can run the meters and ingest usage with Streaming API. | Yes |
| Configure Meters and Events | The user with this permission can create, update, delete and manage meters and event definitions. | Yes |
| View Logic | The user can view custom logic rules. For more information, see Custom Logic. | No |
| Manage Logic | The user can manage custom logic rules. For more information, see Custom Logic. | No |
| Events & Notifications View Access | The user can view Events and Notifications data in the UI or via API operations of the GET type. | No |
| Events & Notifications Manage Access | The user can create, update, or delete Events and Notifications data in the UI or via API operations of the POST, PUT, or DELETE types. | No |
| Events & Notifications Resend Access | The user can resend notification histories in the UI or via the resend notification history API operations. | No |

## Allowable login IP address ranges

With the Platform Standard User role and any custom Platform user role, you can specify one or more IP address ranges to restrict user access to Zuora. Users assigned to these roles can only log in to Zuora within these specified ranges.

Note: This capability is not available on the Platform Administrator User role.

This option adds a powerful security layer to Zuora user access. Plan this implementation carefully. Work with your IT security officer to determine the setup that is appropriate for your tenant.

## Specifying IP address ranges

When creating a custom user role, the Allowable Login IP Address Ranges section appears only after selecting Platform permissions and then saving.

The IP address ranges that you specify apply to all permissions selected for the role. If you do not specify a range, the user can log in from any IP address.

If you enter a range that does not include your current IP address, the following message appears:

`Warning: The list of IP ranges does not cover your current IP address (101.111.111.111).`

If the range is valid, select the check box to confirm and then click save . Otherwise, click cancel to start over.

## Restricted access error messages

Users will receive the following error message if they try to access the Zuora UI or make SOAP or REST API calls from an IP address outside the specified range:

`Your IP address may be restricted. Please contact the administrator at your company for help.`
