`src/view/entries/posts.js`

#### 复现命令
```base
cnpm i
npm run dev:h5
```

#### 错误信息
```log
创建  发现文件  src\view\entries\posts.js
TypeError: Cannot read property 'specifiers' of undefined
    at exit (C:\Users\Administrator.DJ-20170228XRLU\AppData\Roaming\npm\node_mod
ules\@tarojs\cli\dist\h5\index.js:923:68)
    at NodePath._call (C:\Users\Administrator.DJ-20170228XRLU\AppData\Roaming\np
m\node_modules\@tarojs\cli\node_modules\_babel-traverse@6.26.0@babel-traverse\li
b\path\context.js:76:18)
    at NodePath.call (C:\Users\Administrator.DJ-20170228XRLU\AppData\Roaming\npm
\node_modules\@tarojs\cli\node_modules\_babel-traverse@6.26.0@babel-traverse\lib
\path\context.js:48:17)
    at NodePath.visit (C:\Users\Administrator.DJ-20170228XRLU\AppData\Roaming\np
m\node_modules\@tarojs\cli\node_modules\_babel-traverse@6.26.0@babel-traverse\li
b\path\context.js:117:8)
    at TraversalContext.visitQueue (C:\Users\Administrator.DJ-20170228XRLU\AppDa
ta\Roaming\npm\node_modules\@tarojs\cli\node_modules\_babel-traverse@6.26.0@babe
l-traverse\lib\context.js:150:16)
    at TraversalContext.visitSingle (C:\Users\Administrator.DJ-20170228XRLU\AppD
ata\Roaming\npm\node_modules\@tarojs\cli\node_modules\_babel-traverse@6.26.0@bab
el-traverse\lib\context.js:108:19)
    at TraversalContext.visit (C:\Users\Administrator.DJ-20170228XRLU\AppData\Ro
aming\npm\node_modules\@tarojs\cli\node_modules\_babel-traverse@6.26.0@babel-tra
verse\lib\context.js:192:19)
    at Function.traverse.node (C:\Users\Administrator.DJ-20170228XRLU\AppData\Ro
aming\npm\node_modules\@tarojs\cli\node_modules\_babel-traverse@6.26.0@babel-tra
verse\lib\index.js:114:17)
    at Object.traverse [as default] (C:\Users\Administrator.DJ-20170228XRLU\AppD
ata\Roaming\npm\node_modules\@tarojs\cli\node_modules\_babel-traverse@6.26.0@bab
el-traverse\lib\index.js:79:12)
    at Compiler.processOthers (C:\Users\Administrator.DJ-20170228XRLU\AppData\Ro
aming\npm\node_modules\@tarojs\cli\dist\h5\index.js:951:33)
```

