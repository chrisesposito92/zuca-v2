---
title: "Encryption"
url: "https://docs.zuora.com/en/zuora-platform/data/data-query/construct-sql-queries-in-data-query/encryption"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:23.683Z"
---

# Encryption

Learn to encrypt your query result.

Data Query supports data encryption with custom keys through [Data Query API](https://developer.zuora.com/v1-api-reference/api/tag/Data-Queries/).

1.  Generate an RSA key pair locally and keep your key pair safe. Note that Data Query only supports 1024-bit RSA keys.
2.  [Submit data query](https://developer.zuora.com/v1-api-reference/api/operation/POST_DataQueryJob/) with `encryptionKey` field set to your base64 encoded public key in the request body. See the following example:

    { "query": "select \* from account", "outputFormat": "CSV", "compression": "GZIP", "encryptionKey": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHRHXrqriUa5nkXP6tvCv3uQtH5fYezHFZ8kXeK2LWTmY6i7FGzRcDlDpuY72iLTPTqbYKyky1EhTlr/UaMn1tugb+wVbWJ81AnisAxCDmnkbMwkfqPHxNlu+Tg2OXtgFd4QCENAgHt/DOqD9HQV+5KHp59DdoD2BzpNf63b3D1QIDAQAB", "output" : { "target": "S3" } }

    Once the query is completed, the output data file is encrypted. You must use the corresponding private key in your key pair to decrypt the query results.
