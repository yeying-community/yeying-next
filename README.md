# yeying-next
A web3 application library for browser

# How to generate grpc stub code?
1. If there is no yeying-idl library locally, please use the command git clone git@github.com:yeying-community/yeying-idl.git to download it first.

2. script/generate.sh -d \<yeying-idl directory\>

# How to compile package?
npm run build

# How to run unit test?
npm run test -- tests/**/*.ut.ts

# How to run integration test?
npm run test -- tests/**/*.it.ts

# How to format the code before pushing code?
npm run format

# How to generate docs with [typedoc](https://typedoc.org/documents/Overview.html)?
npm run docs

