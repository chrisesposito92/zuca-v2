---
title: "Password policy"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/user-management/password-policy"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:55.566Z"
---

# Password policy

The password policy outlines the password policy for Zuora Revenue, detailing rules for creating secure passwords and ensuring their proper use and storage.

A password policy is a set of rules that can help users to create reliable and secure passwords to access Zuora Revenue. It can also help guarantee that the passwords are stored and used in an appropriate way. It is a good practice for the system administrator to implement a strong password policy for Zuora Revenue.

In Zuora Revenue, the password policy is determined by the Password Configuration lookup definition, which contains the following lookup codes.

| Lookup code | Description |
| --- | --- |
| MIN_PASSWORD_LENGTH | The minimum length that is allowed for the password. The valid value is an integer that is equal to or greater than 8. If the specified value is less than 8, the specified value will be ignored and the value of 8 will be applied. |
| MAX_PASSWORD_LENGTH | The maximum length that is allowed for the password. The valid value is an integer from the MIN_PASSWORD_LENGTH value to 30. If the specified value is greater than 30, the specified value will be ignored and 30 will be used. |
| PASSWORD_EXPIRY | The duration (in days) after which the current password expires. The default value is 90. |
| REQUIRED_MIXED_CASE_AND_NUMBER | Specify whether the password requires a combination of uppercase letters, lowercase letters, and numbers. The valid value is Y for yes and N for no. |
| SPECIAL_CHARACTER_REQUIRED | Specify whether at least one special character is required in the password. The valid value is Y for yes and N for no. |
| LAST_N_PWD_CANNOT_BE_USED | Specify the number of previous passwords that cannot be used. The valid value is an integer from 0 to 10. For example, if eight is specified, the last eight passwords cannot be used as the new password. If the specified value is greater than 10, the value of 10 will be used. |
| ENABLE_SHA_ENCRYPTION | Specify whether to enable SHA (secure hash algorithm) encryption for the password. The valid value is Y for enable and N for disable. |
| LOGIN_ATTEMPTS | Specify the maximum number of login attempts that are allowed. The valid value is an integer. The default value is 5, which means the account will be locked after 5 login attempts fail. |

[Click here](/zuora-revenue/getting-started/user-management/password-policy) to know how to configure password policy.
