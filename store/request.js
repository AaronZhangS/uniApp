import Request from '../components/luch-request/request.js'
const http = new Request()

/**
 * API: https://ext.dcloud.net.cn/plugin?id=392
 */

const options = {
	baseUrl: 'http://62.234.129.76:9000',
	// baseUrl: 'http://localhost:9999',
	params: {}, //会加到url上
	data: {},
	header: {
		'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
	},
	method: 'GET',
	dataType: 'json',

	// 全局自定义参数默认值
	// 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
	custom: {
		type: 0
	},

	// #ifndef MP-ALIPAY || APP-PLUS
	responseType: 'text',
	// #endif

	// #ifdef MP-ALIPAY
	timeout: 30000,
	// #endif

	// #ifdef APP-PLUS
	sslVerify: true
	// #endif
}

http.setConfig(config => {
	Object.assign(config, options)
	return config;
})

export default http;