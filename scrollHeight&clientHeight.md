clientHeight、offsetHeight、scrollHeight、scrollTop 的区别

- offsetHeight 和元素的滚动没有任何关系，它只代表元素的高度，包括 border、padding、水平滚动条但不包括 margin。

- clientHeight 类似于 offsetHeight，不同的是它只包括 padding 不包括 border、水平滚动条以及 margin。

- scrollHeight 只有当元素出现滚动时才有意义，元素不滚动时， scrollHeight == clientHeight，当元素滚动时，scrollHeight 的值为 scrollTop + clientHeight

- scrollTop 为元素滚动时隐藏的部分

- offsetTop 依然和滚动没有关系，代表当前元素顶部距离最近父元素顶部的距离。

获取窗口大小的 API

- window.innerHeight 获取浏览器视觉视口高度（包括垂直滚动条）

- window.outHeight 获取浏览器窗口外部的高度。表示整个浏览器窗口的高度，包括侧边栏、窗口镶边和调整窗口大小的边框。

- window.screen.availHeight  浏览器窗口可用的高度。

- document.documentElement.clientHeight  获取浏览器布局视口高度，包括内边距，但不包括垂直滚动条、边框和外边距。

- document.documentElement.offsetHeight  包括内边距、滚动条、边框和外边距。

- document.documentElement.scrollHeight  在不使用滚动条的情况下适合视口中所有内容所需的最小高度。测量方式与 clientHeight 相同；它包含元素的内边距，但不包括边框，外边距或垂直滚动条。


