---
title: "SCIM"
url: "https://developer.zuora.com/v1-api-reference/api/tag/SCIM/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:20:47.803Z"
---

# SCIM

System for Cross-domain Identity Management, or SCIM, is an API specification created to facilitate the management of people and groups of people in cloud-based applications and services. Universal Identity SCIM API is built on top of the SCIM 2.0 specification and can be integrated with major Identity Providers like Okta, Microsoft Entra ID and OneLogin.

Zuora recommends that you use OAuth v2.0 to authenticate to the Zuora REST API.

You must first create an OAuth client in the Zuora UI before using the [Create an OAuth token](https://developer.zuora.com/api-references/api/operation/createToken) operation to create an OAuth token. See [Authentication](https://developer.zuora.com/rest-api/general-concepts/authentication/) for more information.

### Prerequisites

1.  You need to have a One-ID account.
2.  You need to create OAuth 2.0 Clients.
3.  Use the client credentials to generate the bearer token.
4.  Generate the authentication token by hitting the endpoint.

### Steps to generate the bearer token

1.  Hit the endpoint to get the token:

    ```bash
    curl --location 'https://one.zuora.com/oauth2/token' \
      --header 'Content-Type: application/x-www-form-urlencoded' \
      --data-urlencode 'client_id=52a1d024-b7cc-4d3d-8d0b-dd7b23959e10' \
      --data-urlencode 'client_secret=aQWDDjn3x9JXbMUQaddvBa2vQQMDCHXL8BgeER8' \
      --data-urlencode 'grant_type=client_credentials'
    ```

    You will get the response as below:

    ```json
    {
      "access_token": "eyJraWQiOiIxNTYwMDBkMi1lY2FjLTQxMGYtOTJmYy02Y2IxMjU1YjQ3NTAiLCJhbGciOiJSUzI1NiJ9.eyIzdWIiOiI1MWExZDAyNC1iN2NjLTRkM2QtOGQwYi1kZDdiMjM5NTllMTAiLCJhdWQiOiI1MWExZDAyNC1iN2NjLTRkM2QtOGQwYi1kZDdiMjM5NTllMTAiLCJuYmYiOjE2OTA1MzcyODksInNjb3BlIjpbImFkbWluIiwiZWMxNDFkYzItOTAxZS00ODEzLWEyNWQtZWY0ODBjZmYxZTI2Il0sImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo5OTAwIiwiZXhwIjoxNjkwNTQwODg5LCJpYXQiOjE2OTA1MzcyODl9.NMZV-aERA8lTKPPsMtk_WK9ApvX-Bj-6FEIF9GP_duObzdReQkCA2ykcsPSmimw3IbJu7F4XbjZkwTCZL_vBiTaJlnQ7k3hXUzw30b3olDP2Dwc_W6Eh-CvT6s5ZxsFURCZJitfuqh82ezxHdT2lUdcDEMbELw9VpqUSBz0Dqh0tmfnFQyw4yX1be-jflT_0c8SvjyOFGRFScoxcPLq8TrrmpFvgxhT3MqowvQ9butxX6_4mTc3831FnJ6tQIihlBLH4DY11k38x3BBPzb0s9iVcEn7iczWbT0VrSr4A6g1ltATAHNChdzGTqGrhSN8JGG_PPCjJnHY_edaCmcPrUg",
      "scope": "admin rc141dc2-901e-4813-a25d-ef480cff1e26",
      "token_type": "Bearer",
      "expires_in": 3600
    }
    ```

2.  Use the access token in all the following API calls. Sample curl request:

    ```bash
    curl --location --request GET 'https://one.zuora.com/scim/v2/Schemas' \
      --header 'Authorization: Bearer eyJraWQiOiIxNTYwMDBkMi1lY2FjLTQxMGYtOTJmYy02Y2IxMjU1YjQ3NTAiLCJhbGciOiJSUzI1NiJ9.eyIzdWIiOiI1MWExZDAyNC1iN2NjLTRkM2QtOGQwYi1kZDdiMjM5NTllMTAiLCJhdWQiOiI1MWExZDAyNC1iN2NjLTRkM2QtOGQwYi1kZDdiMjM5NTllMTAiLCJuYmYiOjE2OTA1MzcyODksInNjb3BlIjpbImFkbWluIiwiZWMxNDFkYzItOTAxZS00ODEzLWEyNWQtZWY0ODBjZmYxZTI2Il0sImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo5OTAwIiwiZXhwIjoxNjkwNTQwODg5LCJpYXQiOjE2OTA1MzcyODl9.NMZV-aERA8lTKPPsMtk_WK9ApvX-Bj-6FEIF9GP_duObzdReQkCA2ykcsPSmimw3IbJu7F4XbjZkwTCZL_vBiTaJlnQ7k3hXUzw30b3olDP2Dwc_W6Eh-CvT6s5ZxsFURCZJitfuqh82ezxHdT2lUdcDEMbELw9VpqUSBz0Dqh0tmfnFQyw4yX1be-jflT_0c8SvjyOFGRFScoxcPLq8TrrmpFvgxhT3MqowvQ9butxX6_4mTc3831FnJ6tQIihlBLH4DY11k38x3BBPzb0s9iVcEn7iczWbT0VrSr4A6g1ltATAHNChdzGTqGrhSN8JGG_PPCjJnHY_edaCmcPrUg' \
      --header 'Content-Type: application/json'
    ```
