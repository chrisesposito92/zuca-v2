---
title: "Configure custom fields"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/minimum-commitment/configure-custom-fields"
product: "zuora-platform"
scraped_at: "2026-02-19T03:29:50.273Z"
---

# Configure custom fields

Learn how to configure custom fields for various objects, including Account, Subscription, and Product Rate Plan Charge, using the Extension Studio and Object Manager.

1.  Navigate to in the left navigation menu.
2.  Custom fields for Minimum Commitment will need to be added by selecting the Customizable Object (Account, Subscription, and Product Rate Plan Charge Fields) and then adding the new custom fields. Added fields will require the following template to be completed. A description can be added for each of the labels if needed, the Required checkbox should not be checked. For more information about how to add custom fields, see [Manage custom fields](/zuora-platform/extensibility/custom-fields/custom-field-management-with-the-object-manager) .
    1.  Add the following custom fields for the Account object:

        | Name | API Name | Field Type | Additional Information |
        | --- | --- | --- | --- |
        | Minimum Commitment Next True Up Date | MinimumCommitmentNextTrueUpDate__c | Date | None |
        | Minimum Commitment Billing Period | MinimumCommitmentBillingPeriod__c | Picklist | Picklist options:Monthly (default)QuarterlyAnnually |
        | Minimum Commitment Amount | MinimumCommitmentAmount__c | Text | Max length 225 |
        | Minimum Commitment Type | MinimumCommitmentType__c | Picklist | Picklist options:Currency (default)Quantity |

    2.  Add the following custom fields for the Subscription object:

        | Name | API Name | Field Type | Additional Information |
        | --- | --- | --- | --- |
        | Minimum Commitment Next True Up Date | MinimumCommitmentNextTrueUpDate__c | Date | None |
        | Minimum Commitment Billing Period | MinimumCommitmentBillingPeriod__c | Picklist | Picklist options:Monthly (default)QuarterlyAnnually |
        | Minimum Commitment Amount | MinimumCommitmentAmount__c | Text | Max length 225 |
        | Minimum Commitment Type | MinimumCommitmentType__c | Picklist | Picklist options:Currency (default)Quantity |

    3.  Add the following custom fields for the Product Rate Plan Charge object:

        | Name | API Name | Field Type | Picklist Options |
        | --- | --- | --- | --- |
        | True Up Charge | TrueUpCharge__c | Picklist | FALSE (default)TRUE |
        | Include Towards Minimum Commitment Amount | IncludeTowardsMinimumCommitmentAmount__c | Picklist | FALSE (default)TRUE |

    4.  Add the following custom fields for the Invoice object:

        | Name | API Name | Field Type | Picklist Options |
        | --- | --- | --- | --- |
        | Minimum Commitment Processed | MinimumCommitmentProcessed__c | Picklist | FALSE (default)TRUE |
