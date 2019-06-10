
#### 问题说明
`Swiper`组件衔接(circular)模式克隆的节点没有带上事件。
图片组件上有`onLoad`事件，`Swiper`组件衔接模式需要克隆头/尾的图片，而克隆的图片上没有`onLoad`事件。
小程序没问题，仅h5上异常。

#### 复现命令
```base
cnpm i
npm run dev:h5
```

