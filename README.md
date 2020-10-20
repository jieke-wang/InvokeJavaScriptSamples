- Windows安装nodejs 12
  - 下载地址: https://nodejs.org/en/download/
- 安装包管理器cnpm
  - 参考地址: 安装npm及cnpm(Windows) https://www.cnblogs.com/liaojie970/p/9296177.html
  ```shell
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  ```
- 安装nodejs包管理器yarn
  - 地址: https://classic.yarnpkg.com/en/docs/install#windows-stable
  - 参考:
      > node中安装yarn(nodejs Yarn替代npm包管理)  
      > https://blog.csdn.net/moshowgame/article/details/103358313  
      > node / npm/ yarn 的安装以及环境变量  
      > https://blog.csdn.net/moshowgame/article/details/103358313
  - 更换镜像源
    ```shell
    # 查看一下当前源
    yarn config get registry

    # 切换为淘宝源
    yarn config set registry https://registry.npm.taobao.org

    # 切换为自带源
    yarn config set registry https://registry.yarnpkg.com
    ```
- 安装core 3.1 sdk
  - 下载地址: 
    - https://dotnet.microsoft.com/download/dotnet-core/3.1
    - https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-3.1.403-windows-x64-installer
- 安装vs code
  - 下载地址: https://code.visualstudio.com/download
- 初始化项目
  - 使用vscode打开项目
  - 打开vscode终端,进入`CoreMvcSamples`目录下
  - 使用命令`yarn`还原nodejs包
  - 使用命令`dotnet restore`还原core的包
  - 使用命令`dotnet run`启动项目
  - 在浏览器中浏览对应的地址:
    - http://localhost:5000/api/values/sayhello?name=your name
    - http://localhost:5000/api/values/add?x=1&y=2
    - http://localhost:5000/api/values/subtract?x=1&y=2
    - http://localhost:5000/api/values/multiplicati?x=1&y=2
    - http://localhost:5000/api/values/division?x=1&y=2
    - http://localhost:5000/api/values/buildarray
    - http://localhost:5000/api/values/mergeobject
    - http://localhost:5000/api/values/dependentmodule
- 说明:
  - vs code在使用过程中,需要安装哪些必要插件会自动提示安装
  - 本项目可以通过core调用javascript及type script编译成的javascript
  - 支持javascript es6语法,支持模块/插件的导入(例如:mathjs)
  - 本文件可以使用Typora软件打开,官网: https://www.typora.io/, 下载地址: https://www.typora.io/#windows
