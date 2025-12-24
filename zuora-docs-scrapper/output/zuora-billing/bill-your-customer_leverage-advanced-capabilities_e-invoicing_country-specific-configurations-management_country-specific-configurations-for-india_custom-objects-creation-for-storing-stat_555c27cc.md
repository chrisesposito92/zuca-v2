---
title: "Custom objects creation for storing state names and codes"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-for-india/custom-objects-creation-for-storing-state-names-and-codes"
product: "zuora-billing"
scraped_at: "2025-12-24T18:31:31.565Z"
---

# Custom objects creation for storing state names and codes

Create custom objects to store state names and GST codes, ensuring compatibility with Sovos requirements and the default e-invoicing file template.

The state name needs to be converted to a GST code, as Sovos requires GST codes for states.

You can use the Object Manager to create a custom object named CountryStateCodes for storing state names and codes since `CountryStateCodes` is already available in the default e-invoicing file template. If you prefer to use another custom object name, ensure to replace `CountryStateCodes` in the default e-invoicing file template with your custom object API name.

During the object creation, add the following country and state fields:

| Field name or Label name | API name | Description |
| --- | --- | --- |
| Country Name | CountryName__c | This field is optional. The field value is India. |
| State Name | StateName__c | This field is required.The field value must be a state name value listed on the India e-Way billing website: https://docs.ewaybillgst.gov.in/apid...tate-code.html .The API name StateName __c is already available in the default e-invoicing file template. If you prefer to use another field name, ensure to replace StateName__c in the default e-invoicing file template with your field API name. |
| State Code | StateCode__c | This field is required.The field value must correspond to the value of the State Name field. The state name and code are listed in pairs on the India e-Way billing website: https://docs.ewaybillgst.gov.in/apid...tate-code.html .The API name StateCode __c is already available in the default e-invoicing file template. If you prefer to use another field name, ensure to replace StateCode__c in the default e-invoicing file template with your field API name. |
