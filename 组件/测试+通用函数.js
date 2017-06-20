//打印log
var log = console.log.bind(console)
//比较小数
var floatEqual = function(a, b) {
    var delta = 0.0001
    if(Math.abs(a - b) < delta) {
        return true
    } else {
        return false
    }
}
//判断函数
var ensure = function(condition, message) {
	//condition 是布尔值
	//meeeage是string， condition 不成立的时候被输出
	if(!condition) {
		console.log(message)
	} else {
		console.log('测试成功')
	}
}
//加强版ensure函数
var ensureEqual = function(a, b, message) {
	if(a != b) {
		console.log(`${message}, (${a}) 不等于 (${b})`)
	} else {
		console.log('测试成功')
	}
}

//测试函数（样式如下）
var test_average = function() {
    ensureEqual(average([1, 2, 3]), 2, 'average error1')
    log('***average 测试完成')
}
//***最后才调用,保证只有一个入口
var _main = function() {
    test_average()
}
_main()

//通用套路函数 
var log = console.log.bind(console)
var e = (sel) => {
    return document.querySelector(sel)
}
var es = (elements) => {
    return document.querySelectorAll(elements)
}
var bindEvent = (element, event, callback) => {
    element.addEventListener(event, callback)
}
var bindEventAll = (elements, event, callback) => {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        element.addEventListener(event, callback)
    }
}
var insertContent = (sel, html) => {
    sel.insertAdjacentHTML('beforeend', html)
}
