---
title: "Create a custom object as the lookup table"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing/create-a-custom-object-with-multi-attribute-data/create-a-custom-object-as-the-lookup-table"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:18.311Z"
---

# Create a custom object as the lookup table

Create a custom object as a lookup table in Zuora by following a series of steps, including configuring fields and saving the object.

To create a custom object through the Zuora UI, complete the following steps:

1.  In the left-hand navigation section, navigate to .
2.  Click \+ CREATE CUSTOM OBJECT .
3.  On the Custom Objects page that is displayed, configure the lookup table definition:
    1.  In the NAME field, enter the UI element name for the new custom object. In this scenario, enter CarRental .
    2.  In the API NAME field, enter an API label name for the custom object. In this scenario, enter CarRental . The API label name will be used later, so note it for reference.
4.  In the Custom Fields area, click \+ NEW CUSTOM FIELD .
5.  In the Custom Field dialog that is displayed, complete the following configurations:
    1.  In the custom fields overview area, enter the UI element name for the new custom field in the NAME field. In this scenario, enter type . The value in the API NAME field is automatically populated based on the specified field name. In this scenario, type\_\_c is automatically displayed. The API Name of the field will also be used later.
    2.  In the Details area, select Text from the FIELD TYPE list.
    3.  Switch the Filterable toggle on to ensure that the custom field is filterable. It is best practice to also switch the Required on if you need to use the custom field in the price formula later.
    4.  Click Save to save the custom field configurations.
6.  Repeat steps 4 and 5 to create the state and multiplier custom fields. When creating the multiplier custom field, you have to select Number from the FIELD TYPE list.
7.  Click SAVE to save the custom object configurations.

The definition of the lookup table called CarRental is now created, with the type , state , and multiplier fields.

Note:

The data type of the type and state fields created for the lookup table must be exactly the same as those created for the Usage object in Create custom fields for the Usage object. Otherwise, a match might fail, resulting in an error during the rating process of the usage record.
