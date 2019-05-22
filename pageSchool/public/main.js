(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-container></app-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing */ "./src/app/routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/teacher/teacher.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./container/container.component */ "./src/app/container/container.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _justificacion_justificacion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./justificacion/justificacion.component */ "./src/app/justificacion/justificacion.component.ts");
/* harmony import */ var _malla_malla_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./malla/malla.component */ "./src/app/malla/malla.component.ts");
/* harmony import */ var _gis_gis_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gis/gis.component */ "./src/app/gis/gis.component.ts");
/* harmony import */ var _competencias_competencias_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./competencias/competencias.component */ "./src/app/competencias/competencias.component.ts");
/* harmony import */ var _infelcom_infelcom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./infelcom/infelcom.component */ "./src/app/infelcom/infelcom.component.ts");
/* harmony import */ var _gimi_gimi_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gimi/gimi.component */ "./src/app/gimi/gimi.component.ts");
/* harmony import */ var _telematics_telematics_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./telematics/telematics.component */ "./src/app/telematics/telematics.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_8__["TeacherComponent"],
                _container_container_component__WEBPACK_IMPORTED_MODULE_10__["ContainerComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _justificacion_justificacion_component__WEBPACK_IMPORTED_MODULE_12__["JustificacionComponent"],
                _malla_malla_component__WEBPACK_IMPORTED_MODULE_13__["MallaComponent"],
                _gis_gis_component__WEBPACK_IMPORTED_MODULE_14__["GisComponent"],
                _competencias_competencias_component__WEBPACK_IMPORTED_MODULE_15__["CompetenciasComponent"],
                _infelcom_infelcom_component__WEBPACK_IMPORTED_MODULE_16__["InfelcomComponent"],
                _gimi_gimi_component__WEBPACK_IMPORTED_MODULE_17__["GimiComponent"],
                _telematics_telematics_component__WEBPACK_IMPORTED_MODULE_18__["TelematicsComponent"],
                _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_19__["ContactoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/competencias/competencias.component.html":
/*!**********************************************************!*\
  !*** ./src/app/competencias/competencias.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<section id=\"justContent \" class=\"container col-md-8\">\n    <h4 style=\"text-align: left\"> <b> <strong> Profesional: </strong> </b></h4>\n    <h5 style=\"text-align: justify\"> El egresado del programa de Ingeniería de Sistemas y Computación debe tener capacidades para:</h5>\n    <br>\n    <ul style=\"text-align: justify\">\n        <li>\n            <h5>Aplicar el proceso de desarrollo de soluciones informáticas (evaluación, gestión, planificación, análisis, diseño, implementación, implantación, mantenimiento, control y mercadeo) a los problemas del entorno. </h5>\n        </li>\n        <li>\n            <h5> Definir y conceptualizar modelos y comportamientos de sistemas complejos, a partir de las teorías de las ciencias básicas y de la computación orientada al desarrollo de software. </h5>\n        </li>\n        <li>\n            <h5> Participar en grupos interdisciplinarios de investigación y campo laboral, asumiendo una actitud de liderazgo, crítica, científica y ética, para desarrollar proyectos informáticos y de comunicaciones utilizando nuevas tecnologías.</h5>\n        </li>\n    </ul>\n\n    <h4 style=\"text-align: left\"> <b> <strong> Ocupacional:  </strong> </b></h4>\n    <h5 style=\"text-align: justify\">El Ingeniero de Sistemas y Computación de la UPTC estará capacitado para desempeñarse como:</h5>\n    <br>\n    <ul style=\"text-align: justify\">\n        <li>\n            <h5> Consultor, administrador y gestor de proyectos informáticos. </h5>\n        </li>\n        <li>\n            <h5>Analista, diseñador y evaluador de sistemas informáticos. </h5>\n        </li>\n        <li>\n            <h5> Programador y soporte de sistemas de información en desarrollo o producción. </h5>\n        </li>\n        <li>\n            <h5> Diseñador, modelador, desarrollador y director de proyectos de software. </h5>\n        </li>\n        <li>\n            <h5> Asesor y/o coordinador en la implantación de nuevas tecnologías de la información y las comunicaciones. </h5>\n        </li>\n    </ul>\n    <br>\n</section>"

/***/ }),

/***/ "./src/app/competencias/competencias.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/competencias/competencias.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBldGVuY2lhcy9jb21wZXRlbmNpYXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/competencias/competencias.component.ts":
/*!********************************************************!*\
  !*** ./src/app/competencias/competencias.component.ts ***!
  \********************************************************/
/*! exports provided: CompetenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciasComponent", function() { return CompetenciasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompetenciasComponent = /** @class */ (function () {
    function CompetenciasComponent() {
    }
    CompetenciasComponent.prototype.ngOnInit = function () {
    };
    CompetenciasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-competencias',
            template: __webpack_require__(/*! ./competencias.component.html */ "./src/app/competencias/competencias.component.html"),
            styles: [__webpack_require__(/*! ./competencias.component.scss */ "./src/app/competencias/competencias.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompetenciasComponent);
    return CompetenciasComponent;
}());



/***/ }),

/***/ "./src/app/contacto/contacto.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacto/contacto.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contacto\" class=\"container\">\n    <br><br>\n    <h2 style=\"text-align: center\"><strong><b> Contactanos </b></strong> </h2>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 mb-12\">\n            <br><br><br><br><br>\n            <h4 class=\"text-align:center\"> <strong><b> Universidad Pedagógica y Tecnológica de Colombia Facultad de Ingeniería </b></strong> </h4>\n            <h5 class=\"text-align:center\">Escuela de Ingeniería de Sistemas y Computación </h5>\n            <h5 class=\"text-align:center\"><strong> <b> PBX:</b></strong> (57) 8 7405626 Ext.: 2545 - 2546 - 2548 </h5>\n            <h6 class=\"text-align:center\"><a href=\"mailto:ingenieria.sistemas@uptc.edu.co\">ingenieria.sistemas@uptc.edu.co</a></h6>\n        </div>\n        <div class=\"col-lg-6 col-md-6 mb-12\">\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31769.021439465603!2d-73.35594839999999!3d5.5480817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c1e6f4e767244da!2sUPTC%2C+Universidad+Pedag%C3%B3gica+y+Tecnol%C3%B3gica+de+Colombia!5e0!3m2!1ses-419!2sco!4v1558455314636!5m2!1ses-419!2sco\"\n                width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n        </div>\n    </div>\n</div>\n<br>\n<br>\n<br>"

/***/ }),

/***/ "./src/app/contacto/contacto.component.scss":
/*!**************************************************!*\
  !*** ./src/app/contacto/contacto.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/contacto/contacto.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacto/contacto.component.ts ***!
  \************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    ContactoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.component.html */ "./src/app/contacto/contacto.component.html"),
            styles: [__webpack_require__(/*! ./contacto.component.scss */ "./src/app/contacto/contacto.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/container/container.component.html":
/*!****************************************************!*\
  !*** ./src/app/container/container.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" row justify-content-md-center justify-content-sm-center justify-content-lg-center justify-content-xs-center\">\n    <div class=\" col-md-6\">\n        <img src=\"./../../assets/logo.png\" class=\"img-fluid\" alt=\"Responsive image\">\n    </div>\n    <div class=\"row align-items-end\">\n        <h5 class=\"\"><strong> Universidad Pedagogica y Tecnologica de Colombia </strong></h5>\n    </div>\n    <div class=\"logocolombia col-md-1 \" style=\"float:right\">\n        <img src=\"./../../assets/escudo colombia.png\" class=\"img-fluid\" alt=\"Responsive image\">\n    </div>\n</div>\n\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark elegant-color-dark sticky-top \" [containerInside]=\"false\">\n    <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\"> Ing. Sistemas</a></mdb-navbar-brand>\n    <links>\n        <ul class=\"navbar-nav mr-auto sticky-top\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link waves-light\" [routerLink]=\"['']\" mdbWavesEffect>Caracteristicas<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link waves-light\" [routerLink]=\"['/justificacion']\" mdbWavesEffect>Nosotros</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link waves-light\" [routerLink]=\"['/Docentes']\" mdbWavesEffect>Docentes</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link waves-light\" [routerLink]=\"['/mallaCurricular']\" mdbWavesEffect>Plan de estudios</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link waves-light\" [routerLink]=\"['/Competencias']\" mdbWavesEffect>Competencias</a>\n            </li>\n            <li class=\"nav-item dropdown\" dropdown>\n                <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n            Grupos de investigacion<span class=\"caret\"></span></a>\n                <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\" [routerLink]=\"['/GIS']\">GIS</a>\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\" [routerLink]=\"['/INFELCOM']\">INFELCOM</a>\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\" [routerLink]=\"['/GIMI']\">GIMI</a>\n                    <div class=\"divider dropdown-divider\"></div>\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\" [routerLink]=\"['/Telematics']\">Telematics</a>\n                </div>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link waves-light\" [routerLink]=\"['/Contacto']\" mdbWavesEffect>Contacto</a>\n            </li>\n        </ul>\n        <form class=\"form-inline waves-light\" mdbWavesEffect>\n            <div class=\"md-form my-0\">\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Buscar\">\n            </div>\n        </form>\n    </links>\n</mdb-navbar>\n<main class=\"text-center \">\n    <router-outlet></router-outlet>\n</main>\n<footer class=\"page-footer font-small cyan elegant-color-dark\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 py-5\">\n                <div class=\"mb-5 flex-center\">\n                    <a href=\"https://www.facebook.com/groups/UPTCOficial/\" target=\"_blank\" class=\"fb-ic\">\n                        <i class=\"fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\n                    </a>\n                    <a class=\"tw-ic\">\n                        <i class=\"fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\n                    </a>\n                    <a href=\"\" class=\"gplus-ic\">\n                        <i class=\"fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x\">  </i>\n                    </a>\n                    <a class=\"li-ic\">\n                        <i class=\"fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\n                    </a>\n                    <a href=\"https://www.instagram.com/universidaduptc/?hl=es-la\" target=\"_blank\" class=\"ins-ic\">\n                        <i class=\"fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\n                    </a>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"footer-copyright text-center py-3\">© 2019 Copyright:\n        <a href=\"https://mdbootstrap.com/education/bootstrap/\"> Ingenieria de sistemas Uptc</a>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/container/container.component.scss":
/*!****************************************************!*\
  !*** ./src/app/container/container.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logocolombia {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyL0Y6XFxVc2VyIENcXHNvZnR3YXJlXFxwYWdlU2Nob29sU3lzdGVtXFxwYWdlU2Nob29sL3NyY1xcYXBwXFxjb250YWluZXJcXGNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb2NvbG9tYmlhIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/container/container.component.ts":
/*!**************************************************!*\
  !*** ./src/app/container/container.component.ts ***!
  \**************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.scss */ "./src/app/container/container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/gimi/gimi.component.html":
/*!******************************************!*\
  !*** ./src/app/gimi/gimi.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-8\">\n    <br><br>\n    <h4><strong><b>Grupo Investigación en Manejo de Información </b></strong></h4>\n    <br>\n    <div class=\"align-items-center\">\n        <img src=\"./../../assets/gimi.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\n    </div>\n    <br>\n    <h4 style=\"text-align: left\"> <b> <strong> Mision: </strong> </b></h4>\n    <h5 style=\"text-align: justify\"> Crear conocimiento referente a las tecnologías y metodologías orientadas a la gestión de la información, que facilite un mejor desarrollo de proyectos en el campo educacional y laboral, permitiendo tener un compendio de conocimientos y recursos a\n        la mano, que puedan ser utilizados por la comunidad universitaria y aplicada en el campo laboral e investigativo. El Grupo de Investigación para el Manejo de la Información (GIMI) propende por la creación de semilleros que se enfoquen en el desarrollo\n        de investigación básica y aplicada, que promuevan un desarrollo integral como profesionales e investigadores. GIMI trabajará en forma interdisciplinaria tanto con los grupos de la Universidad, como con otros grupos de investigación de universidades\n        colombianas y extranjeras. En extensión incentivará el mejor desarrollo de diferentes proyectos, seminarios, congresos y actividades culturales, a fin de consolidarnos como generadores de investigación y conocimiento en la región y en el país.\n    </h5>\n    <br>\n    <h4 style=\"text-align: left\"> <b> <strong> Visión: </strong> </b></h4>\n    <h5 style=\"text-align: justify\">Ser fortalecedores de investigación y desarrollo en el área de gestión de la información, ofreciendo soluciones tecnológicas e informáticas novedosas a nuestra región, al país y al continente. Desarrollar y usar los mejores recursos de manejo de la\n        información, para ofrecer soluciones integrales en las diferentes áreas del conocimiento que lo requieran, como también a los proyectos que se desarrollen en forma conjunta con otros grupos de Investigación o con la comunidad. Garantizar el desarrollo\n        de proyectos que involucren problemáticas de manejo de información dando soluciones tecnológicas e investigativas acordes al tamaño del problema y favorabilidad social para el mejoramiento en la prestación de servicios a nuestra comunidad.\n    </h5>\n    <br>\n    <h4 style=\"text-align: left\"> <b> <strong> Descripción: </strong> </b></h4>\n    <h5 style=\"text-align: justify\">Históricamente el manejo de la información siempre ha sido uno de las temáticas fundamentales de la humanidad, ya que toda cotidianidad exige la clasificación, almacenamiento, búsqueda y transporte de información. Esta información que inicia como\n        dato básico, se va transformado en información para clasificar y cualificar cualquier elemento con el que se relacione los procesos de la humanidad. Las soluciones de la anterior problemática iniciaron por archivos planos, imágenes, documentos\n        en cualquier medio, pasando por las bases de datos como un conjunto de información almacenada. Las bases de datos como una de los esquemas más relevantes de manejo de información estructurada, surgen desde mediados de los años sesenta y han marcado\n        la línea de investigación por muchos años, ahora se encuentran los modelos orientados a objetos.\n    </h5>\n    <br><br>\n    <h4 style=\"text-align: left\"> <b> <strong> Generalidades: </strong> </b></h4>\n    <div class=\"flex-left\">\n        <table class=\" flex-left table table-borderless  col-lg-8 col-md-12\">\n            <tbody>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Sigla:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>GIMI </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Area del conocimiento:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>Ingeniería y Tecnología -- Otras Ingenierías y Tecnologías </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Director:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>\n                            Gustavo Cáceres Castellanos </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Fecha de creación:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>Febrero 2007</h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Categoría Colciencias:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>\n                            B </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Código GrupLAC:&nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>COL0071089 </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Correo contacto:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5 class=\"text-align:center\"><a href=\"mailto:gis@uptc.edu.co\">gimi@uptc.edu.co</a></h5>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"row\">\n        <div class=\" col-md-6 col-xs-12\">\n            <h4 style=\"text-align: left\"> <b> <strong> Docentes del programa: </strong> </b></h4>\n            <ul style=\"text-align: justify\">\n                <li>\n                    <h5>Gustavo Cáceres Castellanos </h5>\n                </li>\n                <li>\n                    <h5> Jorge Enrique Quevedo Reyes </h5>\n                </li>\n                <li>\n                    <h5>Javier Antonio Ballesteros Ricaurte </h5>\n                </li>\n                <li>\n                    <h5> Juan Sebastián González Sanabria</h5>\n                </li>\n            </ul>\n        </div>\n        <div class=\" col-md-6 col-xs-12\">\n            <h4 style=\"text-align: left;\"> <b> <strong> Líneas de Investigación: </strong> </b></h4>\n            <ul style=\"text-align: justify\">\n                <li>\n                    <h5>Bases de Datos Espaciales y Sistemas de Información Geográficos. </h5>\n                </li>\n                <li>\n                    <h5> Inteligencia de negocios, Bodega y Minería de Datos. </h5>\n                </li>\n                <li>\n                    <h5>Tecnologías de la Información TI. </h5>\n                </li>\n                <li>\n                    <h5> Tendencias y tecnologías en el manejo de la información. </h5>\n                </li>\n            </ul>\n            <br><br>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/gimi/gimi.component.scss":
/*!******************************************!*\
  !*** ./src/app/gimi/gimi.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpbWkvZ2ltaS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/gimi/gimi.component.ts":
/*!****************************************!*\
  !*** ./src/app/gimi/gimi.component.ts ***!
  \****************************************/
/*! exports provided: GimiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GimiComponent", function() { return GimiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GimiComponent = /** @class */ (function () {
    function GimiComponent() {
    }
    GimiComponent.prototype.ngOnInit = function () {
    };
    GimiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gimi',
            template: __webpack_require__(/*! ./gimi.component.html */ "./src/app/gimi/gimi.component.html"),
            styles: [__webpack_require__(/*! ./gimi.component.scss */ "./src/app/gimi/gimi.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GimiComponent);
    return GimiComponent;
}());



/***/ }),

/***/ "./src/app/gis/gis.component.html":
/*!****************************************!*\
  !*** ./src/app/gis/gis.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-8\">\n    <br><br>\n    <h4><strong><b>GRUPO DE INVESTIGACIÓN EN SOFTWARE </b></strong></h4>\n    <br>\n    <div class=\"align-items-center\">\n        <img src=\"./../../assets/gis.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\n    </div>\n    <br>\n    <h4 style=\"text-align: left\"> <b> <strong> Mision: </strong> </b></h4>\n    <h5 style=\"text-align: justify\"> El grupo de investigación en software ha sido creado con el propósito de presentar a la comunidad el conocimiento suficiente en cuanto a modelos, técnicas y herramientas. </h5>\n    <br>\n    <h4 style=\"text-align: left\"> <b> <strong> Visión: </strong> </b></h4>\n    <h5 style=\"text-align: justify\">El grupo de investigación en software pretende ser inicialmente el mejor en el departamento de Boyacá, el cual brinde soporte informático a las diversas áreas del conocimiento, para posteriormente consolidarse como uno de los más fuertes en Colombia,\n        capaz de representar eficientemente a la comunidad investigativa en un ámbito internacional.\n    </h5>\n    <br>\n    <h4 style=\"text-align: left\"> <b> <strong> Descripción: </strong> </b></h4>\n    <h5 style=\"text-align: justify\">El Grupo de Investigación en Software GIS, fue creado con el propósito de generar un espacio para la investigación de los diferentes tópicos que cubren los nuevos requerimientos tecnológicos que están a la vanguardia del medio actual. Es por esto\n        que se están desarrollando proyectos relacionados con Sistemas Multiagentes, Simulación, Dinámica de Sistemas, captura de señales biomédicas, desarrollo de video juegos y otros importantes aspectos informáticos. Además se busca la publicación\n        y divulgación de los principales hallazgos que realice el grupo en sus diferentes áreas y poder compartir experiencias tanto investigativas como personales en el desarrollo de esta labor.\n    </h5>\n    <br><br>\n    <h4 style=\"text-align: left\"> <b> <strong> Generalidades: </strong> </b></h4>\n    <div class=\"flex-left\">\n        <table class=\" flex-left table table-borderless  col-lg-8 col-md-12\">\n            <tbody>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Sigla:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>GIS </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Area del conocimiento:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>Ingeniería y Tecnología -- Otras Ingenierías y Tecnologías </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Director:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>\n                            Mauro Callejas Cuervo. </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Fecha de creación:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>Febrero 2004 </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Categoría Colciencias:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>\n                            A </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Código GrupLAC:&nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>COL0037219 </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Correo contacto:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5><a href=\"mailto:gis@uptc.edu.co\">gis@uptc.edu.co</a> </h5>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"row\">\n        <div class=\" col-md-6 col-xs-12\">\n            <h4 style=\"text-align: left\"> <b> <strong> Docentes del programa: </strong> </b></h4>\n            <ul style=\"text-align: justify\">\n                <li>\n                    <h5>Mauro Callejas Cuervo</h5>\n                </li>\n                <li>\n                    <h5> Jorge Enrique Otálora Luna</h5>\n                </li>\n                <li>\n                    <h5>Andrea Catherine Alarcón Aldana </h5>\n                </li>\n                <li>\n                    <h5> Helver Augusto Valero Bustos</h5>\n                </li>\n                <li>\n                    <h5> Manuel Andrés Vélez Guerrero</h5>\n                </li>\n            </ul>\n        </div>\n        <div class=\" col-md-6 col-xs-12\">\n            <h4 style=\"text-align: left;\"> <b> <strong> Líneas de Investigación: </strong> </b></h4>\n            <ul style=\"text-align: justify\">\n                <li>\n                    <h5>Calidad de Software </h5>\n                </li>\n                <li>\n                    <h5> Captura y análisis de señales biomecánicas </h5>\n                </li>\n                <li>\n                    <h5>Ingeniería de Software</h5>\n                </li>\n                <li>\n                    <h5>Inteligencia Computacional </h5>\n                </li>\n                <li>\n                    <h5>Desarrollo de video juegos </h5>\n                </li>\n                <li>\n                    <h5>Computación Móvil Aplicada </h5>\n                </li>\n                <li>\n                    <h5>Desarrollo de dispositivos embebidos </h5>\n                </li>\n            </ul>\n\n            <br><br>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/gis/gis.component.scss":
/*!****************************************!*\
  !*** ./src/app/gis/gis.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpcy9naXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/gis/gis.component.ts":
/*!**************************************!*\
  !*** ./src/app/gis/gis.component.ts ***!
  \**************************************/
/*! exports provided: GisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GisComponent", function() { return GisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GisComponent = /** @class */ (function () {
    function GisComponent() {
    }
    GisComponent.prototype.ngOnInit = function () {
    };
    GisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gis',
            template: __webpack_require__(/*! ./gis.component.html */ "./src/app/gis/gis.component.html"),
            styles: [__webpack_require__(/*! ./gis.component.scss */ "./src/app/gis/gis.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GisComponent);
    return GisComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"align-items-center\">\n    <img src=\"./../../assets/logoEscuela.png\" class=\"img-fluid\" alt=\"Responsive image\">\n</div>\n<br>\n\n<div class=\"view view1 full-bg-img \">\n    <div class=\"mask  flex-center text-white text-center d-flex align-items-center rgba-black-strong\">\n        <div class=\"container text-center white-text  fadeInUp\">\n            <p data-aos=\"fade-down\" class=\" mx-5 mb-5\">La ingeniería de sistemas es una rama interdisciplinaria de la ingeniería que permite estudiar y comprender la realidad, con el propósito de implementar u optimizar sistemas complejos. Puede también verse como la aplicación tecnológica de\n                la teoría de sistemas a los esfuerzos de la ingeniería, adoptando en todo este trabajo el paradigma sistémico.\n            </p>\n        </div>\n    </div>\n</div>\n<br>\n<br>\n<div class=\"flex-center\">\n    <table class=\" flex-center table table-borderless  col-lg-8 col-md-12\">\n        <tbody>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Programa académico:  &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5>Ingeniería de Sistemas y Computación. </h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Nivel académico:  &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5>Pregrado </h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Nivel de formación:  &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5> Profesional Universitario. </h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Título a otorgar:  &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5>Ingeniero de Sistemas y Computación </h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Sede:  &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5>Tunja </h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Facultad:&nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5>Ingeniería </h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Duración:  &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5> 10 Semestres </h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Metodología: &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5> Presencial </h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Código SNIES:  &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5>2760 </h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Registro calificado:  &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5>Resolución MEN N°. 19180 <br> del 21 de septiembre de 2017 </h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Vigencia registro:&nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5>7 años </h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Acreditación alta calidad: &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5> Resolución MEN N°. 11577 <br> del 17 de julio de 2018</h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Vigencia acreditación: &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5>6 años</h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Créditos académicos: &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5>162</h5>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"text-align: right\">\n                    <h5><strong><b>Periodicidad de admisión:  &nbsp; </b></strong></h5>\n                </td>\n                <td style=\"text-align: left\">\n                    <h5>Semestral</h5>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <br>\n\n    <br>\n    <br>\n    <br>\n\n\n</div>\n\n<div class=\"flex-center \">\n    <table style=\"font-size: 20px\" class=\"table  col-lg-6 col-md-12\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th scope=\"col\">\n                    <h5><strong><b>Valor Matricula  &nbsp; </b></strong></h5>\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>\n                    <h5>Según índice socioeconómico\n                        <a href=\"http://www.uptc.edu.co/export/sites/default/secretaria_general/consejo_superior/acuerdos_2017/Acuerdo_067_2017.pdf\">Acuerdo 067 de 2017</a>\n                    </h5>\n                </td>\n            </tr>\n\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view1 {\n  background: url(\"https://image.freepik.com/foto-gratis/jovenes-multietnicos-que-usan-computadoras-telefonos-inteligentes-tabletas_1139-994.jpg\") no-repeat center;\n  background-size: cover;\n  height: 90vh; }\n\n.i-am-centered {\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcVXNlciBDXFxzb2Z0d2FyZVxccGFnZVNjaG9vbFN5c3RlbVxccGFnZVNjaG9vbC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtLQUFnSztFQUNoSyx1QkFBc0I7RUFDdEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXcxIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZm90by1ncmF0aXMvam92ZW5lcy1tdWx0aWV0bmljb3MtcXVlLXVzYW4tY29tcHV0YWRvcmFzLXRlbGVmb25vcy1pbnRlbGlnZW50ZXMtdGFibGV0YXNfMTEzOS05OTQuanBnXCIpbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbn1cclxuXHJcbi5pLWFtLWNlbnRlcmVkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/infelcom/infelcom.component.html":
/*!**************************************************!*\
  !*** ./src/app/infelcom/infelcom.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-8\">\n    <br><br>\n    <h4><strong><b>\t\n        GRUPO DE INVESTIGACIÓN EN INFORMÁTICA, ELECTRÓNICA Y COMUNICACIONES </b></strong></h4>\n    <br>\n    <div class=\"align-items-center\">\n        <img src=\"./../../assets/LogoInfelcom.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\n    </div>\n    <br>\n    <h4 style=\"text-align: left\"> <b> <strong> Mision: </strong> </b></h4>\n    <h5 style=\"text-align: justify\"> Mejorar las destrezas cognitivas y profesionales en cuanto al área teleinformática de la comunidad académica adscrita al grupo de investigación, constituyendo un capital humano con conocimientos integrales y vanguardistas en la disciplina informática.\n    </h5>\n    <br>\n    <h4 style=\"text-align: left\"> <b> <strong> Visión: </strong> </b></h4>\n    <h5 style=\"text-align: justify\">Ser el grupo de investigación de innegable referencia y consulta por parte de la comunidad académica e investigativa en Colombia en el marco de referencia teleinformático, que posea una gran comunidad de participantes reconocidos por su aporte a la\n        ciencia, academia y desarrollo social, instado por el adecuado y ético aprovechamiento de los recursos tecnológicos y métodos ingenieriles.\n    </h5>\n    <br>\n    <h4 style=\"text-align: left\"> <b> <strong> Descripción: </strong> </b></h4>\n    <h5 style=\"text-align: justify\">El Grupo de Investigación en Informática, Electrónica y Comunicaciones de la Universidad Pedagógica y Tecnológica de Colombia, es una comunidad conformada básicamente por estudiantes y docentes del programa de Ingeniería de Sistemas y Computación,\n        conscientes que el área de la Teleinformática es fundamental para las pretensiones cognitivas y de aplicación profesional y disciplinar.\n    </h5>\n\n    <br>\n    <h5 style=\"text-align: justify\">La citada comunidad reconoce su responsabilidad por profundizar y generar soluciones innovadoras en el área de las Redes de Datos, Comunicaciones y actividades de gestión de recursos computacionales dispuestos en una organización tan simple como una\n        empresa y tan compleja como la misma Internet.\n    </h5>\n    <br>\n    <h4 style=\"text-align: left\"> <b> <strong> Generalidades: </strong> </b></h4>\n    <div class=\"flex-left\">\n        <table class=\" flex-left table table-borderless  col-lg-8 col-md-12\">\n            <tbody>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Sigla:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>INFELCOM </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Area del conocimiento:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>Ciencias Naturales -- Computación y Ciencias de la Información </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Director:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>\n\n                            Jorge Enrique Espíndola Díaz</h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Fecha de creación:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>Abril de 2003 </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Categoría Colciencias:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>\n                            C </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Código GrupLAC:&nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>COL0038889 </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Correo contacto:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5><a href=\"mailto:gis@uptc.edu.co\">infelcom@uptc.edu.co</a> </h5>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"row\">\n        <div class=\" col-md-6 col-xs-12\">\n            <h4 style=\"text-align: left\"> <b> <strong> Docentes del programa: </strong> </b></h4>\n            <ul style=\"text-align: justify\">\n                <li>\n                    <h5>Jorge Enrique Espíndola Díaz </h5>\n                </li>\n                <li>\n                    <h5> Germán Amézquita Becerra </h5>\n                </li>\n                <li>\n                    <h5> Jairo Alonso Mesa Lara </h5>\n                </li>\n                <li>\n                    <h5>Omaira Isabel Galindo Parra </h5>\n                </li>\n                <li>\n                    <h5> Alexander Castro Romero</h5>\n                </li>\n            </ul>\n        </div>\n        <div class=\" col-md-6 col-xs-12\">\n            <h4 style=\"text-align: left;\"> <b> <strong> Líneas de Investigación: </strong> </b></h4>\n            <ul style=\"text-align: justify\">\n                <li>\n                    <h5>Ciencias de la computación </h5>\n                </li>\n                <li>\n                    <h5>Telecomunicaciones</h5>\n                </li>\n            </ul>\n            <br><br>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/infelcom/infelcom.component.scss":
/*!**************************************************!*\
  !*** ./src/app/infelcom/infelcom.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZmVsY29tL2luZmVsY29tLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/infelcom/infelcom.component.ts":
/*!************************************************!*\
  !*** ./src/app/infelcom/infelcom.component.ts ***!
  \************************************************/
/*! exports provided: InfelcomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfelcomComponent", function() { return InfelcomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfelcomComponent = /** @class */ (function () {
    function InfelcomComponent() {
    }
    InfelcomComponent.prototype.ngOnInit = function () {
    };
    InfelcomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infelcom',
            template: __webpack_require__(/*! ./infelcom.component.html */ "./src/app/infelcom/infelcom.component.html"),
            styles: [__webpack_require__(/*! ./infelcom.component.scss */ "./src/app/infelcom/infelcom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfelcomComponent);
    return InfelcomComponent;
}());



/***/ }),

/***/ "./src/app/justificacion/justificacion.component.html":
/*!************************************************************!*\
  !*** ./src/app/justificacion/justificacion.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<section id=\"justContent \" class=\"container col-md-8\">\n    <h4 style=\"text-align: left\"> <b> <strong> Mision: </strong> </b></h4>\n    <h5 style=\"text-align: justify\"> El programa de Ingeniería de Sistemas y Computación pretende fomentar en el futuro profesional un pensamiento crítico, ético, innovador en lo tecnológico e investigativo, para la construcción y aplicación permanente del conocimiento en las tecnologías\n        informáticas, que den solución a las necesidades de su contexto, contribuyendo al crecimiento social del entorno.</h5>\n    <br>\n    <h4 style=\"text-align: left\"> <b> <strong> Visión: </strong> </b></h4>\n    <h5 style=\"text-align: justify\">El programa de Ingeniería de Sistemas y Computación se proyecta como un núcleo de saberes apoyado en una estructura curricular flexible, un cuerpo administrativo idóneo, una infraestructura física actualizada; acorde con los avances tecnológicos del\n        área, y una comunidad académica innovadora, comprometida con la investigación, que permita interactuar con la universalidad de la informática; formando profesionales con pensamiento crítico, ético, humanístico e investigativo.</h5>\n    <br>\n    <h5 style=\"text-align: justify\">Para cumplir la misión y los objetivos propuestos, el programa contará con docentes altamente calificados, espacios adecuados para la investigación, acceso a redes de comunicación, laboratorios, software y el soporte económico para el mantenimiento\n        y renovación de dichos recursos. Además, se contará con convenios interdisciplinarios e interinstitucionales, nacionales e internacionales.</h5>\n    <br>\n    <h4 style=\"text-align: left\"> <b> <strong> Justificación: </strong> </b></h4>\n    <h5 style=\"text-align: justify\">Uno de los pilares fundamentales para un desarrollo sostenido de una sociedad en cualquier parte del mundo, debe partir de varios aspectos tales como: la infraestructura física, infraestructura lógica, el recurso humano, el recurso tecnológico y el\n        manejo de la información, para que al final, la sociedad satisfaga sus necesidades mínimas y poder tener un aceptable grado de prosperidad y desarrollo. Dentro del manejo de la información, el Ingeniero de Sistemas y Computación, participa en\n        forma activa en el desarrollo e implementación de sistemas de información a nivel nacional e internacional, debido a que se encuentra dotado de capacidad de análisis, diseño y administración, ejerciendo un papel importante en la consecución de\n        objetivos dentro de una organización empresarial, de tipo privado y/o estatal.</h5>\n    <br>\n    <h5 style=\"text-align: justify\">El fenómeno de la globalización es una realidad y por ello, hay que aprender a vivir con nuevas herramientas para enfrentar este nuevo modelo de mundo. Dicho fenómeno afecta a todos los sectores incluyendo las instituciones de educación superior;\n        es por esto, que es un imperativo formar profesionales que construyan conocimiento y que, además, desarrollen habilidades para tomar decisiones, para la iniciativa particular, para el ejercicio de la autonomía, para ver el futuro y actuar de manera\n        coherente con principios sólidos por su fundamentación, pero flexibles en su aplicación.</h5>\n    <br>\n    <h5 style=\"text-align: justify\">En ingeniería de sistemas y computación, existen parámetros claros que señalan su rumbo y hacen que el programa ofrecido por la Universidad, tenga pertinencia con la época y relevancia con las necesidades del medio y del país, entre estos parámetros\n        se pueden citar:</h5>\n    <br>\n    <ul style=\"text-align: justify\">\n        <li>\n            <h5> La utilización de los sistemas de información en lugares como: la banca, el comercio, la industria, la agroindustria y la academia. </h5>\n        </li>\n        <li>\n            <h5> La realización de múltiples procesos en forma completamente sistematizada y su propagación a través de las redes de comunicación de datos, voz, video y servicios integrados.</h5>\n        </li>\n        <li>\n            <h5> La creciente demanda de desarrollos de software, implicada por la necesidad sentida por las instituciones académicas, empresariales, industriales de la región y el país, por los diferentes renglones de la economía, de personas con formación\n                y liderazgo, con énfasis en Ingeniería del software, redes de comunicación, gestión empresarial, como lo demuestra el proyecto implementado por la Presidencia de la República, Agenda de Conectividad. </h5>\n        </li>\n    </ul>\n    <br>\n</section>"

/***/ }),

/***/ "./src/app/justificacion/justificacion.component.scss":
/*!************************************************************!*\
  !*** ./src/app/justificacion/justificacion.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2p1c3RpZmljYWNpb24vanVzdGlmaWNhY2lvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/justificacion/justificacion.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/justificacion/justificacion.component.ts ***!
  \**********************************************************/
/*! exports provided: JustificacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JustificacionComponent", function() { return JustificacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JustificacionComponent = /** @class */ (function () {
    function JustificacionComponent() {
    }
    JustificacionComponent.prototype.ngOnInit = function () {
    };
    JustificacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-justificacion',
            template: __webpack_require__(/*! ./justificacion.component.html */ "./src/app/justificacion/justificacion.component.html"),
            styles: [__webpack_require__(/*! ./justificacion.component.scss */ "./src/app/justificacion/justificacion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JustificacionComponent);
    return JustificacionComponent;
}());



/***/ }),

/***/ "./src/app/malla/malla.component.html":
/*!********************************************!*\
  !*** ./src/app/malla/malla.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<h3 style=\"text-align: center\"> <b> <strong> Malla Curricular </strong> </b></h3>\n\n<div class=\"flex-center container\">\n    <table class=\" flex-center table table-borderless col-lg-8 \">\n        <tr class=\"col-md-12\">\n            <td>\n                <h4>Primer semestre</h4>\n            </td>\n            <td class=\"col-md-12\"> <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Interdisciplinar\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                Algoritmos y Programación\n            </button></td>\n            <td class=\"col-md-12\"> <button type=\"button\" mdbBtn color=\"unique\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Interdisciplinar\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                Calculo  I\n            </button></td>\n            <td class=\"col-md-12\"><button type=\"button\" mdbBtn color=\"dark-green\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              general\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Cátedra Universidad \n            </button></td>\n            <td class=\"col-md-12\"><button type=\"button\" mdbBtn color=\"purple\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              general\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Competencias Comunicativas\n            </button></td>\n            <td class=\"col-md-12\"> <button type=\"button\" mdbBtn color=\"deep-orange\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              general\" placement=\"left\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Socio Humanistica I\n            </button></td>\n        </tr>\n        <tr>\n            <td>\n                <h4>segundo semestre</h4>\n            </td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                 Programación I\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"unique\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Interdisciplinar\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                Calculo  II\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"unique\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Interdisciplinar\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                Fisica I \n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"brown\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Interdisciplinar\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Algebra lineal \n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"mdb-color\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Interdisciplinar\" placement=\"left\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Ética y Política\n            </button></td>\n        </tr>\n        <tr>\n            <td>\n                <h4>tercer semestre</h4>\n            </td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                 Programación II\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"unique\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Interdisciplinar\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                Calculo  III\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"unique\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Interdisciplinar\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                Fisica II\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"amber\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Interdisciplinar\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n            Economia\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"pink\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Interdisciplinar\" placement=\"left\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Éxpresion Grafica\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"elegant\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              general\" placement=\"left\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n             socio Humanistica II\n            </button></td>\n        </tr>\n        <tr>\n            <td>\n                <h4>Cuarto semestre</h4>\n            </td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                 Programación III\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"unique\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Interdisciplinar\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                Calculo IV\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"unique\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Interdisciplinar\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                Fisica III\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"danger\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Interdisciplinar\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Metodología de la Investigación\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"light-blue\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Interdisciplinar\" placement=\"left\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Probabilidad y Estadística\n            </button></td>\n        </tr>\n        <tr>\n            <td>\n                <h4>Quinto semestre</h4>\n            </td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                 Ingenieria de Requisitos\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"unique\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Interdisciplinar\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                Metodos numericos\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"purple\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Bases de datos I\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"cyan\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n             Electronica General\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"light-green\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Disciplinar y Profundización\" placement=\"left\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Teoria general  sistemas\n            </button></td>\n\n        </tr>\n        <tr>\n            <td>\n                <h4>Sexto semestre</h4>\n            </td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                 Ingenieria de Software I\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"dark-green\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                Comunicaciones\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"purple\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Bases de datos II\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"mdb-color\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n         Matematicas Discretas\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"deep-orange\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"left\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Investigación de Operaciones\n            </button></td>\n        </tr>\n        <tr>\n            <td>\n                <h4>Septimo semestre</h4>\n            </td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                 Ingenieria de Software II\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"dark-green\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                Transmision de datos\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"pink\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Sistemas Distribuidos\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"mdb-color\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n         Lenguajes Formales\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"yellow\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"left\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Sistemas Operativos\n            </button></td>\n        </tr>\n        <tr>\n            <td>\n                <h4>Octavo semestre</h4>\n            </td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"primary\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n                Trabajo de campo\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"dark-green\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Redes de Datos\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"indigo\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Inteligencia Computacional\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"light-blue\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Arquitectura de Computadores\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"deep-orange\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Interdisciplinar\" placement=\"left\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Administración\n            </button></td>\n        </tr>\n        <tr>\n            <td>\n                <h4>Noveno semestre</h4>\n            </td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"purple\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Auditoría de Sistemas\t\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"mdb-color\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Electiva I\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"elegant\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Electiva II\n            </button></td>\n            <td style=\"width: 14%\"><button type=\"button\" mdbBtn color=\"deep-purple\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Gerencia Informática\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"cyan\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Disciplinar y Profundización\" placement=\"left\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Seminario de Trabajo de Grado\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"pink\" class=\"waves-light\" mdbPopover=\"Creditos: 4 Area:\t\n              Disciplinar y Profundización\" placement=\"left\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Simulación por Computador\n            </button></td>\n        </tr>\n        <tr>\n            <td>\n                <h4>Decimo semestre</h4>\n            </td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"dark-green\" class=\"waves-light\" mdbPopover=\"Creditos: 3 Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Electiva III\n            </button></td>\n            <td style=\"width: 14%\"> <button type=\"button\" mdbBtn color=\"unique\" class=\"waves-light\" mdbPopover=\"Creditos: 3   Area:\t\n              Disciplinar y Profundización\" placement=\"top\" mdbPopoverHeader=\"Caracteristicas\" mdbWavesEffect>\n              Electiva IV\n            </button></td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/malla/malla.component.scss":
/*!********************************************!*\
  !*** ./src/app/malla/malla.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbGxhL21hbGxhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/malla/malla.component.ts":
/*!******************************************!*\
  !*** ./src/app/malla/malla.component.ts ***!
  \******************************************/
/*! exports provided: MallaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MallaComponent", function() { return MallaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MallaComponent = /** @class */ (function () {
    function MallaComponent() {
    }
    MallaComponent.prototype.ngOnInit = function () {
    };
    MallaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-malla',
            template: __webpack_require__(/*! ./malla.component.html */ "./src/app/malla/malla.component.html"),
            styles: [__webpack_require__(/*! ./malla.component.scss */ "./src/app/malla/malla.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MallaComponent);
    return MallaComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"]
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/routing.ts":
/*!****************************!*\
  !*** ./src/app/routing.ts ***!
  \****************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");
/* harmony import */ var _gimi_gimi_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gimi/gimi.component */ "./src/app/gimi/gimi.component.ts");
/* harmony import */ var _infelcom_infelcom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infelcom/infelcom.component */ "./src/app/infelcom/infelcom.component.ts");
/* harmony import */ var _competencias_competencias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./competencias/competencias.component */ "./src/app/competencias/competencias.component.ts");
/* harmony import */ var _malla_malla_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./malla/malla.component */ "./src/app/malla/malla.component.ts");
/* harmony import */ var _justificacion_justificacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./justificacion/justificacion.component */ "./src/app/justificacion/justificacion.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container/container.component */ "./src/app/container/container.component.ts");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/teacher/teacher.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gis_gis_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gis/gis.component */ "./src/app/gis/gis.component.ts");
/* harmony import */ var _telematics_telematics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./telematics/telematics.component */ "./src/app/telematics/telematics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'Docentes', component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_8__["TeacherComponent"] },
    { path: 'container', component: _container_container_component__WEBPACK_IMPORTED_MODULE_7__["ContainerComponent"] },
    { path: 'justificacion', component: _justificacion_justificacion_component__WEBPACK_IMPORTED_MODULE_5__["JustificacionComponent"] },
    { path: 'mallaCurricular', component: _malla_malla_component__WEBPACK_IMPORTED_MODULE_4__["MallaComponent"] },
    { path: 'Competencias', component: _competencias_competencias_component__WEBPACK_IMPORTED_MODULE_3__["CompetenciasComponent"] },
    { path: 'GIS', component: _gis_gis_component__WEBPACK_IMPORTED_MODULE_11__["GisComponent"] },
    { path: 'INFELCOM', component: _infelcom_infelcom_component__WEBPACK_IMPORTED_MODULE_2__["InfelcomComponent"] },
    { path: 'GIMI', component: _gimi_gimi_component__WEBPACK_IMPORTED_MODULE_1__["GimiComponent"] },
    { path: 'Telematics', component: _telematics_telematics_component__WEBPACK_IMPORTED_MODULE_12__["TelematicsComponent"] },
    { path: 'Contacto', component: _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_0__["ContactoComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                    scrollOffset: [0, 53]
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/teacher/teacher.component.html":
/*!************************************************!*\
  !*** ./src/app/teacher/teacher.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" container col-md-8\">\n    <br>\n    <h4><strong><b>Docentes de Planta</b></strong></h4>\n    <br>\n    <table class=\"table table-bordered\" cellspacing=\"0\" cellpadding=\"0\">\n        <tbody>\n            <tr>\n                <td> <b> <strong>MIGUEL ÁNGEL MENDOZA MORENO </strong>  </b>\n                    <br> Docente Asistente (Grupo de Investigación TelemaTICs) CvLAC</td>\n                <td style=\"width: 30%\" rowspan=\"2\"> <img src=\"./../../assets/miguelM.jpg\" class=\"img-fluid\" alt=\"Responsive image\"></td>\n            </tr>\n            <tr>\n                <td style=\"text-align: justify\">\n                    <b>  <strong>  Doctor en Ciencias de la Electrónica. Universidad del Cauca. </strong> </b> <br>\n                    <b>  <strong>  Magíster en Ciencias de la Información y las Comunicaciones. </strong></b> <br> Universidad Distrital \"Francisco José de Caldas\". <br>\n                    <b><strong>  Especialista en Redes y Servicios Telemáticos.</strong> </b> Universidad del Cauca. <br>\n                    <b><strong>  Especialista en Pedagogía para el Desarrollo del Aprendizaje Autónomo.</strong></b> <br> Universidad Nacional Abierta y a Distancia. <br>\n                    <b><strong>  Ingeniero de Sistemas y Computación.</strong></b> Universidad Pedagógica y Tecnológica de Colombia.\n                    <br> <b><strong>  Correo electrónico:</strong></b> miguel.mendoza@uptc.edu.co</td>\n            </tr>\n        </tbody>\n    </table>\n    <table class=\"table table-bordered\" cellspacing=\"0\" cellpadding=\"0\">\n        <tbody>\n            <tr>\n                <td> <b> <strong>MAURO CALLEJAS CUERVO </strong>  </b>\n                    <br> Docente Asociado (Grupo de Investigación GIS) CvLAC</td>\n                <td style=\"width: 30%\" rowspan=\"2\"> <img src=\"./../../assets/Mauro_Callejas_Cuervo.jpg\" class=\"img-fluid\" alt=\"Responsive image\"></td>\n            </tr>\n            <tr>\n                <td style=\"text-align: justify\">\n                    <b>  <strong> Doctor en Energía y Control de Procesos.Universidad De Oviedo </strong> </b> <br>\n                    <b>  <strong> Doctor en Ciencia Aplicada. </strong></b> Universidad Antonio Nariño. <br>\n                    <b><strong>Magíster en Ciencias Computacionales.</strong> </b>Universidad Autónoma de Bucaramanga. <br>\n                    <b><strong>  Instituto Tecnológico y de Estudios Superiores de Monterrey.</strong></b> <br>\n                    <b><strong> Ingeniero de sistemas con Énfasis en Software.</strong></b> Universidad Antonio Nariño.\n                    <br> <b><strong>  Correo electrónico:</strong></b> mauro.callejas@uptc.edu.co</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <table class=\"table table-bordered\" cellspacing=\"0\" cellpadding=\"0\">\n        <tbody>\n            <tr>\n                <td> <b> <strong>JUAN JOSÉ CAMARGO VEGA  </strong>  </b>\n                    <br> Docente Asociado CvLAC</td>\n                <td style=\"width: 30%\" rowspan=\"2\"> <img src=\"./../../assets/incognito.jpg\" class=\"img-fluid\" alt=\"Responsive image\"></td>\n            </tr>\n            <tr>\n                <td style=\"text-align: justify\">\n                    <b>  <strong> Doctor en Informática - Programa sociedad de la información y el conocimiento </strong> </b> Universidad Pontificia de Salamanca.<br>\n                    <b>  <strong> Magíster en Nuevas Tecnologías de la Información.  </strong></b> Universidad Pedagógica Nacional. <br>\n                    <b><strong>Especialista en Diseño de Sistemas de Auditoría.</strong> </b>Universidad Nacional de Colombia<br>\n                    <b><strong>  Especialista en Ingeniería del Software.</strong></b> Universidad Antonio Nariño. <br>\n                    <b><strong> Ingeniero de Sistemas.</strong></b> Universidad INCCA.\n                    <br> <b><strong>  Correo electrónico:</strong></b> mauro.callejas@uptc.edu.co</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <table class=\"table table-bordered\" cellspacing=\"0\" cellpadding=\"0\">\n        <tbody>\n            <tr>\n                <td style=\"height: 10%;\"> <b> <strong>JORGE ENRIQUE QUEVEDO REYES  </strong>  </b>\n                    <br> Docente Asistente (Grupo de Investigación GIMI) CvLAC</td>\n                <td style=\"width: 30%\" rowspan=\"2\"> <img src=\"./../../assets/quevedo.jpg\" class=\"img-fluid\" alt=\"Responsive image\"></td>\n            </tr>\n            <tr>\n                <td style=\"text-align: justify\">\n                    <b>  <strong>Magíster en Ingeniería de Sistemas, </strong> </b> Universidad de los Andes. <br>\n                    <b>  <strong> Especialista en Sistemas.   </strong></b> Universidad Nacional de Colombia. <br>\n                    <b><strong>Ingeniero de Sistemas.</strong> </b>Universidad Piloto de Colombia. <br>\n                    <b><strong>  Correo electrónico:</strong></b> jorge.quevedo@uptc.edu.co</td>\n            </tr>\n        </tbody>\n    </table>\n    <table class=\"table table-bordered\" cellspacing=\"0\" cellpadding=\"0\">\n        <tbody>\n            <tr>\n                <td style=\"height: 10%;\"> <b> <strong>JORGE ENRIQUE OTÁLORA LUNA   </strong>  </b>\n                    <br>Docente Asociado (Grupo de Investigación GIS) CvLAC </td>\n                <td style=\"width: 30%\" rowspan=\"2\"> <img src=\"./../../assets/jotalora.jpg\" class=\"img-fluid\" alt=\"Responsive image\"></td>\n            </tr>\n            <tr>\n                <td style=\"text-align: justify\">\n                    <b>  <strong> Doctor en Ingeniería del Software.</strong> </b> Universidad Pontificia de Salamanca.<br>\n                    <b>  <strong>Magíster Ingeniería de Sistemas.   </strong></b>Universidad EAFIT. <br>\n                    <b><strong>Especialista en Ingeniería del Software.</strong> </b> Universidad Antonio Nariño. <br>\n                    <b><strong>  Ingeniero de Sistemas.</strong></b>Universidad Antonio Nariño. <br>\n                    <br> <b><strong>  Correo electrónico:</strong></b> jorge.otalora@uptc.edu.co</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <table class=\"table table-bordered\" cellspacing=\"0\" cellpadding=\"0\">\n        <tbody>\n            <tr>\n                <td style=\"height: 10%;\"> <b> <strong>JORGE ENRIQUE ESPÍNDOLA DÍAZ    </strong>  </b>\n                    <br>Docente Asociado (Grupo de Investigación INFELCOM) CvLAC </td>\n                <td style=\"width: 30%\" rowspan=\"2\"> <img src=\"./../../assets/espindola.jpg\" class=\"img-fluid\" alt=\"Responsive image\"></td>\n            </tr>\n            <tr>\n                <td style=\"text-align: justify\">\n                    <b>  <strong> Doctor Engenharia e Tecnologia Espaciais. </strong> </b> Instituto Nacional De Pesquisas Espaciais.<br>\n                    <b>  <strong>Magíster en Ciencias de la Información y las Comunicaciones - Énfasis en Telecomunicaciones.    </strong></b>Universidad Distrital \"Francisco José de Caldas\". <br>\n                    <b><strong>Especialista en Telemática.</strong> </b> Universidad Autónoma de Colombia. <br>\n                    <b><strong>  Ingeniero de Sistemas.</strong></b>Escuela de Administración de Negocios. <br>\n                    <b><strong>  Correo electrónico:</strong></b> jorge.espindola@uptc.edu.co</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <table class=\"table table-bordered\" cellspacing=\"0\" cellpadding=\"0\">\n        <tbody>\n            <tr>\n                <td style=\"height: 10%;\"> <b> <strong>JAVIER ANTONIO BALLESTEROS RICAURTE     </strong>  </b>\n                    <br>Docente Asociado (Grupo de Investigación GIMI) CvLAC </td>\n                <td style=\"width: 30%\" rowspan=\"2\"> <img src=\"./../../assets/ballesteros.jpg\" class=\"img-fluid\" alt=\"Responsive image\"></td>\n            </tr>\n            <tr>\n                <td style=\"text-align: justify\">\n                    <b>  <strong> Magíster en Ciencias Computacionales. </strong> </b> Universidad Autónoma de Bucaramanga.<br>\n                    <b>  <strong>Instituto Tecnológico de Monterey.   </strong></b> <br>\n                    <b><strong>Ingeniero de Sistemas. </strong> </b> Fundación Universitaria de Boyacá. <br>\n                    <b><strong>  Correo electrónico:</strong></b> javier.ballesteros@uptc.edu.co\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <table class=\"table table-bordered\" cellspacing=\"0\" cellpadding=\"0\">\n        <tbody>\n            <tr>\n                <td style=\"height: 10%;\"> <b> <strong>JAIRO ALONSO MESA LARA   </strong>  </b>\n                    <br>Docente Asociado (Grupo de Investigación INFELCOM) CvLAC </td>\n                <td style=\"width: 30%\" rowspan=\"2\"> <img src=\"./../../assets/jairomesa.jpg\" class=\"img-fluid\" alt=\"Responsive image\"></td>\n            </tr>\n            <tr>\n                <td style=\"text-align: justify\">\n                    <b>  <strong> Magíster en Ciencias de la Información y las Comunicaciones - Énfasis en Telecomunicaciones. </strong> </b> Universidad Distrital \"Francisco José de Caldas\". <br>\n                    <b>  <strong>Especialista en Diseño y Construcción de Soluciones Telemáticas.  </strong></b>Universidad Autónoma de Colombia. <br>\n                    <b><strong>Ingeniero Electrónico.</strong> </b> Universidad Pedagógica y Tecnológica de Colombia. <br>\n                    <b><strong>  Correo electrónico:</strong></b> jairo.mesa@uptc.edu.co</td>\n            </tr>\n        </tbody>\n    </table>\n\n\n    <table class=\"table table-bordered\" cellspacing=\"0\" cellpadding=\"0\">\n        <tbody>\n            <tr>\n                <td style=\"height: 10%;\"> <b> <strong>GUSTAVO CÁCERES CASTELLANOS    </strong>  </b>\n                    <br>Docente Asociado (Grupo de Investigación GIMI) CvLAC </td>\n                <td style=\"width: 30%\" rowspan=\"2\"> <img src=\"./../../assets/caceres.jpg\" class=\"img-fluid\" alt=\"Responsive image\"></td>\n            </tr>\n            <tr>\n                <td style=\"text-align: justify\">\n                    <b>  <strong> Magíster en Ciencias de la Información y las Comunicaciones - Énfasis en Telecomunicaciones. </strong> </b> Universidad Distrital \"Francisco José de Caldas\". <br>\n                    <b>  <strong>Especialista en Diseño de Sistemas de Auditoría.   </strong></b>Universidad Nacional de Colombia. <br>\n                    <b><strong>Ingeniero de Sistemas.</strong> </b> Universidad Piloto de Colombia. <br>\n                    <b><strong>  Correo electrónico:</strong></b> gustavo.caceres@uptc.edu.co</td>\n            </tr>\n        </tbody>\n    </table>\n    <table class=\"table table-bordered\" cellspacing=\"0\" cellpadding=\"0\">\n        <tbody>\n            <tr>\n                <td style=\"height: 10%;\"> <b> <strong>GERMAN AMÉZQUITA BECERRA</strong>  </b>\n                    <br>Docente Asistente (Grupo de Investigación INFELCOM) CvLAC </td>\n                <td style=\"width: 30%\" rowspan=\"2\"> <img src=\"./../../assets/amezquita.jpg\" class=\"img-fluid\" alt=\"Responsive image\"></td>\n            </tr>\n            <tr>\n                <td style=\"text-align: justify\">\n                    <b>  <strong> Magíster en Ciencias de la Información y las Comunicaciones - Énfasis en Telecomunicaciones. </strong> </b> Universidad Distrital \"Francisco José de Caldas\". <br>\n                    <b>  <strong>Especialista en Diseño de Sistemas de Auditoría.   </strong></b>Universidad Antonio Nariño. <br>\n                    <b><strong>Ingeniero de Sistemas.</strong> </b>Universidad Antonio Nariño. <br>\n                    <b><strong>  Correo electrónico:</strong></b>german.amezquita@uptc.edu.co</td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/teacher/teacher.component.scss":
/*!************************************************!*\
  !*** ./src/app/teacher/teacher.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvdGVhY2hlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/teacher/teacher.component.ts":
/*!**********************************************!*\
  !*** ./src/app/teacher/teacher.component.ts ***!
  \**********************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeacherComponent = /** @class */ (function () {
    function TeacherComponent() {
    }
    TeacherComponent.prototype.ngOnInit = function () {
    };
    TeacherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher',
            template: __webpack_require__(/*! ./teacher.component.html */ "./src/app/teacher/teacher.component.html"),
            styles: [__webpack_require__(/*! ./teacher.component.scss */ "./src/app/teacher/teacher.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ }),

/***/ "./src/app/telematics/telematics.component.html":
/*!******************************************************!*\
  !*** ./src/app/telematics/telematics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-8\">\n    <br><br>\n    <h4><strong><b>Grupo de Investigación en Telemática y TIC aplicada a la Educación</b></strong></h4>\n    <br>\n    <div class=\"align-items-center\">\n        <img src=\"./../../assets/Telematics5.png\" class=\"img-fluid\" alt=\"Responsive image\">\n    </div>\n    <br>\n\n    <h4 style=\"text-align: left\"> <b> <strong> Descripción: </strong> </b></h4>\n    <h5 style=\"text-align: justify\">TelemaTICs Grupo de Investigación en Telemática y TIC aplicada a la educación, desarrolla procesos de investigación e innovación centrados en el uso y aprovechamiento de la tecnología telemática para beneficiar a la sociedad, academia y entorno, fundamentalmente\n        desde el aspecto educacional.\n    </h5><br>\n    <h5 style=\"text-align: justify\">TelemaTICs toma su génesis del concepto de la Telemática que se refiere a la fusión de las telecomunicaciones y la Informática, para emplear técnicas con las que se provea el aprovechamiento tecnológico derivado de la computación y las comunicaciones\n        para diferentes usuarios. De esta manera la denominación del grupo resalta la generación de procesos investigativos en una capa superior a las comunicaciones (redes de datos) y a la informática (y sus áreas conexas al proceso y gestión de la información),\n        de forma que con un alto nivel se emplea todo el background de estas áreas para promover el uso asertivo e integrado de distintas técnicas (y tecnologías) con la única finalidad de contribuir al desarrollo de conocimiento para la comunidad investigativa\n        y solventar necesidades puntuales en la comunidad en general, por medio de la transferencia tecnológica.\n    </h5><br>\n    <h5 style=\"text-align: justify\">Ahora bien, en lengua sajona el término \"teleinformatics\" se asocia al grupo de personas que trabajan en la disciplina Telemática. Los investigadores consideran a la Telemática, la Educación y particularmente, a cada una de las líneas de investigación\n        definidas, con la suficiente madurez y oportunidad para ejercer procesos investigativos, a partir de los siguientes sustentos:\n    </h5><br>\n    <ol style=\"text-align: justify\">\n        <li>\n            <h5>Tecnología como oportunidad y motor de las dinámicas de cambio educativo y organizacional.</h5>\n        </li>\n        <li>\n            <h5> Sistemas personalizados. </h5>\n        </li>\n        <li>\n            <h5>Internet of Everything. </h5>\n        </li>\n    </ol>\n\n    <br><br>\n    <h4 style=\"text-align: left\"> <b> <strong> Generalidades: </strong> </b></h4>\n    <div class=\"flex-left\">\n        <table class=\" flex-left table table-borderless  col-lg-8 col-md-12\">\n            <tbody>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Sigla:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>TELEMATICS </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Area del conocimiento:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>Ingeniería y Tecnología -- Otras Ingenierías y Tecnologías </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Director:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>\n\n                            Miguel Ángel Mendoza Moreno </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Fecha de creación:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>Enero 2014 </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Categoría Colciencias:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>\n                            Reconocido</h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Código GrupLAC:&nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5>COL0166146 </h5>\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"text-align: left\">\n                        <h5><strong><b>Correo contacto:  &nbsp; </b></strong></h5>\n                    </td>\n                    <td style=\"text-align: left\">\n                        <h5><a href=\"mailto:gis@uptc.edu.co\">telematics@uptc.edu.co</a> </h5>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"row\">\n        <div class=\" col-md-6 col-xs-12\">\n            <h4 style=\"text-align: left\"> <b> <strong> Docentes del programa: </strong> </b></h4>\n            <ul style=\"text-align: justify\">\n                <li>\n                    <h5>Miguel Ángel Mendoza Moreno </h5>\n                </li>\n                <li>\n                    <h5> Andrés Alejandro Mora Franco</h5>\n                </li>\n            </ul>\n        </div>\n        <div class=\" col-md-6 col-xs-12\">\n            <h4 style=\"text-align: left;\"> <b> <strong> Líneas de Investigación: </strong> </b></h4>\n            <ul style=\"text-align: justify\">\n                <li>\n                    <h5>IoE (Internet of Everything) </h5>\n                </li>\n                <li>\n                    <h5> Technology- enhanced Learning (TeL) </h5>\n                </li>\n                <li>\n                    <h5> Sistemas Personalizados/Adaptativos</h5>\n                </li>\n            </ul>\n            <br><br>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/telematics/telematics.component.scss":
/*!******************************************************!*\
  !*** ./src/app/telematics/telematics.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbGVtYXRpY3MvdGVsZW1hdGljcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/telematics/telematics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/telematics/telematics.component.ts ***!
  \****************************************************/
/*! exports provided: TelematicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelematicsComponent", function() { return TelematicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TelematicsComponent = /** @class */ (function () {
    function TelematicsComponent() {
    }
    TelematicsComponent.prototype.ngOnInit = function () {
    };
    TelematicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-telematics',
            template: __webpack_require__(/*! ./telematics.component.html */ "./src/app/telematics/telematics.component.html"),
            styles: [__webpack_require__(/*! ./telematics.component.scss */ "./src/app/telematics/telematics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TelematicsComponent);
    return TelematicsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\User C\software\pageSchoolSystem\pageSchool\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map