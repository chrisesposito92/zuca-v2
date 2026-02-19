---
title: "Amendments update"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/amendments-update"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:16.718Z"
---

# Amendments update

This reference article lists all the fields associated with updating amendments.

| Field name | Value | Required to update | Description |
| --- | --- | --- | --- |
| Id* | string | Required for updating a field on amendments | Object id |
| Auto Renew | boolean | Optional | Determines whether the subscription renews automatically or ends at the close of the term and requires manual renewal.Editable only when the status is Draft.Required for TermsAndConditions amendments that modify auto-renewal.Accepted values: true or false. |
| Contract Effective Date | string <date> | Optional | The date on which the amendment becomes effective for billing purposes. |
| Current Term | integer <int64> | Optional | Length of the current subscription term.Editable only when Status = Draft.Required when Type = TermsAndConditions and TermType = TERMED.Not required when TermType=EVERGREEN.Character limit: Values: valid number. |
| Current Term Period Type | String | Optional | Specifies the period type for the current subscription term.Allowed values: Month (default), Year, Day, Week.Note: You can update this field only when the status is Draft. Use it together with CurrentTerm to set the term length. |
| Customer Acceptance Date | string <date> | Optional | The date the customer accepts the amendment.This field is required only when Z-Billing is configured to require customer acceptance and the subscription is in the Pending Acceptance state.Use this field together with the Status field.When you populate this date, update the Status to Completed. |
| Description | string | Optional | Provides a short description of the amendment.You can update this only when the status is Draft.Character limit is 500 characters. |
| Effective Date | string <date> | Required: For cancellation amendments. Optional for other types of amendments. | The effective date for the amendment's changes.This date is validated to ensure the amendment's changes are within valid ranges of products and product rate plans. |
| Name | string | Optional | Specifies the amendment name.You can update this only when the status is Draft.Maximum length: 100 characters. |
| Renewal Setting | string | Optional | Specifies whether a termed subscription remains termed or changes to evergreen at renewal.Required: If TermType is Termed.Allowed values: RENEW_WITH_SPECIFIC_TERM (default), RENEW_TO_EVERGREEN. |
| Renewal Term | string | Optional | Specifies the renewal term for the amended subscription.You can update this only when the status is Draft.Required if Type is TermsAndConditions.Character limit: Values: Enter a valid number. |
| Renewal Term Period Type | string | Optional | Period type for the subscription renewal term.Editable only when Status = Draft.Required when: Type = TermsAndConditions.Used with RenewalTerm to define the renewal length.Values: Month (default), Year, Day, Week. |
| Service Activation Date | string <date> | Optional | Service activation date.This field is required only when Z-Billing is configured to require service activation and the subscription is in PendingActivation.Use this field along with the Status field.When you set this date, also update the Status to the expected next phase status, Completed or Pending Acceptance. |
| Specific Update Date | string <date> | Optional | The effective date of the UpdateProduct amendment.Applicable only when a future-dated UpdateProduct amendment already exists on the subscription. |
| Status | string | Optional | Status of the amendment.Type: string (enum)Limit: 17 characters.Values: Draft (default if null), Pending Activation, Pending Acceptance, Completed. |
| Subscription Id | string | Optional | ID of the subscription affected by the amendment.Editable only when Status = Draft.Limit: 32 characters.Value: valid subscription ID. |
| Term Start Date | string <date> | Optional | The date the new terms and conditions take effect.Required when: Type = TermsAndConditions. |
| Term Type | string | Required only when a TermsAndConditions amendment is used to change the subscription's term type. | Indicates whether the subscription is TERMED or EVERGREEN.Editable only when Status = Draft.TERMED: has an expiration date; must be manually renewed.EVERGREEN: no expiration; must be ended manually. Limit: 9 characters. Values: TERMED, EVERGREEN. |
| Type | string | Optional | Type of amendment. Editable only when Status = Draft. Limit: 18 characters.Values: Cancellation, NewProduct, OwnerTransfer, RemoveProduct, Renewal, UpdateProduct, TermsAndConditions, SuspendSubscription, ResumeSubscription. |
