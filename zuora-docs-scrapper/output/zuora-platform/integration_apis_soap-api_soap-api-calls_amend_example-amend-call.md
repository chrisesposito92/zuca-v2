---
title: "Example: amend() call"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/amend/example-amend-call"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:39.209Z"
---

# Example: amend() call

This reference provides an example of using the amend() call.

This example call amends a subscription with the following information:

-   The following dates are all 01 January 2012:

    -   Contract effective

    -   Customer acceptance

    -   Effective

    -   Service activation

-   Description: renewing at customer request

-   Name: renewal

-   Status: Completed

-   Subscription ID: 402892c42ce80787012ce80ea1aa0014

-   Type: Renewal

-   The `AmendOptions` object doesn't generate an invoice nor process payments

    -   Generate invoice: false

    -   Process payments: false

-   The `PreviewOptions` object commits the changes without a preview

    -   Enable preview mode: true

    -   Allow preview through the end of a subscription term: true


<api:amend> <api:requests> <api:Amendments> <obj:ContractEffectiveDate>2012-01-01T20:44:54.718+05:30</obj:ContractEffectiveDate> <obj:CustomerAcceptanceDate>2012-01-01T20:44:54.718+05:30</obj:CustomerAcceptanceDate> <obj:Description>renewing at customer request</obj:Description> <obj:EffectiveDate>2012-01-01T20:44:54.718+05:30</obj:EffectiveDate> <obj:Name>renewal</obj:Name> <obj:ServiceActivationDate>2012-01-01T20:44:54.718+05:30</obj:ServiceActivationDate> <obj:Status>Completed</obj:Status> <obj:SubscriptionId>402892c42ce80787012ce80ea1aa0014</obj:SubscriptionId> <obj:Type>Renewal</obj:Type> </api:Amendments> <api:AmendOptions> <api:GenerateInvoice>false</api:GenerateInvoice> <api:ProcessPayments>false</api:ProcessPayments> </api:AmendOptions> <api:PreviewOptions> <api:EnablePreviewMode>true</api:EnablePreviewMode> ​<api:PreviewThroughTermEnd>true</api:PreviewThroughTermEnd> </api:PreviewOptions> </api:requests> </api:amend>
