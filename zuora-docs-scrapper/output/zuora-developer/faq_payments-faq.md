---
title: "Developer FAQs for Payments with Zuora"
url: "https://developer.zuora.com/faq/payments-faq/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:17.243Z"
---

#

Developer FAQs for Payments with Zuora

Welcome! This FAQ is for developers looking to understand how payments work with Zuora Billing. While Zuora offers several products like [Zephr](https://developer.zuora.com/zephr-docs/zephr-sdk/overview/), [Revenue](https://developer.zuora.com/other-api/revenue/overview/), Payments and [Togai](https://docs.togai.com/docs/introduction), this document specifically focuses on processing **Payments with Zuora**. Our Payments functionality is available to most of you as part of our Zuora Billing product, but Zuora Payments is also available as a standalone product. Regardless, this FAQ will help get you, a developer new to our Payments functionality, become oriented and grounded quickly. As the name implies Payments is responsible for ensuring you get paid.

If you're looking for a secure, compliant, and reliable solution to automate your company's payments across multiple payment gateways, you’re in the right place.

##

New to Zuora Payments？

If you’re new to working with Payments and haven’t worked with payments before, [skip to the next section, 'New To Payments'](#new-to-payments) for an explanation on some basics and where Zuora fits in the payments ecosystem and then return to this section. If you know what a payment gateway or an issuing bank is you can safely start here.

This FAQ is going to assume that you have already browsed and absorbed much of the content in the Developer FAQs for Zuora Billing. Our SDKs and APIs for Billing and for Payments share the same endpoints, libraries, authentication, rate limiting, date formats, error handling, webhooks/notifications and versioning. So we’re not going to duplicate all that here.

In the context of this document, Billing means generating invoices and related documents, like credit memos and debit memos, Payments means collecting payments for invoices and debit memos. A North Star for Zuora is automated billing and payments at high volumes. We process millions of invoices and payments each day and we hope to do the same for you.

Automating payment collections at high volumes means capturing your customer’s payment method, such as credit card, ApplePay or ACH/Direct Debit, and storing that in Zuora. Now Zuora can use that for each specific payment request triggered by each future invoice.

But first let’s tackle some basics about payments with Zuora.

###

Zuora processes payments, right? Is Zuora a payment gateway?

No, Zuora does not directly process payments, and no, we are NOT a payment gateway, instead we provide out of the box integrations with over 40 different payment gateways including the largest such as Chase Paymentech, Adyen, PayPal, authorize.net and Stripe. We ARE a payment orchestrator and we provide extensive functionality to automatically manage multiple payment gateways so you maximize collection rates regardless of gateway, payment method and currency.

###

Where do payments fit into the customer acquisition process?

Zuora is built to process high volumes of payments automatically, this relies on the following typical use case or pattern when acquiring customers:

-   Ask Zuora for a quote (estimate) based on what the prospect’s interests are.
-   Display the quote to the prospect and ask them to confirm they wish to proceed.
-   Ask for payment method details BEFORE invoicing.
-   Validate or verify the payment method they give you.
-   Capture the customer’s first order, creating a billing account with that payment method.
-   Immediately invoice, this can be included as part of order capture.
-   Immediately collect payment, this can also be included as part of order capture.

For the customers who signed up for a subscription and a regular recurring payment those future invoices and payments are generated and collected automatically without any further intervention needed. ‘Set and forget’ is another Zuora mantra.

While the steps above are a typical customer configuration, every step is configurable and flexible and the steps can be done in almost any order. For example, you can collect a payment before invoicing, or without invoicing at all. Or you can invoice without capturing a payment method. We often recommend the above process as the best way to ensure you get paid **before** offering or enabling your service or shipping your goods, but your business needs may be very different and we can accommodate them.

###

How much does each payment cost?

That’s between you and your payment gateway, Zuora doesn’t charge for payment processing. As you grow and need to integrate with multiple payment gateways additional charges may be required.

##

New to payments?

This section is only for those of you who aren’t already familiar with the payments industry. If you know what a payment gateway or an issuing bank is you can probably skip this section. This FAQ is going to assume that you have already browsed and absorbed much of the content in the [Developer FAQs for Zuora Billing](https://developer.zuora.com/faq/billing-faq/). Our SDKs and APIs for Billing and for Payments share the same endpoints, libraries, authentication, rate limiting, date formats, error handling, webhooks/notifications and versioning. So we’re not going to duplicate all that here.

###

Zuora’s Place in the Payments Industry

While you’ll be familiar with brands and companies such as Visa, American Express, Stripe, Chase, you may not be aware they all play important but sometimes very different roles in the payments industry. For our purposes the payments industry is the collection of companies that participate in a sophisticated, nearly instantaneous process, where you present your preferred ‘payment method’ and money is deducted from your account and moved into your vendor’s account allowing you to walk away with your coffee, meal, shoes or new TV. Every credit card or eWallet (e.g. ApplePay, Paypal) purchase you make involves several different companies acting in concert in a manner mostly invisible to you. A credit card purchase might involve the point of sale device talking to a payment gateway that talks to the Visa card network that talks to the card issuing bank that talks to the merchant’s bank that results in the money moving between accounts.

Zuora has chosen to interface with this payment industry chain near the ‘front’ of an imaginary pipe that runs from your customer through to your bank business’s bank account. We interface with the payment gateway, a term we’ll describe in more detail in a moment. This implies that we don’t directly process payments ourselves, we rely upon the payment gateway to do that. We manage the automated creation of invoices, which we then use to request payment using the payment method we have stored on behalf of your customer. We have our own secure credit card vault so we can store credit card details and we can use those when requesting payment from the gateway. We can also store bank details for ACH or Direct Debit/SEPA eCheck payment methods as well as tokens issued by eWallets. All stored in a secure, independently tested and certified vault.

Your customers can store multiple payment methods in Zuora, and while one may be the default and used for most payments, perhaps your customer asks you to spread payments over multiple cards, or to use a second card if the first one is maxed out. Our larger customers leverage multiple payment gateways as some gateways provide coverage for some geographies and payment methods that others do not. Zuora provides a rules engine where you can configure your preferences on how you want customer payments managed so you can maximize your collections and minimize payment problems such as ‘max funds exceeded’.

###

What is a payment gateway?

A payment gateway is an intermediary that handles the technical and secure exchange of payment details between your customers, you, usually referred to as ‘the merchant’, your bank account, ‘the merchant bank’ or ‘merchant account’ and your customer’s bank. If credit cards are being used as the method of payment then the customer’s bank is usually referred to as the ‘issuing bank’ as that bank gave your customer, issued, a credit card. [Here’s a list of all the existing payment gateway integrations](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/AA_Supported_Payment_Methods) Zuora provides, if your preferred payment gateway is missing from our list for an [extra fee we can integrate with that gateway](https://knowledgecenter.zuora.com/Zuora_Payments/Specialized_Payment_Connections). We’ve already mentioned that the payments space is complex, unfortunately you cannot assume that each payment method listed for each payment gateway is available in every country or region you sell in. You have to validate with the payment gateway that they support your preferred payment methods in every country you do business in.

###

Do I have to sign up with a payment gateway?

If you wish to offer your customers any kind of electronic based payment methods, for example, credit cards, ACH, Direct Debit, SEPA, ApplePay, then yes. If you are happy getting checks in the mail, wire transfers, or collecting cash by hand, then no, you do not need to sign up with a payment gateway. Almost everything in this FAQ assumes you do need to sign up with a payment gateway.

###

Which payment gateway should I choose?

[Here’s a list of all the existing payment gateway integrations](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/AA_Supported_Payment_Methods) Zuora provides. There’s also [guidance on how to choose a payment gateway](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/C_Managing_Payment_Gateways/B_Select_and_Sign_Up_for_a_Payment_Gateway).

###

Why isn’t Zuora a payment gateway?

We’re a payment orchestrator, as you grow you will inevitably need multiple payment gateways and we’ve focused our efforts on maximizing payment collections regardless of gateway.

###

What is a payment method?

It’s a generic term for how a customer chooses to pay you. Credit cards, ACH, Direct Debit, SEPA, ApplePay, wire transfers, checks, cash are all examples of payment methods. Large scale automated payments are going to require using ‘electronic payment methods’, cards, Direct Debit, ApplePay, etc. and minimizing ‘manual payment methods’ such as checks and cash. [Zuora can be configured to pick up a ‘lockbox’ file from your bank](https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Collections/Configurable_Lockbox) and to automatically record those checks as payments in Zuora, but you should know this is an optional, paid add-on that may not be on your current Zuora subscription. If interested please contact your Zuora account team.

###

What payment methods does Zuora support?

The full list is over 20 and increasing, [so verify our coverage of your preferred methods](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/AA_Supported_Payment_Methods). If you have a payment method that isn’t supported today but you think will be valuable to your business [we can add support for an extra fee](https://knowledgecenter.zuora.com/Zuora_Payments/Specialized_Payment_Connections). Unfortunately you cannot assume that each payment method listed for each payment gateway is available in every country or region, you have to validate with each payment gateway you are considering that they support your preferred payment methods in every country you want to do business in.

###

That sounds complicated, can I just sell in my home currency, USD/Euro/etc.?

Yes you can. For example I live in the USA but I can easily subscribe to a British publication. While convenient, there are downsides also. The foreign exchange conversion is free to me, the purchaser, but it’s not free to you, the potential merchant. Also the amount I see each month on my credit card bill will vary month to month as the exchange rate varies and over a year or so the price I pay can change substantially. Perhaps there are similar publications that price and sell in US Dollars? If I sign up with your competitor I’ll know exactly what I will pay each month.

You will also see pricing differentiation based on geography. For example, one publication charges a much lower price for overseas based subscribers than for home based subscribers, but there might be the exact reverse pricing strategies being used, people far away are willing to pay more to stay informed on what’s happening back home. What the right thing to do depends on your unique value proposition but in general once the amount of business in a particular country rises to a sufficient level it’ll be more cost effective for you to offer pricing specific for that country. If you have plans, even future plans, for international expansion, you should think about offering pricing in multiple currencies. Zuora makes this straightforward so long as your chosen payment gateway supports the payment method, country and currency. So ask your gateway now so you can try to avoid having to switch payment gateways later.

##

Payment gateways

###

Which payment gateway should I sign up with?

Look at [this list to see the gateways we integrate with out of the box](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/AA_Supported_Payment_Methods). There’s also [guidance on how to find a short list of possible payment gateways suitable for your business](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/C_Managing_Payment_Gateways/B_Select_and_Sign_Up_for_a_Payment_Gateway).

###

Can I get started without signing up with a payment gateway?

Yes, we provide a generic test payment gateway that will pretty much accept any card number you care to invent and return success, [you just need to enable it and that only takes a minute.](https://knowledgecenter.zuora.com/Get_Started/Zuora_quick_start_tutorials/C_Payments/Payment_Gateways/TeamCollaboration_Tutorial%3A_Configure_a_Payment_Gateway) Once you [enable a payment method such as credit card you can start capturing fake cards](https://knowledgecenter.zuora.com/Get_Started/Zuora_quick_start_tutorials/C_Payments/Payment_Methods/TeamCollaboration_Tutorial%3A_Enable_Payment_Methods_and_Create_a_Payment_Method) in the UI or using our API or Client Libraries.

###

What is a payment method?

It’s a generic term for how a customer chooses to pay you. Credit cards, credit cards, ACH, Direct Debit, SEPA, ApplePay, wire transfers, checks, cash are all examples of payment methods. Large scale automated payments are going to require using those electronic payment methods, cards, Direct Debit, ApplePay, etc. and minimizing ‘manual’ payment methods such as checks and cash. Zuora processes millions of payment transactions every day.

###

What payment methods does Zuora support?

The full list is over 20 and increasing, [so verify your preferred methods here](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/AA_Supported_Payment_Methods). If you have a payment method that you think will be valuable to your business [we can add support for an extra fee](https://knowledgecenter.zuora.com/Zuora_Payments/Specialized_Payment_Connections). Unfortunately you cannot assume that each payment method listed for each payment gateway is available in every country or region, you have to validate with each payment gateway you are considering that they support your preferred payment methods in every country you want to do business in.

###

Can I change payment gateways? How do I change payment gateways?

Yes you can change, your business is hopefully growing and you are moving into new markets, you can add additional gateway integrations or switch. [We have the process documented](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/C_Managing_Payment_Gateways/Switch_payment_gateways).

##

How do I collect or get paid?

###

How do I save payment methods? How do I capture how the customer wants to pay?

A single billing account [can store multiple payments and keep them ‘on file’ for later use](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B1_Define_Payment_Methods#Set_up_payment_methods_for_customer_accounts). Usually [one will be the **default**](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B1_Define_Payment_Methods#Define_the_default_payment_method_of_a_customer_account) and that’s used for automated collections, but anytime you request payment, in the UI or using our APIs you can specify the payment method. If the customer is going to send you checks, cash or wire transfers, then you can just set that directly on the billing account and enter the payments received in the UI. But if they want to pay using one of the ‘electronic payment methods’, credit card, ACH, Direct Debit, ApplePay, etc. then you really want to give the customer a secure, easy to use, online form where they can enter these details themselves. You [may need to configure the payment methods you want to use in your tenant and you can always hand key in the details yourself in our UI](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B1_Define_Payment_Methods#Set_up_a_payment_method_through_the_Zuora_UI), but it’s much more secure to have the customers do this themselves using a safe secure payment method capture form that we provide and you configure with your branding. We provide different capture form options, see the next FAQ.

###

What options do I have for capturing payment method details?

We have an easy to configure, low code, option known as [Payment Form](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Form/A_Payment_Form_overview), this is still rolling out and currently available to a subset of payment gateways and payment methods, they’re all listed on that linked page. If your payment gateway and methods are missing, then you’ll likely want to use [Payment Pages v2](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Page_and_Payment_Link/Payment_Pages_2.0/AA_Overview_Payment_Pages_2.0). Here Zuora serves up a payment capture form that you configure and then iframe into your self service or eCommerce portal. There’s support for every gateway and the applicable payment methods. But if you want explicit control over every byte of the capture form you can use [our Direct Post option](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Page_and_Payment_Link/Payment_Pages_2.0/M_Implement_Direct_POST_for_Payment_Methods) where you build the capture form and submit the results securely to Zuora. Each of these first three options will store the payment method details, usually the credit card or bank account numbers, in our secure PCI compliant vault.

The eWallets, such as [ApplePay](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B1_Define_Payment_Methods/A1_Implement_Apple_Pay_on_Web) and [Paypal](https://knowledgecenter.zuora.com/Quick_References/How_Do_I_._._./How_do_I_use_the_Paypal_BAID_payment_method_in_Zuora%3F) have their own payment authentication and approval process and we provide explicit instructions for each in our Knowledge Center. The eWallets issue a token that Zuora stores securely and uses as a proxy for your actual credit card or bank account that you stored in the eWallet. While we strongly recommend you store credit card details in Zuora’s secure PCI certified vault, we also support storing tokens issued by payment gateways as they are storing the credit card details. This is referred to as ‘tokenization’ or ‘Credit Card Reference Transaction’, often abbreviated to ‘ccref’, and you can see which gateways we support tokenization with on the [same page that lists our gateway and payment method support](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/AA_Supported_Payment_Methods).

###

Can I just send my customer a payment link to get paid?

[Yes, of course](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Page_and_Payment_Link). While we recommend capturing the payment method ahead of invoicing, storing and then using that to collect (see the previous FAQ), if you need a one-off type of payment option, [Payment Link may be what you need](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Page_and_Payment_Link).

###

Can a customer have multiple payment methods? Any restrictions?

Yes, each customer can have multiple payment methods, so multiple credit cards, or both a card and an ACH or Direct Debit account details on file, without restriction. They can even send you a check in the mail if they want. You should ask or assume that one payment method will be the default, meaning it’ll be the first one we try to collect payment from. And you can set up rules to ‘roll over’ to an alternative payment method if a payment request fails.

###

How do I set up ACH or Direct Debit based payment methods?

[The basic process is described here](https://knowledgecenter.zuora.com/Quick_References/How_Do_I_._._./How_do_I_support_direct_debit_ACH_payments%3F).

###

How do I manage expiring or expired credit cards?

[Basic process is here](https://knowledgecenter.zuora.com/Quick_References/How_Do_I_._._./How_do_I_handle_closed_credit_card_accounts%3F). We also integrate with some payment gateway ‘card updater’ or ‘[Payment Method Updater](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Method_Updater)’ services that can automatically update expiring credit cards before they expire.

###

Do I have any options to reduce the cost of my payment gateway transactions? Does Zuora support Level 2 or Level 3 transactions (Level II or Level III)?

Yes, you can opt into what’s known as [Level 2 or Level 3 transaction support with some of our gateway integrations](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/C_Managing_Payment_Gateways/Level_2_and_Level_3_Card_Data). In return for sharing more information about what your customer is purchasing you can qualify for a reduction in the gateway transaction fees. Make sure your organization or your customers are comfortable sharing this extra information.

###

Does Zuora support gateway issued tokens instead of having to store the credit card details in Zuora? Does Zuora support network tokenization?

Yes, [many of our gateway integrations support ‘tokenization’,](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/AA_Supported_Payment_Methods) look for ‘Credit Card Reference Transaction’, where the gateway stores the credit card details and issues a token that Zuora can store and use when requesting payment. Consult the documentation for your specific gateway to see if this is supported and if so, how it works.

With network tokenization the card network, not the gateway, issues a token that is then accepted by multiple different gateways. Zuora is planning on adding support for network tokens, but at the time of writing, Fall 2024, these tokens are not yet supported.

##

Internationalization and Multiple Currencies

###

Which payment currencies does Zuora support?

There’s honestly too many to list. Should you find a currency missing please contact our support organization. You can see the entire list if you’re an admin in your sandbox tenant by going to ‘Billing Settings’, clicking on the ‘Configure Currencies’ panel and clicking on the ‘Add New Currency’ button at the bottom of the page. You’re also looking at a list of what currencies are already activated. Be careful, this is probably going to take a little longer than you suspect. The [entire process is documented step by step](https://knowledgecenter.zuora.com/Quick_References/How_Do_I_._._./How_do_I_handle_multi-currency_in_Zuora%3F), it’s straightforward but don’t forget you likely need invoice templates in your customer’s language as well. Basic steps are:

-   Activate the currency
-   Specify pricing in that currency
-   Create billing accounts and orders in that currency
-   Invoice and get paid in that currency

###

Billing Accounts, Payments and Currencies, how are these related?

When you create a billing account you can specify the default currency for that billing account, so if your new customer is in Canada, and you price in Canadian Dollars then CAD should be set as their default currency. Invoices would be generated in that currency and payment expected in that currency. Zuora’s billing and payment automation will generate invoices and then request payment for those invoices using the default payment method, e.g. credit card or ACH/Direct Debit, set for the Billing Account. There’s also an ‘Auto-Pay’ flag on the billing account where you can quickly opt a Billing Account out of the automated payment processing if needed.

###

Can I bill a customer in multiple currencies?

Yes, if you need to [you can bill the same customer in different currencies](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Flexible_Billing/Multiple_Currencies/Multiple_Currencies_overview). This is a more advanced feature, wait until you have the basics of billing and collecting in the default account currency down before tackling this.

###

What about financial reporting? FX (Foreign Exchange) Rates? Gain/Loss Reporting?

Your Zuora tenant should have been [configured with a ‘home currency’](https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance/D_Finance_Settings/F_Foreign_Currency_Conversion#Configure_foreign_currency_conversion), the currency your business operates in and in which your company reports your financial results. Billing accounts can be created in any currency and Zuora provides [both an out of the box source of FX Rates (from our partner Oanda)](https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance/D_Finance_Settings/F_Foreign_Currency_Conversion) or you can [load rates from your favorite FX Rate provider](https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance/Mass_Updater/Import_Foreign_Exchange_Rates) if that’s not already Oanda. With either of these enabled Zuora will automatically record every financial transaction in the customer’s currency with the equivalent amount in your tenant’s home currency. [FX Gain/Loss reporting is a standard feature](https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Finance/E_Accounting_Periods/F_View_Accounting_Period_Balances/Foreign_Currency_Gains_and_Losses). You can also [create reports in either currency](https://knowledgecenter.zuora.com/Zuora_Platform/Reporting/AB_Reporting_Quick_Reference/D_Currency_Conversion).

##

Testing, security and compliance

###

How secure is Zuora?

We’re very secure and [we have lots of certifications](https://knowledgecenter.zuora.com/Zuora_Environments/Zuora_Data_Centers/Security_Settings_in_Zuora_Production_Environment) that save you lots of money. Most relevant to payments are our PCI certifications but all data, including all customer data, not just credit card or bank account data, is encrypted both in transit and at rest. Your organization controls the security policy settings such as password complexity and use of 2FA. We also provide a [‘scrub’ options](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/N1_Scrub_Payment_Methods) where you can remove personal details at a time of your choosing.

###

What about hackers, script kiddies, card washing, criminals?

Our [secure Payment Pages and Forms has a collection of security features](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Page_and_Payment_Link/Payment_Pages_2.0/B_Security_Measures_for_Payment_Pages_2.0) intended to prevent card related fraud or card washing attempts. We also monitor all inbound activity and will take additional action as needed. Your data, all your data, not just credit card data, is always encrypted, whether being transferred or stored. Our certifications, such as PCI, HIPAA and SOC, require testing of our security by external experts who then document their findings. These certifications are also time bound, meaning we have to repeatedly get re-certified and re-tested. As a Zuora customer you are entitled to receive a copy of all our certification reports, please contact your Zuora account team. For additional fraud protection we offer as an add-on [Zuora Fraud Protection](https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Fraud_Protection/A_Overview_of_Zuora_Fraud_Protection).

###

How do I test my payment method capture process?

Your payment gateway will give you a test environment and the payment gateway configuration page in your Zuora tenant has a checkbox telling Zuora to use the payment gateway test environment. They can also supply you with test credit cards that will exhibit various types of failures.

###

Is Zuora PCI Compliant?

[Yes we are.](https://knowledgecenter.zuora.com/Zuora_Environments/Zuora_Data_Centers/Security_Settings_in_Zuora_Production_Environment) Contact your Zuora account team for a copy of the latest report.

###

Is Zuora GDPR compliant and Consumer Privacy Act compliant?

Data privacy and consumer protections laws are growing in scope and new ones are being added constantly in different states and countries. Zuora provides you with [the necessary tools and techniques](https://knowledgecenter.zuora.com/Entitlements_and_Service_Policies/Service_policies/FF_Responding_to_individual_requests_for_access%2C_correction%2C_and_deletion_of_data_under_applicable_privacy_laws) to ensure you remain compliant at all times.

###

Does Zuora support new "easy cancellation" or "click to cancel" laws?

Again, we provide you the tools to make it easy for your customers to cancel. Canceling a subscription in Zuora [requires a single API call.](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) You can also quickly [cancel any subscription in the Zuora User Interface](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Subscribe_and_Amend/E_Amendments/K_Cancel_subscriptions). Be careful setting the cancellation effective date, if a customer has prepaid for a month’s service and they cancel, you usually want to make the cancellation effective date their next billing day, not ‘today’, the day of cancellation. This avoids prorated refunds. So record the cancellation today, but make the effective date their next billing day is a common practice. Obviously your agreement with your customer [may have defined a different cancellation policy](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Orders/Order_actions_tutorials/K_Cancel_subscriptions_for_different_scenarios) and that’s fine, all are supported.

###

How do I ensure compliance with PSD2, SCA, 3D Secure or other regional regulations?

Again, [Zuora has you covered,](https://knowledgecenter.zuora.com/Zuora_Payments/PSD2_and_strong_customer_authentication/A_Overview_of_PSD2_and_strong_customer_authentication) details in our knowledge center. 3DSecure enablement is gateway specific, here’s a list of [how to enable 3DS for the supported gateway integrations.](https://knowledgecenter.zuora.com/Zuora_Payments/PSD2_and_strong_customer_authentication)

###

How does the API handle sensitive customer data?

All API and client library calls are secured using HTTPS, every call and all data is encrypted in transit and at rest.

##

Troubleshooting Payment Failures

###

How do I review payment failures? How do I obtain more information on payment failures? How do I review payment method capture failures including credit card failures?

[There’s a great overview of how to manage transaction failures in our Knowledge Center](https://knowledgecenter.zuora.com/Quick_References/How_Do_I_._._./How_do_I_find_out_why_a_payment_or_refund_transaction_failed%3F), there’s a section at the bottom focusing on failures reported by your payment gateway.

There is an out of the box report listing recent payment failures, look for a report entitled ‘Accounts with recent payment errors’ that you can copy and modify to suit your specific needs.

You can also [query payments for failures using the API.](https://developer.zuora.com/v1-api-reference/api/operation/GET_RetrieveAllPayments/) Look for a ‘status’ of ‘error’. More information on [the payment process and the resultant status outcomes is here](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Operations/DA_Electronic_Payment_Processing).

Also know that all payment attempts, regardless of success or failure are also recorded in the payment transaction log. Each entry in the log records both the request sent to the gateway as well as the gateway’s complete response. These entries can be extracted or [viewed using a report](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Operations/DC_Discover_information_about_payment_method_creation_and_payment_processing). Don’t confuse the payment transaction log, which records payment attempts, with the ‘payment method transaction log’, which records payment method capture and verification communications between Zuora and the payment gateway. The Payment Method Transaction Log is useful for understanding why initial credit card captures are failing, only successful card captures go on to have payment requests made using those cards.

###

How can I view the status of a payment or refund via the API?

You can list [all payments](https://developer.zuora.com/v1-api-reference/api/operation/GET_RetrieveAllPayments/) or [refunds](https://developer.zuora.com/v1-api-reference/api/operation/GET_Refunds/) for a billing account directly using the API and then query again for the [specific payment](https://developer.zuora.com/v1-api-reference/api/operation/GET_Payment/) or [refund of interest](https://developer.zuora.com/v1-api-reference/api/operation/GET_Refund/) if the original list didn’t provide the needed detail. Each payment and refund has a ‘Status’ field indicating success, in progress, or failure.

###

What is the best way to handle payment failures or retries?

If either payment method capture or payment request is failing then examine the reason given. Unless you’re using [Zuora Fraud Protection](https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Fraud_Protection/A_Overview_of_Zuora_Fraud_Protection), the payment gateway, not Zuora, returns the failure reason. You should consult your payment gateway documentation or help desk if needed.

If the payment method capture failed then we recommend asking the prospect or customer for a new payment method. If the payment request is failing, we provide both [a basic retry feature](https://knowledgecenter.zuora.com/Zuora_Payments/Payments_Settings/Configure_Payment_Retry_Rules), you configure how often and how many times to retry, as well as a rules based [‘configurable payment retry’](https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Collections/Configurable_Payment_Retry) add-on module where you can define different retry logic based on the failure reason. This enables you to minimize the number of retry attempts, which cost money, as well maximize collections.

###

What are the common errors, and how do I resolve them?

Some variation of ‘max funds exceeded’ or card or account canceled are common reasons for payment failure. If your customer is temporarily low on funds, waiting and retrying can be a sensible approach - see the previous FAQ for your options here. If the account is canceled and you don’t already have an alternative payment method on file, you’ll have to attempt to contact the customer. Eventually you may have to suspend service if not cancel. See the FAQ on Dunning for more advice.

###

How do I void payments?

[Explained here](https://knowledgecenter.zuora.com/Quick_References/How_Do_I_._._./How_much_time_do_I_have_to_void_a_payment%3F), though your time window to void is often very limited.

###

Why is my payment request being declined?

That’s a payment gateway question and you should contact your gateway if needed. If you feel your payment gateway configuration may be at fault, contact Zuora support, [support@zuora.com](mailto:support@zuora.com) with details on your gateway and why you believe the gateway configuration may be an issue.

###

Can I set up webhook notifications for real-time payment events?

We have [over 20 out of the box payment related notifications](https://knowledgecenter.zuora.com/Zuora_Platform/Events_and_Notifications/AA_Standard_Events#Standard_events_for_Zuora_Payments) as we call webhooks in Zuora-speak, and some of those are customizable and can be made repeatable such as the payment method expiry notifications. Each notification can send an email or make a call to a URL endpoint you specify, or both. Utilizing these notifications is key to maximizing collection rates, see our FAQ on Dunning below.

###

How can I export my payment and refund transaction data?

All Zuora data is yours to extract as you see best. [The FAQ above about how to view the status of a payment or refund using the API](#bookmark=id.grmh6zktuqhb) is only one method of exporting your transaction data. You can use:
[Industry standard SQL](https://developer.zuora.com/v1-api-reference/api/operation/POST_DataQueryJob/) - while the link is to an API call, look for the Data Query option in the Zuora UI to write and test your SQL in an interactive environment.
[AQuA API](https://developer.zuora.com/v1-api-reference/api/tag/Aggregate-Queries/) to query for and export data in bulk.
[One of our out of the box data warehouse add-on connectors](https://knowledgecenter.zuora.com/Zuora_Platform/Zuora_Connectors_for_Data_Warehouses) that will automatically copy your Zuora data to your data warehouse.
[Reporting option](https://knowledgecenter.zuora.com/Zuora_Platform/Reporting/B_Using_Reporting) in our UI, you can easily build a report for your transaction data and either run that in the UI or schedule it to run automatically and to email you the results. You can also [invoke or download report results using our API](https://developer.zuora.com/v1-api-reference/older-api/tag/Reporting/).

###

How do I improve collection rates? How do I reduce payment failures? How do I implement dunning processes?

A short summary of [basic techniques for improving collections rates is written up here](https://knowledgecenter.zuora.com/Quick_References/How_Do_I_._._./How_do_I_improve_cash_collections%3F). You should plan on enabling at least some of the automated notifications based around billing and payments so [you can automate email delivery of payment successes or failures](https://knowledgecenter.zuora.com/Zuora_Platform/Events_and_Notifications). Since this is a developer focused FAQ we’ve avoided sales pitches, but if your organization needs to automate collections using custom rules defined by your business or based on our best practices you should know we have an add-on called ‘[Configurable Payment Retry](https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Collections/Configurable_Payment_Retry)’ focused on automating the recovery process for organizations struggling with high payment volumes.

##

Payment reconciliation

###

How do I reconcile payments in Zuora with my payment gateway?

Some of our gateway integrations support automated reconciliation, for those that don’t [here’s our recommendation](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/C_Managing_Payment_Gateways/Reconcile_payments_between_Zuora_and_my_payment_gateway%3F).

###

How do I reconcile payments in Zuora with my bank account?

[Our recommendations](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Operations/DF_Reconciling_Payments_with_Merchant_Accounts).

###

Some payments are stuck in "Processing" status, what do I do?

[Guidelines on what to do for payments stuck in a processing state](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Operations/DE_Update_the_status_of_payment_stuck_in_Processing).

##

Study Guide

Answer the following questions in 2-3 sentences each:

1.  **What is Zuora's role in payment processing?**

Check answer

Zuora is a payment orchestrator, meaning it integrates with various payment gateways to manage automated payment collections. Zuora does not directly process payments itself.

2.  **Explain the difference between a payment gateway and a payment method.**

Check answer

A payment gateway is a service that facilitates the technical and secure exchange of payment information between customers, merchants, and banks. A payment method refers to the specific way a customer chooses to pay, such as credit card, ACH, or PayPal.

3.  **Describe the typical customer acquisition process involving Zuora Payments.**

Check answer

The typical process involves generating a quote in Zuora, obtaining the customer's payment method details, validating the payment method, capturing their order, creating a billing account, and immediately invoicing and collecting payment.

4.  **What is the purpose of Zuora's "configurable payment retry" module?**

Check answer

The "configurable payment retry" module allows merchants to define customized retry logic based on specific payment failure reasons. This helps optimize retry attempts and maximize collection rates.

5.  **How does Zuora handle multiple currencies in billing and financial reporting?**

Check answer

Zuora allows billing accounts and subscriptions to be created using various currencies. FX rates from Oanda or a designated provider are used to automatically record transactions in both the customer's chosen currency and the tenant's 'home' or reporting currency. This included out of the box FX gain/loss reporting.

6.  **What security measures does Zuora employ to protect sensitive customer data?**

Check answer

Zuora employs encryption for data in transit and at rest. There is a "scrub" option to remove personal details to assist with complying with local regulations for personally identifying information while maintaining model integrity. Zuora also utilizes secure payment pages and forms, and holds certifications like PCI, HIPAA, and SOC to ensure the security of sensitive data.

7.  **How can developers utilize Zuora's webhooks for payment events?**

Check answer

Developers can configure webhooks to trigger actions like sending emails or calling specified URLs upon specific payment events, such as successful payments, failures, or refunds. This permits the quick configuration of dunning processes to maximize the likelihood a customer will pay their invoice.

##

Glossary

**Payment Orchestrator**: A platform that integrates with multiple payment gateways, allowing businesses to manage payment processing from a central location.

**Payment Gateway**: A service that acts as an intermediary between a merchant, a customer, and financial institutions, facilitating the secure exchange of payment information to process transactions.

**Payment Method**: The specific way a customer chooses to pay for a product or service, examples include credit cards, debit cards, ACH transfers, PayPal, and digital wallets.

**Tokenization**: The process of replacing sensitive payment information (like credit card numbers) with a non-sensitive substitute (a token) to enhance security during transaction processing.

**PCI Compliance**: Adhering to the Payment Card Industry Data Security Standard, a set of requirements designed to ensure the secure handling of credit card data and protect against data breaches.

**Webhook**: A mechanism that allows an application to send automated notifications or data to other applications in real-time, triggered by specific events.

**Dunning Management**: The process of systematically communicating with customers who have failed to make payments, with the aim of collecting outstanding dues and minimizing involuntary churn.

**FX Rates (Foreign Exchange Rates)**: The rates at which one currency can be exchanged for another. Zuora uses these rates to handle transactions involving multiple currencies.

**Configurable Payment Retry**: An add-on feature within Zuora that allows merchants to customize the logic for retrying failed payments based on the specific reason for the failure.

**Payment Method Capture**: The process of collecting and securely storing a customer's payment method information, such as credit card or bank account details, for future transactions.
