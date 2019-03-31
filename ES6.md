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

8. padStart(),padEnd()

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

7. entries()，keys() 和 values() —— 都返回一个遍历器对象

8. includes() 是否包含元素

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

4. 属性的可枚举性和遍历

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




























