---
title: "Modify custom fields"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/custom-field-management-with-the-object-manager/modify-custom-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:16.223Z"
---

# Modify custom fields

Learn how to modify a custom field of a standard object via the Object Manager.

If changes to custom fields impact integration with related systems, you must update the configurations that access those field. For example, if you decrease the length of a field, any integration that sends data that exceeds the new field length will receive an "Invalid\_value" error. You must check the maximum length of data that integration could send.

1.  Navigate to in the left navigation menu.
2.  Click the name of the object to which the custom field you want to modify belongs. The object detail page opens.
3.  Locate the custom field you want to modify and then click the Edit icon ![Edit icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6c4955ce-f413-4102-9a7d-92c4df7969a1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZjNDk1NWNlLWY0MTMtNDEwMi05YTdkLTkyYzRkZjc5NjlhMSIsImV4cCI6MTc2NjY0MDA3NCwianRpIjoiYmEyOGVmYzIyZDA4NDcyZjljMWUxNDVjZjIzYzAyMWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.q9GdKM-mOnvwZom2f_d81vGxMeOqWy-f6rIb4Pl2uMg). The Edit Custom Field window opens.
4.  Modify the field definition. You cannot change the field type. If the field is defined with the Object Manager, you can update the Indexed setting. For example, update the field from indexed to non-indexed or vice versa.
5.  Click Save.
