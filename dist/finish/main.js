(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+zoA":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_top_prosucts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/top-prosucts.service */ "Ehtv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SliderComponent_div_8_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://nodejs-final-mysql.herokuapp.com", product_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { active: a0 }; };
function SliderComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const product_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.goToProd(product_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SliderComponent_div_8_img_3_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, i_r2 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.items);
} }
class SliderComponent {
    constructor(http, router, topProductService) {
        this.http = http;
        this.router = router;
        this.topProductService = topProductService;
        this.items = [];
    }
    ngOnInit() {
        // Подключение слайдера
        this.topProductService.getProducts()
            .subscribe((res) => {
            // console.log(res);
            this.items = res;
        });
    }
    // Переход на продукт при клике
    goToProd(id) {
        this.router.navigate([`products/${id}`]);
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_top_prosucts_service__WEBPACK_IMPORTED_MODULE_3__["TopProsuctsService"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 17, vars: 1, consts: [[1, "slider"], [1, "container"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner", "w-100"], ["class", "carousel-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-item", 3, "ngClass", "click"], ["class", "d-block product", "alt", "First slide", 3, "src", 4, "ngIf"], ["alt", "First slide", 1, "d-block", "product", 3, "src"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SliderComponent_div_8_Template, 4, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".slide[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 30px auto 15px auto;\n  width: 90%;\n  max-width: 1100px;\n  height: 400px;\n  background-color: #3b3b3b;\n}\n.slide[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%] {\n  height: 400px;\n}\n.slide[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 20px auto 5px auto;\n  font-weight: normal;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: white;\n  font-size: 30px;\n}\n.slide[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.slide[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.product[_ngcontent-%COMP%] {\n  width: 300px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBc0JBLGFBQUE7RUFDQSx5QkFBQTtBQXBCSjtBQURJO0VBQ0ksYUFBQTtBQUdSO0FBRFE7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFHWjtBQUFRO0VBQ0ksZ0JBQUE7QUFFWjtBQUNRO0VBQ0ksWUFBQTtBQUNaO0FBT0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFKSiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvIDE1cHggYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIFxyXG4gICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDVweCBhdXRvO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XHJcbn1cclxuXHJcbi5wcm9kdWN0IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\FinishProject\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_components_app_search_app_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header__components/app-search/app-search.component */ "vy2N");
/* harmony import */ var _header_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header__components/nav-menu/nav-menu.component */ "fuTf");




class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 0, consts: [[1, "header"], [1, "container"], [1, "header__row"], [1, "header__search"], [1, "header__title"], ["routerLink", "", 1, "shop"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " SHOP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _header_components_app_search_app_search_component__WEBPACK_IMPORTED_MODULE_2__["AppSearchComponent"], _header_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_3__["NavMenuComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: #302e2e;\n  padding: 30px 0;\n  margin-bottom: 50px;\n}\n.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header__row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header__search[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 32px;\n  margin-right: 35px;\n}\n.header[_ngcontent-%COMP%]   .shop[_ngcontent-%COMP%] {\n  font-family: \"Dancing Script\", cursive;\n}\n.header[_ngcontent-%COMP%]   .shop[_ngcontent-%COMP%]:hover {\n  color: #03a003;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNIO0FBQ0c7RUFDRyxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ047QUFFRztFQUNHLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQU47QUFHRztFQUNHLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRE47QUFJRztFQUNHLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUtHO0VBQ0csc0NBQUE7QUFITjtBQUtNO0VBQ0csY0FBQTtFQUNBLGdCQUFBO0FBSFQiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDYsIDQ2KTtcclxuICAgcGFkZGluZzogMzBweCAwO1xyXG4gICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICBcclxuICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgfVxyXG5cclxuICAgJl9fcm93IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgIFxyXG4gICB9XHJcblxyXG4gICAmX19zZWFyY2gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIH1cclxuXHJcbiAgICZfX3RpdGxlIGEge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG4gICB9XHJcblxyXG4gICAuc2hvcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgIGNvbG9yOnJnYigzLCAxNjAsIDMpO1xyXG4gICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "2SFI":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _products_item_products_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-item/products-item.component */ "5nk9");




function ProductComponent_app_products_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-products-item", 7);
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
} }
class ProductComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
    }
    ngOnInit() {
        // Подтягиваю товары
        this.productService.getProducts()
            .subscribe((res) => {
            this.products = res.products;
        });
    }
    // Переход по страницах
    pageNumber(value) {
        this.productService.goToPage(value).subscribe((newProducts) => {
            this.products = newProducts.products;
        });
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 11, vars: 1, consts: [[1, "product"], [1, "container"], [1, "product__title"], [1, "product__row"], ["class", "product__item", 3, "product", 4, "ngFor", "ngForOf"], [1, "product__btn"], [3, "click"], [1, "product__item", 3, "product"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Latest products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductComponent_app_products_item_5_Template, 1, 1, "app-products-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_7_listener() { return ctx.pageNumber(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_9_listener() { return ctx.pageNumber(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _products_item_products_item_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemComponent"]], styles: [".product[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.product__row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.product__item[_ngcontent-%COMP%] {\n  flex: 0 1 23%;\n  margin: 0 5px;\n  padding: 0 5px;\n}\n.product__title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #302e2e;\n}\n.product__btn[_ngcontent-%COMP%] {\n  margin: 30px 0 0 0;\n}\n.product__btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n  margin-right: 10px;\n  font-size: 20px;\n  border-radius: 10px;\n  background-color: #e2dbdb;\n  font-weight: 500;\n}\n.product__btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #837b7b;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVHO0VBQ0csVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUROO0FBSUc7RUFDRyxhQUFBO0VBQ0EsZUFBQTtBQUZOO0FBS0c7RUFDRyxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFITjtBQU1HO0VBQ0csZUFBQTtFQUNBLGNBQUE7QUFKTjtBQU9HO0VBQ0csa0JBQUE7QUFMTjtBQU9NO0VBQ0csa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFMVDtBQVFNO0VBQ0cseUJBQUE7RUFDQSxnQkFBQTtBQU5UIiwiZmlsZSI6InByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdCB7XHJcblxyXG4gICAuY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICB9XHJcblxyXG4gICAmX19yb3cge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgIH1cclxuXHJcbiAgICZfX2l0ZW0ge1xyXG4gICAgICBmbGV4OiAwIDEgMjMlO1xyXG4gICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgfVxyXG5cclxuICAgJl9fdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoNDgsIDQ2LCA0Nik7XHJcbiAgIH1cclxuICAgXHJcbiAgICZfX2J0biB7XHJcbiAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIxOSwgMjE5KTtcclxuICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgMTIzLCAxMjMpO1xyXG4gICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "4EcI":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/product/product-by-id-information/product-by-id-information.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProductByIdInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductByIdInformationComponent", function() { return ProductByIdInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../select/select.component */ "yoGk");






function ProductByIdInformationComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "in stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Qty:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendSelectedCount", function ProductByIdInformationComponent_div_4_Template_app_select_sendSelectedCount_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.takeSelectedCount($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductByIdInformationComponent_div_4_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.buyProduct(ctx_r3.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Add to card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://nodejs-final-mysql.herokuapp.com", ctx_r0.product.products.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.products.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("main__star main__star", ctx_r0.product.products.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.product.products.numReviews, " reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", ctx_r0.product.products.price, " $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.products.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.product.products.price, " $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r0.product);
} }
class ProductByIdInformationComponent {
    constructor(productService, activateRoute, http) {
        this.productService = productService;
        this.activateRoute = activateRoute;
        this.http = http;
        this.selectedCount = 1;
        this.counts = [];
    }
    ngOnInit() {
        // Открываем описание товара
        this.id = this.activateRoute.snapshot.params['id'];
        this.http.get(`https://nodejs-final-mysql.herokuapp.com/products/${this.id}`).subscribe(res => {
            this.product = res;
            for (let i = 1; i <= this.product.countInStock; i++) {
                this.counts.push(i);
            }
            // Кодга пустой масив первое значение пушим
            this.product = Object.assign({}, {
                products: this.product,
                count: this.selectedCount
            });
            console.log(this.product);
        });
    }
    // Передача товаров в корзину
    buyProduct(product) {
        console.log(product);
        this.productService.buyProductAndCount(product);
        // Активируем функцию
        this.takeSelectedCount(this.selectedCount);
    }
    // Принимаем выбраное к-во товара
    takeSelectedCount(value) {
        console.log(value);
        this.product.count = +value;
    }
}
ProductByIdInformationComponent.ɵfac = function ProductByIdInformationComponent_Factory(t) { return new (t || ProductByIdInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProductByIdInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductByIdInformationComponent, selectors: [["app-product-by-id-information"]], decls: 5, vars: 1, consts: [[1, "main"], [1, "container"], ["routerLink", "", 1, "main__back"], ["class", "main__row", 4, "ngIf"], [1, "main__row"], [1, "main__descr"], [1, "main__image"], [3, "src", "alt"], [1, "main__info"], [1, "main__name"], [1, "main__review"], [1, "main__price"], [1, "main__description"], [1, "main__card"], [1, "main__prices"], [1, "main__status"], [1, "main__qty"], [3, "product", "sendSelectedCount"], [1, "main__btn"], [3, "click"]], template: function ProductByIdInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Go back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductByIdInformationComponent_div_4_Template, 33, 11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _select_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"]], styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.main__select[_ngcontent-%COMP%] {\n  background-color: #eee8e8;\n  padding: 10px 20px;\n  border-radius: 6px;\n}\n.main__select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  display: block;\n}\n.main__back[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  display: block;\n  margin-bottom: 30px;\n  text-transform: capitalize;\n  border-radius: 5px;\n}\n.main__back[_ngcontent-%COMP%]:hover {\n  background-color: #656568;\n  color: white;\n  transition: 0.3s;\n}\n.main__row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main__descr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main__image[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.main__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 95%;\n}\n.main__info[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 22%;\n}\n.main__name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  position: relative;\n}\n.main__name[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background-color: #75757a;\n  left: 0;\n  bottom: -5px;\n  position: absolute;\n}\n.main__review[_ngcontent-%COMP%] {\n  margin: 20px 0 0 10px;\n}\n.main__rating[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n.main__price[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin: 20px 0;\n  position: relative;\n}\n.main__price[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background-color: #75757a;\n  left: 0;\n  top: -10px;\n  position: absolute;\n}\n.main__price[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background-color: #75757a;\n  left: 0;\n  bottom: -10px;\n  position: absolute;\n}\n.main__description[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.main__card[_ngcontent-%COMP%] {\n  width: 350px;\n  margin-left: 20px;\n  border: 1px solid black;\n  min-height: 200px;\n  max-height: 250px;\n  min-width: 200px;\n  max-width: 400px;\n  font-size: 20px;\n}\n.main__prices[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid black;\n  padding: 15px;\n}\n.main__status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid black;\n  padding: 15px;\n}\n.main__qty[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid black;\n  padding: 15px;\n}\n.main__btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 15px auto;\n  width: 80%;\n  border-radius: 5px;\n  background-color: black;\n  color: white;\n  font-weight: 700;\n  padding: 10px;\n}\n.main__btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #c7c3c3;\n  color: black;\n  transition: 0.3s;\n}\n.main__star[_ngcontent-%COMP%] {\n  color: #ffee00;\n  font-size: 20px;\n}\n.main__star0[_ngcontent-%COMP%]:before {\n  content: \"\u2606\u2606\u2606\u2606\u2606\";\n}\n.main__star1[_ngcontent-%COMP%]:before {\n  content: \"\u2605\u2606\u2606\u2606\u2606\";\n}\n.main__star2[_ngcontent-%COMP%]:before {\n  content: \"\u2605\u2605\u2606\u2606\u2606\";\n}\n.main__star3[_ngcontent-%COMP%]:before {\n  content: \"\u2605\u2605\u2605\u2606\u2606\";\n}\n.main__star4[_ngcontent-%COMP%]:before {\n  content: \"\u2605\u2605\u2605\u2605\u2606\";\n}\n.main__star5[_ngcontent-%COMP%]:before {\n  content: \"\u2605\u2605\u2605\u2605\u2605\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZHVjdC1ieS1pZC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRyxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRUg7QUFHRztFQUNHLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFOO0FBRU07RUFDRyxhQUFBO0VBQ0EsY0FBQTtBQUFUO0FBSUc7RUFDRyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUtHO0VBQ0cseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFITjtBQU1HO0VBQ0csYUFBQTtBQUpOO0FBT0c7RUFDRyxhQUFBO0FBTE47QUFTRztFQUNHLGtCQUFBO0FBUE47QUFRTTtFQUNFLFVBQUE7QUFOUjtBQVdHO0VBQ0csZUFBQTtFQUNBLFVBQUE7QUFUTjtBQVlHO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0FBVk47QUFZRztFQUNHLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVZOO0FBWUc7RUFDRyxxQkFBQTtBQVZOO0FBWUc7RUFDRyxtQkFBQTtFQUNBLGtCQUFBO0FBVk47QUFhRztFQUNHLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBWE47QUFhRztFQUNHLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVhOO0FBYUc7RUFDRyxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFYTjtBQWNHO0VBQ0csZUFBQTtBQVpOO0FBZUc7RUFDRyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWJOO0FBa0JHO0VBQ0csYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBaEJOO0FBbUJHO0VBQ0csYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBakJOO0FBb0JHO0VBQ0csYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBbEJOO0FBcUJHO0VBQ0csY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBbkJOO0FBcUJHO0VBQ0cseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFuQk47QUF1Qkc7RUFDRyxjQUFBO0VBQ0EsZUFBQTtBQXJCTjtBQXdCRztFQUNHLGdCQUFBO0FBdEJOO0FBd0JHO0VBQ0csZ0JBQUE7QUF0Qk47QUF5Qkc7RUFDRyxnQkFBQTtBQXZCTjtBQXlCRztFQUNHLGdCQUFBO0FBdkJOO0FBeUJHO0VBQ0csZ0JBQUE7QUF2Qk47QUF5Qkc7RUFDRyxnQkFBQTtBQXZCTiIsImZpbGUiOiJwcm9kdWN0LWJ5LWlkLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1haW5fX3NlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU4ZTg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLm1haW5fX3NlbGVjdCBvcHRpb24ge1xuICBtYXJnaW46IDVweCAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX19iYWNrIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX19iYWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1NjU2ODtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLm1haW5fX3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbl9fZGVzY3Ige1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW5fX2ltYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLm1haW5fX2ltYWdlIGltZyB7XG4gIHdpZHRoOiA5NSU7XG59XG4ubWFpbl9faW5mbyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDIyJTtcbn1cbi5tYWluX19uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9fbmFtZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3YTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubWFpbl9fcmV2aWV3IHtcbiAgbWFyZ2luOiAyMHB4IDAgMCAxMHB4O1xufVxuLm1haW5fX3JhdGluZyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX19wcmljZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9fcHJpY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTdhO1xuICBsZWZ0OiAwO1xuICB0b3A6IC0xMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubWFpbl9fcHJpY2U6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc1N2E7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tYWluX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWluX19jYXJkIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1haW5fX3ByaWNlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLm1haW5fX3N0YXR1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLm1haW5fX3F0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLm1haW5fX2J0biBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX19idG4gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzNjMztcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLm1haW5fX3N0YXIge1xuICBjb2xvcjogI2ZmZWUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1haW5fX3N0YXIwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4piG4piG4piG4piG4piGXCI7XG59XG4ubWFpbl9fc3RhcjE6YmVmb3JlIHtcbiAgY29udGVudDogXCLimIXimIbimIbimIbimIZcIjtcbn1cbi5tYWluX19zdGFyMjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKYheKYheKYhuKYhuKYhlwiO1xufVxuLm1haW5fX3N0YXIzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4piF4piF4piF4piG4piGXCI7XG59XG4ubWFpbl9fc3RhcjQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLimIXimIXimIXimIXimIZcIjtcbn1cbi5tYWluX19zdGFyNTpiZWZvcmUge1xuICBjb250ZW50OiBcIuKYheKYheKYheKYheKYhVwiO1xufSJdfQ== */"] });


/***/ }),

/***/ "5nk9":
/*!*****************************************************************************!*\
  !*** ./src/app/components/product/products-item/products-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ProductItemComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://nodejs-final-mysql.herokuapp.com", ctx_r0.product.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProductItemComponent {
    constructor(productService, http, router) {
        this.productService = productService;
        this.http = http;
        this.router = router;
        this.products = [];
    }
    ngOnInit() {
    }
    // Переход на описание продукта
    goToProd(id) {
        this.router.navigate([`products/${id}`]);
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductItemComponent, selectors: [["app-products-item"]], inputs: { product: "product" }, decls: 12, vars: 7, consts: [[1, "product"], [1, "product__item", 3, "click"], ["alt", "Img", "class", "product__img", 3, "src", 4, "ngIf"], [1, "main__rating"], [1, "product__review"], [1, "product__price"], ["alt", "Img", 1, "product__img", 3, "src"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_Template_div_click_1_listener() { return ctx.goToProd(ctx.product._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductItemComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("product__star product__star", ctx.product.rating, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.numReviews, " reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.product.price, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@charset \"UTF-8\";\n.product__item[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  margin-top: 30px;\n  padding: 30px 15px;\n  text-align: center;\n  min-height: 345px;\n}\n.product__img[_ngcontent-%COMP%] {\n  margin: 0 auto 20px auto;\n  display: block;\n  max-width: 200px;\n}\n.product__review[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-left: 10px;\n}\n.product__price[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n}\n.product__rating[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  text-align: center;\n}\n.product__star[_ngcontent-%COMP%] {\n  color: #ffee00;\n  font-size: 20px;\n}\n.product__star0[_ngcontent-%COMP%]:before {\n  content: \"\u2606\u2606\u2606\u2606\u2606\";\n}\n.product__star1[_ngcontent-%COMP%]:before {\n  content: \"\u2605\u2606\u2606\u2606\u2606\";\n}\n.product__star2[_ngcontent-%COMP%]:before {\n  content: \"\u2605\u2605\u2606\u2606\u2606\";\n}\n.product__star3[_ngcontent-%COMP%]:before {\n  content: \"\u2605\u2605\u2605\u2606\u2606\";\n}\n.product__star4[_ngcontent-%COMP%]:before {\n  content: \"\u2605\u2605\u2605\u2605\u2606\";\n}\n.product__star5[_ngcontent-%COMP%]:before {\n  content: \"\u2605\u2605\u2605\u2605\u2605\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZHVjdHMtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFYjtFQUNHLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVFO0VBQ0csd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFBTDtBQUVHO0VBQ0csZUFBQTtFQUNBLGlCQUFBO0FBQU47QUFFRztFQUNHLGVBQUE7RUFDQSxnQkFBQTtBQUFOO0FBRUc7RUFDRyxjQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUVHO0VBQ0csY0FBQTtFQUNBLGVBQUE7QUFBTjtBQUdHO0VBQ0csZ0JBQUE7QUFETjtBQUdHO0VBQ0csZ0JBQUE7QUFETjtBQUlHO0VBQ0csZ0JBQUE7QUFGTjtBQUlHO0VBQ0csZ0JBQUE7QUFGTjtBQUlHO0VBQ0csZ0JBQUE7QUFGTjtBQUlHO0VBQ0csZ0JBQUE7QUFGTiIsImZpbGUiOiJwcm9kdWN0cy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnByb2R1Y3RfX2l0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMzBweCAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDM0NXB4O1xufVxuLnByb2R1Y3RfX2ltZyB7XG4gIG1hcmdpbjogMCBhdXRvIDIwcHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG4ucHJvZHVjdF9fcmV2aWV3IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5wcm9kdWN0X19wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5wcm9kdWN0X19yYXRpbmcge1xuICBtYXJnaW46IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2R1Y3RfX3N0YXIge1xuICBjb2xvcjogI2ZmZWUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnByb2R1Y3RfX3N0YXIwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4piG4piG4piG4piG4piGXCI7XG59XG4ucHJvZHVjdF9fc3RhcjE6YmVmb3JlIHtcbiAgY29udGVudDogXCLimIXimIbimIbimIbimIZcIjtcbn1cbi5wcm9kdWN0X19zdGFyMjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKYheKYheKYhuKYhuKYhlwiO1xufVxuLnByb2R1Y3RfX3N0YXIzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4piF4piF4piF4piG4piGXCI7XG59XG4ucHJvZHVjdF9fc3RhcjQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLimIXimIXimIXimIXimIZcIjtcbn1cbi5wcm9kdWN0X19zdGFyNTpiZWZvcmUge1xuICBjb250ZW50OiBcIuKYheKYheKYheKYheKYhVwiO1xufSJdfQ== */"] });


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
    production: false
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

/***/ "C2mX":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/header/header__components/app-search/search__components/app-input/app-input.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AppInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInputComponent", function() { return AppInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_btn_app_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-btn/app-btn.component */ "bxN9");




class AppInputComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
    }
}
AppInputComponent.ɵfac = function AppInputComponent_Factory(t) { return new (t || AppInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
AppInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppInputComponent, selectors: [["app-app-input"]], decls: 3, vars: 2, consts: [[1, "app__input"], ["type", "text", "placeholder", "Search Products...", 3, "ngModel", "ngModelChange"], [3, "searchProductBtn"]], template: function AppInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppInputComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchProduct = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-app-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchProductBtn", ctx.searchProduct);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _app_btn_app_btn_component__WEBPACK_IMPORTED_MODULE_3__["AppBtnComponent"]], styles: [".app__input[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 12px;\n}\n.app__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-radius: 7px;\n  display: block;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXBwLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csYUFBQTtFQU9BLGtCQUFBO0FBTEg7QUFERztFQUNHLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFHTiIsImZpbGUiOiJhcHAtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX19pbnB1dCB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGlucHV0IHtcclxuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgIH1cclxuICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Ehtv":
/*!**************************************************!*\
  !*** ./src/app/services/top-prosucts.service.ts ***!
  \**************************************************/
/*! exports provided: TopProsuctsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopProsuctsService", function() { return TopProsuctsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class TopProsuctsService {
    constructor(http) {
        this.http = http;
    }
    // Продукты для слайдера
    getProducts() {
        return this.http.get(`https://nodejs-final-mysql.herokuapp.com/products/top`);
    }
}
TopProsuctsService.ɵfac = function TopProsuctsService_Factory(t) { return new (t || TopProsuctsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TopProsuctsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TopProsuctsService, factory: TopProsuctsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slider/slider.component */ "+zoA");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/product.component */ "2SFI");



class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 3, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_1__["SliderComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Copyright \u00A9 shop\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0;\n  font-size: 18px;\n  color: #636060;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNIIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICBjb2xvcjogcmdiKDk5LCA5NiwgOTYpO1xyXG59Il19 */"] });


/***/ }),

/***/ "QWKc":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-item/cart-item.component */ "lsLU");




function CartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-cart-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newCount", function CartComponent_div_5_Template_app_cart_item_newCount_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.countAndCart($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1)("i", i_r2);
} }
class CartComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
        this.productsInCard = [];
        this.totalCount = 0;
        this.totalPrice = 0;
    }
    ngOnInit() {
        this.products = JSON.parse(localStorage.getItem('products'));
        // this.productService.cartSubject.subscribe(cart => {
        //   this.cart = cart;
        //   if (cart?.length > 0) {
        //     cart.forEach(item => {
        //       // console.log(item);
        //       this.totalPrice += item.products.price * item.count;
        //       this.itemCount = item.count;
        //       // console.log(this.itemCount);
        //       this.totalCount += item.count;
        //     });
        //     this.totalPrice = +this.totalPrice.toFixed(2);
        //   }
        // });
        // this.productService.cartSubject.subscribe(cart => {
        //   this.cart = cart;
        // })
        const { totalCount, totalPrice } = this.productService.updateCardTotalInfo();
        this.totalCount = +totalCount;
        this.totalPrice = Number(totalPrice);
        this.totalPrice.toFixed(2);
    }
    countAndCart(value) {
        const { totalCount, totalPrice } = this.productService.updateCardTotalInfo();
        this.totalCount = +totalCount;
        this.totalPrice = Number(totalPrice);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 15, vars: 3, consts: [[1, "cart"], [1, "container"], [1, "cart__item-title"], ["class", "cart__row", 4, "ngFor", "ngForOf"], [1, "cart__total"], [1, "cart__descr"], [1, "cart__checkout"], [1, "cart__row"], [3, "product", "i", "newCount"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Shopping cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_div_5_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "proceed to checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Subtotal (", ctx.totalCount, ") items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.totalPrice, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__["CartItemComponent"]], styles: [".cart[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n}\n.cart__item-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.cart__row[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.cart__total[_ngcontent-%COMP%] {\n  width: 35%;\n  padding: 30px;\n  max-height: 250px;\n}\n.cart__descr[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #666666;\n}\n.cart__descr[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: #666666;\n}\n.cart__descr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666666;\n  font-size: 15px;\n}\n.cart__checkout[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: 1px solid #666666;\n  border-right: 1px solid #666666;\n  border-left: 1px solid #666666;\n}\n.cart__checkout[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  bottom: 0 auto;\n  background-color: black;\n  color: white;\n  padding: 10px 30px;\n  text-transform: uppercase;\n}\n.cart__checkout[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: black;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNHO0VBQ0csaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFOO0FBR0c7RUFDRyxlQUFBO0FBRE47QUFJRztFQUNHLFVBQUE7QUFGTjtBQUtHO0VBQ0csVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUhOO0FBTUc7RUFDRyxhQUFBO0VBQ0EseUJBQUE7QUFKTjtBQU1NO0VBQ0csZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBSlQ7QUFPTTtFQUNHLGNBQUE7RUFDQSxlQUFBO0FBTFQ7QUFTRztFQUNHLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7QUFQTjtBQVNNO0VBQ0csY0FBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBUFQ7QUFTUztFQUNHLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBUFoiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0IHtcclxuICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgfVxyXG5cclxuICAgJl9faXRlbS10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgfVxyXG4gICBcclxuICAgJl9fcm93IHtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgfVxyXG5cclxuICAgJl9fdG90YWwge1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgfVxyXG5cclxuICAgJl9fZGVzY3Ige1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgY29sb3I6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgIGNvbG9yOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAmX19jaGVja291dCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgYm90dG9tOiAwIGF1dG87XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "RZmA":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/products-item/products-item.component */ "5nk9");




function SearchComponent_app_products_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-products-item", 4);
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
} }
class SearchComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
    }
    ngOnInit() {
        // Функция в сервиве поиск по имени
        this.productService.getSearchProducts()
            .subscribe((res) => {
            this.products = res.products;
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 4, vars: 1, consts: [[1, "search"], [1, "container"], [1, "search__items"], ["class", "search__item", 3, "product", 4, "ngFor", "ngForOf"], [1, "search__item", 3, "product"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_app_products_item_3_Template, 1, 1, "app-products-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _product_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemComponent"]], styles: [".search[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  max-width: 1200px;\n}\n.search__items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -15px;\n}\n.search__item[_ngcontent-%COMP%] {\n  flex: 1 1 24%;\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUc7RUFDRyxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRE47QUFJRztFQUNHLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUZOO0FBS0c7RUFDRyxhQUFBO0VBQ0EsZUFBQTtBQUhOIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xyXG5cclxuICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgfVxyXG5cclxuICAgJl9faXRlbXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIG1hcmdpbjogMCAtMTVweDtcclxuICAgfVxyXG5cclxuICAgJl9faXRlbSB7XHJcbiAgICAgIGZsZXg6IDEgMSAyNCU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "S3Px":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductsService {
    constructor(http) {
        this.http = http;
        // Переменные для отображения количества товаров в корзине
        this.count = parseInt(localStorage.getItem('count'), 10) || 0;
        // Сабджекты
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.productCartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    // Функция перехода по страницам
    goToPage(value) {
        this.pageNumber = value;
        return this.getProducts();
    }
    // Одерживаем продукты
    getProducts() {
        return this.http.get(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${this.pageNumber}`);
    }
    // Додаём продукт в корзину
    buyProductAndCount(productAndCount) {
        var _a;
        // Колечество товаров в карте повышаем и храним его локально
        this.count += productAndCount.count;
        localStorage.setItem('count', this.count.toString());
        this.cCount = +localStorage.getItem('count');
        // Хранение товаров с корзины локально
        // Если есть товары, то их сохранять
        // В ином случае создавать пустой массив
        if (((_a = JSON.parse(localStorage.getItem('products'))) === null || _a === void 0 ? void 0 : _a.length) >= 0) {
            this.productAndCount = JSON.parse(localStorage.getItem('products'));
        }
        else {
            this.productAndCount = [];
        }
        // !console.log(productAndCount);
        // Если данный товар есть в корзине, то повышаем эго каунт в попереднем элементе масссива
        const candidate = this.productAndCount.find(product => product.products._id === productAndCount.products._id);
        if (candidate) {
            candidate.count += productAndCount.count;
        }
        else {
            this.productAndCount.push({ products: productAndCount.products, count: +productAndCount.count });
        }
        // Передаем обьект в карт компоненту
        this.cartSubject.next(this.productAndCount);
        localStorage.setItem('products', JSON.stringify(this.productAndCount));
    }
    // Функция поиска товаров по имени
    searchProductFunction(searchProduct, products) {
        this.searchProduct = searchProduct.toLowerCase();
        this.searchSubject.next(this.searchProduct);
    }
    // Ссылка для поиска товаров в search
    getSearchProducts() {
        return this.http.get(`https://nodejs-final-mysql.herokuapp.com/products?keyword=${this.searchProduct}`);
    }
    // Удаление продукта с корзины
    removeFromLocalStorage(i) {
        this.i = i;
        this.productAndCount = JSON.parse(localStorage.getItem('products'));
        const index = this.productAndCount[i].count;
        this.productAndCount.splice(i, 1);
        localStorage.setItem('products', JSON.stringify(this.productAndCount));
        // Удаляем с корзины к-во удалённого товара
        this.count -= index;
        localStorage.setItem('count', this.count.toString());
        this.cCount = +localStorage.getItem('count');
    }
    editCardItem(id, product) {
        let products = JSON.parse(localStorage.getItem('products'));
        console.log(id, product);
        console.log(products);
        let prodToChangeIndex = products.findIndex(prod => prod.products._id === id);
        products[prodToChangeIndex].count = product.count;
        localStorage.setItem('products', JSON.stringify(products));
    }
    updateCardTotalInfo() {
        const products = JSON.parse(localStorage.getItem('products'));
        if (products) {
            let totalCount = 0;
            let totalPrice = 0;
            products.forEach((product) => {
                totalCount += +product.count;
                totalPrice += +product.products.price * product.count;
            });
            return { totalCount, totalPrice };
        }
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/products.service */ "S3Px");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");





class AppComponent {
    constructor(productService) {
        this.productService = productService;
        this.title = 'finish';
    }
    ngOnInit() {
        // Проверка массива на наличие продуктов в корзине
        let products = JSON.parse(localStorage.getItem('products'));
        if (!products || !products.length) {
            localStorage.setItem('products', JSON.stringify([]));
        }
        // Передаем массив в карт компоненту для отображения к-ва продуктов всё время в хедере
        this.productService.cartSubject.next(products);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "wrapper"], [1, "content"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  flex: 0 0 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNIO0FBQ0c7RUFDRyxjQUFBO0FBQ047QUFDRztFQUNHLGNBQUE7QUFDTiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAuY29udGVudCB7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICB9XHJcbiAgIC5mb290ZXIge1xyXG4gICAgICBmbGV4OiAwIDAgNTBweDtcclxuICAgfSAgXHJcbiAgIFxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
    logIn() {
        alert('Success');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 11, vars: 0, consts: [[1, "login"], ["type", "text", 1, "login__name"], ["type", "password", 1, "login__password"], [3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Type your name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Type your password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_9_listener() { return ctx.logIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel */ "uxF4");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/slider/slider.component */ "+zoA");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product/product.component */ "2SFI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_header_header_components_app_search_app_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header__components/app-search/app-search.component */ "vy2N");
/* harmony import */ var _components_header_header_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header__components/nav-menu/nav-menu.component */ "fuTf");
/* harmony import */ var _components_header_header_components_app_search_search_components_app_input_app_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header__components/app-search/search__components/app-input/app-input.component */ "C2mX");
/* harmony import */ var _components_header_header_components_app_search_search_components_app_btn_app_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header__components/app-search/search__components/app-btn/app-btn.component */ "bxN9");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_product_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/product/products-item/products-item.component */ "5nk9");
/* harmony import */ var _components_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/cart/cart-item/cart-item.component */ "lsLU");
/* harmony import */ var _components_product_product_by_id_information_product_by_id_information_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/product/product-by-id-information/product-by-id-information.component */ "4EcI");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/search/search.component */ "RZmA");
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/select/select.component */ "yoGk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__["OwlModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"],
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _components_header_header_components_app_search_app_search_component__WEBPACK_IMPORTED_MODULE_9__["AppSearchComponent"],
        _components_header_header_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_10__["NavMenuComponent"],
        _components_header_header_components_app_search_search_components_app_input_app_input_component__WEBPACK_IMPORTED_MODULE_11__["AppInputComponent"],
        _components_header_header_components_app_search_search_components_app_btn_app_btn_component__WEBPACK_IMPORTED_MODULE_12__["AppBtnComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"],
        _components_product_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_17__["ProductItemComponent"],
        _components_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_18__["CartItemComponent"],
        _components_product_product_by_id_information_product_by_id_information_component__WEBPACK_IMPORTED_MODULE_19__["ProductByIdInformationComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"],
        _components_select_select_component__WEBPACK_IMPORTED_MODULE_21__["SelectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__["OwlModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();


/***/ }),

/***/ "bxN9":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/header/header__components/app-search/search__components/app-btn/app-btn.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AppBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBtnComponent", function() { return AppBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppBtnComponent {
    constructor(productsService, router) {
        this.productsService = productsService;
        this.router = router;
    }
    ngOnInit() {
    }
    // Поиск товара по инпуте
    findProduct(text) {
        this.productsService.searchProductFunction(this.searchProduct, this.products);
        this.router.navigate([`search/${text}`]);
    }
}
AppBtnComponent.ɵfac = function AppBtnComponent_Factory(t) { return new (t || AppBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppBtnComponent, selectors: [["app-app-btn"]], inputs: { searchProduct: ["searchProductBtn", "searchProduct"] }, decls: 3, vars: 0, consts: [[1, "button"], [3, "click"]], template: function AppBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppBtnComponent_Template_button_click_1_listener() { return ctx.findProduct(ctx.searchProduct); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #17c907;\n  border: 1px solid #17c907;\n  padding: 10px 16px;\n  background-color: #302e2e;\n  border-radius: 5px;\n}\n.button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #17c907;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXBwLWJ0bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRztFQUNHLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRE47QUFHTTtFQUNHLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBRFQiLCJmaWxlIjoiYXBwLWJ0bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gICBcclxuICAgYnV0dG9uIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6IHJnYigyMywgMjAxLCA3KTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzLCAyMDEsIDcpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDYsIDQ2KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAyMDEsIDcpO1xyXG4gICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "fuTf":
/*!*************************************************************************************!*\
  !*** ./src/app/components/header/header__components/nav-menu/nav-menu.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavMenuComponent {
    constructor(productService) {
        this.productService = productService;
        this.count = 0;
        // Если нету товаров в козине что б не было значения
        this.cCount = 0;
    }
    ngOnInit() {
        // функция для отображения общего количества товаров в корзине
        this.productService.cartSubject.subscribe(cart => {
            // Ставим 0 перед переходом в корзину товара
            this.cCount = 0;
            if ((cart === null || cart === void 0 ? void 0 : cart.length) > 0) {
                cart.forEach(item => {
                    this.cCount += item.count;
                });
            }
        });
        // const { totalCount, totalPrice } = this.productService.updateCardTotalInfo();
        // this.cCount = totalCount;
    }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavMenuComponent, selectors: [["app-nav-menu"]], decls: 10, vars: 1, consts: [[1, "nav"], [1, "nav__list"], [1, "nav__item"], ["routerLink", "cart", "routerLinkActive", "", 1, "nav__link"], [1, "fas", "fa-shopping-cart"], ["routerLink", "login", "routerLinkActive", "", 1, "nav__link"], [1, "fas", "fa-user"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cCount, " Cart ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".nav__list[_ngcontent-%COMP%] {\n  display: flex;\n}\n.nav__item[_ngcontent-%COMP%] {\n  margin-right: 17px;\n}\n.nav__item[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.nav__link[_ngcontent-%COMP%] {\n  color: gray;\n  text-transform: uppercase;\n}\n.nav__link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.nav__link[_ngcontent-%COMP%]:hover {\n  color: white;\n  transition: 0.35s;\n  padding-bottom: 4px;\n  border-bottom: 1px solid white;\n}\n.nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: white;\n  transition: 0.35s;\n  padding-bottom: 4px;\n  border-bottom: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5hdi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVHO0VBQ0csYUFBQTtBQUROO0FBSUc7RUFDRyxrQkFBQTtBQUZOO0FBSUc7RUFDRyxTQUFBO0FBRk47QUFLRztFQUNHLFdBQUE7RUFDQSx5QkFBQTtBQUhOO0FBS0c7RUFDRyxpQkFBQTtBQUhOO0FBS0c7RUFDRyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSE47QUFNRztFQUNHLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFKTiIsImZpbGUiOiJuYXYtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xyXG4gICBcclxuICAgJl9fbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIH1cclxuICAgXHJcbiAgICZfX2l0ZW0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XHJcbiAgIH1cclxuICAgJl9faXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICB9XHJcblxyXG4gICAmX19saW5rIHtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgIH1cclxuICAgJl9fbGluayBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgIH1cclxuICAgJl9fbGluazpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zNXM7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgfVxyXG5cclxuICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zNXM7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "lsLU":
/*!******************************************************************!*\
  !*** ./src/app/components/cart/cart-item/cart-item.component.ts ***!
  \******************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../select/select.component */ "yoGk");





function CartItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendSelectedCount", function CartItemComponent_div_1_Template_app_select_sendSelectedCount_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.selectToCartItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartItemComponent_div_1_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeProductFormCart(ctx_r3.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://nodejs-final-mysql.herokuapp.com", ctx_r0.product.products.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.product.products.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.product.products.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.product.products.price, " $ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r0.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.product.count, " ");
} }
class CartItemComponent {
    constructor(productService) {
        this.productService = productService;
        this.newCount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    removeProductFormCart(i) {
        console.log(i);
        this.productService.removeFromLocalStorage(i);
    }
    selectToCartItem(value) {
        console.log(value, this.product);
        this.productService.editCardItem(this.product.products._id, this.product);
        this.newSelectCount = value;
        this.newCount.emit(this.newSelectCount);
    }
}
CartItemComponent.ɵfac = function CartItemComponent_Factory(t) { return new (t || CartItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
CartItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartItemComponent, selectors: [["app-cart-item"]], inputs: { product: "product", i: "i" }, outputs: { newCount: "newCount" }, decls: 2, vars: 1, consts: [["class", "product", 4, "ngIf"], [1, "product"], [1, "product__img", 3, "src", "alt"], [1, "product__descr"], [1, "product__name"], [1, "product__price"], [1, "product__select", 3, "product", "sendSelectedCount"], [1, "fas", "fa-trash", "product__remove", 3, "click"]], template: function CartItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartItemComponent_div_1_Template, 10, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _select_select_component__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"]], styles: [".product[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 140px;\n  padding: 10px 15px;\n  display: flex;\n  border-bottom: 1px solid black;\n  align-items: center;\n}\n.product__img[_ngcontent-%COMP%] {\n  display: block;\n  width: 18%;\n  margin: 0 25px 0 0;\n}\n.product__descr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.product__name[_ngcontent-%COMP%] {\n  width: 250px;\n  font-size: 24px;\n  line-height: 28px;\n  margin: 0 10px 0 0;\n}\n.product__price[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 19px;\n}\n.product__select[_ngcontent-%COMP%] {\n  display: block;\n  margin: -10px 20px 0 20px;\n}\n.product__remove[_ngcontent-%COMP%] {\n  display: block;\n  margin: -10px 0 0 0;\n  font-size: 20px;\n}\n.product__remove[_ngcontent-%COMP%]:hover {\n  color: red;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FydC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0g7QUFDRztFQUNHLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUVHO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0FBQU47QUFHRztFQUNHLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUc7RUFDRyxnQkFBQTtFQUNBLGVBQUE7QUFGTjtBQUtHO0VBQ0csY0FBQTtFQUNBLHlCQUFBO0FBSE47QUFNRztFQUNHLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKTjtBQU1HO0VBQ0csVUFBQTtFQUNBLGdCQUFBO0FBSk4iLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3Qge1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiAxNDBweDtcclxuICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAmX19pbWcge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgbWFyZ2luOiAwIDI1cHggMCAwO1xyXG4gICB9XHJcblxyXG4gICAmX19kZXNjciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIH1cclxuXHJcbiAgICZfX25hbWUge1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAgfVxyXG5cclxuICAgJl9fcHJpY2Uge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgIH1cclxuXHJcbiAgICZfX3NlbGVjdCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IC0xMHB4IDIwcHggMCAyMHB4O1xyXG4gICB9XHJcblxyXG4gICAmX19yZW1vdmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAtMTBweCAwIDAgMDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICBcclxuICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgIH1cclxuICAgfVxyXG5cclxufSJdfQ== */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_product_product_by_id_information_product_by_id_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product/product-by-id-information/product-by-id-information.component */ "4EcI");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search/search.component */ "RZmA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"] },
    { path: 'products/:id', component: _components_product_product_by_id_information_product_by_id_information_component__WEBPACK_IMPORTED_MODULE_4__["ProductByIdInformationComponent"] },
    { path: 'search/:text', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vy2N":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/header/header__components/app-search/app-search.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AppSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSearchComponent", function() { return AppSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _search_components_app_input_app_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search__components/app-input/app-input.component */ "C2mX");



class AppSearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppSearchComponent.ɵfac = function AppSearchComponent_Factory(t) { return new (t || AppSearchComponent)(); };
AppSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppSearchComponent, selectors: [["app-app-search"]], decls: 3, vars: 0, consts: [[1, "search"], ["action", "#"]], template: function AppSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-app-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _search_components_app_input_app_input_component__WEBPACK_IMPORTED_MODULE_2__["AppInputComponent"]], styles: [".search[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFwcC1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxtQkFBQTtFQUNBLGFBQUE7QUFDSCIsImZpbGUiOiJhcHAtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaCB7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "yoGk":
/*!*******************************************************!*\
  !*** ./src/app/components/select/select.component.ts ***!
  \*******************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/products.service */ "S3Px");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SelectComponent_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r1, " ");
} }
class SelectComponent {
    constructor(productService, http) {
        this.productService = productService;
        this.http = http;
        this.counts = [];
        // Передаём в родительскую компоненту
        this.sendSelectedCount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // !
    }
    ngOnInit() {
        // Вывод к-во товаров в селекте
        this.selectedCount = this.product.count;
        for (let i = 1; i <= this.product.products.countInStock; i++) {
            this.counts.push(i);
        }
    }
    // !Нужен ли параметр велью?
    send(value) {
        this.product.count = +this.selectedCount;
        this.sendSelectedCount.emit(this.product.count);
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], inputs: { product: "product" }, outputs: { sendSelectedCount: "sendSelectedCount" }, decls: 3, vars: 2, consts: [[1, "select"], [1, "main__select", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_select_ngModelChange_1_listener($event) { return ctx.selectedCount = $event; })("change", function SelectComponent_Template_select_change_1_listener() { return ctx.send(ctx.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectComponent_option_2_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.counts);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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