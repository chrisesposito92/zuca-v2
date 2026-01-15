---
title: "Working with GPG keys"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/generate-a-data-source-export/working-with-gpg-keys"
product: "zuora-platform"
scraped_at: "2026-01-15T22:02:50.309Z"
---

# Working with GPG keys

Learn how to work with the GPG keys

To use the [Encrypted Data Source Exports](/zuora-platform/data/reporting/data-sources-and-exports/generate-a-data-source-export#concept-crafvr9i__title-766) feature to retrieve the ACH numbers, you need to generate a GPG key pair and send the public key to Zuora Support. When exporting files, you need to use your private key to decrypt the files.

Note: This is a Controlled Release feature. Contact

[Zuora Global Support](http://support.zuora.com/)

for information about using this feature.

This topic walks you through how to generate a GPG key pair and use your private key to decrypt files.

## GPG keys tutorial for Windows

Follow the steps below if you are running a Windows system.

Step 1. Install GPG4Win

1.  Download and Install GPG4Win from [http://www.gpg4win.org/download.html](http://www.gpg4win.org/download.html)

2.  Select your preferred settings during the installation process.

3.  Skip the Define trustable root certificates dialog by checking Root certificates defined or skip configuration, click Next.

4.  Launch the application called "Kleopatra" from *Start / Gpg4win / Kleopatra*


Step 2. Generate a key pair and send the public key to Zuora

1.  Launch the application from *Start / Gpg4win / Kleopatra*

2.  Create a New Key Pair and send the public key to Zuora Support
    ![Generate-Key-Kleopatra.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e91754cb-283a-4cc9-82fc-34d54e485457?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU5MTc1NGNiLTI4M2EtNGNjOS04MmZjLTM0ZDU0ZTQ4NTQ1NyIsImV4cCI6MTc2ODYwMDk2NSwianRpIjoiYjY0YTdhYmVhMjM5NGJjYjlhMDEzOTQ4ODM2NDAxZjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.6an--cE3veW3RM6z4KOAXKbbngJctorHb_u30cv2n6Q)

    1.  Create Personal OpenPGP key pair: Select File / New Certificate

    2.  On the Choose Certificate Format window, Select Create a personal OpenPGP key pair.

    3.  Enter your Name and Email address. Enter your real name and email address here or Zuora will reject the key.
        ![Create-OpenPGP-Certificate.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a194f79e-a474-4e6b-94c4-61b318dcd1fe?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImExOTRmNzllLWE0NzQtNGU2Yi05NGM0LTYxYjMxOGRjZDFmZSIsImV4cCI6MTc2ODYwMDk2NSwianRpIjoiZDEzZjQwMzYyZDFkNDRmMjg3YjVhNTllZDg2MGE1NzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.uZZRNbLl5OTvPqLl6dmvua1U-hZbzLEpGcrZwxbaHrc)

    4.  Review and verify before pressing Create Key. The PGP key must be at least 3072-bit RSA. 4096-bit RSA is recommended.

    5.  Enter a Passphrase. Note: Note down the passphrase and keep it in a secure place. If you forgot the passphrase, you will not be able to decrypt files.

    6.  Export the Key Certificate. Select the certificate in the list and then select Export. Select a location to save this file, the filename will match the fingerprint shown in the dialog window in the previous step. This is your public key certificate.

        ![Export-key-certificate .png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ccff9310-77f9-46e9-a44e-b93ee0d1966e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNjZmY5MzEwLTc3ZjktNDZlOS1hNDRlLWI5M2VlMGQxOTY2ZSIsImV4cCI6MTc2ODYwMDk2NSwianRpIjoiOGQ4YjU1NWM2ZDNmNDQ2OTgwNjA3NmUzODRhZjVhYTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.nI4lJA7DCgqUa9GkMcMKYjEhs5ihNQt0uBn_POSiliU)

    7.  Send the file saved in the previous step to [Zuora Support](http://support.zuora.com) by creating a ticket.


Step 3. Decrypt an encrypted file sent by Zuora

1.  Select File / Decrypt/Verify files

2.  Select the .gpg file sent by Zuora

3.  Select the folder in which to decrypt files (leave the rest untouched)

    ![clipboard_e81fcb3e33a436fa6b1e8105f35e52a04.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a866d002-b29b-49d9-a8cf-a94d894e5a91?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE4NjZkMDAyLWIyOWItNDlkOS1hOGNmLWE5NGQ4OTRlNWE5MSIsImV4cCI6MTc2ODYwMDk2NSwianRpIjoiNjIwYmMxOTJhM2NlNDZhODllMzI0MzJlOGRkNmFjMDUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.qs7Fn8t7JpUORv8jFlischSySosT7lHGhQvioPjTORU)

4.  Click Decrypt/Verify

5.  You'll be asked to enter your passphrase. If you don't remember it, you won't be able to decrypt files.

6.  Verify the decrypted file has expected results


## GPG key pair tutorial for Linux / Mac OS X

Step 1. Install GPG

Refer to the tutorials below to install GPG:

1.  For Linux:[http://www.gnupg.org/download/index.en.html](http://www.gnupg.org/download/index.en.html)

2.  For Mac OS X:[http://www.gpgtools.org/installer/index.html](http://www.gpgtools.org/installer/index.html)


Step 2. Generate a key pair and send the public key to Zuora

Note:

The instructions here are based on [GPG MiniHowto](https://www.gnupg.org/howtos/en/GPGMiniHowto.html).

1.  Create your personal key:

    1.  Run: gpg –gen-key

    2.  Select RSA and RSA when prompted for which type of key to generate.

    3.  Select a PGP key with at least 3072-bit RSA key size. 4096-bit RSA is recommended.

    4.  Select 0 for never expire (or other values that you think are appropriate).

    5.  Enter your real name and address, otherwise, Zuora would reject it.

    6.  Enter a Passphrase. Note: Note down the passphrase and keep it in a secure place. If you forgot the passphrase, you will not be able to decrypt files.

2.  List your generated Key:

    1.  Run: gpg --list-keys

    2.  Note the Key ID which is next to the string "pub 4096R/", e.g., in "pub 4096R/D9859F2E", "D9859F2E" is the Key ID.

3.  Export Key using: gpg --export –a –o <key Id>.asc <Key Id>

4.  Send the <key id>.asc file saved in the previous step to [Zuora Support](http://support.zuora.com) by creating a ticket.


Step 3. Decrypt an encrypted file sent by Zuora.

Decrypt the encrypted file using: gpg –d encrypted-file.gpg > decrypted-file

Note:

You'll be asked to enter the passphrase. If you don't remember the passphrase, you will not be able to decrypt the file.
