# hello

## 步骤

使用node初始化项目目录。

```bash
npm init -y
```

安装webpack，与webpack-cli

```bash
npm install webpack webpack-cli -D
```

### 在目录中创建src目录

所有项目源码放在此目录中。

### 创建源码文件

在./src/下创建index.js，并编辑。

```js
console.log("index.js");
```

### 使用npx命令打包成目标文件

npx可以零配置部署webpack。

```bash
npx webpack
```

执行完后会在项目根目录中自动创建./dist/main.js

### 在项目根目录中创建一个HTML启动

在index.html中编辑。

```html
<script src="./dist/main.js"></script>
```

接下来就可以在浏览器控制台看到输出。

```html
index.js
```

> 在`index.html`中并没有引用`./src/index.js`文件，只引用了`./dist/main.js`，却输出了`./src/index.js`中的内容，说明`main.js`就是`index.js`经过`webpack`打包后的文件。

### 目录结构

```
root
	node_modules	// node 模块目录
	dist	// npx webpack 打包后的目标文件夹
		main.js	// npx webpack 打包后的目标文件
	src		// 项目源文件，存放组件
		index.js
	index.html	// 索引文件
	package.json	// node 配置文件
```

