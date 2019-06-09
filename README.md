# jirax
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)]() [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)]() [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)]() [![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)



[![Build Status](https://dev.azure.com/junipd2/jirax/_apis/build/status/junipdewan.jirax?branchName=master)](https://dev.azure.com/junipd2/jirax/_build/latest?definitionId=4&branchName=master) ![made with nodejs](https://img.shields.io/badge/madewith-node.js-green.svg) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![license](https://img.shields.io/github/license/visionmedia/superagent.svg)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shields)](http://makeapullrequest.com) 



A CLI tool for [JIRA](`https://www.atlassian.com/software/jira`) for day to day usage with JIRA.Speed up your JIRA activity with this CLI tool.


![Interface](assets/cli_help.jpg?raw=true "CLI Help Preview")


## Prerequisites

You are required to have [Node.js](https://nodejs.org/) installed to run the cli tool or after installing [Node.js](https://nodejs.org/) you can make executable and run the excutable to use the tool. [Make executable](#making-executable)

## Getting Started

1. Log in to [Atlassian](https://id.atlassian.com/manage/api-tokens) and generate your API TOKEN.
2. Copy the API TOKEN

## Using Nodejs

Install all dependency 


```sh
npm install 
```

### Create the symlink. This command will help you execute `jirax` commands at global level 


```
npm link or sudo npm link
```


## Login In Cli


```sh
jirax -l
```

This will prompt few questions to enter your credentials please enter the credentials to use the CLI


```sh
$ Host name to use JIRA (for eg: something.atlassian.com)
$ Your Jira User Name
$ Your API Token 
```

## Cli help

```sh
jirax --help 
```

## Making executable

After cloning the repository. Run this command this command will automatically create plateform specific executables.

```sh
 npm run build
```

## Contribution

Here in the CLI tool only few of the use cases have been implemented which are more basic usage with JIRA client.
You can help with code contribution to add more functionality to the CLI tool.


## MIT License

**jirax** is available under the **MIT license**. See the [LICENSE](https://github.com/junipdewan/jirax/blob/master/LICENSE) file for more info.


Copyright (c) 2019 <junipd2@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.