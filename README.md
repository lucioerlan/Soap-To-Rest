[![PRETTIER](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://gitter.im/jlongster/prettie)
[![LICENSE](https://img.shields.io/github/license/arshadkazmi42/awesome-github-init.svg)](https://github.com/arshadkazmi42/awesome-github-init/LICENSE)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Flucioerlan%2FSoap-To-Rest&count_bg=%23E71A18&title_bg=%23555555&icon=dependabot.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com)

![SOAP-JSON](https://user-images.githubusercontent.com/67064886/88652921-ce704e00-d0a1-11ea-96bc-929e5708665c.png)
<br>


# Description 

If you also hate to create interactions that communicate with the soap protocol, now use
a json instead of xml. I created some examples of communications in / controllers, it is very
difficult nowadays, to find some wsdl that are active. 😧
<br>


### Sample request using CURL in the command line/terminal:

```
curl -X POST -d 'x=-46.6520066&y=-23.5650127' http://localhost:4007/api/getAddress
```
<br>


### Access the documentation for all methods in the swagger 🥇

 http://localhost:4007/api/docs
<br>


---

# Installation

### Requirements

You will need to install some stuff, if they are not yet installed in your machine:

* [Node.js (v4.3.2 or higher; LTS)](http://nodejs.org)
* [NPM (v3.5+; bundled with node.js installation package)](https://docs.npmjs.com/getting-started/installing-node#updating-npm)
<br>

---

### Install through Github :octocat:

Best way to install is to clone it from Github
<br>

**To clone/download the boilerplate**

```bash
$ git clone https://github.com/lucioerlan/rest-to-soap.git
```

**After cloning**

```bash
$ cd rest-to-soap
```

**Install all of the projects dependencies with:**

```bash
$ npm install

```


### copy the .env-examples file to .env

```
$ cp .env-examples .env
```

**running**

```bash
$ npm start

```
<br>


---

### Running with Docker 🐳

![soap-docker](https://user-images.githubusercontent.com/67064886/88652542-5e61c800-d0a1-11ea-8e00-ed3db894db75.png)
```
$ docker build -t rest-to-soap/node-api .
```
<br>


![run-soap](https://user-images.githubusercontent.com/67064886/88652554-615cb880-d0a1-11ea-9449-d14636f0ef1d.png)
```
$ docker run -p 4007:4007 rest-to-soap/node-api
```
<br>


### Running with PM2

![pm2-soap](https://user-images.githubusercontent.com/67064886/88652569-63267c00-d0a1-11ea-84c7-ec8c6a6f2e5f.png)

```
$ pm2 start pm2.config,js
```
<br>

## 🔓 Licença 
MIT © [Erlan Lucio](https://www.linkedin.com/in/erlanlucio/)
