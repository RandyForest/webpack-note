# demo1

这个demo中演示如何使用`wepack.config.js`配置部署项目。

## 步骤

### 初始化目录

```bash
npm init -y
npm install webpack webpack-cli -D
```

### 创建源文件

创建`./src/hello.js`并编辑。

```js
console.log('hello.js');
```

> 因为会使用`webpack.config.js`配置部署，所以文件名与文件夹名都可以随意命名。

### 编辑`webpack.config.js`配置

在项目根目录中创建`webpack.config.js`并编辑。

```js
const Path=require('path');

module.exports={
    entry:'./src/hello.js', // 入口配置
    output:{    // 出口配置
        filename:'bundle.js',   // 输出文件名
        path:Path.resolve(__dirname,'build')    // 输出文件目录地址
    },
    mode:'development'  // 使用模式，development：开发模式；production：产品模式，会压缩代码
}
```

### 打包

```bash
webpack
```

如果未全局安装：

```bash
./node_modules/.bin/webpack
```

### 运行

因为没有创建HTML页面，就直接用node运行。

```bash
node ./build/bundle.js
```

会执行`./src/hello.js`中的内容。

### 目录结构

执行完上述步骤后。

```
root
	node_modules
	build
		bundle.js
	src
		hello.js
	package-lock.json
	package.json
	webpack.config.js
```

