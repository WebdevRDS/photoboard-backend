(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\Angular\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0b+V":
/*!*****************************!*\
  !*** ./src/app/constant.ts ***!
  \*****************************/
/*! exports provided: SHOW_LOADING_SPINNER, HIDE_LOADING_SPINNER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_LOADING_SPINNER", function() { return SHOW_LOADING_SPINNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_LOADING_SPINNER", function() { return HIDE_LOADING_SPINNER; });
const SHOW_LOADING_SPINNER = 'showLoadingSpinner';
const HIDE_LOADING_SPINNER = 'hideLoadingSpinner';


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // api: 'http://localhost:4201/api',
    api: 'https://photoboard-backend.herokuapp.com/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Fm9a":
/*!********************************!*\
  !*** ./src/app/mock-images.ts ***!
  \********************************/
/*! exports provided: IMAGES, BOARDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES", function() { return IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARDS", function() { return BOARDS; });
const IMAGES = [
    {
        _id: 1,
        url: 'https://res.cloudinary.com/doublero/image/upload/c_crop,h_3196,w_1062,x_0,y_220/v1/Products/4G6-ES-SOQ.jpg',
        board: 1,
    },
    {
        _id: 2,
        url: 'https://res.cloudinary.com/doublero/image/upload/c_crop,h_3272,w_1634,x_2,y_28/w_400/e_distort:0:0:400:10:400:784:0:800/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_2,y_28/h_800/a_hflip/e_distort:0:12:27:0:27:800:0:765/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_west,x_-28/c_crop,h_3272,l_Products:Air_C3,w_1634,x_1687,y_28/w_400/e_distort:0:10:400:20:400:768:0:784/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_385/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_1687,y_28/h_800/a_hflip/e_distort:0:22:27:10:27:784:0:749/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/x_426,fl_layer_apply/c_crop,h_3272,l_Products:Air_C3,w_1634,x_3372,y_28/w_400/e_distort:0:20:400:30:400:752:0:768/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_370/c_crop,e_blur:1000,h_3272,l_Products:Air_C3,w_111,x_3372,y_28/h_800/a_hflip/e_distort:0:32:27:20:27:768:0:733/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/fl_layer_apply,g_north_east,x_-399,y_4/c_pad,w_1400,h_809/w_1200,h_1200,c_pad/v1/Products/Air_C3.jpg',
        board: 1,
    },
    {
        _id: 3,
        url: 'https://res.cloudinary.com/doublero/image/upload/c_crop,h_3196,w_1062,x_0,y_220/v1/Products/4G6-ES-SOQ.jpg',
        board: 1,
    },
    {
        _id: 4,
        url: 'https://res.cloudinary.com/doublero/image/upload/c_crop,h_3272,w_1634,x_2,y_28/w_400/e_distort:0:0:400:10:400:784:0:800/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_2,y_28/h_800/a_hflip/e_distort:0:12:27:0:27:800:0:765/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_west,x_-28/c_crop,h_3272,l_Products:Air_C3,w_1634,x_1687,y_28/w_400/e_distort:0:10:400:20:400:768:0:784/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_385/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_1687,y_28/h_800/a_hflip/e_distort:0:22:27:10:27:784:0:749/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/x_426,fl_layer_apply/c_crop,h_3272,l_Products:Air_C3,w_1634,x_3372,y_28/w_400/e_distort:0:20:400:30:400:752:0:768/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_370/c_crop,e_blur:1000,h_3272,l_Products:Air_C3,w_111,x_3372,y_28/h_800/a_hflip/e_distort:0:32:27:20:27:768:0:733/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/fl_layer_apply,g_north_east,x_-399,y_4/c_pad,w_1400,h_809/w_1200,h_1200,c_pad/v1/Products/Air_C3.jpg',
        board: 1,
        tags: [
            {
                confidence: 61.4116096496582,
                tag: {
                    en: 'mountain',
                },
            },
            {
                confidence: 54.3507270812988,
                tag: {
                    en: 'landscape',
                },
            },
            {
                confidence: 50.969783782959,
                tag: {
                    en: 'mountains',
                },
            },
            {
                confidence: 46.1385192871094,
                tag: {
                    en: 'wall',
                },
            },
            {
                confidence: 40.6059913635254,
                tag: {
                    en: 'clouds',
                },
            },
            {
                confidence: 37.2282066345215,
                tag: {
                    en: 'sky',
                },
            },
            {
                confidence: 36.2647514343262,
                tag: {
                    en: 'park',
                },
            },
            {
                confidence: 35.3734092712402,
                tag: {
                    en: 'national',
                },
            },
            {
                confidence: 35.1284828186035,
                tag: {
                    en: 'range',
                },
            },
            {
                confidence: 34.7774543762207,
                tag: {
                    en: 'snow',
                },
            },
            {
                confidence: 32.9128646850586,
                tag: {
                    en: 'tree',
                },
            },
            {
                confidence: 29.5557823181152,
                tag: {
                    en: 'rock',
                },
            },
            {
                confidence: 28.4864749908447,
                tag: {
                    en: 'trees',
                },
            },
        ],
    },
    {
        _id: 5,
        url: 'https://res.cloudinary.com/doublero/image/upload/c_crop,h_3196,w_1062,x_0,y_220/v1/Products/4G6-ES-SOQ.jpg',
        board: 1,
    },
    {
        _id: 6,
        url: 'https://res.cloudinary.com/doublero/image/upload/c_crop,h_3196,w_1062,x_0,y_220/v1/Products/4G6-ES-SOQ.jpg',
        board: 1,
    },
    {
        _id: 7,
        url: 'https://res.cloudinary.com/doublero/image/upload/c_crop,h_3272,w_1634,x_2,y_28/w_400/e_distort:0:0:400:10:400:784:0:800/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_2,y_28/h_800/a_hflip/e_distort:0:12:27:0:27:800:0:765/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_west,x_-28/c_crop,h_3272,l_Products:Air_C3,w_1634,x_1687,y_28/w_400/e_distort:0:10:400:20:400:768:0:784/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_385/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_1687,y_28/h_800/a_hflip/e_distort:0:22:27:10:27:784:0:749/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/x_426,fl_layer_apply/c_crop,h_3272,l_Products:Air_C3,w_1634,x_3372,y_28/w_400/e_distort:0:20:400:30:400:752:0:768/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_370/c_crop,e_blur:1000,h_3272,l_Products:Air_C3,w_111,x_3372,y_28/h_800/a_hflip/e_distort:0:32:27:20:27:768:0:733/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/fl_layer_apply,g_north_east,x_-399,y_4/c_pad,w_1400,h_809/w_1200,h_1200,c_pad/v1/Products/Air_C3.jpg',
        board: 1,
    },
    {
        _id: 8,
        url: 'https://res.cloudinary.com/doublero/image/upload/c_crop,h_3272,w_1634,x_2,y_28/w_400/e_distort:0:0:400:10:400:784:0:800/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_2,y_28/h_800/a_hflip/e_distort:0:12:27:0:27:800:0:765/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_west,x_-28/c_crop,h_3272,l_Products:Air_C3,w_1634,x_1687,y_28/w_400/e_distort:0:10:400:20:400:768:0:784/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_385/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_1687,y_28/h_800/a_hflip/e_distort:0:22:27:10:27:784:0:749/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/x_426,fl_layer_apply/c_crop,h_3272,l_Products:Air_C3,w_1634,x_3372,y_28/w_400/e_distort:0:20:400:30:400:752:0:768/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_370/c_crop,e_blur:1000,h_3272,l_Products:Air_C3,w_111,x_3372,y_28/h_800/a_hflip/e_distort:0:32:27:20:27:768:0:733/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/fl_layer_apply,g_north_east,x_-399,y_4/c_pad,w_1400,h_809/w_1200,h_1200,c_pad/v1/Products/Air_C3.jpg',
        board: 1,
    },
    {
        _id: 9,
        url: 'https://res.cloudinary.com/doublero/image/upload/c_crop,h_3272,w_1634,x_2,y_28/w_400/e_distort:0:0:400:10:400:784:0:800/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_2,y_28/h_800/a_hflip/e_distort:0:12:27:0:27:800:0:765/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_west,x_-28/c_crop,h_3272,l_Products:Air_C3,w_1634,x_1687,y_28/w_400/e_distort:0:10:400:20:400:768:0:784/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_385/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_1687,y_28/h_800/a_hflip/e_distort:0:22:27:10:27:784:0:749/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/x_426,fl_layer_apply/c_crop,h_3272,l_Products:Air_C3,w_1634,x_3372,y_28/w_400/e_distort:0:20:400:30:400:752:0:768/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_370/c_crop,e_blur:1000,h_3272,l_Products:Air_C3,w_111,x_3372,y_28/h_800/a_hflip/e_distort:0:32:27:20:27:768:0:733/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/fl_layer_apply,g_north_east,x_-399,y_4/c_pad,w_1400,h_809/w_1200,h_1200,c_pad/v1/Products/Air_C3.jpg',
        board: 1,
    },
    {
        _id: 10,
        url: 'https://res.cloudinary.com/doublero/image/upload/c_crop,h_3272,w_1634,x_2,y_28/w_400/e_distort:0:0:400:10:400:784:0:800/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_2,y_28/h_800/a_hflip/e_distort:0:12:27:0:27:800:0:765/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_west,x_-28/c_crop,h_3272,l_Products:Air_C3,w_1634,x_1687,y_28/w_400/e_distort:0:10:400:20:400:768:0:784/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_385/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_1687,y_28/h_800/a_hflip/e_distort:0:22:27:10:27:784:0:749/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/x_426,fl_layer_apply/c_crop,h_3272,l_Products:Air_C3,w_1634,x_3372,y_28/w_400/e_distort:0:20:400:30:400:752:0:768/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_370/c_crop,e_blur:1000,h_3272,l_Products:Air_C3,w_111,x_3372,y_28/h_800/a_hflip/e_distort:0:32:27:20:27:768:0:733/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/fl_layer_apply,g_north_east,x_-399,y_4/c_pad,w_1400,h_809/w_1200,h_1200,c_pad/v1/Products/Air_C3.jpg',
        board: 1,
    },
    {
        _id: 11,
        url: 'https://res.cloudinary.com/doublero/image/upload/c_crop,h_3272,w_1634,x_2,y_28/w_400/e_distort:0:0:400:10:400:784:0:800/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_2,y_28/h_800/a_hflip/e_distort:0:12:27:0:27:800:0:765/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_west,x_-28/c_crop,h_3272,l_Products:Air_C3,w_1634,x_1687,y_28/w_400/e_distort:0:10:400:20:400:768:0:784/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_385/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_1687,y_28/h_800/a_hflip/e_distort:0:22:27:10:27:784:0:749/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/x_426,fl_layer_apply/c_crop,h_3272,l_Products:Air_C3,w_1634,x_3372,y_28/w_400/e_distort:0:20:400:30:400:752:0:768/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_370/c_crop,e_blur:1000,h_3272,l_Products:Air_C3,w_111,x_3372,y_28/h_800/a_hflip/e_distort:0:32:27:20:27:768:0:733/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/fl_layer_apply,g_north_east,x_-399,y_4/c_pad,w_1400,h_809/w_1200,h_1200,c_pad/v1/Products/Air_C3.jpg',
        board: 1,
    },
    {
        _id: 12,
        url: 'https://res.cloudinary.com/doublero/image/upload/c_crop,h_3272,w_1634,x_2,y_28/w_400/e_distort:0:0:400:10:400:784:0:800/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_2,y_28/h_800/a_hflip/e_distort:0:12:27:0:27:800:0:765/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_west,x_-28/c_crop,h_3272,l_Products:Air_C3,w_1634,x_1687,y_28/w_400/e_distort:0:10:400:20:400:768:0:784/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_385/l_Products:Air_C3/c_crop,e_blur:1000,h_3272,w_111,x_1687,y_28/h_800/a_hflip/e_distort:0:22:27:10:27:784:0:749/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/x_426,fl_layer_apply/c_crop,h_3272,l_Products:Air_C3,w_1634,x_3372,y_28/w_400/e_distort:0:20:400:30:400:752:0:768/r_2/e_outline:fill:1:100,co_rgb:E2D9C4/c_scale,h_800,w_370/c_crop,e_blur:1000,h_3272,l_Products:Air_C3,w_111,x_3372,y_28/h_800/a_hflip/e_distort:0:32:27:20:27:768:0:733/e_outline:fill:1:100,co_rgb:E2D9C4/e_brightness_hsb:-60/fl_layer_apply,g_north_west,x_-28/fl_layer_apply,g_north_east,x_-399,y_4/c_pad,w_1400,h_809/w_1200,h_1200,c_pad/v1/Products/Air_C3.jpg',
        board: 1,
    },
];
const BOARDS = [
    {
        _id: 1,
        title: 'Safari',
    },
    {
        _id: 2,
        title: 'Wildelife',
    },
    {
        _id: 3,
        title: 'Winter sport',
    },
    {
        _id: 4,
        title: 'Vintage airplaines',
    },
];


/***/ }),

/***/ "GGvB":
/*!*************************************************************************************!*\
  !*** ./src/app/components/photo-board/new-board-modal/new-board-modal.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NewBoardModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBoardModalComponent", function() { return NewBoardModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class NewBoardModalComponent {
    constructor(activeModal, toastrService) {
        this.activeModal = activeModal;
        this.toastrService = toastrService;
        this.title = '';
    }
    ngOnInit() { }
    onSave() {
        if (!this.title) {
            this.toastrService.error('Please input board title!', undefined, { closeButton: true, positionClass: 'toast-top-center' });
        }
        else {
            this.activeModal.close(this.title);
        }
    }
    onCancel() {
        this.activeModal.close();
    }
}
NewBoardModalComponent.ɵfac = function NewBoardModalComponent_Factory(t) { return new (t || NewBoardModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
NewBoardModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewBoardModalComponent, selectors: [["app-new-board-modal"]], decls: 16, vars: 1, consts: [[1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "boardName"], ["type", "text", 1, "form-control", "mb-3", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function NewBoardModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBoardModalComponent_Template_button_click_3_listener() { return ctx.activeModal.close(ctx.title); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Board title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBoardModalComponent_Template_input_ngModelChange_10_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBoardModalComponent_Template_button_click_12_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBoardModalComponent_Template_button_click_14_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctYm9hcmQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewBoardModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-board-modal',
                templateUrl: './new-board-modal.component.html',
                styleUrls: ['./new-board-modal.component.scss'],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Loy3":
/*!******************************************************!*\
  !*** ./src/app/shared/services/event-bus.service.ts ***!
  \******************************************************/
/*! exports provided: EventBusService, EmitEvent, Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBusService", function() { return EventBusService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitEvent", function() { return EmitEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class EventBusService {
    constructor() {
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    on(event, action) {
        return this.subject$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((e) => {
            return e.name === event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => {
            return e.value;
        }))
            .subscribe(action);
    }
    emit(event) {
        this.subject$.next(event);
    }
}
EventBusService.ɵfac = function EventBusService_Factory(t) { return new (t || EventBusService)(); };
EventBusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventBusService, factory: EventBusService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventBusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
class EmitEvent {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
var Events;
(function (Events) {
    Events[Events["ShowLoadingSpinner"] = 0] = "ShowLoadingSpinner";
})(Events || (Events = {}));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/event-bus.service */ "Loy3");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "0b+V");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AppComponent {
    constructor(spinner, eventBus) {
        this.spinner = spinner;
        this.eventBus = eventBus;
        this.title = 'Photo board';
        this.eventbusSub = this.eventBus.on(_shared_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["Events"].ShowLoadingSpinner, (msg) => {
            switch (msg) {
                case _constant__WEBPACK_IMPORTED_MODULE_2__["SHOW_LOADING_SPINNER"]:
                    this.spinner.show();
                    break;
                case _constant__WEBPACK_IMPORTED_MODULE_2__["HIDE_LOADING_SPINNER"]:
                    this.spinner.hide();
                    break;
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EventBusService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "square-spin"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-spinner", 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }, { type: _shared_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EventBusService"] }]; }, null); })();


/***/ }),

/***/ "Up2I":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/photo-board/image-more-details/image-more-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ImageMoreDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageMoreDetailsComponent", function() { return ImageMoreDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ImageMoreDetailsComponent_h4_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1.tag.en);
} }
class ImageMoreDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ImageMoreDetailsComponent.ɵfac = function ImageMoreDetailsComponent_Factory(t) { return new (t || ImageMoreDetailsComponent)(); };
ImageMoreDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageMoreDetailsComponent, selectors: [["app-image-more-details"]], inputs: { image: "image" }, decls: 4, vars: 1, consts: [[1, "image-more-details-container-first", "d-flex", "justify-content-center", "align-items-center"], [1, "image-more-details-container-second", "d-flex", "justify-content-center", "align-items-center"], [1, "content", "d-flex", "justify-content-center", "align-items-center", "flex-wrap", "tag-wrapper"], ["class", "ml-3 mr-3 pl-3 pr-3 tag", 4, "ngFor", "ngForOf"], [1, "ml-3", "mr-3", "pl-3", "pr-3", "tag"], [1, "badge", "badge-pill", "badge-info"]], template: function ImageMoreDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageMoreDetailsComponent_h4_3_Template, 3, 1, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.image == null ? null : ctx.image.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".image-more-details-container-second[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  background: transparent;\n  overflow: hidden;\n}\n.image-more-details-container-second[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: calc(100vw - 50px);\n  opacity: 1 !important;\n}\n.image-more-details-container-first[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  opacity: 0.6;\n  background: black;\n}\n@media (max-width: 920px) {\n  .tag[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    padding: 1px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW1hZ2UtbW9yZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLHVCQUFBO0VBS0EsZ0JBQUE7QUFIRjtBQURFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUdKO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUY7QUFBQTtFQUNFO0lBQ0Usb0JBQUE7SUFDQSx1QkFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoiaW1hZ2UtbW9yZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLW1vcmUtZGV0YWlscy1jb250YWluZXItc2Vjb25kIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAuY29udGVudCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDUwcHgpO1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pbWFnZS1tb3JlLWRldGFpbHMtY29udGFpbmVyLWZpcnN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XHJcbiAgLnRhZyB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDFweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageMoreDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-more-details',
                templateUrl: './image-more-details.component.html',
                styleUrls: ['./image-more-details.component.scss']
            }]
    }], function () { return []; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_photo_board_photo_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/photo-board/photo-board.component */ "vkUO");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/api.service */ "nm5K");
/* harmony import */ var _components_photo_board_new_board_modal_new_board_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/photo-board/new-board-modal/new-board-modal.component */ "GGvB");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-confirmation-popover */ "psqO");
/* harmony import */ var _components_photo_board_image_more_details_image_more_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/photo-board/image-more-details/image-more-details.component */ "Up2I");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                maxOpened: 1
            }),
            angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_13__["ConfirmationPopoverModule"].forRoot({
                confirmButtonType: 'danger',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_photo_board_photo_board_component__WEBPACK_IMPORTED_MODULE_8__["PhotoBoardComponent"], _components_photo_board_new_board_modal_new_board_modal_component__WEBPACK_IMPORTED_MODULE_11__["NewBoardModalComponent"], _components_photo_board_image_more_details_image_more_details_component__WEBPACK_IMPORTED_MODULE_14__["ImageMoreDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"], angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_13__["ConfirmationPopoverModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_photo_board_photo_board_component__WEBPACK_IMPORTED_MODULE_8__["PhotoBoardComponent"], _components_photo_board_new_board_modal_new_board_modal_component__WEBPACK_IMPORTED_MODULE_11__["NewBoardModalComponent"], _components_photo_board_image_more_details_image_more_details_component__WEBPACK_IMPORTED_MODULE_14__["ImageMoreDetailsComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                        maxOpened: 1
                    }),
                    angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_13__["ConfirmationPopoverModule"].forRoot({
                        confirmButtonType: 'danger',
                    }),
                ],
                providers: [_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                entryComponents: [_components_photo_board_new_board_modal_new_board_modal_component__WEBPACK_IMPORTED_MODULE_11__["NewBoardModalComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dH0v":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/photoboard.service.ts ***!
  \*******************************************************/
/*! exports provided: PhotoboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoboardService", function() { return PhotoboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mock_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mock-images */ "Fm9a");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "nm5K");





class PhotoboardService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getImages() {
        //TODO fetch data from API
        this.apiService.getImages().subscribe((data) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(data);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_images__WEBPACK_IMPORTED_MODULE_1__["IMAGES"]);
    }
    getBoards() {
        //TODO fetch data from API
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_images__WEBPACK_IMPORTED_MODULE_1__["BOARDS"]);
    }
    getTags(board) {
        //TODO fetch data from API
        const ImagesInstance = [..._mock_images__WEBPACK_IMPORTED_MODULE_1__["IMAGES"]];
        const newImages = ImagesInstance.splice(0, Math.floor(Math.random() * (_mock_images__WEBPACK_IMPORTED_MODULE_1__["IMAGES"].length - 1)));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(newImages);
    }
}
PhotoboardService.ɵfac = function PhotoboardService_Factory(t) { return new (t || PhotoboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
PhotoboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PhotoboardService, factory: PhotoboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "nm5K":
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");








class ApiService {
    constructor(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        // user!: string;
        this.api = '';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
        };
        this.SetApi();
    }
    SetApi() {
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api;
    }
    getImages() {
        const apiUrl = `${this.api}/images`;
        return this.http.get(apiUrl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getImages', [])));
    }
    getBoards() {
        const apiUrl = `${this.api}/boards`;
        return this.http.get(apiUrl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getBoards', [])));
    }
    getTags(images) {
        const apiUrl = `${this.api}/tag`;
        return this.http.post(apiUrl, images, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getBoards', [])));
    }
    addImages(images) {
        const apiUrl = `${this.api}/images`;
        return this.http.post(apiUrl, images, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addImages', [])));
    }
    addBoards(boards) {
        const apiUrl = `${this.api}/boards`;
        return this.http.post(apiUrl, boards, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addBoards', [])));
    }
    hasImage(newImageUrl) {
        const apiUrl = `${this.api}/images/check?imageUrl=${newImageUrl}`;
        return this.http
            .get(apiUrl, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('hasImage', false)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            this.toastrService.error(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_photo_board_photo_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/photo-board/photo-board.component */ "vkUO");





const routes = [
    { path: '', component: _components_photo_board_photo_board_component__WEBPACK_IMPORTED_MODULE_2__["PhotoBoardComponent"], canActivate: [] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vkUO":
/*!*****************************************************************!*\
  !*** ./src/app/components/photo-board/photo-board.component.ts ***!
  \*****************************************************************/
/*! exports provided: PhotoBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoBoardComponent", function() { return PhotoBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _new_board_modal_new_board_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-board-modal/new-board-modal.component */ "GGvB");
/* harmony import */ var _shared_services_photoboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/photoboard.service */ "dH0v");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/api.service */ "nm5K");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-confirmation-popover */ "psqO");
/* harmony import */ var _image_more_details_image_more_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-more-details/image-more-details.component */ "Up2I");












function PhotoBoardComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const board_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", board_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", board_r3.title, " ");
} }
function PhotoBoardComponent_div_29_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r8.tag.en);
} }
function PhotoBoardComponent_div_29_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PhotoBoardComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PhotoBoardComponent_div_29_Template_img_mouseover_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const image_r4 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.selectedImage = image_r4; })("mouseout", function PhotoBoardComponent_div_29_Template_img_mouseout_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.selectedImage = undefined; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PhotoBoardComponent_div_29_span_4_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PhotoBoardComponent_div_29_span_5_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r4.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.getThumbnailTags(image_r4 == null ? null : image_r4.tags));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", image_r4 == null ? null : image_r4.tags == null ? null : image_r4.tags.length);
} }
function PhotoBoardComponent_app_image_more_details_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-more-details", 34);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx_r2.selectedImage);
} }
class PhotoBoardComponent {
    constructor(photoboardService, apiService, modalService, toastrService, spinner) {
        this.photoboardService = photoboardService;
        this.apiService = apiService;
        this.modalService = modalService;
        this.toastrService = toastrService;
        this.spinner = spinner;
        this.images = [];
        this.dirtyImages = [];
        this.boards = [];
        this.dirtyBoards = [];
        this.newImageUrl = '';
        this.selectedBoard = {
            _id: -1,
            title: '',
        };
        this.selectedImage = undefined;
        this.placements = ['top', 'left', 'right', 'bottom'];
        this.popoverTitle = 'Are you sure?';
        this.popoverMessage = 'Are you really <b>sure</b> you want to do this?';
        this.confirmText = 'Yes <i class="fas fa-check"></i>';
        this.cancelText = 'No <i class="fas fa-times"></i>';
        this.trackByValue = (index, value) => value;
        this.spinnerMessage = '';
    }
    get getBoardImages() {
        return this.images.filter((image) => image.board === this.selectedBoard._id);
    }
    ngOnInit() {
        this.getBoards();
        this.getImages();
    }
    getImages() {
        this.spinnerMessage = 'Loading images...';
        this.spinner.show('photo-board-spinner');
        this.apiService.getImages().subscribe((images) => {
            this.images = images;
            this.dirtyImages = [];
            this.spinner.hide('photo-board-spinner');
        });
    }
    getBoards() {
        this.spinnerMessage = 'Loading boards...';
        this.spinner.show('photo-board-spinner');
        this.apiService.getBoards().subscribe((boards) => {
            if (boards && boards.length) {
                this.boards = boards;
                this.dirtyBoards = [];
                this.selectedBoard = boards[0];
                this.spinner.hide('photo-board-spinner');
            }
        });
    }
    getTags() {
        this.spinnerMessage = 'Loading tags...';
        this.spinner.show('photo-board-spinner');
        this.apiService.getTags(this.images).subscribe((images) => {
            if (images.length) {
                const updatedImages = this.images.map((image) => {
                    const updatedImage = images.filter((u_image) => u_image._id === image._id);
                    return updatedImage.length ? updatedImage[0] : image;
                });
                this.dirtyImages = this.dirtyImages.map((image) => {
                    const updatedImage = images.filter((u_image) => u_image._id === image._id);
                    return updatedImage.length ? updatedImage[0] : image;
                });
                if (!this.dirtyImages.length)
                    this.dirtyImages = images;
                this.images = updatedImages;
                console.log(this.images, 'hey');
            }
            this.spinner.hide('photo-board-spinner');
        });
    }
    addImage() {
        var _a;
        const isExisted = this.images.find((img) => img.url === this.newImageUrl && img.board === this.selectedBoard._id);
        if (!this.boards.length || (((_a = this.selectedBoard) === null || _a === void 0 ? void 0 : _a._id) && this.selectedBoard._id === -1)) {
            this.toastrService.error('There is no any boards or seleceted board. Please create board first.');
            this.newImageUrl = '';
            return;
        }
        if (isExisted) {
            this.toastrService.error('This file was already existed in this board!');
            this.newImageUrl = '';
        }
        else {
            this.spinnerMessage = 'Adding image...';
            this.spinner.show('photo-board-spinner');
            this.apiService.hasImage(this.newImageUrl).subscribe((value) => {
                if (value === true) {
                    const newImage = {
                        _id: this.images.length + 1,
                        url: this.newImageUrl,
                        board: this.selectedBoard._id,
                    };
                    this.dirtyImages = [...this.dirtyImages, newImage];
                    this.images = [...this.images, newImage];
                    this.newImageUrl = '';
                }
                else {
                    this.toastrService.error('Invalid url');
                }
                this.spinner.hide('photo-board-spinner');
            });
        }
    }
    checkUrl() {
        const hasDomain = /(http(s?)):\/\//i.test(this.newImageUrl);
        return !hasDomain;
    }
    detectUpdates() {
        return !(this.dirtyBoards.length || this.dirtyImages.length);
    }
    onDismissUpdate() {
        this.getBoards();
        this.getImages();
        this.dirtyBoards = this.dirtyImages = [];
    }
    createBoard() {
        const modalRef = this.modalService.open(_new_board_modal_new_board_modal_component__WEBPACK_IMPORTED_MODULE_1__["NewBoardModalComponent"], {
            centered: true,
        });
        modalRef.result.then((title) => {
            if (title) {
                const newBoard = {
                    _id: this.boards.length + 1,
                    title,
                };
                this.boards = [...this.boards, newBoard];
                this.dirtyBoards = [...this.dirtyBoards, newBoard];
            }
        });
    }
    getThumbnailTags(tags) {
        return tags && tags.slice(0, 1);
    }
    showMore(selectedImage) {
        var _a;
        return !!(selectedImage && ((_a = selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.tags) === null || _a === void 0 ? void 0 : _a.length));
    }
    onSave() {
        this.spinnerMessage = 'Saving data...';
        this.spinner.show('photo-board-spinner');
        this.apiService.addBoards(this.dirtyBoards).subscribe((boards) => {
            console.log(boards);
            this.dirtyImages = this.dirtyImages.map((image) => {
                const updatedBoard = boards.find((_board) => image.board === _board.previous_id);
                return updatedBoard ? Object.assign(Object.assign({}, image), { board: updatedBoard._id }) : image;
            });
            this.apiService
                .addImages(this.dirtyImages)
                .subscribe((images) => {
                this.getBoards();
                this.getImages();
                this.toastrService.success('Saving was successfully.');
                this.spinner.hide('photo-board-spinner');
            });
        });
    }
}
PhotoBoardComponent.ɵfac = function PhotoBoardComponent_Factory(t) { return new (t || PhotoBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_photoboard_service__WEBPACK_IMPORTED_MODULE_2__["PhotoboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
PhotoBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoBoardComponent, selectors: [["app-photo-board"]], decls: 39, vars: 11, consts: [[1, "photo-board-container", "container"], [1, "row", "d-flex"], [1, "col-12", "pl-0", "pr-0"], [1, "row", "d-flex", "align-items-end", "justify-content-between", "mb-5", "mt-4"], [1, "d-flex", "align-items-end", "justify-item-start", "flex-wrap", "image-operation-buttons"], [1, "p-0", "m-0", "mr-2"], ["for", "newImageUrl"], ["type", "text", "id", "newImageUrl", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "ml-5", "mr-5", "add-button-wrapper"], ["type", "button", 1, "btn", "btn-primary", "add-button", 3, "disabled", "click"], [1, "ml-5", "get-tag-button"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "d-flex", "align-items-end", "justify-content-between"], [1, "mr-5"], ["for", "selectBoard"], ["id", "selectBoard", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "row"], [1, "images-container", "d-flex", "flex-row", "align-items-start", "justify-content-between", "flex-wrap"], ["class", "image-wrapper mb-3", 4, "ngFor", "ngForOf"], [1, "row", "float-right", "mt-5"], ["mwlConfirmationPopover", "", "placement", "top", "type", "button", 1, "btn", "btn-outline-primary", "mr-5", 3, "popoverTitle", "popoverMessage", "disabled", "confirm"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-clip-rotate-multiple", "name", "photo-board-spinner", 3, "fullScreen"], [1, "loading", 2, "color", "white"], [3, "image", 4, "ngIf"], [3, "ngValue"], [1, "image-wrapper", "mb-3"], [1, "image"], [1, "img-thumbnail", 3, "src", "mouseover", "mouseout"], [1, "tags"], ["class", "badge badge-pill badge-light", 4, "ngFor", "ngForOf"], ["class", "badge badge-pill badge-light", 4, "ngIf"], [1, "badge", "badge-pill", "badge-light"], [3, "image"]], template: function PhotoBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Photo Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Adding image to the board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PhotoBoardComponent_Template_input_ngModelChange_11_listener($event) { return ctx.newImageUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoBoardComponent_Template_button_click_13_listener() { return ctx.addImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoBoardComponent_Template_button_click_16_listener() { return ctx.getTags(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Run Tagging API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Selectan existing board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PhotoBoardComponent_Template_select_ngModelChange_22_listener($event) { return ctx.selectedBoard = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PhotoBoardComponent_option_23_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoBoardComponent_Template_button_click_25_listener() { return ctx.createBoard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Create a new board ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PhotoBoardComponent_div_29_Template, 6, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("confirm", function PhotoBoardComponent_Template_button_confirm_31_listener() { return ctx.onDismissUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Dismiss Changes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoBoardComponent_Template_button_click_33_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Save Board ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ngx-spinner", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PhotoBoardComponent_app_image_more_details_38_Template, 1, 1, "app-image-more-details", 25);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newImageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.checkUrl());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getBoardImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popoverTitle", ctx.popoverTitle)("popoverMessage", ctx.popoverMessage)("disabled", ctx.detectUpdates());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.spinnerMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMore(ctx.selectedImage));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_9__["ConfirmationPopoverDirective"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _image_more_details_image_more_details_component__WEBPACK_IMPORTED_MODULE_10__["ImageMoreDetailsComponent"]], styles: ["h2[_ngcontent-%COMP%] {\n  color: #7f7f7f;\n  font-family: \"Roboto\", sans-serif;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: #7f7f7f;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 150px;\n}\n\n.photo-board-container[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  padding-right: 40px;\n  padding-left: 40px;\n}\n\n.photo-board-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%] {\n  margin: 0 -10px;\n  min-height: calc(100vh - 500px);\n}\n\n.photo-board-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.photo-board-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n\n.photo-board-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n  flex-grow: 10;\n}\n\n.photo-board-container[_ngcontent-%COMP%]   #newImageUrl[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\n.photo-board-container[_ngcontent-%COMP%]   .photo-board-container[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%] {\n    max-width: 1300px;\n  }\n}\n\n@media (max-width: 992px) {\n  .get-tag-button[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n    margin-top: 5px !important;\n  }\n}\n\n@media (max-width: 768px) {\n  .add-button-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwaG90by1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBSFc7RUFJWCxpQ0FBQTtBQURGOztBQUlBO0VBQ0UsY0FSVztBQU9iOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUtFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FBSEo7O0FBSUk7RUFRRSxjQUFBO0FBVE47O0FBRU07RUFDRSxlQUFBO0FBQVI7O0FBRU07RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFBUjs7QUFNRTtFQUNFLFlBQUE7QUFKSjs7QUFPRTtFQUNFLGlCQUFBO0FBTEo7O0FBU0E7RUFDRTs7Ozs7SUFLRSxpQkFBQTtFQU5GO0FBQ0Y7O0FBU0E7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsMEJBQUE7RUFQRjtBQUNGOztBQVVBO0VBQ0U7SUFDRSwyQkFBQTtFQVJGO0FBQ0YiLCJmaWxlIjoicGhvdG8tYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1jb2xvcjogIzdmN2Y3ZjtcclxuXHJcbmgyIHtcclxuICBjb2xvcjogJGZvbnQtY29sb3I7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogJGZvbnQtY29sb3I7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLnBob3RvLWJvYXJkLWNvbnRhaW5lciB7XHJcbiAgLmFkZC1idXR0b24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICB9XHJcblxyXG4gIC5pbWFnZXMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCAtMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MDBweCk7XHJcbiAgICAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgZmxleC1ncm93OiAxMDtcclxuICAgICAgfVxyXG4gICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNuZXdJbWFnZVVybCB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgfVxyXG5cclxuICAucGhvdG8tYm9hcmQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXIsXHJcbiAgLmNvbnRhaW5lci1zbSxcclxuICAuY29udGFpbmVyLW1kLFxyXG4gIC5jb250YWluZXItbGcsXHJcbiAgLmNvbnRhaW5lci14bCB7XHJcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5nZXQtdGFnLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5hZGQtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photo-board',
                templateUrl: './photo-board.component.html',
                styleUrls: ['./photo-board.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_photoboard_service__WEBPACK_IMPORTED_MODULE_2__["PhotoboardService"] }, { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map