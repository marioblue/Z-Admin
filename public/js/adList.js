webpackJsonp([2],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(3);
window.Popper = __webpack_require__(4).default;

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

window.axios = __webpack_require__(5);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

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

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(2);

window.Vue = __webpack_require__(7);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
    el: '#app',
    data: {
        adList: [{
            c1: 'c1', c2: 'c2', c3: 'c3', c4: 'c4', c5: 'c5', 'c6': 'c6', c7: 'c7'
        }, {
            c1: 'c1', c2: 'c2', c3: 'c3', c4: 'c4', c5: 'c5', 'c6': 'c6', c7: 'c7'
        }, {
            c1: 'c1', c2: 'c2', c3: 'c3', c4: 'c4', c5: 'c5', 'c6': 'c6', c7: 'c7'
        }, {
            c1: 'c1', c2: 'c2', c3: 'c3', c4: 'c4', c5: 'c5', 'c6': 'c6', c7: 'c7'
        }, {
            c1: 'c2341', c2: 'c2342', c3: 'c2343', c4: 'c2344', c5: 'c2345', c6: 'c2346', c7: 'c2347'
        }],
        message: '我要吃鸡'

    },
    mounted: function mounted() {
        console.log(this.message);
        axios.get('/ad/getAdList', {
            params: {
                ID: 12345
            }
        }).then(function (response) {
            app.adList = response.data.list;
        }).catch(function (error) {
            console.log(error);
        });
    },
    methods: {
        openOperModal: function openOperModal(event) {
            layer.open({
                type: 1,
                area: ['800px', '600px'],
                shadeClose: true, //点击遮罩关闭
                content: $('#layer1'),
                maxmin: true
            });
            $('#layer1').removeClass('hide');
        },
        openLayer2: function openLayer2(event) {
            layer.open({
                type: 1,
                area: ['800px', '600px'],
                shadeClose: true, //点击遮罩关闭
                content: $('#layer2'),
                maxmin: true
            });
            $('#layer2').removeClass('hide');
        }
    }
});

/***/ })

},[42]);