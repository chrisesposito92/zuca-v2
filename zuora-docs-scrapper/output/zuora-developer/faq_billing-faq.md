---
title: "Developer FAQs for Zuora Billing"
url: "https://developer.zuora.com/faq/billing-faq/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:20.605Z"
---

#

Developer FAQs for Zuora Billing

Welcome! This FAQ is for developers starting with Zuora Billing. While Zuora offers several products like [Zephr](https://developer.zuora.com/zephr-docs/zephr-sdk/overview/), [Revenue](https://developer.zuora.com/other-api/revenue/overview/), Payments and [Togai](https://docs.togai.com/docs/introduction), this document specifically focuses on **Zuora Billing**, the product responsible for generating invoices.

If you're looking for a secure, compliant, and reliable solution to automate your company's invoicing, you’re in the right place.



Prefer listening over reading? Log onto Zuora Community and listen to [our podcast for Zuora Billing FAQ](https://community.zuora.com/discussion/more-of-a-listener-than-a-reader#bmdf46147f-d546-47df-b7ae-8a77d40ff9eb)!

##

New to Zuora Billing?

###

What is Zuora Billing?

[Zuora Billing automates invoicing and payments at scale](https://www.zuora.com/products/billing-software/), allowing customers to place orders, be invoiced, and make payments automatically. It’s a secure solution, meeting industry [standards like SOC and PCI,](https://knowledgecenter.zuora.com/Zuora_Environments/Zuora_Data_Centers/Security_Settings_in_Zuora_Production_Environment) and backed by a public company with transparent financials.

For a quick introduction, [take our tour](https://www.zuora.com/products/billing-software/tour/). No sales pitch—just a very brief view of some essentials. You can provide your email afterward if you want more information.

###

Why switch to Zuora Billing?

Your current system may struggle with recurring or usage-based billing, scaling to millions of invoices, or maintaining security and compliance (for example, PCI). Zuora Billing handles these challenges seamlessly.

###

New to billing systems?

Start with [this two minute video](https://share.vidyard.com/watch/SoBFCxjYzUb8nU4QWPEZt7), then [the tour](https://www.zuora.com/products/billing-software/tour/), then our [Get Started guide](https://developer.zuora.com/docs/get-started/introduction/), which covers the basics of using Zuora Billing with REST APIs. You can also review the [object model](https://knowledgecenter.zuora.com/Get_Started/Zuora_business_object_model) to get familiar with how Zuora structures data, but remember for later that the standard objects can have [custom fields of your design added](https://knowledgecenter.zuora.com/Zuora_Platform/Custom_fields) and you can [add your own integrated objects](https://knowledgecenter.zuora.com/Zuora_Platform/Custom_Objects).

###

Why not build my own solution?

Building a homegrown billing system is possible, but it’s resource-intensive and risky. Zuora handles billing and compliance, so you can focus on developing your product, not your billing infrastructure.

###

Is Zuora too complex?

Zuora’s rich functionality may seem complex, but our [Get started](https://developer.zuora.com/docs/get-started/introduction/) guide will walk you through essential setup, such as OAuth authentication and API/SDK calls. Our customers submit millions of API calls to Zuora every day—you can, too.

###

Multilingual and multi-currency support

Zuora’s global language and currency support lets you bill in the preferred currency and language of your customers. [Our User Interface supports 5 languages across 105 locales for localized translations & formatting including Japanese, French, and Spanish](https://knowledgecenter.zuora.com/Zuora_Platform/Tenant_Management/A_Personal_Settings).

###

Looking for a cheat code to integrating?

Zuora has 80+ connectors to App Stores, CRMs, ERPs, Payment Gateways, Tax Systems, Warehouses and beyond. Every quarter Zuora launches new connections to the most requested systems. Check them out [here](https://knowledgecenter.zuora.com/Zuora_Platform/Integration_Hub/Pre-Built_Connectors).

##

Getting Started With Zuora Billing API – MUST READ

###

Do you have SDKs?

Yes, we’ve got [SDKs for Java, Node.js, Python, and C#](https://developer.zuora.com/docs/guides/libraries/). But if you prefer more control, our REST API is OpenAPI-compliant, so you can generate your own libraries.

###

What can I do with the Zuora Billing API?

You can create, query, and update objects like customer accounts, orders, subscriptions, invoices, and memos. For efficiency, you can also use endpoints like `POST v1/orders` to handle multiple actions (e.g., create an account, order, subscription, invoice, and collect payment) in one go. We know, you want to jump in there right now, patience, start with [Get Started](https://developer.zuora.com/docs/get-started/introduction/), baby steps.

###

Why are there two APIs — Quickstart and v1?

**Quickstart API** is great for simple eCommerce use cases (think customer portals) and is quicker to implement. **v1 API** gives you full control and access to all of Zuora Billing’s features.

Quickstart is for speed; v1 is for depth.

**What language support is available?**

Besides SDKs, our OpenAPI spec lets you generate libraries for whatever language you're most comfortable with:

-   [V1 API download](https://developer.zuora.com/v1-api-reference/api/overview/)
-   [Quickstart API download](https://developer.zuora.com/other-api/quickstart-api/overview/)

###

How do I make my first API call?

Check out the [Get Started](https://developer.zuora.com/docs/get-started/introduction/) tutorial to grab an OAuth token and make your first call.

###

How do I get API credentials?

You’ll get an email to set up your password for Zuora. If you don’t have one, hit up your admin or account team. Once you're logged in, you can generate OAuth credentials. The [Get Started](https://developer.zuora.com/docs/get-started/introduction/) guide covers this.

###

What are the base URLs for environments?

The base URL depends on your assigned data center. [Compare your UI login with the "Tenant UI Login" tables in the Zuora UI](https://knowledgecenter.zuora.com/Zuora_Environments/Zuora_Data_Centers). Pro tip: using the wrong URL is a common cause of 'invalid credentials' errors. Also, don’t store real credit card data in sandboxes. Until you are ready, avoid the Production URLs.

###

What are the different types of Sandboxes?

-   **Central Sandbox** : Refreshable from production, includes billing accounts/orders, but scrubs sensitive data.
-   **Developer Sandbox** : Only production settings, no customer data.
-   **API Sandbox** : No refresh, limited data and capacity.

There’s much [more detail on the differences between each here.](https://knowledgecenter.zuora.com/Zuora_Environments/Zuora_Testing_Environments)

###

Do I have a UAT environment?

If you’ve got a Central Sandbox, that can be your UAT. Every Zuora Billing customer receives one production and at least one sandbox. [If you don’t have sufficient sandboxes for everyone’s needs, you can buy more if needed.](https://knowledgecenter.zuora.com/Zuora_Environments/Zuora_Testing_Environments) Contact your Zuora account team.

###

Why doesn’t Zuora host my custom code?

[Zuora’s **Workflow** engine](https://knowledgecenter.zuora.com/Zuora_Platform/Workflow) automates tasks via a drag-and-drop interface and API access. You can test workflows in Sandbox environments. You can also embed custom rules into business objects to trigger actions automatically.

##

Getting Started with Zuora Billing SDKs and Libraries

###

Are there official SDKs or client libraries available?

Yes, they’re available [here](https://developer.zuora.com/docs/guides/libraries/).

###

Which programming languages are supported?

We support Java, Node.js, Python, and C# (coming soon).

###

I prefer using the API directly, not SDKs.

That’s cool—the SDKs are optional. Check out our API options in the section above.

###

What if my language isn’t supported by an SDK?

No problem. Our API follows the OpenAPI standard, so you can generate libraries for any language you prefer.

-   [V1 API download](https://developer.zuora.com/v1-api-reference/api/overview/)
-   [Quickstart API download](https://developer.zuora.com/other-api/quickstart-api/overview/)

###

What can I do with the API?

Pretty much everything. You can create accounts, capture orders, generate invoices, handle memos, collect payments, modify product catalog items, manage usage records, create webhooks, adjust tenant settings, and even create custom objects. Whatever you need to do in Zuora Billing, the API has you covered.

###

Where’s the API reference?

It’s in the Developer Center. But first, decide which API or SDK you want to use by checking out the [Get Started](https://developer.zuora.com/docs/get-started/introduction/) section.

###

Does Zuora Billing support idempotent endpoints?

Yes, the details are [here](https://developer.zuora.com/docs/guides/idempotent-requests/).

##

Zuora Authentication

###

What authentication method does the API use?

We recommend [OAuth 2.0](https://developer.zuora.com/docs/get-started/introduction/), though some APIs also support basic authentication. Avoid using basic auth since passwords expire, which could break your integration.

###

How do I include authentication in my API requests?

First, get your [OAuth client ID](https://developer.zuora.com/docs/get-started/introduction/) and secret, then obtain a token and include it in your requests using the Bearer token header.

##

Zuora Platform Rate Limiting

###

What are the rate limits for the API?

The [Rate Limits](https://developer.zuora.com/docs/guides/rate-limits/) section in the documentation has the details.

###

How can I monitor my current API usage?

Use the [System Health Dashboard](https://knowledgecenter.zuora.com/Zuora_Platform/Zuora_System_Health) in your tenant’s admin panel.

###

What happens if I exceed the rate limit?

You’ll get a ["request limit exceeded"](https://developer.zuora.com/docs/guides/error-codes/) error. Use a [retry strategy](https://developer.zuora.com/docs/guides/rate-limits/#retrying-with-exponential-backoff) with exponential backoff or consider caching. For persistent issues, contact your Zuora account team.

###

Can I avoid rate limits?

Yes, by using [asynchronous API calls](https://developer.zuora.com/docs/guides/async-requests/).

##

Zuora Billing Endpoints

###

Where can I find a complete list of API endpoints?

Check the API Reference section for a full list. [Root URLs vary by data center and tenant type (Production vs. Sandbox)](https://knowledgecenter.zuora.com/Zuora_Environments/Zuora_Data_Centers).

-   [V1 API](https://developer.zuora.com/v1-api-reference/api/overview/)
-   [Quickstart API](https://developer.zuora.com/other-api/quickstart-api/overview/)

###

What’s this about SDKs?

For more on SDKs, see the SDK FAQ section.

###

How do I use pagination with the listed endpoints?

[The summary is here](https://developer.zuora.com/docs/guides/pagination/).

##

Data and Date Formats

###

What data format does the API use?

JSON for nearly everything, except if you’re using the old SOAP API (which we highly recommend you avoid).

###

How should dates and times be formatted in requests and responses?

Dates and timestamps vary. Transactions usually have just a date (e.g., order date), while objects like invoices have timestamps (e.g., createdDate). [More details are here](https://knowledgecenter.zuora.com/Zuora_Platform/Tenant_Management/Dates_in_Zuora).

##

Error Handling

###

What are common error codes and their meanings?

There’s a [summary with sample code here](https://developer.zuora.com/docs/guides/error-codes/) and more [details on specific codes here](https://knowledgecenter.zuora.com/Zuora_Platform/API/AA_REST_API/Resource_codes_for_Billing_and_Payments_REST_API).

###

At what point should I worry about error messages?

If you start getting "Danger! Danger, Will Robinson!" errors, it’s way past time to pay attention.

##

Webhooks - Notifications - Events

###

Do you support webhooks?

Yes. We call them "[event-based notifications](https://knowledgecenter.zuora.com/Zuora_Platform/Events_and_Notifications)," but they work the same way—triggered when something happens (e.g., an order is saved, an invoice is posted). You can also [create custom notifications](https://knowledgecenter.zuora.com/Zuora_Platform/Events_and_Notifications/AB_Custom_Events) or use the API to define webhooks.

###

How do I set up webhooks?

You can set them up through [the UI](https://knowledgecenter.zuora.com/Zuora_Platform/Events_and_Notifications/AE_Manage_Custom_Events_and_Custom_Scheduled_Events) or [the API](https://developer.zuora.com/v1-api-reference/api/operation/POST_EventTrigger/).

##

Versioning

###

How is API versioning handled?

[V1 versioning is explained here.](https://developer.zuora.com/v1-api-reference/api-versions/)

###

How will I be notified of API changes or deprecations?

[We post updates in the Zuora Community.](https://community.zuora.com/communities/community-home?CommunityKey=e2a932b4-50c4-4019-a3e8-362e38714df3) You can sign up there for email notifications of future changes.

###

Where are the changelogs?

-   [V1 API changelogs](https://developer.zuora.com/docs/get-started/changelogs/v1-api-changelog/)
-   [Quickstart API changelogs](https://developer.zuora.com/docs/get-started/changelogs/quickstart-api-changelog/)

##

Support and Resources

###

How do I get help if I encounter issues?

Log into the Zuora UI, click the '?' in the top-right corner, and either use the AI support bot or create a ticket. If you’re a customer an email to [support@zuora.com](mailto:support@zuora.com) should also work.

###

How can I check for service issues?

Register at [trust.zuora.com](http://trust.zuora.com) for real time updates and a history of service issues.

###

Are there community forums or developer resources?

Yes, [we have a developer forum](https://community.zuora.com/communities/community-home?CommunityKey=e2a932b4-50c4-4019-a3e8-362e38714df3). Registration is required.

###

Can I sign up for training?

[Zuora University offers free self-paced courses.](https://university.zuora.com/series/courses-by-topic#role_developer) If your company has a subscription, you can also join live training and take certification exams.

###

What are good classes to start with?

[Start with this list of classes for developers](https://university.zuora.com/series/courses-by-topic#role_developer). But treat this list as a menu from which you should choose topics of interest, don’t try to work through them all linearly. But start with these three before jumping to other topics:

-   [Introduction to Zuora](https://university.zuora.com/series/courses-by-topic/introduction-to-zuora-1) - Some basics on what’s different about Zuora.
-   [Zuora’s Object Model](https://university.zuora.com/series/courses-by-topic/zuoras-object-model) - Quick run through of main Zuora Billing objects.
-   [Standard Zuora Architecture](https://university.zuora.com/series/courses-by-topic/standard-zuora-architecture) - how Zuora typically integrates with your systems.

##

Security

###

Is API traffic encrypted?

Yes, all data is encrypted in transit (via HTTPS) and at rest.

###

What about PCI compliance for credit card data?

Zuora is PCI certified. We run our own credit card vault and allow seamless switching between payment gateways.

##

Testing

###

Is there a sandbox environment for testing?

Yes, every customer gets one production and one sandbox tenant (or more if purchased). You can tell by looking at the URL—sandbox URLs usually include 'sandbox' or 'test'.

###

How do I test my code?

[Check out this article on testing and deployment best practices.](https://community.zuora.com/blogs/prachi-bhatia/2022/05/10/zuora-testing-and-deployment-best-practices)

###

How do I move my new code to production?

Make sure your code can switch between sandbox and production endpoints. If your code depends on new features or settings, use our [Deployment Manager](https://knowledgecenter.zuora.com/Zuora_Platform/Tenant_Management/Deployment_Manager) to sync them.

###

How does Zuora roll out new features?

New features are released quarterly to Sandbox first, then to Production the following month. Features may require additional steps to enable.

###

How do I do DevOps with Zuora Billing?

We have a group of features applicable for DevOps, [this is a great summary on how we think about DevOps](https://knowledgecenter.zuora.com/Zuora_Platform/Zuora_DevOps/Introduction_to_Zuora_DevOps/Introduction_and_Best_Practices_for_Zuora_DevOps). We also offer [git integration built into Deployment Manager](https://community.zuora.com/blogs/lana-lee1/2024/05/08/integrating-git-with-zuora-deployment-manager).

##

Billing and Usage

###

How is API usage billed?

Zuora doesn’t charge for API usage. Instead, we focus on invoice volume, we only succeed if you succeed. [API governor limits are in place,](https://developer.zuora.com/docs/guides/rate-limits/) but we’ll work with you if there are issues.

###

How can I monitor my API usage?

Check the [System Health Dashboard](https://knowledgecenter.zuora.com/Zuora_Platform/Zuora_System_Health) in the Zuora UI under 'Administration.' There’s one dashboard dedicated to API usage.

###

How do I use Zuora to bill my customers?

See the [Get Started](https://developer.zuora.com/docs/get-started/introduction/) section.

##

Orders - Subscriptions - Invoices

###

What’s the deal with orders vs. subscriptions?

An order records what the customer wants (items, quantities, prices), and a subscription is created if there are recurring billing elements (e.g., monthly or annual charges). Orders can also modify existing subscriptions, for example change the quantity or price, or add an additional product or service. An order can also be configured to trigger billing/invoicing either immediately or at a later date.

##

Study guide

Answer the following questions in 2-3 sentences each:

1.  Why are there two main Zuora Billing APIs (Quickstart and v1), and what are the key differences between them?

Check answer

Zuora offers Quickstart and v1 APIs to cater to different needs. The Quickstart API is optimized for speed and simplicity, ideal for straightforward eCommerce use cases. The v1 API provides comprehensive control and access to all Zuora Billing features, suitable for complex integrations.

2.  Explain how OAuth 2.0 is used for authentication with the Zuora Billing API.

Check answer

Zuora employs OAuth 2.0 for secure API authentication. Developers obtain an OAuth client ID and secret, then exchange them for an access token. This token is included in API requests via the "Bearer" header, granting authorized access to resources.

3.  What are the three types of sandboxes available in Zuora, and what are their primary purposes?

Check answer

Zuora provides Central, Developer, and API Sandboxes. Central Sandboxes can be refreshed with all production data and are ideal for user acceptance testing (UAT). Developer Sandboxes contain only production settings without customer data. API Sandboxes lack refresh capabilities and have limited data and capacity and are only suitable for initial API exploration.

4.  Describe how webhooks function in Zuora Billing and provide an example use case.

Check answer

Webhooks in Zuora are event-driven notifications that trigger actions in external systems when specific events occur within Zuora. For example, a webhook can notify your order fulfillment system whenever a new subscription is created in Zuora.

5.  What happens when a client exceeds Zuora API rate limits, and what are some strategies to handle this situation?

Check answer

Exceeding rate limits results in a "request limit exceeded" error. Implement retry strategies with exponential backoff to handle temporary spikes. Caching frequently accessed data can also help. Contact Zuora for persistent issues.

6.  Where can developers find information about API changes?

Check answer

Changelogs detailing changes and deprecations are available in the Zuora Community and the Developer Center. Developers should subscribe to notifications to stay updated.

7.  Describe the recommended approach to testing code before deploying it to the production environment in Zuora.

Check answer

Thorough testing in a sandbox environment is vital before production deployment. Developers should ensure code can switch between sandbox and production endpoints. Zuora's Deployment Manager feature facilitates migrating new features and settings.

8.  Where can developers find support resources and training materials for the Zuora Billing API?

Check answer

Zuora offers comprehensive support through various channels. The Zuora Community, developer forum, and trust.zuora.com provide community-based assistance. Zuora University offers self-paced and instructor-led training, including certification programs.
