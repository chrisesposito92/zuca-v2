---
title: "Encryption"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/liquid-expressions-in-workflow/encryption"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:09.644Z"
---

# Encryption

This reference provides the sample filters for encryption in Liquid expressions.

## rsa\_encrypt

Encrypt with RSA.

Parameters: data, action\['encrypt', 'decrypt'\], key

{% assign public\_key = '-----BEGIN PUBLIC KEY----- MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCdlUof3WUjlLwlwva420D5nnXh xwOqYAUzHIq/AUzBYkDDla2hTtvspcebiFnKtXWmlZrzu4dNYtvE/2ZPiqrmPl8l PZAX74WwDRjMCC8HPGUmt6/2mVtXQ7wM9R1KEe9kX0lLeRLmK+lW24KvSL8U1yat WO1TP4GmTZ7Kw21fDQIDAQAB \-----END PUBLIC KEY-----' %} {% assign input = 'encryptedMessage' %} {{ input | rsa\_encrypt: 'encrypt', public\_key }} {% comment %} Wha580r+8bO/D2dBXS1zxkzQKnJZpR3EGu8h4a0hx5QPhY7GUJVTU5le/D5bRQDyiWlckz1hMPIAj3rU79eF04d3XLKCgD07XKoIEkQ1e3/i3s2FWhFyhyIPgOeqdwF9M89nx62epoLGGiKmxew+OnWTyRXwfIB8BRx16vTD9wY= {% endcomment %}

## rsa\_decrypt

Decrypt with RSA.

Parameters: input, private key

{% assign private\_key = '-----BEGIN RSA PRIVATE KEY----- MIICXQ IBAAKBgQCdlUof3WUjlLwlwva420D5nnXhxwOqYAUzHIq/AUzBYkDDla2h TtvspcebiFnKtXWmlZrzu4dNYtvE/2ZPiqrmPl8lPZAX74WwDRjMCC8HPGUmt6/2 mVtXQ7wM9R1KEe9kX0lLeRLmK+lW24KvSL8U1yatWO1TP4GmTZ7Kw21fDQIDAQAB AoGAQCRoS5geduEvxF8bdhso03JAoWoUf+EdvLQ9dYnd6ElJ+1KNnj8vHaBNI23Y vr4l6Wyz6cnHRSScOA+NYYscDICJKbVvYR4CMezjkaNCPwzEezg0ievNHZG3jaSG SALVbOA3ZR3zjZoLILYbuXeNEOVhyQvTcXQuiDWJDF9okTECQQDLQeFDW+9Yj/aN nZlPrGUGVFg7DPPjKS+f+iAbxX0Dy5Dx+oENbSWQoPq8Gkrp47Ih0o+NTTBawXf/ 5TPOON0XAkEAxnlVV28sL0jLM/XlTmkzF3ALNTOheatnpCtDmhUoIsczr0qrqPHD FhzXaJGCFrRNw578OudK7zEmFpb8LccjewJBAIsLsW9kGBNMwMzWMEgJ1j6DOqyC yuDuju7wrEBzVHdhLfHrfZdSwGz1QzGlBvSD2Js8sQln8ZlUWqQLBuqfidcCQGlW dlv8bif+a5L9XCG8pdg3qEspRveLaGtyZuO9fNrQfPb5G5iED/WJgy5FpBSmx2se 02Hz5gqDPGLa6abmPUcCQQCFgObpLkVla0amHz/U7y7pNASK3KzRxRAKJ/RJ5pQo rPKZkC+HMMeaq7z1ZBBZ2tRM+BFN13dF/CaUWwGe4fML \-----END RSA PRIVATE KEY-----' %} {% assign input = 'Wha580r+8bO/D2dBXS1zxkzQKnJZpR3EGu8h4a0hx5QPhY7GUJVTU5le/D5bRQDyiWlckz1hMPIAj3rU79eF04d3XLKCgD07XKoIEkQ1e3/i3s2FWhFyhyIPgOeqdwF9M89nx62epoLGGiKmxew+OnWTyRXwfIB8BRx16vTD9wY=' %} {{ input | rsa\_decrypt: private\_key }} {% comment %} encryptedMessage {% endcomment %}

## symmetric\_encrypt

Encrypt/Decrypt with the specified symmetric algorithm.

Parameters: input, action\['encrypt', 'decrypt'\], mode, key, iv = nil, no\_padding\['true', 'false'\]

{% assign input = 'encryptedMessage' | base64\_encode %} {% assign iv = 'initialVector000' | base64\_encode %} {% assign key = 'encryptionKey000' | base64\_encode %} {{ input | symmetric\_encrypt: 'encrypt', 'AES-128-CBC', key, iv, false | base64\_encode}} {% comment %} abby2vv8nUuoiagV6P35KY2WKrSQHQ50ihDzRE0uvjI= {% endcomment %}

## aes\_decrypt

Decrypt with AES.

Parameters: input, decryption\_IV, decryption key, mode\['AES-128-CBC', 'AES-256-CBC'\]

{% assign input = 'abby2vv8nUuoiagV6P35KY2WKrSQHQ50ihDzRE0uvjI=' %} {% assign iv = 'initialVector000' | base64\_encode %} {% assign key = 'encryptionKey000' | base64\_encode %} {{ input | aes\_decrypt: iv, key, 'AES-128-CBC' | base64\_decode }} {% comment %} encryptedMessage {% endcomment %}

## jwt\_encode/jwt\_decode

Encode/Decode JWT with the specified algorithm.

Parameters for encoding: payload, key, algorithm

Parameters for decoding: token, key, verify

{% assign key = 'jwtKey' %} {{ 'abc' | jwt\_encode: key, 'HS256' }} {% comment %} eyJhbGciOiJIUzI1NiJ9.ImFiYyI.HWTAZzvzs7q4SP9GQwXkqhN\_uFQ6aFCJGPuTKUFs\_ew {% endcomment %} {% assign input = 'eyJhbGciOiJIUzI1NiJ9.ImFiYyI.HWTAZzvzs7q4SP9GQwXkqhN\_uFQ6aFCJGPuTKUFs\_ew' %} {% assign key = 'jwtKey' %} {{ input | jwt\_decode: key, true }} {% comment %} \['abc',{"alg"\=>"HS256"}\] {% endcomment %}

## hmac\_sha256\_sign/hmac\_sha512\_sign

Use HMAC-SHA256/HMAC-SHA512 to sign a string.

Parameters: input, key

{% assign key = 'testHmacKey' %} {{ 'abc' | hmac\_sha256\_sign: key }} {% comment %} EJBqLUcQxuSwQ9UuucfSLiG9IsE2g7+AVRApdxmbOFw= {% endcomment %}

## rsa\_random\_key

Create a random key with the specified algorithm.

Parameters: nil, mode

{{ nil | rsa\_random\_key: 'AES-128-CBC' | base64\_encode }} {% comment %} ETnoMe4SJ/jHWAtQfdaPFw== {% endcomment %}
