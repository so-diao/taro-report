`src/view/tree.js`

#### 问题说明
map循环中向子组件传参异常，可以看`src/view/tree.js`，正常的预期结果应该是打印出
```js
{
    type: '0',
    name: '-2'
}
```
然而子组件中props为undefined，并没有收到父组件传过来的node参数


#### 复现命令
```base
cnpm i
npm run dev:weapp
```

