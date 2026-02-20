---
title: "Zuora Platform Encryption Glossary"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/zuora-protect/zuora-platform-encryption-glossary"
product: "zuora-platform"
scraped_at: "2026-02-20T17:46:14.530Z"
---

# Zuora Platform Encryption Glossary

Terms and concepts used in BYOK - Zuora Platform Encryption

## Data Encryption

Data encryption is a security technique that involves the conversion of information into a secure code to prevent unauthorized access or interception. Encryption protects sensitive data by transforming it into an unreadable format using a cryptographic algorithm and a key.

## Data Decryption

The process of converting ciphertext back to its original plaintext using the decryption key.

## Plaintext

The original, human-readable form of the data before encryption.

## Ciphertext

The encrypted, unreadable form of the data produced by applying a cryptographic algorithm and key.

## Encryption Algorithm

A mathematical process or set of rules that converts plaintext into ciphertext. Zuora uses the Advanced Encryption Standard (AES) algorithm for the platform encryption.

## Encryption Key

A piece of information used by the encryption algorithm to perform the encryption and decryption. Zuora Platform Encryption uses the encryption key for both encryption and decryption, and uses the AES (Advanced Encryption Standard) 256-bit keys.

## Envelope encryption

Envelope encryption is a cryptographic technique that combines the efficiency of symmetric-key encryption with the security of asymmetric-key encryption to protect sensitive data. The process involves using a pair of cryptographic keys, one symmetric key for data encryption and another asymmetric key for protecting the symmetric key. This dual-layered approach helps address the challenges associated with managing and securing encryption keys.

## Data Encryption Keys

Zuora Platform Encryption employs data encryption keys (DEK) for the encryption and decryption of data. The creation of data encryption keys is handled internally by Zuora Key Management System, and Zuora takes complete responsibility for the comprehensive management of these keys.

## Key Encryption Key (KEK) or Master Key

The encryption key that is used to encrypt the customer’s DEK. The key encryption key or the master key will be managed and shared by you. In the case of BYOK, the master key should be imported to Zuora and in the case of Zuora managed keys, the master key will be created from the Zuora UI.

## Encrypted Data Encryption Key ( EDEK )

When a Data encryption key (DEK) is encrypted with the Key encryption key or master key, the encrypted output is called EDEK.Encrypted Data at Rest

## Encrypted Data at Rest

Data that is encrypted when persisted on disk.

## Encryption Key Management

It pertains to the various facets of key management including key generation, enabling, disabling, rotation, and storage.

## Zuora Key Management Service (KMS)

The Key Management Service that is hosted in the Zuora environment to manage your encryption keys.

## Key Rotation

Key rotation is a security practice involving the periodic replacement or update of cryptographic keys used in encryption and decryption processes. The objective is to enhance the overall security of a system by minimizing the potential impact of a compromised key. Zuora platform encryption supports automatic key rotation every year to mitigate the risks associated with long-term use of the same cryptographic keys.
