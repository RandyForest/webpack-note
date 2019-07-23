const Path=require('path');

module.exports={
    entry:'./src/hello.js', // 入口配置
    output:{    // 出口配置
        filename:'bundle.js',   // 输出文件名
        path:Path.resolve(__dirname,'build')    // 输出文件目录地址
    },
    mode:'development'  // 使用模式，development：开发模式；production：产品模式，会压缩代码
}