
#### 问题说明
`this.$router.params`中会多出一个与path一致的字段

如图，`params`应该是空的，却多出一个`/view/index`

![图片](https://user-images.githubusercontent.com/24741025/58680436-4d80ce00-839a-11e9-9879-ed908699bbce.png)


#### 复现命令
```base
cnpm i
npm run dev:weapp
```

