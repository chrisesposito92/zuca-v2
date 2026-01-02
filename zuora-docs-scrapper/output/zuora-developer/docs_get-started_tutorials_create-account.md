---
title: "Create a billing account"
url: "https://developer.zuora.com/docs/get-started/tutorials/create-account/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:05.394Z"
---

#

Create a billing account

##

End-user flow

After your customers click your **Checkout** button, they might be taken to a login page or registration page where they can register before purchasing.

If they do not already have a billing account, one can be created for them at this point through the "Create an account" API.

Zuora strongly recommends that you create a billing account for every customer. Remember, the sold-to contact data stored on the billing account is used to determine the tax owed by customers based on where your products and services are delivered.

It's a best practice to always collect accurate address information from your customers to ensure regulatory compliance.

**Note**: This step demonstrates how to create a billing account instead of a login user accout.

##

Sample code

The following sample codes creates a new billing account with the following information:

-   **Bill-to contact**:
    -   **Name**: Amy Lawrence
    -   **State**: California
    -   **Country**: USA
-   **Account name**: Amy's account
-   **Currency**: USD
-   **Bill cycle day**: 1st of each month

cURLJavaNode.jsPythonC#

```bash
curl -L -X POST 'https://rest.test.zuora.com/v1/accounts' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer be616b3c658c420489e1c31e015fb8fe' \
-d '{
    "billToContact": {
        "firstName": "Amy",
        "lastName": "Lawrence",
        "state": "California",
        "country": "USA"
    },
    "name": "Amy Lawrence account",
    "autoPay": false,
    "currency": "USD",
    "billCycleDay": 1
}'
```

```java
CreateAccountContact contact = new CreateAccountContact()
            .firstName("Amy")
            .lastName("Lawrence")
            .state("California")
            .country("USA");

CreateAccountRequest req = new CreateAccountRequest()
            .name("Amy's account")
            .billToContact(contact)
            .soldToSameAsBillTo(true)
            .billCycleDay(1)
            .currency("USD")
            .autoPay(false);

CreateAccountResponse res = zuoraClient.accountsApi().createAccountApi(req).execute();
System.out.println("Account is created, Number: " + res.getAccountNumber());
```

```javascript
const contact = new CreateAccountContact("Amy", "Lawrence");
contact.state = 'California';
contact.country = 'USA';

const accountRequest = new CreateAccountRequest(contact, 'USD', 'Amy Lawrence account');
accountRequest.billCycleDay = 1;
accountRequest.currency = 'USD';
accountRequest.autoPay = false;

const resp = await zuoraClient.accountsApi.createAccount(accountRequest);

console.log(JSON.stringify(resp, (k, v) => v ?? undefined, 2))
console.log(resp.accountNumber);
```

```python
...
from zuora_sdk import CreateAccountRequest

def create_account(client=None):
    if client is None:
        client = get_client()
    try:
        account = client.accounts_api().create_account(
            CreateAccountRequest(
                name='Amy Lawrence\'s account',
                bill_to_contact={
                    'first_name': 'Amy',
                    'last_name': 'Lawrence',
                    'state': 'California',
                    'country': 'USA'
                },
                auto_pay=False,
                currency='USD',
                bill_cycle_day='1'
            ))
        print(account)
        print('Account is created, Number: %s' % account.account_number)
        return account
    except ApiException as e:
        print("Exception when calling AccountsApi->create_account: status: %s, reason: %s"
              % (e.status, e.reason))

if __name__ == '__main__':
    create_account()
```

```csharp
CreateAccountContact contact = new CreateAccountContact
(
    firstName: "Amy",
    lastName: "Lawrence",
    country: "USA",
    state: "California"
);

CreateAccountRequest createAccountRequest = new CreateAccountRequest
(
    name: "Amy's account",
    billToContact: contact,
    billCycleDay: 1,
    soldToSameAsBillTo: true,
    autoPay: false,
    currency: "USD"
);

CreateAccountResponse account = zuoraClient.AccountsApi.CreateAccount(createAccountRequest);
Console.WriteLine(account.ToJson());
```

If the request succeeds, you will get a response similar to the following snippet:

```json
{
    "success": true,
    "accountId": "8ad087d290a5e7330190b989ca221bac",
    "accountNumber": "A00024362",
    "billToContactId": "8ad087d290a5e7330190b989ca961bad",
    "soldToContactId": "8ad087d290a5e7330190b989cb1f1baf"
}
```
