/** 
 * 浅拷贝
 * @param o 拷贝对象
 */
function extendCopy(o){
	var c = {};
	for(var i in o){
		c[i] = o[i];
	}
	return c;
}

/** 
 * 深拷贝
 * @param p 拷贝对象
 * @param c 目标对象
 */
function deepCopy(p,c){
	var c = c || {};
	for(var i in p){
		if(typeof p[i] === 'object'){
			c[i] = (p[i] instanceof Array) ? [] : {};
			deepCopy(p[i], c[i]);
		}else{
			c[i] = p[i];
		}
	}
	return c;
}