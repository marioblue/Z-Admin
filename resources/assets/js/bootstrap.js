
window._ = require('lodash');
window.Popper = require('popper.js').default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

// modify 直接在外部引用
// try {
//     window.$ = window.jQuery = require('jquery');

//     require('bootstrap');
// } catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

// 项目代码
window.adminHelper = {
	// 分页
	setPagination:function(pageData){
		var pageIndex = parseInt(pageData.pageIndex);
		var pageSize = pageData.pageSize;
		var total = pageData.total;
		// start fix
		var totalPage = parseInt(total/pageSize);
		if(total%pageSize>0){
			totalPage = totalPage + 1;
		}
		var pageLinkNumber = 6;
		if(totalPage<pageLinkNumber){
			pageLinkNumber = totalPage;
		}

		var isOdd = pageLinkNumber%2==0;
		var val = parseInt(pageLinkNumber/2);
		var beginIndex = pageIndex - (isOdd?val-1:val);
		var endIndex = pageIndex + val;
		if(beginIndex<1){
			beginIndex = 1;
			endIndex = pageLinkNumber;
		}
		if(endIndex>totalPage){
			endIndex = totalPage;
			beginIndex = endIndex - pageLinkNumber + 1;
		}

		var first = pageIndex==1;
		var last = pageIndex==totalPage;

		var linkNumbers = [];

		pageData.totalPage = totalPage;
		pageData.first = first;
		pageData.last = last;
		for (var i = beginIndex; i <= endIndex; i++) {
			linkNumbers.push(i);
		}
		pageData.linkNumbers = linkNumbers;
		pageData.preIndex = pageIndex-1;
		pageData.nextIndex = pageIndex+1;
	}
}
