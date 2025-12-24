---
title: "Upgrade Zuora 360"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/upgrade-zuora-360"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:49.401Z"
---

# Upgrade Zuora 360

The article covers all the required upgrade tasks from the earliest supported version of Zuora 360.

Before you upgrade Zuora 360, determine the Installed Version of Zuora 360 in your org:

1.  In Salesforce, navigate to Setup > Installed Packages

2.  Note the Version Number of the {{360}} package.


Even if you are upgrading from a later version of Zuora 360, we recommend that you review all the required tasks and upgrade as it applies to the current state of your Zuora 360 org.

Zuora recommends that you schedule the first full sync to a time that will not affect your business processes. Examples of the configurations that can affect upgrade performance are:

-   Object triggers implemented on the most-used objects (Billing Account, Subscription, Subscription Charges, Invoices), especially if the triggers are using complex security sharing logic.
-   Cascade deletes of child objects, if you have defined master/detail relationship between these objects and other custom objects.

1.  Install the Zuora 360 managed package in Salesforce. Contact Zuora Global Support for the installation link. See Install the Zuora 360 Package for detailed information. Return to the upgrade steps when the installation completes.
2.  Add the tabs for Zuora 360 to your Salesforce org:

    -   Schema Setup

    -   Connection Setup


3.  Update object permissions to sync users . If your sync users do not have the System Administrator profile, assign permissions to sync users.
4.  Update field permissions to sync users . If your sync users do not have the System Administrator profile, assign permissions to sync users.
5.  Assign page layouts to user profiles .
6.  Update the Invoice page layout .
7.  Grant access to Apex classes to profiles .
8.  Review and update your Order Builder code for the date time field type changes and time zone support .
9.  Update field sets .
10.  Review and migrate new fields via migration settings .
11.  Perform a sync of Account & Related Objects .
