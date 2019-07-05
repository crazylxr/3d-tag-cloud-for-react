
# 3DTagCloud

![](https://img.shields.io/badge/npm-0.12-orange.svg) ![](https://img.shields.io/github/issues/crazylxr/3dtagcloudforeact.svg) ![](https://img.shields.io/github/forks/crazylxr/3dtagcloudforeact.svg) ![](https://img.shields.io/github/stars/crazylxr/3dtagcloudforeact.svg) ![](https://img.shields.io/github/license/crazylxr/3dtagcloudforeact.svg)

基于 react 的 3d 标签云, [在线 demo](https://crazylxr.github.io/3d-tag-cloud-for-react/)

## Installation

```bash
npm install react3dtagcloud --save
```

## Usage

```javascript
import React from 'react'
import TagCloud from 'react3dtagcloud'

class Demo extends React.Component {
  render() {
    const tagName = ['java', 'javscript', 'C', 'C++', '前端', 'React', 'Vue', 'redux', '写作', '程序员', '编程']
	  return (
		<div style={{ width: '1000px', height: '1000px' }}>
		  <TagCloud tagName={tagName}></TagCloud>
		</div>
	  )
   }
}
```

## API
对于标签云可以设置一些自定义属性，具体如下：

| 属性 | 说明 | 类型 | 默认值
| --- | --- | --- | -- |
| tagName | 标签数组 | Array&lt;string&gt;| []
| speed | 球体旋转速度 | number | 10
| radius | 球的半径 | number | 200 |
| url | 前缀url | string | ''

## License
MIT
