---
title: "Set up two-factor authentication via SMS"
url: "https://docs.zuora.com/en/zuora-platform/user-management/two-factor-authentication/set-up-two-factor-authentication-via-sms"
product: "zuora-platform"
scraped_at: "2025-12-24T05:20:35.306Z"
---

# Set up two-factor authentication via SMS

Learn how to set up two-factor authentication via SMS.

1.  Log in to the Zuora UI. You will be prompted to set up two-factor authentication.
2.  Click continue.
3.  Select Use text messages and click next. You will be prompted to enter your mobile number.
4.  Select the appropriate country code and enter your mobile number.
5.  Click next. You will be sent an authentication code.
6.  Retrieve the most recent authentication code sent by Zuora. The authentication code expires within 5 minutes of receiving it.
7.  Enter the authentication code. If the authorization code is not entered within 5 minutes of receipt, you will have to request for a new one to be sent.

    Note: If your authorization code expired or you did not receive one, click Didn't receive a code? to receive a new authentication code. If you enter the wrong code, you will receive an error message and will be asked to re-enter the authentication code.

8.  If you don't want to be prompted to enter another code on that particular machine and browser for 30 days, select the Remember me for 30 days checkbox. If you sign in to Zuora from various machines or browsers, you will have to set up 2FA for every machine or browser. If you set up two-factor authentication on a trusted machine and safe browser, that you use to access Zuora regularly, Zuora recommends enabling Remember me for 30 days. If you access Zuora on a public machine or unsafe browser, Zuora does not recommend enabling Remember me for 30 days.
9.  Click next. After you've entered the correct authentication code, a success message will be displayed.
