---
title: "Add Zuora service provider to AD FS"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/configure-single-sign-on-for-zuora/configure-active-directory-federation-services-for-sso-saml/add-zuora-service-provider-to-ad-fs"
product: "zuora-platform"
scraped_at: "2026-02-19T03:19:25.749Z"
---

# Add Zuora service provider to AD FS

Learn how to add Zuora as a trusted service provider to AD FS.

1.  Log in to the AD FS Server, and launch the AD FS Management Console..
2.  On the left-hand tree view, under Trust Relationships, right-click Relying Party Trusts and select Add Relying Party Trust... .
3.  Complete the Relying Party Trust configuration.
    1.  In the Welcome to the Add Relying Party Trust Wizard, click Start.
    2.  In Select Data Source, click Import data about the relying party from a file.
    3.  In the Federation metadata file location field, enter the full path of the metadata file that Zuora provided. Click Next .
    4.  In Specify Display Name, enter the name of the Zuora relying party in the Display name field and notes in the Notes field. Click Next .
    5.  In Choose Issuance Authorization Rules, click Permit all users to access this relying party . Click Next .
    6.  In Ready to Add Trust, review the information, and click Next .
    7.  Click Close .
4.  On the left-hand tree view, under Trust Relationships , click Relying Party Trusts .
5.  In the Relying Party Trusts table, right-click the Zuora trust party name, select Properties, and complete the properties configuration.
    1.  Click the Advanced tab.
    2.  In the Secure hash algorithm field, click the arrow and select SHA-1 . Zuora uses the SHA-1 algorithm to sign SAML requests and responses.
    3.  Click Apply and OK .
6.  In the Relying Party Trusts table, right-click the Zuora trust party name and select Edit Claim Rules ... to add a rule to send the User Principal Name (UPN) as Name ID.
    1.  In the claim rules editor, click the Issuance Transform Rules tab.
    2.  Click Add Rule....
    3.  Select Send LDAP Attributes as Claims as the claim rule template to use.
    4.  In the Claim rule name field, enter Send UPN as Name ID .
    5.  In the LDAP Attribute column, click the arrow and select User Principal Name.
    6.  In the Outgoing Claim Type column, click the arrow and select Name ID .
    7.  In the Attribute store field, click and select Active Directory.
    8.  Click Finish to complete adding Zuora to AD FS as a trusted service provider.
