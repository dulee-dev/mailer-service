# AWS SES + node mailer

## object

test AWS SES + node mailer in sandbox mode

(before in production mode)

so you can send to only identified emails or domains

(https://ap-northeast-2.console.aws.amazon.com/ses/home?region=ap-northeast-2#/identities)

You should request production mode to send not identified email accounts

(https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html)

## set-up

1. Get accesskey(includes ses access authority - simply full access to SES) from aws

2. Add secret/aws-credential.json. you can see form of it in aws-credential.json

3. edit src/index.ts sendMail contents

4. run "npm run dev" or other scripts
