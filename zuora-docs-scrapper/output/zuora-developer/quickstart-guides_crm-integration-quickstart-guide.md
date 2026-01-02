---
title: "CRM integration quickstart guide"
url: "https://developer.zuora.com/quickstart-guides/crm-integration-quickstart-guide/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:20.436Z"
---

#

CRM integration quickstart guide

##

Goal

By the end of this guide you will have integrated your CRM with Zuora Billing using our APIs and empowered your CRM users to view customer billing data extracted from Zuora Billing. With this interface, your customer support staff will:

-   Promptly answer invoice and payment questions from your customers.
-   Analyze customer segments, for example:
    -   Identify your late payers.
    -   Find "white space" opportunities for customers that have purchased one of your products and may purchase another.
-   Identify and rank customers by their value to your business.

This integration benefits your business by both reducing customer inquiry resolution time and in identifying new upsell and cross sell opportunities.

##

Integration choices

Verify if there is no [existing productized connector for your CRM](https://knowledgecenter.zuora.com/Zuora_Platform/Integration/Integration_Hub). If there is no pre-built connector, does your company have an iPaaS solution that supports both your CRM and Zuora? Leveraging iPaaS is an efficient way to integrate your CRM and Zuora.

If you require a custom solution, there are three choices:

-   **Synchronous** - Create new or modify existing CRM screens that query Zuora Billing in real time using the Zuora Billing v1 API.
-   **Event driven** - Configure Zuora Billing to automatically send newly created data to your CRM.
-   **Polling** - Periodically query Zuora Billing for new data to replicate to your CRM.

Before determining the choice, complete the tasks in the remainder of this section.

###

Define integration scope

Agree with your business the Zuora Billing information that is critical. Adjust this minimal list based on their feedback:

-   **Billing Account** - Referred to as just "account" in our API and documentation. The Account is the parent of all billing data for your customers and includes contacts, orders and invoices. You will add a new custom field to the Zuora Billing Account to store the equivalent CRM Account identifier for the same real-world customer. Validate if any billing account hierarchies are relevant to your integration.
-   **Bill-to Contact** - This is the customer person or group who receive the invoices. There is a default Account level Bill To, but individual Orders can have their own Bill To Contact. Zuora recently added an optional ‘Ship To’ contact option. In Zuora, Contacts are a separate object, not attributes of an Account and a Contact includes both physical address information as well as contact information such as email.
-   **Order, Order Actions, Charges, and Order Line Items** - These objects record what the customer ordered, when and at what price. An order will have at least one Order Action or one Order Line Item, but multiple of each or a combination of each in a single Order is common. Order Actions create and manage digital goods and services such as subscriptions or other recurring charges or consumption/usage charges. Order Line Items capture orders for physical goods.
-   **Invoices and Invoice Items** - Optionally you can add Payments, Refunds, Credit Memos and Debit Memos. Zuora invoices automatically track an invoice `balance` field that is constantly updated, so are `creditMemoAmount` , `paymentAmount` , and `refundAmount` . Leveraging these can reduce the volume of data shared with your CRM. You should continue to store invoice PDFs in Zuora Billing as these are large and numerous. Most billing queries only need the information that the invoice PDF was generated from, not the invoice PDF. But [List all files of an invoice](https://developer.zuora.com/v1-api-reference/api/operation/GET_InvoiceFiles/) is available to retrieve the invoice PDF if needed.

A detailed map of source objects and fields to target objects and fields is essential.

The code samples in this guide use our REST API end points, but [our client libraries](https://developer.zuora.com/docs/guides/libraries/) support the same calls so you can use Java, node.js, Python or C# instead.

###

Gather basics

Before you choose, determine the following vital information. These will help guide your integration choice:

-   Determine the number of records that must be transferred from Zuora Billing to your CRM each month. A formula and queries to determine these numbers are in [Appendix A](#appendix-a:-sizing-queries) . Be sure to account for future growth in the next 24 months.
-   Determine if your Zuora Billing implementation has periodic transaction peaks. For example, some Zuora Billing customers bill a large majority of their customers on the 1st of the month. On that date there is a much higher volume of invoices generated. These will then need to be transferred to your CRM promptly. Identify the API call limits your CRM permits and determine if this will be sufficient for this integration.
-   Determine if your CRM can handle the additional volume of data that you will store..
-   Determine the additional costs for additional API calls into your CRM usage
-   Determine the additional costs for storage with your CRM.
-   Determine the restrictions on the number of outbound calls your CRM can make to another system.
-   Review [Zuora's concurrency and rate limits](https://developer.zuora.com/docs/guides/rate-limits/) to ensure your proposed integration will be compliant.
-   Complete the detailed field attribute mappings between Billing and CRM.

###

Determine integration implementation choice

| Choice | Description | Pros | Cons |
| --- | --- | --- | --- |
| Synchronous | You create new, or modify existing, CRM screens that query Zuora Billing in real time using the Zuora Billing v1 API | CRM users will always have the very latest billing information. No CRM storage required. | CRM and Billing are tightly coupled, can be brittle compared to the other choices. |
| Event Driven | You configure Zuora Billing to send newly created data to your CRM automatically. | Near real time. Can implement a ‘back pressure’ pattern if CRM is being overwhelmed. | Greater implementation effort. More complex as a message queue and worker tasks are needed. Sufficient CRM storage required. |
| Polling | Build a process that periodically queries Zuora Billing for new data to replicate to your CRM | Robust, likely simpler and quicker to implement. Resilient to failure with easy recovery. | Longer latency. Latency can worsen if Billing generates more records than your CRM can handle in any time window. Sufficient CRM storage required. |

While we include examples of the Zuora Billing API calls and configuration needed, implementing message queues, worker tasks and the necessary CRM API calls are beyond the scope of this document. Hybrid integration approaches that combine these methods is outside the scope of this document.

##

Prerequisites

Before getting started, ensure you have got:

-   **The implementation choice** : You must complete the tasks in the previous section and make a decision on which integration type to implement.
-   **API access credentials** : For both your CRM and Zuora Billing in both production and test/developer environments. Zuora’s Billing API [Get Started tutorial](https://developer.zuora.com/docs/get-started/introduction/) explains how to get the OAuth credentials needed for the Zuora Billing API.
-   **Basic understanding of REST API** : Familiarity with the REST API that uses JSON for requests and responses.
-   **Access to a Zuora Billing sandbox** : Every Zuora customer is issued at least one sandbox. If you need an additional one for this project you can request one for an additional charge from Zuora.
-   Determine which communication profiles are used by Zuora Billing. This
-   **CRM knowledge** : Familiarity with your CRM's data model and upsert APIs. Many companies have implemented middleware to push data between systems, you may substitute "your middleware" for "your CRM" throughout this document, the Zuora setup and interface is the same.

##

Integration steps

After this summary of the steps of each implementation choice, we'll provide details including code samples.

###

Basic steps regardless of integration implementation choice

1.  [Create and populate a CRMAccountID\_\_c custom field](#adding-crmaccountid__c-to-account) on each Zuora Billing Account that contains the CRM account identifier for the same customer. When populated, require the business sign off that the value in this field refers to the correct CRM customer.
2.  Choose one of the following three choices:
3.  [Synchronous Steps](#synchronous-steps)
4.  [Polling Steps](#polling-steps)
5.  [Event Driven Steps](#event-driven-steps)

###

Synchronous Steps

Build out any necessary screens, fields, objects in your CRM. We recommend you utilize the synchronous object query feature for obtaining the data to populate your new screens and fields with. The end point for each object is listed in the table in the [Repeat as needed](#repeat-for-all-objects) section below under [Polling Steps](#polling-steps). You will use the exact same feature but with different filters. Polling is high water mark timestamp based, instead you’ll be querying for a specific object or collection of objects

###

Polling Steps

1.  [Establish a high water mark for each object](#high-water-marks-and-zuora-billing) , representing the earliest point in time you want to obtain Billing object data. Sort by the object’s updated timestamp and so you reset the timestamp to the last retrieved timestamp. Agree polling interval, e.g. daily, hourly.
2.  Every polling interval run [the integration queries](#integration-queries) to collect new or updated object data using the last high water mark for each object.
3.  Process the retrieved records, upserting records in your CRM.

###

Event Driven Steps

1.  [Configure event notifications](#configure-event-notifications) for each object.
2.  Implement the message queue and worker processes needed to upsert the queued event data into your CRM.

##

Basic step details

###

Adding CRMAccountId\_\_c To account

In the next step you will be pulling Billing Account information out of Zuora Billing for upsert to your CRM. But first you must ensure Zuora Billing records record the correct CRM Account.

Zuora implementations usually have multiple custom fields that have been added to the out of box Zuora Billing objects, including the Account object. Here you will create one to store the CRM Account Number, or Id, for the same customer. Instructions on [how to create a custom field are in our Knowledge Center](https://knowledgecenter.zuora.com/Zuora_Platform/Extensibility/Custom_Fields/Manage_custom_fields_with_the_Object_Manager). `CRMAccountId__c` should be a text field long enough to capture the CRM account identifier. Tag the new field as **Filterable (Indexed)** and **Auditable**. Do not make the field required. Do not use the existing `CRMId` field on the Account object for this instead. The `CRMId` field has a predesignated role with restrictions, which is used by our Salesforce integration product, making it unsuitable for a custom integration.

Match the accounts carefully between Billing and CRM. Use Data Sources or Data Query to get a list of Zuora Billing account IDs, numbers, and names for comparison with a similar list from your CRM. You can use [Data Loader](https://knowledgecenter.zuora.com/Zuora_Platform/Data_Management/Data_Loader/AB_Get_started_with_Data_Loader) to update the Billing Accounts with the correct value for the `CRMAccountId__c` field. Include the `CRMAccountId__c` custom field in the downloaded **Accounts and Contacts** template. Your input file only needs to have the Billing Account Id value in the first column and the `CRMAccountId__c` value. For this update, the other fields in the template can be blank.

###

Polling details

####

High Water Marks and Zuora Billing

Every Zuora Billing object includes the following automatically populated attributes:

-   ID: A unique object identifier, 32 character alphanumeric string.
-   CreatedDate: When this object was first created.
-   UpdatedDate: When this object was last updated.

Despite their name these fields are not dates, they are datetimes of the format, ‘2025-01-01T03:18:09’. We will use UpdatedDate as the basis of our ‘high water mark’. Each object will require their own high water mark which you should track in your integration or your CRM.

####

Integration queries

Zuora Billing provides options for querying data from Zuora. In this guide we will use Zuora Billing’s v1 API Object Query. This provides synchronous queries for key Billing objects.

Here is a detailed [tutorial on how to use Object Query](https://developer.zuora.com/docs/guides/expand-filter-fields-sort/), including code samples and JSON responses. Below we’ll describe the options chosen for our first query, consult the tutorial for further options.

####

Polling query billing accounts

Here’s an example of [an object query to query accounts](https://developer.zuora.com/v1-api-reference/api/operation/queryAccounts/) updated since the specified time, 2:30pm on March 13th, 2025. Replace $ztoken with a valid OAuth bearer token:

```bash
curl --request GET \
--url "https://rest.apisandbox.zuora.com/object-query/accounts?pageSize=99&\
account.fields[]=id,updatedDate,name,accountNumber,balance,currency,autoPay,batch,billCycleDay,billToId,creditBalance,lastInvoiceDate,mrr,paymentTerm,CRMAccountId__c&\
filter[]=updatedDate.GT:2025-03-13T14:30:46-07:00&\
sort[]=updatedDate.asc" \
 -H "Authorization: Bearer $ztoken" \
 -H "Content-Type: application/json"
```

| URL Component | Description |
| --- | --- |
| https://rest.apisandbox.zuora.com/object-query/accounts | Object Query root URL. Here we're using a North American based API Sandbox tenant and running an object query on Accounts. You may need to modify this. Confirm your base URL by comparing the Tenant UI Login entries in the Data Center documentation , and use the base URL in the ‘REST API’ entry when calling our REST API |
| pageSize=99 | Return up to 99 accounts, if there are more a cursor, a long alphanumeric string will be returned. You then resubmit your call including the cursor to retrieve the next 99 accounts. See the Pagination section in Expand, Filter, Fields and Sort. |
| account.fields[]=id,updatedDate,name,accountNumber,balance,currency,autoPay,batch,billCycleDay,billToId,creditBalance,lastInvoiceDate,mrr,paymentTerm,CRMAccountId__c | fields[] tells our server that we only want the listed fields. Add or remove fields to meet your needs. List of available fields is included in each object's reference documentation. |
| filter[]=updatedDate.GT:2025-03-13T14:30:46-07:00 | High water mark filter that will ignore unmodified objects since the datetime specified. |
| sort[]=updatedDate.asc | Sort on the updatedDate so you can pull the high water mark from the last account returned for the next scheduled query. |

####

Polling query contacts

The following code sample is an [Object Query call](https://developer.zuora.com/v1-api-reference/api/operation/queryContacts/) to query contacts updated since the specified time:

```bash
curl --request GET \
--url "https://rest.apisandbox.zuora.com/object-query/contacts?pageSize=99&\
contact.fields[]=id,updatedDate,accountId,firstName,lastName,city,country,workEmail&\
filter[]=updatedDate.GT:2025-03-13T14:30:46-07:00&\
sort[]=updatedDate.asc" \
 -H "Authorization: Bearer $ztoken" \
 -H "Content-Type: application/json"
```

Your CRM sytem might have the billing contact details. Our example provides only enough information so the CRM user can see who receives the invoice. The previous Account query included the `billToId` field, which will be an ID that matches a Contact object ID value.

| Object |
| --- |
| Account |
| Contact |
| Invoice |
| Invoice Items |
| Order |
| Order Line Item |
| Order Action |
| Subscription |
| Rate Plan |
| Rate Plan Charge |
| Rate Plan Charge Tier |

####

Repeat for all objects

Back in [Define integration scope](#define-integration-scope), we suggested a minimal list of data to share with your CRM. Here’s a table of the objects and end points. Use the same query format we showed with Accounts and Contacts.

Review the suggested list with your business to ensure they have all the information they need but nothing more. If your implementation does not use, for example, Order Line Items, leave that out. You can also choose to add additional filters, for example only posted invoices are sent to customers, so adding an additional filter on an **Invoice Status** of **Posted** will help reduce the storage burden in your CRM.

If you have yet to take advantage of Orders and are still using Subscribe/Amend, you should ignore the Orders objects listed in the table but add [Amendment](https://developer.zuora.com/v1-api-reference/api/operation/queryAmendments/).

###

Synchronous details

Your synchronous implementation should use the same Object Query feature and many of the same end points as in the previous section. Instead of running queries that are filtered based on a ‘high water mark’ timestamp, you instead use the identifiers stored in your CRM to query Zuora Billing.

In this example we assume a customer has contacted Customer Support and an agent needs to view the customer’s billing account details. They will use the new ‘Billing Account’ detail page you have created in your CRM. To populate the page the CRM will invoke an object query using the customer id that matches the value stored in the Billing CRMAccountId custom field. This will return the relevant Zuora Billing Account data. Replace `$ztoken` and `<<CRMACCOUNTID>>`ßß in this call:

```bash
curl --request GET \
--url "https://rest.apisandbox.zuora.com/object-query/accounts?\
pageSize=1&\
account.fields[]=id,updatedDate,name,accountNumber,balance,currency,autoPay,batch,billCycleDay,billToId,creditBalance,lastInvoiceDate,mrr,paymentTerm,CRMAccountId__c&\
filter[]=CRMAccountId__c.EQ:<<CRMACCOUNTID>>" \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

###

Event driven details

####

Terminology and useful information

Configure Zuora Billing's [Events and Notifications](https://knowledgecenter.zuora.com/Zuora_Platform/Extensibility/Events_and_Notifications) to automatically send new Billing data to your CRM. In our terminology, "notification", either email or callout(webhook), are triggered by system events. These notifications are triggered by Billing events. Examples of events include a new order or a new invoice. An event can trigger multiple notifications, emails, callouts or both. Posting an invoice might send an email with the invoice to the customer AND send the invoice details to your CRM integration.

Here we show how to create notifications for Accounts and for new or updated Order Line Items. These are only two required notifications, repeating for each object or object group in scope. But before starting configure the message queue. You’ll specify the URL and authentication of the message queue when defining the callout notification.

####

Configure event notifications

Here we will create a custom event that will fire every time an Account is created or updated, then define a callout notification that tells your message queue server that the event occurred while also providing the details for transfer to your CRM. To access the wizard for creating a notification/webhook:

1.  In the Zuora UI, expand the **Extension Studio** section and select **Events & Notifications** .
2.  Create a custom event.
    1.  Click the **Custom Events** tab.
    2.  Click the **Create Custom Event** button on the top right.
    3.  Give your new event a name, for example, `AccountEvent` , and use the same as the API Name.
    4.  Select **Account** as the **Base Object** .
    5.  Switch the **Active** toggle. You have to specify a Trigger Condition, and unless you’re a wiz at JEXL, click the **Add Condition** button and add two conditions, `Change Type is equal to INSERT` **OR** `Change Type is equal to UPDATE` .
    6.  Click **Save** . The custom event is then created.
3.  Create a new notification definition. Click the **Notification** tab, and then click the **Add New Notification** button on the top right.

    1.  Follow the wizard steps beginning with **On An Event Occurrence** . You’ve already created a new event that you can select from the list, under **Billing** you should see, **Account** > **AccountEvent (Custom Event)** . Click **Next** .
    2.  Click **Next** . Since we’re interested in all Account inserts and updates, we don’t need to filter account changes, so skip the the **Manage Custom Filter(s)** step.
    3.  Click **Create New Callout Template** . Give the callout template a name, `AccountEventCRMCallout` , confirm the related event is our Account event. Make sure the **Active** toggle is switched on. You can skip the **Available Merge Fields** section.
    4.  Insert your message queue server URL, and choose JSON or XML as your payload format. From the **Merge Fields** list, select all the fields you want to transfer to your CRM. Custom fields such as `CRMAccountId__c` should be listed. When you’ve chosen all the fields, click **Insert Merge Fields** and you’ll see your payload template displayed.
    5.  Specify your server’s authentication and applicable options, do not send payloads as plain text. You’ll need an account ID instead of the account number, to generate a preview call to your server. Click **Save** .
    6.  Back to **Step 4: How would you like the notification to be delivered?** , you can now select your new callout from the **Delivered By Callout** list, and click **Next** .
    7.  Select an existing communication profile. You should ensure that the profile is active and that any customers you want to share with your CRM have that profile enabled on their Account. Click **Next** .
    8.  On the "Step 6: Finalize Notification Details" page, give your new notification a name, for example, `AccountChangeEventNotification` , and ensure that the **Active** toggle is switched on. Click **Next** .
    9.  After reviewing the notification detail, click **Done** . On the **Notifications** tab, you should now see your new notification listed:

    ![AccountChangeEventNotification](/2606c338824f2eb80179659fa8a026c0/AccountChangeEventNotification.png)

4.  Test your new notification is working by creating an order with an order line item for an account that has the correct communication profile. You can see a history of callouts for each account by scrolling to the bottom of the UI account detail screen. If no notifications fire, verify:
    -   The right communication profile is enabled on the billing account being used in your testing. This is listed at the bottom of the billing account detail screen. If there is a red bell icon, the profile is muted and notifications are suppressed. If it’s active it’ll have a green bell.
    -   Are the authentication details correct for the server you are targeting? Are you authenticating using production credentials when the target is a test server?
    -   If you are new to Zuora Platform events and notifications it can be helpful to create a callout notification to a webhook service such as RequestBin or Beeceptor. These services do not require authentication. If this still doesn’t work, contact Zuora Support. Do not send real customer data to any of these third party services.

##

Test and validate your integration

Ensure your queries are correctly posted to your CRM. Your tests should include draft invoices and draft orders. Errors should be recorded and flagged for resolution. Should an error have occurred with a set of records, the high water mark may have "moved on" and these records will have to be moved once the error has been resolved. Consider a tool that accepts a list of object names and ids and updates your CRM upon demand.

Construct reconciliation reports that should be run and monitored at least monthly. Create a report in your CRM for all the loaded Zuora Billing data and create a similar report in Billing so you can regularly diff the outputs and find skipped records.

##

Conclusion

Congratulations! You’ve completed a basic CRM integration with Zuora Billing. While this quickstart guide has focused on the basics, many more use cases can be supported. More on all our APIs, including tutorials, FAQs, a Developer Blog and reference documentation can be found in our [Zuora Developer Center](http://developer.zuora.com).

##

Appendix A: Sizing Queries

Use the Zuora UI Data Query interface for these SQL queries. Each does a count by 'created date' month for each month since January of last year. You can download the query results as a csv file to use a spreadsheet for estimations and forecasting. Edit and rerun this query for each object that will be copied to your CRM:

```sql
SELECT concat(format\_datetime(createddate, 'YYYY'), '-', format\_datetime(createddate, 'MM')) month, count(\*)
from account
where YEAR(current\_date) \-1 \<= YEAR(createddate)
group by concat(format\_datetime(createddate, 'YYYY'), '-', format\_datetime(createddate, 'MM'))
order by concat(format\_datetime(createddate, 'YYYY'), '-', format\_datetime(createddate, 'MM'))
```

Estimate the number of records for transfer each month using this formula. For each variable, use the number of new records/objects created each month:

(NewAccounts x 2) + NewOrderLineItems + NewOrderActions + NewSubscriptions + NewRatePlans + NewRatePlanCharges + NewRatePlanChargeTiers + NewInvoices + NewInvoiceItems

Many Zuora fields are of variable length, and any two Account or Contact records could require differing storage. To estimate storage requirements, run a query for a "busy" month that lists every record for the month and that includes all the required fields. Download the results as a csv file, and use the resulting file size to give a rough estimate of storage needed each month for that object. Here’s an example query using the same fields as in the main documents query of Billing Accounts, replace `2025-01` with your chosen "busy" month:

```sql
select id, updatedDate, name, accountNumber, balance, currency, autoPay, batch, billCycleDay, billToId, creditBalance, lastInvoiceDate, mrr, paymentTerm, CRMAccountId__c
from account
where concat(format\_datetime(createddate, 'YYYY'), '-', format\_datetime(createddate, 'MM')) \= '2025-01'
```

Make sure the **CSV Output Format** option is selected before running the query and downloading the results.
