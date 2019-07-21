async function f1(){
	console.log(1)
	console.log(2)
	await Promise.resolve().then(()=>console.log(3))
	console.log(4)
}

async function f2(){
	await console.log(8)
	await console.log(9)
	console.log(10)
}
console.log('start')
setTimeout(()=>console.log(11))
new Promise((resolve,reject) => {
	console.log(12)
	resolve()
}).then(()=>console.log(13))
f1()
f2()
console.log('end')


"start"
12
1
2
8
"end"
13
3
9
4
10
11


function fn(){
	console.log(1)
}
(function(a){
	console.log(a)
	let a = 1;
	console.log(a)
})(2)