---
title: "Test a function"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/function/function-management/test-a-function"
product: "zuora-platform"
scraped_at: "2025-12-24T05:22:13.852Z"
---

# Test a function

Learn how to test a function when creating or updating it.

To ensure the return value of a function meets your expectations, it is a good practice to test a function before activating it.

You can test a function during the creation or update.

1.  Click Test when creating or updating a function. The Input and Output fields are displayed. All custom fields of the current object are pre-populated in the Input field with the `null` value.

    ![test function](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/eb6a264d-b5d8-4915-b005-0df7f649006e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImViNmEyNjRkLWI1ZDgtNDkxNS1iMDA1LTBkZjdmNjQ5MDA2ZSIsImV4cCI6MTc2NjY0MDEzMSwianRpIjoiMGRiOGFmODAzMWI3NDQ3MmFkMjJkZjE5ZDQ2YzM5MjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.WBjAmKmmhPy93ZPhrt-JDM7pLNt4KQJdheBvIiWPMMI)

2.  Optional: Edit field names in the Input field. You can also add standard fields if the context object is a standard object.
3.  Specify field values in the Input field for testing. After changes to the Input field are detected, Zuora calls this function with the data in the Input field as input value and displays the return value in the Output field.

    ![test function failure](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e14cd1d5-ba8f-4c0a-b6fd-2a859f1ff59c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUxNGNkMWQ1LWJhOGYtNGMwYS1iNmZkLTJhODU5ZjFmZjU5YyIsImV4cCI6MTc2NjY0MDEzMSwianRpIjoiNzFhZWM2ZDNkMjU1NDhhMWIxZjk1ZTViNmY0NzMxZTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.BgVQEQZLqdnWHknikJIBd1V31hAXZJltWy_m3jGnR0Y)

    ![test function success](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8163c60f-3e83-435a-9fe9-9c5c46252806?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgxNjNjNjBmLTNlODMtNDM1YS05ZmU5LTljNWM0NjI1MjgwNiIsImV4cCI6MTc2NjY0MDEzMSwianRpIjoiMmE0MWIzMmVlOGMyNDJjYTg0OGRkNjMzYzhiMzE2NWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.HqSq0sx3F904sxP1Hq2XvIxeNUbjjqBHQcIRh9-aK_A)

4.  If the return value is not as you expected, revise the JavaScript code in the Enter Script field and repeat steps 2 and 3.
