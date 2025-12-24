---
title: "Encoding"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/liquid-expressions-in-workflow/encoding"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:06.879Z"
---

# Encoding

This reference provides the sample filters for encoding in Liquid expressions.

## Encoding

You can use the following filters for encoding:

-   md5: Convert to MD5.

-   sha1: Convert to SHA1.

-   sha2: Convert to SHA256/SHA384/SHA512.

-   sha256\_encode64: Convert to SHA256 with base 64.

-   base64\_encode: Encode in base 64.

-   base64\_decode: Decode in base 64.

-   unpack: Convert to hex.

-   pack: Convert from hex.

-   utf\_8\_encoding: Convert to UTF-8 encoding.


{{ 'abc' | md5 }} {% comment %} 900150983cd24fb0d6963f7d28e17f72 {% endcomment %} {{ 'abc' | sha1 }} {% comment %} a9993e364706816aba3e25717850c26c9cd0d89d {% endcomment %} {{ 'abc' | sha2 }} {% comment %} ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f {% endcomment %} {{ 'abc' | sha2: 'SHA256' }} {% comment %} ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad {% endcomment %} {{ 'abc' | sha256\_encode64 }} {% comment %} ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0= {% endcomment %} {{ 'abc' | base64\_encode }} {% comment %} YWJj {% endcomment %} {{ 'YWJj' | base64\_decode }} {% comment %} abc {% endcomment %} {{ 'abc' | unpack }} {% comment %} 616263 {% endcomment %} {{ '616263' | pack }} {% comment %} abc {% endcomment %}
