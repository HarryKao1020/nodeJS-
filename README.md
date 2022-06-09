# nodeJS-
## Node.js 是什麼呢？根據官網的說法：

> **Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine**
> 

「runtime」 指的是執行環境，就如同網頁上的JavaScript 是在瀏覽器的 JavaScript 引擎上執行，Node.js 就是一個能執行 JavaScript 的環境，而 V8 則是主流瀏覽器 - Google Chrome 的 JavaScript 引擎，**負責解析、執行 JavaScript**，也就是負責實踐 ECMAScript 規範中定義的部份；另外，V8 是開源的專案，有興趣的讀者可以參照 [Google Git - V8](https://chromium.googlesource.com/v8/v8)。

Node.js 以 V8 為核心，加上一系列 C/C++ 的套件，**成功的讓 Server 端也可以執行 JavaScript**。


### **優點**

但是，後端語言已經這麼多了，為什麼還要大費周章的將 JavaScript 移植到 Server 端呢？

這是因為 JavaScript 是一個事件驅動的語言，透過事件迴圈，能讓執行緒幾乎不會被卡住；而這樣的特性，非常適合用來接收高併發（High Concurrency）的請求。

例如在傳統的伺服器中，每個使用者的連接都會產生一個新的執行緒（看實作，不一定），並佔據一定的效能，伺服器在高併發的情況下，很容易就會由於應接不暇而無法服務新的流量；但 Node.js 會將每個 request 變成事件迴圈中待處理的事件，主執行緒只負責承接、轉拋、回應，並持續的在事件迴圈中循環，一切都以事件為核心在驅動程式運行，自然也就不會出現執行緒卡死的現象。

當然，如果是商業邏輯複雜的後端程式，效能瓶頸不在流量的服務，Node.js 就無用武之地；但在設計需要承接高流量，且處理邏輯不太複雜時，Node.js 可能就會是個可以考慮的選項。


## **module Types**

Node.js 有三大類的模組

1. Core Modules (原生模組)
2. Local Modules (自建模組)
3. Third Party Modules (第三方模組)

### 1. **node.js Core Modules**

node.js 是一個輕量的framework, 它的原生模組功能, 可以被編譯成二進制位元存取，也可以單刀直入做一些本地自動化功能操作。

有幾個重要的(以下連結，可以進入，知道其使用方法)：

[http](https://nodejs.org/api/http.html)：它包含可以用來建立http server 的一些類別, 方法, 及事件。

[url](https://nodejs.org/api/url.html)：它包含可以解析url的一些方法。

[querystring](https://nodejs.org/api/querystring.html)：它包含可以處理由client端傳來querystring的一些方法。

[path](https://nodejs.org/api/path.html)：它包含可以處理一些檔案或資料夾路徑的方法。

[fs](https://nodejs.org/api/fs.html)：它包含檔案的存取／操作的一些類別，方法及事件。

[util](https://nodejs.org/api/util.html)：它包含一些可供程序者使用的效能函式。

### **如何載入Core Modules**

我們為了使用Core or NPM modules，需要做載入動作，如何載入？

`var module = require(‘module_name’);`

也就是說，上述每一個module 都可以用 require() 載入，根據不同的module，它回傳的將會是一個物件，函式，屬性，或是其他的javascript 型別。

例如：載入及使用Core http Modules
