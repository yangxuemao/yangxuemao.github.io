### Let 和 Const

### 变量的结构赋值

### 正则的扩展

字符串对象共有 4 个方法，可以使用正则表达式：`match()`、`replace()`、`search()`和`split()`。

1. u 修饰符

2. y 修饰符

3. 具名组匹配

   ES2018 引入了[具名组匹配](https://github.com/tc39/proposal-regexp-named-groups)（Named Capture Groups），允许为每一个组匹配指定一个名字，既便于阅读代码，又便于引用。“具名组匹配”在圆括号内部，模式的头部添加“问号 + 尖括号 + 组名”（`?<year>`），然后就可以在`exec`方法返回结果的`groups`属性上引用该组名。

   ```javascript
   const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
   
   const matchObj = RE_DATE.exec('1999-12-31');
   const year = matchObj.groups.year; // 1999
   const month = matchObj.groups.month; // 12
   const day = matchObj.groups.day; // 31
   ```

   jaascript

4. 解构赋值和替换

### 字符串的扩展

1. 字符的 Unicode 表示法

   将码点放入大括号，如“\u{20BB7}”

2. codePointAt()

   能够正确处理 4 个字节储存的字符，返回一个字符的码点。`codePointAt`方法会正确返回 32 位的 UTF-16 字符的码点。对于那些两个字节储存的常规字符，它的返回结果与`charCodeAt`方法相同。

3. String.fromCodePoint()

   可以识别大于`0xFFFF`的字符，弥补了`String.fromCharCode`方法的不足。在作用上，正好与`codePointAt`方法相反。

4. 字符串遍历接口 for...of

   除了遍历字符串，这个遍历器最大的优点是可以识别大于`0xFFFF`的码点，传统的`for`循环无法识别这样的码点。

5. normalize

6. includes(), startsWith(), endsWith()

   - **includes()**：返回布尔值，表示是否找到了参数字符串。

   - **startsWith()**：返回布尔值，表示参数字符串是否在原字符串的头部。

   - **endsWith()**：返回布尔值，表示参数字符串是否在原字符串的尾部。

7. repeat()

   返回一个新字符串，表示将原字符串重复`n`次。

8. padStart(),padEnd() [2017]

   ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。`padStart()`用于头部补全，`padEnd()`用于尾部补全。

9. matchAll

10. 模板字符串

### 数值的扩展

1. 二进制和八进制表示

   分别用前缀 `o0` 、`ob`  表示

   如果要将`0b`和`0o`前缀的字符串数值转为十进制，要使用`Number`方法。

2. Number.isFinite(), Number.isNaN()

   它们与传统的全局方法`isFinite()`和`isNaN()`的区别在于，传统方法先调用`Number()`将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，`Number.isFinite()`对于非数值一律返回`false`,`Number.isNaN()`只有对于`NaN`才返回`true`，非`NaN`一律返回`false`。

3. Number.parseInt(), Number.parseFloat()

   ES6 将全局方法`parseInt()`和`parseFloat()`，移植到`Number`对象上面，行为完全保持不变。

4. Number.isInteger()

   `Number.isInteger()`用来判断一个数值是否为整数。

5. Number.EPSILON

   ES6 在`Number`对象上面，新增一个极小的常量`Number.EPSILON`。根据规格，它表示 1 与大于 1 的最小浮点数之间的差。因此，`Number.EPSILON`的实质是一个可以接受的最小误差范围。

6. 安全整数和 Number.isSafeInteger()

   JavaScript 能够准确表示的整数范围在`-2^53`到`2^53`之间（不含两个端点），超过这个范围，无法精确表示这个值。

7. Math 对象的扩展

   Math.trunc() 去除一个数的小数部分

   Math.sign() 用来判断一个数到底是正数、负数、还是零。

   Math.cbrt 方法用于计算一个数的立方根。

   Math.clz32 方法返回一个数的 32 位无符号整数形式有多少个前导 0。

   Math.imul()

   Math.fround方法的主要作用，是将64位双精度浮点数转为32位单精度浮点数。

   Math.hypot方法返回所有参数的平方和的平方根。

   对数方法：

   Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1。

   Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。

   Math.log10(x)返回以 10 为底的x的对数。

   Math.log2(x)返回以 2 为底的x的对数。

### 函数的扩展

1. 函数参数默认值

2. 函数的length 属性

   指定了默认值以后，函数的`length`属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，`length`属性将失真。

3. rest 参数

   形式为 `...变量名`

4. name 属性

5. 箭头函数

   - 不绑定this

   - 不绑定 arguments

   - 不能使用 new 操作符，不能用作构造函数

   - 严格模式下，与 this 相关的规则都会被忽略

   - 没有 this 指针，通过 call 或 apply 时会忽略第一个参数

   - 不能使用yield关键字

   - 没有 prototype 属性

6. 尾调用优化

   一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。

### 数组的扩展

1. 扩展运算符 ...，好比 rest 参数的逆运算

   // ES5 语法  new (Date.bind.apply(Date, \[null, 2015, 1, 1]))

   // ES6 语法  new Date(...\[2015, 1, 1]);

   替代函数的 apply 方法

   应用：复制、合并数组（替换 concat 方法）、与解构赋值结合、字符串、计算4字节字符串长度

   用于具有 Iterator 接口的对象扩展，如 map, set

2. Array.from() —— 用于将类数组对象和可遍历的对象转为数组

   等同于：[].slice.call();

   实际应用中，常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。

   任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。

   Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种 Unicode 字符，可以避免 JavaScript 将大于\uFFFF的 Unicode 字符，算作两个字符的 bug。

3. Array.of() —— 用于将一组值转换为数组。

   等同于：[].slice.call();

   这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。

4. copyWithin() —— 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

5. find 和 findIndex

   回调函数含3个参数：value, index, arr

   这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足。

   \[NaN].findIndex(y => Object.is(NaN, y))

   indexOf方法无法识别数组的NaN成员，但是findIndex方法可以借助Object.is方法做到。

6. fill —— 使用给定值填充数组

7. entries()，keys() 和 values() —— 都返回一个遍历器对象 [2017]

8. includes() 是否包含元素 [2016]

   替代 indexOf 

   Map 和 Set 数据结构有一个has方法，需要注意与includes区分。

   Map 结构的has方法，是用来查找键名的;

   Set 结构的has方法，是用来查找值的;

9. flat()，flatMap()

   flat:将嵌套数组拉平为一维数组

   flatmap: 先执行map函数，再拉平，只能拉平一层

10. 空位

    es5 中：forEach(), filter(), reduce(), every() 和some()都会跳过空位。

    map()会跳过空位，但会保留这个值

    join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。

    es6 中：明确将空位转为undefined。

### 对象的扩展

1. 属性的简洁表示

   ES6 允许在对象之中，直接写变量。

2. 属性名表达式

   属性名表达式与简洁表示法，不能同时使用，会报错。属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串\[object Object]

3. 方法的name属性

   get,set 方法，属性名为 “get/set” + 函数名

   bind 绑定的函数, 属性名为 "bound" + 函数名

   new 构造函数创建的函数，属性名为 "anonymous"

   方法名为 symbol 值的函数，属性名为 symbol 的描述

4. 属性的可枚举性和遍历 [2017]

   ```javascript
   Object.getOwnPropertyDescriptor(obj, 'foo')
   {
    value:
    writable:
    enumerable:
    configurable:
   }
   ```

   `for...in` ,  `Object.keys()` , `JSON.stringfy()` , `Object.assign()` 会忽略不可枚举的属性，只有 `for..in` 会返回继承属性，因此，应尽量不要使用 for 循环，而用Object.keys代替

   ES6 有 5 种方法可以遍历对象的属性

   - for...in

   - Object.keys()

   - Object.getOwnPropertyNames()

   - Object.getOwnPropertySymbols() 返回所有 symbol 属性的键名

   - Reflect.ownKeys() 返回所有，包括 symbol 和不可枚举属性

   以上5种方法遍历对象，都遵守同样的次序

   先数值（升序）- 字符串（时间升序） - symbol（时间升序）

5. super

   只能用在对象的方法之中

   super.foo 等同于 Object.getPrototypeOf(this).foo（属性）或Object.getPrototypeOf(this).foo.call(this)（方法）。

6. 对象的扩展运算符（等同于 Object.assign()）

   ES2018 将这个运算符引入了对象。

   将目标对象自身的所有可遍历的（enumerable）、但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面。

   右侧对象不能为null或undefined，解构赋值必须是最后一个参数

   解构赋值的拷贝是浅拷贝，不能复制继承自原型对象的属性。

   如果扩展运算符后面不是对象，则会自动将其转为对象。（字符串转换成类数组）

   继承拷贝方案：

   ```javascript
   // 写法一
   const clone1 = {
    __proto__: Object.getPrototypeOf(obj),
    ...obj
   };
   
   // 写法二
   const clone2 = Object.assign(
    Object.create(Object.getPrototypeOf(obj)),
    obj
   );
   
   // 写法三
   const clone3 = Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
   )
   
   合并对象
   {...a,...b} == Object.assign({},a,b)
   ```

### 对象的新增方法

1. 1.Object.is()

   与严格比较运算符（===）的行为基本一致。处理了+0和-0，NaN等于自身

2. Object.assgin()

   处理对象合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

   非对象参数出现在源对象的位置，会先转成对象，无法转的则跳过。

   只有字符串的包装对象，会产生可枚举属性。Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。

   浅拷贝、同名属性替换、数组、取值函数的处理

   用途：

   为对象添加属性、方法；克隆对象；合并多个对象；为属性指定默认值

3. Object.getOwnPropertyDescriptors()

   返回指定对象所有自身属性（非继承属性）的描述对象。

   解决 Object.assgin() 无法拷贝 get 和 set 方法属性的问题

   Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));

   配合Object.create()方法，将对象属性克隆到一个新对象(浅拷贝)。

4. \__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()

   \__proto__属性

   （前后各两个下划线），用来读取或设置当前对象的prototype 对象。目前，所有浏览器（包括 IE11）都部署了这个属性。不作为正式对外API，仅浏览器下部署，最好使用 propertytypeof 代替 Object.setPropertyOf()

   作用与\__proto__ 相同，用来设置对象的 prototype 属性，返回参数对象本身

   如果第一个参数不是对象，会自动转为对象。但是由于返回的还是第一个参数，所以这个操作不会产生任何效果。

   Object.getPrototypeOf()

   该方法与 Object.setPrototypeOf 方法配套，用于读取一个对象的原型对象。

5. Object.keys()，Object.values()，Object.entries()

   ES5 引入了 Object.keys 方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。

   ES2017年引入了跟 `Object.keys ` 配套的 `Object.values`  和 `Object.entries `，作为遍历一个对象的补充手段，供for...of 循环使用。

   Object.values 只返回对象自身的可遍历属性。

   Object.create() 第二个参数中的属性默认是不可遍历的

   Object.values 会过滤属性名为 Symbol 值的属性。

   如果 Object.values 方法的参数是一个字符串，会返回各个字符组成的一个数组。

   Symbol 属性会被忽略。

   Object.entries()

   Object.entries 的基本用途是遍历对象的属性。

   Object.entries 方法的另一个用处是，将对象转为真正的Map结构。

6. Object.fromEntries() 

   Object.fromEntries() 方法是 Object.entries() 的逆操作，用于将一个键值对数组转为对象。

   特别适合将 Map 结构转为对象。

### Symbol 对象

1. js 的第七种数据类型

   如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。

   转成字符串

   let s1 = Symbol('foo');

   s1.toString() // "Symbol(foo)"

   Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。

   Symbol 值不能与其他类型的值进行运算，但可以显示转换为字符串或布尔，不能转为数值

2. 作为属性名的Symbol

   Symbol 值作为对象属性名时，不能用点运算符，只能使用方括号

   const mySymbol = Symbol();

   const a = {};

   a.mySymbol = 'Hello!';  //无效，.后面默认是字符串

   Symbol 值作为属性名时，该属性是公开属性。

3. 实例：消除魔术字符串

4. 属性名的遍历

   Symbol 属性不会出现在 `for...in` 、 `for...of` 、`Object.keys()` 、`Object.getOwnPropertyNames()`、`JSON.stringify()` ，但可通过 Object.getOwnPropertySymbols 方法获取。

   Reflect.ownKeys 方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

5. Symbol.for()、Symbol.keyFor() 

   登记在全局环境中供搜索，先检查给定的key是否已经存在，如果不存在才会新建一个值。

   Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。

6. 内置的 Symbol 值

   其他对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法。比如，foo instanceof Foo在语言内部，实际调用的是Foo\[Symbol.hasInstance](foo)。

   Symbol.isConcatSpreadable 

   Symbol.species

   Symbol.species的作用在于，实例对象在运行过程中，需要再次调用自身的构造函数时，会调用该属性指定的构造函数。

   Symbol.match、Symbol.replace、Symbol.split、iterator

   指向一个方法，当该对象被String.prototype.match/replace/split 调用时，返回该方法的值。

### Set 和 Map 数据结构

1. Set 

   定义：值唯一的数组

    用途：

   - 数组去重   \[...new Set([])]

   - 字符串去重 \[...new Set('abacb')].join('')

   特性：

   - 向 Set 加入值的时候，不会发生类型转换，判断相等的算法类似 === ，且 NaN ==== NaN

   - Set的遍历顺序就是插入顺序

   - Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。        

     属性：

   - constructor

   - size

   方法：

   - 操作方法  [add]、[delete]、[has]、[clear]

   - 遍历方法  [keys]、[values]、[entries]、[forEach]

2. WeakSet

   定义：不重复值的集合

   特点：

   - WeakSet 的成员只能是对象，而不能是其他类型的值。

   - WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用。

   - WeakSet 不可遍历。

   方法：[add]、[delete]、[has]

   用途：

   WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时会引发内存泄漏。

3. Map

   定义：存储键值对的容器。

   特点：

   - 任何值或者对象都可以作为一个键或一个值，解决了object的key只能是字符串的问题。

   - Map构造函数接受数组作为参数

   - 如果对同一个键多次赋值，后面的值将覆盖前面的值。

   - 如果读取一个未知的键，则返回undefined。

   属性：[size]

   方法：

   - 操作方法：[get]、[set]、[has]、[delete]、[clear]

   - 遍历方法：[keys]、[values]、[entries]、[forEach]

   其他：

   - Map 的遍历顺序就是插入顺序。

   - Map 结构的默认遍历器接口（Symbol.iterator属性），就是entries方法。map\[Symbol.iterator] === map.entries

4. WeakMap

   WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。

   方法：[get]、[set]、[has]、[delete]

   特点：不可遍历

### Proxy

1. 定义

   用于修改某些操作的默认行为，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

2. Proxy 支持的13种方法

   [**get**]

   - 可以继承

   - 可以实现对数组的负数索引

   - 可以实现对函数名链式使用

   - 可以实现一个生成各种 DOM 节点的通用函数dom

   - 总是指向原始的读操作所在的那个对象，一般情况下就是 Proxy 实例。

   [**set**]

   - 用来拦截某个属性的赋值操作

   - 使用Proxy保证属性值符合要求。

   - 利用set方法，还可以数据绑定，即每当对象发生变化时，会自动更新 DOM。

   - 如果目标对象自身的某个属性，不可写且不可配置，那么set方法将不起作用。

   - 严格模式下，set代理如果没有返回true，就会报错。

   [**has**]

   - has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。

   - 典型的操作就是in运算符。

   - 使用has方法隐藏某些属性（如 _），不被in运算符发现。

   - 虽然for...in循环也用到了in运算符，但是has拦截对for...in循环不生效。

   [**deleteProperty**]

   - deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。

   - 目标对象自身的不可配置（configurable）的属性，不能被deleteProperty方法删除，否则报错。

   [**ownKeys**]

   - ownKeys方法用来拦截对象自身属性的读取操作。

   - 具体来说，拦截以下操作:

     - Object.getOwnPropertyNames()

     - Object.getOwnPropertySymbols()

     - Object.keys()

     - for...in循环

   - 有三类属性会被ownKeys方法自动过滤，不会返回

     - 目标对象上不存在的属性

     - 属性名为 Symbol 值

     - 不可遍历（enumerable）的属性

   - ownKeys方法返回的数组成员，只能是字符串或 Symbol 值。

   - 返回不可配置的属性会报错

   [**getOwnPropertyDescriptor**]

   - getOwnPropertyDescriptor方法拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined。

   [**defineProperty**]

   - defineProperty方法拦截了Object.defineProperty操作。

   - 如果目标对象不可扩展（non-extensible），则defineProperty不能增加目标对象上不存在的属性，否则会报错。

   - 另外，如果目标对象的某个属性不可写（writable）或不可配置（configurable），则defineProperty方法不得改变这两个设置。

   [**preventExtensions**]

   - preventExtensions方法拦截Object.preventExtensions()。

   - 该方法必须返回一个布尔值，否则会被自动转为布尔值。

   [**getPrototypeOf**]

   - getPrototypeOf方法主要用来拦截获取对象原型。

   - 具体来说，拦截下面这些操作:

     - Object.prototype.__proto__

     - Object.prototype.isPrototypeOf()

     - Object.getPrototypeOf()

     - Reflect.getPrototypeOf()

     - instanceof

   - getPrototypeOf 方法的返回值必须是对象或者null，否则报错。

   - 另外，如果目标对象不可扩展（non-extensible）， getPrototypeOf 方法必须返回目标对象的原型对象。

   [**setPrototypeOf**]

   - 方法主要用来拦截Object.setPrototypeOf方法。

   [**isExtensible**]

   - 拦截Object.isExtensible操作。

   [**apply**]

   - apply方法拦截函数的调用、call和apply操作。

   [**construct**]

   - construct 方法用于拦截 new 命令。

   - construct 方法返回的必须是一个对象，否则会报错。

3. Proxy.revocable

   - 方法返回一个可取消的 Proxy 实例。

   - let {proxy, revoke} = Proxy.revocable(target, handler)

4. this 问题

### Reflect

1. 描述

   与Proxy对象一样，也是ES6为了操作对象而提供新的API。

2. 设计目的

   1）将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。

   2）修改某些Object方法的返回结果，让其变得更合理。

   3）让Object操作都变成函数行为。

   4）Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。

3. 静态方法

   大部分与Object对象的同名方法的作用都是相同的，而且它与Proxy对象的方法是一一对应的。

   共性：如果第一个参数不是对象，都会报错。

   Reflect 一共有 13 个静态方法。

   [**apply**]

   Reflect.apply(target, thisArg, args)

   等同于Function.prototype.apply.call(target, thisArg, args)，用于绑定this对象后执行给定函数。

   [**construct**]

   Reflect.construct(target, args)

   等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。

   [**get**]

   Reflect.get(target, name, receiver)查找并返回target对象的name属性，如果没有该属性，则返回undefined。

   如果name属性部署了读取函数（getter），则读取函数的this绑定receiver。

   [**set**]

   Reflect.set(target, name, value, receiver)

   设置target对象的name属性等于value。

   如果name属性设置了赋值函数，则赋值函数的this绑定receiver。

   Reflect.set一旦传入receiver，就会将属性赋值到receiver上面（即obj），导致触发defineProperty拦截。

   [**defineProperty**]

   Reflect.defineProperty(target, name, desc)

   基本等同于Object.defineProperty，用来为对象定义属性。

   [**deleteProperty**]

   Reflect.deleteProperty(target, name)

   等同于delete obj\[name]，用于删除对象的属性。

   [**has**]

   Reflect.has(target, name)

   对应name in obj里面的 `in` 运算符。

   删除成功，返回true，否则，返回false。

   [**ownKeys**]

   Reflect.ownKeys(target)

   用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。

   [**isExtensible**]

   Reflect.isExtensible(target)

   对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展。

   [**preventExtensions**]

   Reflect.preventExtensions(target)

   [**getOwnPropertyDesriptor**]

   Reflect.getOwnPropertyDescriptor(target, name)

   基本等同于Object.getOwnPropertyDescriptor，用于得到指定属性的描述对象

   [**getPrototypeOf**]

   Reflect.getPrototypeOf(target)

   用于读取对象的__proto__属性，对应Object.getPrototypeOf(obj)。

   Reflect.getPrototypeOf和Object.getPrototypeOf的一个区别是，如果参数不是对象，Object.getPrototypeOf会将这个参数转为对象，然后再运行，而Reflect.getPrototypeOf会报错。

   [**setPrototypeOf**]

   用于设置目标对象的原型（prototype），对应Object.setPrototypeOf(obj, newProto)方法。它返回一个布尔值，表示是否设置成功。

   如果第一个参数是undefined或null，Object.setPrototypeOf和Reflect.setPrototypeOf都会报错。

### Promise

1. Promise 的含义

   所谓Promise，简单来说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

   - Promise 对象的特点

     （1）对象的状态不受外界影响。Promise对象代表一个异步操作，有3种状态，pending，fulfilled，rejected。

     （2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。

   - Promise 的优点

     （1）可以将异步操作以同步的流程表达出来，避免了层层嵌套的回调函数。

     （2）提供统一的接口，使得控制异步操作更容易。

   - Promise 的缺点

     （1）中途无法取消，一旦新建就立即执行。

     （2）如果不设置回调函数，内部错误无法抛到外面。

     （3）当处于 pending 状态时，无法得知目前进展到哪一个阶段了（刚开始还是即将完成）。

2. Promise 的基本用法

   ```javascript
   const promise = new Promise(function(resolve,reject){
       //... some code
       if(/*异步操作成功*/){
           resolve(value);
       }else{
           reject(error);
       }
   })
   ```

   Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

   resolve 函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

   **调用resolve或reject并不会终结 Promise 的参数函数的执行。**

3. Promise.prototype.then()

   then 方法返回的是一个新的 Promise 实例（注意，不是原来那个 Promise 实例）。因此可以采用链式写法，即 then 方法后面再调用另一个 then 方法。

   采用链式的 then，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个 Promise 对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。

   前一个回调函数的结果会作为第二个回调函数的参数。

4. Promise.prototype.catch()

   该方法是 .then(null, rejection) 或 .then(undefined, rejection) 的别名，用于指定发生错误时的回调函数。

   reject 方法的作用，等同于抛出错误，throw new Error

   **如果 Promise 的状态已经变成 resolved ，再抛出错误是无效的。**

   promise 对象的错误具有冒泡性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。

   一般来说，不要在 then 方法里定义 Reject 状态的回调函数（即 then 的第二个参数），总是使用 catch 方法。

   理由是第二种写法可以捕获前面then方法执行中的错误，也更接近同步的写法（try/catch）。因此，建议总是使用 catch 方法，而不使用 then 方法的第二个参数。

5. Promise.prototype.finally()

   finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 [ES2018] 引入标准的。

   finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。

   finally本质上是then方法的特例。

6. Promise.all()

   Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

   p的状态由p1、p2、p3决定，分成两种情况。

   （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

   （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

7. Promsie.race()

   Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

   （1）只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

   （2）Promise.race方法的参数与Promise.all方法一样，如果不是 Promise 实例，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。

8. Promise.resolve()

   将现有对象转为 Promise 对象

   Promise.resolve('foo')

   // 等价于

   new Promise(resolve => resolve('foo'))

   Promise.resolve 方法的参数分四种情况

   （1）参数是一个 Promise 实例 —— 直接返回原对象

   （2）参数是一个thenable对象将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。

   （3）参数不是具有then方法的对象，或根本就不是对象，返回生成新的Promise对象，状态为resolved。

9. Promise.reject()

   Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。

   Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致。

10. Promise.try() - 提案

    由于 Promise.try 为所有操作提供了统一的处理机制，所以如果想用then方法管理流程，最好都用Promise.try包装一下。

### Iterator 和 for...of 循环

1. Iterator 概念

   遍历器（Iterator）就是这样一种机制，它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

2. 默认Iterator 接口

   Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环

   一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历”的（iterable）。

   ES6 规定，默认的 Iterator 接口部署在数据结构 Symbol.iterator 属性上，或者说，一个数据结构只要具有 Symbol.iterator 属性，就可以认为是可遍历的。

   Symbol.iterator 属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。

   原生具备 Iterator 接口的数据结构如下：

   [Array] 

   for...of 循环可以代替数组实例的 forEach 方法。

   JavaScript 原有的 for...in 循环，只能获得对象的建名，不能直接获取键值。ES6 提供的 for...of循环，允许遍历获得键值。

   [Map]

   [Set]

   首先，遍历的顺序是按照各个成员被添加进数据结构的顺序。

   其次，Set 结构遍历时，返回的是一个值，而 Map 结构遍历时，返回的是一个数组，该数组的两个成员分别为当前Map 成员的建名和键值。

   [String]

   对于字符串来说，for...of 循环还有一个特点，就是会正确识别 32 位 UTF-16 字符

   [TypedArray]

   类数组对象，如 arguments、NodeList

   有了遍历器接口，数据结构就可以用 for...of循环遍历，也可以使用 while 循环遍历。

3. 调用 Iterator 接口的场合

   - 结构赋值

   - 扩展运算符

   - yield *

   - 其他场合

     由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。

     - for...of

     - Array.from()

     - Map(),Set(),WeakMap(),WeakSet()

     - Promise.all()

     - Promise.race()

4. 字符串的 Iterator 接口

5. Iterator 接口与 Generator 函数

6. 遍历器对象的 return，throw

7. for...of 循环

   并不是所有类似数组的对象都具有 Iterator 接口，一个简便的解决方法，就是使用Array.from方法将其转为数组。

### Generator 函数

1. 基本概念

   Generator 函数是 ES6 提供的一种异步编程解决方案。

   首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。

   执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
2. Generator 函数的特征

   1）function 后有星号

   2）函数体内部使用 yield 表达式，定义不同的状态

   不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象。

   调用 next 方法时，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。返回的对象中的value值为yield 的值。

   

   yield 表达式

   yield表达式就是暂停标志。

   yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。

   与 Iterator 接口的关系

    Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。

   Generator 函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。
3. next 方法的参数

   yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。

   由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。
4. for...of循环

   for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。

   原生的 JavaScript 对象没有遍历接口，无法使用for...of循环，通过 Generator 函数为它加上这个接口，就可以用了。还可以加在原型对象的Symbol.iterator 属性上。
5. Generator.prototype.throw()

   throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法。

   throw方法被捕获以后，会附带执行下一条yield表达式。也就是说，会附带执行一次next方法。

   throw命令与g.throw方法是无关的，两者互不影响。

   一旦 Generator 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。
6. Generator.prototype.return()

   Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。
7. next()、throw()、return() 的共同点

   它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。
8. yield*  表达式

   用来在一个 Generator 函数里面执行另一个 Generator 函数。
9. 作为对象属性的 Generator 函数
10. Generator 函数的this
11. 应用

    （1）异步操作的同步化表达

     （2）控制流管理

     （3）部署 Iterator 接口 

     （4）作为数据结构
12. Generator 函数的异步应用

    1）传统方法
    - 回调函数

    - 时间监听

    - 发布/订阅

    - Promise 对象

    2）Generator 函数

    3）Thunk 函数

    - Thunk 函数是自动执行 Generator 函数的一种方法。

### async 函数 [2017]

1. 含义

   async 函数是什么？一句话，它就是 Generator 函数的语法糖。

   async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。

   async 函数对 Generator 函数的改进，体现在以下四点。

   1）内置执行器。

   2）更好的语义。

   3）更广的适用性。

   4）返回值是 Promise。

   进一步说，async 函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而 await 命令就是内部then 命令的语法糖。

2. 基本用法

   async 函数有多种使用形式。

   ```javascript
   //函数声明
   async function foo(){}
   //函数表达式
   const foo = async function(){}
   //对象的方法
   let obj = {async foo(){}}
   obj.foo().then()
   // Class 的方法
   // 箭头函数
   const foo = async () => {}  
   ```

3.  语法

   async 函数返回的是一个 Promise 对象。

   async 函数内部 return 语句返回的值，会成为 then 方法回调函数的参数。

   async 函数内部抛出错误，会导致返回的Promise 对象变成 rejected 状态。抛出的错误对象会被 catch 方法回调函数接受到。

   ```javascript
   class Sleep{
       constructor(timeout){
           this.timeout = timeout;
       }
       then(resolve,reject){
           const startTime = Date.now();
           setTimeout(() => resolve(Date.now() - startTime), this.timeout)
       }
   }
   (async () => {
       const actualTime = await new Sleep(1000);
       console.log(acturalTime);
   })()
   ```

   任何一个 await 语句后面的Promise 对象变为 reject 状态，那么整个 async 函数都会中断执行。

   错误处理

   如果 await 后面的异步操作出错，那么等同于 async 函数返回的 Promise 对象被 reject。

   注意事项：

   第一点，前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。

   第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。

   第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错。

   第四点，async 函数可以保留运行堆栈。

4. async 函数的实现原理

   async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。

5. 与其他异步处理方法的比较

   Async 函数的实现最简洁，最符合语义，几乎没有语义不相关的代码。它将 Generator 写法中的自动执行器，改在语言层面提供，不暴露给用户，因此代码量最少。如果使用 Generator 写法，自动执行器需要用户自己提供。

6. 实例：按顺序完成异步操作

7. 异步遍历器 [2018]

   ES2018 引入了”异步遍历器“（Async Iterator），为异步操作提供原生的遍历器接口，即value和done这两个属性都是异步产生。

   一个对象的同步遍历器的接口，部署在Symbol.iterator属性上面。同样地，对象的异步遍历器接口，部署在Symbol.asyncIterator属性上面。不管是什么样的对象，只要它的Symbol.asyncIterator属性有值，就表示应该对它进行异步遍历。

   异步遍历器调用next方法以后，返回一个 Promise 对象。因此，可以使用then方法指定，这个 Promise 对象的状态变为resolve以后的回调函数。回调函数的参数，则是一个具有value和done两个属性的对象，这个跟同步遍历器是一样的。

   for await...of 

   用于遍历异步的 Iterator 接口。

   异步 Generator 函数 

   是返回一个异步遍历器对象。

   ```javascript
   async function* gen() {
     yield 'hello';
   }
   const genObj = gen();
   genObj.next().then(x => console.log(x));
   ```

        yield* 语句

### class 的基本用法

1. 简介

   基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

   类的数据类型就是函数，类本身就指向构造函数。

   另外，类的内部所有定义的方法，都是不可枚举的（non-enumerable）。

2. ```javascript
     Object.keys(Point.prototype)
   // []
   Object.getOwnPropertyNames(Point.prototype)
   // ["constructor","toString"]
   ```

   类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

   与 ES5 一样，类的所有实例共享一个原型对象。

   生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。

   Getter 和 Setter

   存值函数和取值函数是设置在属性的 Descriptor 对象上的。

   可通过 Object.getOwnPropertyDescriptor 获取。

   注意：

   （1）严格模式，类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。所以 ES6 实际上把整个语言升级到了严格模式。

   （2）不存在变量提升，class 类必须先声明后使用

   （3）name 属性，name属性总是返回紧跟在class关键字后面的类名。

   （4）Generator 方法

   （5）this 的指向

3. 静态方法

   static 关键字声明的方法，不会被实例继承，而是直接通过类调用

   注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。

   静态方法可以与非静态方法重名。

   子类可以继承父类的静态方法。

4. 实例属性的新写法

   ES6 明确规定，Class 内部只有静态方法，没有静态属性。

   ```javascript
   class Foo {
   }
   Foo.prop = 1;
   ```

5.  私有方法和私有属性

   ES6 不提供，只能通过变通方法模拟实现。

   利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。

   Reflect.ownKeys()依然可以拿到它们。

6. new.target 属性

   该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。

   Class 内部调用new.target，返回当前 Class。子类继承父类时，new.target会返回子类。利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。

### Class 的继承

1. 简介

   通过extends关键字实现继承

   子类必须在constructor方法中调用super方法，否则新建实例时会报错。

   ES5 的继承，实质是先创造子类的实例对象 this，然后再将父类的方法添加到this上面（Parent.apply(this)）。

   ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。

   如果子类没有定义constructor方法，这个方法会被默认添加。

2. Object.getPrototypeOf()

   用来从子类上获取父类。因此，可以使用这个方法判断，一个类是否继承了另一个类。

3. super关键字

   既可以当作函数使用，也可以当作对象使用。

   super作为函数调用时，代表父类的构造函数。

   super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

   注意，由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。

   由于this指向子类实例，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。

   由于对象总是继承其他对象的，所以可以在任意一个对象中，使用super关键字。

4. 类的 prototype 属性和__proto__属性

   Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。

   （1）子类的__proto__属性，表示构造函数的继承，总是指向父类。

   （2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。

   ```javascript
   class A {
   }
   class B extends A {
   }
   B.__proto__ === A // true
   B.prototype.__proto__ === A.prototype // true
   //实质是因为：

   // B 的实例继承 A 的实例
   Object.setPrototypeOf(B.prototype, A.prototype);
   // B 继承 A 的静态属性
   Object.setPrototypeOf(B, A);
   ```

   extends关键字后面可以跟多种类型的值。

   子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。

5. 原生构造函数的继承

   ECMAScript 的原生构造函数大致有下面这些:

   Boolean()

   Number()

   String()

   Array()

   Date()

   Function()

   RegExp()

   Error()

   Object()

   以前，这些原生构造函数是无法继承的，原生构造函数的this无法绑定，导致拿不到内部属性。

   ES6 允许继承原生构造函数定义子类

   注意，继承Object的子类，有一个行为差异。

   因为 ES6 改变了Object构造函数的行为，一旦发现Object方法不是通过new Object()这种形式调用，ES6 规定Object构造函数会忽略参数。

6. Mixin 模式的实现

   Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口。

### Module 的语法

1. 概述

   最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。

   ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

   CommonJS 和 AMD 模块，都只能在运行时确定这些东西。ES6的Module可以在编译时加载（或静态加载），使得静态分析成为可能。

2. 严格模式

   ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。

   严格模式主要有以下限制：

   - 变量必须声明后再使用

   - 函数的参数不能有同名属性，否则报错

   - 不能使用 with 语句

   - 不能对只读属性赋值，否则报错

   - 不能使用前缀 0 表示八进制数，否则报错

   - 不能删除不可删除的属性，否则报错

   - 不能删除变量 delete prop，会报错，只能删除属性 delete global\[prop]

   - eval 不会在它的外层作用域引入变量

   - eval 和 arguments 不能被重新赋值

   - arguments 不会自动反映函数参数的变化

   - 不能使用 arguments.callee

   - 不能使用 arguments.caller

   - 禁止 this 指向全局对象

   - 不能使用 fn.caller 和 fn.arguments 获取函数调用的堆栈

   - 增加了保留字（比如 protected、static 和 interface）

   上面这些限制，模块都必须遵守。

   ES6 模块之中，顶层的this指向undefined，即不应该在顶层代码使用this。

3. export命令

   export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

   另外，export语句输出的接口，与其对应的值是[动态绑定]关系，即通过该接口，可以取到模块内部实时的值。

   最后，export命令可以出现在模块的任何位置，只要处于模块顶层就可以。

   三种写法

   ```javascript
   // 写法一
   export var m = 1;
   
   // 写法二
   var m = 1;
   export {m};
   
   // 写法三
   var n = 1;
   export {n as m};
   ```

4. import命令

   import命令输入的变量都是只读的，因为它的本质是输入接口。

   注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。

   由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。

5. 模块的整体加载

   用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

   注意，模块整体加载所在的那个对象（上例是circle），应该是可以静态分析的，所以不允许运行时改变。

6. export default

   使用export default时，对应的import语句不需要使用大括号；不使用export default时，对应的import语句需要使用大括号。

7. export 与 import 的复合写法

   ```javascript
   export { foo, bar } from 'my_module';
   // 可以简单理解为
   import { foo, bar } from 'my_module';
   export { foo, bar };
   ```

   但需要注意的是，写成一行以后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。

8. 模块的继承

9. 跨模块常量

10. import()

    因为require是运行时加载模块，import命令无法取代require的动态加载功能。

    import()返回一个 Promise 对象。

    另外，import()函数与所加载的模块没有静态连接关系，这点也是与import语句不相同。import()类似于 Node 的require方法，区别主要是前者是异步加载，后者是同步加载。

    适用场景：

    （1）按需加载

    （2）条件加载

    （3）动态的模块路径

### Module 的加载实现

1. 浏览器加载

   正常是同步加载

   异步加载可以使用 defer/async ，二者的区别是：defer是“渲染完再执行”，async是“下载完就执行”。

   模块的加载：[\<script type="module">] 默认是异步加载，等同于 defer。

   对于外部的模块脚本（上例是foo.js），有几点需要注意。

   代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见。

   模块脚本自动采用严格模式，不管有没有声明use strict。

   模块之中，可以使用import命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用export命令输出对外接口。

   模块之中，顶层的this关键字返回undefined，而不是指向window。也就是说，在模块顶层使用this关键字，是无意义的。

   同一个模块如果加载多次，将只执行一次。

2. ES6 模块与 CommonJS 模块的差异

   它们有两个重大差异：

   CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

   CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

3. Node 加载

   Node 对 ES6 模块的处理比较麻烦，因为它有自己的 CommonJS 模块格式，与 ES6 模块格式是不兼容的。目前的解决方案是，将两者分开，ES6 模块和 CommonJS 采用各自的加载方案。

   Node 要求 ES6 模块采用.mjs后缀文件名。

   Node 的import命令是异步加载，Node 的.mjs文件支持 URL 路径。这一点与浏览器的处理方法相同。

   1）内部变量：

   ES6 模块中不能使用 CommonJS 模块特有的内部变量，如：

   this 关键字

   arguments

   require

   module

   exports

   __filename

   __dirname

   2）ES6 模块加载 CommonJS 模块

   ```javascript
   // 写法一
   import baz from './a';
   // baz = {foo: 'hello', bar: 'world'};
   // 写法二
   import {default as baz} from './a';
   // baz = {foo: 'hello', bar: 'world'};
   // 写法三
   import * as baz from './a';
   ```

   第三种写法，可以通过baz.default拿到module.exports。

   CommonJS 模块的输出缓存机制，在 ES6 加载方式下依然有效。

   不允许采用下面的写法：

   ```javascript
   // 不正确
   import { readFile } from 'fs';
   ```

   3）CommonJS 模块加载 ES6 模块

   CommonJS 模块加载 ES6 模块，不能使用require命令，而要使用import()函数。ES6 模块的所有输出接口，会成为输入对象的属性。

4. 循环加载

   对于 JavaScript 语言来说，目前最常见的两种模块格式 CommonJS 和 ES6，处理“循环加载”的方法是不一样的，返回的结果也不一样。

   1）CommonJS 模块的加载原理

   CommonJS 的一个模块，就是一个脚本文件。require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象。

   CommonJS 模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。

   2）CommonJS 模块的循环加载 

   总之，CommonJS 输入的是被输出值的拷贝，不是引用。

   另外，由于 CommonJS 模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，两者可能会有差异。所以，输入变量的时候，必须非常小心。

   3）ES6 模块的循环加载

   ES6 模块是动态引用，如果使用import从一个模块加载变量（即import foo from 'foo'），那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。

### 编程风格

1. 块级作用域

   - let 取代 var

     var命令存在变量提升效用，let命令没有这个问题。

   - 全局常量和线程安全

     let 和 const之间，优先使用const。const 不可以被改变，符合函数式编程思想（运算不改变值，只新建值），js编译器内部对const做了优化

     所有的函数都应该设置为常量。

2. 字符串

   静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。

3. 解构赋值

   使用数组成员对变量赋值时，优先使用解构赋值。

   函数的参数如果是对象的成员，优先使用解构赋值。

   如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。

4. 对象

   单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。

   对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。

5. 数组

   使用扩展运算符（...）拷贝数组。

   使用 Array.from 方法，将类似数组的对象转为数组。

6. 函数

   立即执行函数可以写成箭头函数的形式。

   箭头函数取代Function.prototype.bind，不应再用 self/_this/that 绑定 this。

   不要在函数体内使用 arguments 变量，使用 rest 运算符（...）代替。

   使用默认值语法设置函数参数的默认值。

7. Map结构

   注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。

8. Class

   总是用 Class，取代需要 prototype 的操作。因为 Class 的写法更简洁，更易于理解。

   使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。

9. 模块

   首先，Module 语法是 JavaScript 模块的标准写法，坚持使用这种写法。使用import取代require。使用export取代module.exports。

   如果模块只有一个输出值，就使用export default，如果模块有多个输出值，就不使用export default，export default与普通的export不要同时使用。

   不要在模块输入中使用通配符。因为这样可以确保你的模块之中，有一个默认输出（export default）。

   如果模块默认输出一个函数，函数名的首字母应该小写。
   如果模块默认输出一个对象，对象名的首字母应该大写。

10. ESLint 的使用

    ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。





                                                                                         over
