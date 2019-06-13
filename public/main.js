(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie-edge\">\n    <title>title</title>\n    <link rel=\"shortcut icon\" href=\"favicon.png\">\n</head>\n\t<body class=\"background-image background-gradient roboto\">\n        <app-nav-bar></app-nav-bar>\n        <router-outlet></router-outlet>\n\t</body>\n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/signin/signin.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/signin/signin.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <form (submit)=\"onSignIn(signInForm)\" #signInForm=\"ngForm\" class=\"signin-form\">\n        <h1 class=\"card-title\">Login</h1>\n      <mat-form-field>\n        <input matInput type=\"email\" placeholder=\"E-Mail\" #emailInput=\"ngModel\" required email name=\"email\" ngModel>\n        <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"password\" placeholder=\"Password\" name=\"password\" ngModel #passwordInput=\"ngModel\" required>\n        <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password.</mat-error>\n      </mat-form-field>\n      <div class=\"create-account\">\n          <button mat-raised-button color=\"accent\" type=\"submit\">Login</button>\n          <a routerLink=\"/signup\">Create Account</a>\n        </div>\n    </form>\n  </mat-card>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <form (submit)=\"onSignUp(signUpForm)\" #signUpForm=\"ngForm\" class=\"signup-form\">\n        <h1 class=\"card-title\">Create<br>Account</h1>\n      <mat-form-field>\n        <input matInput type=\"email\" placeholder=\"E-Mail\" #emailInput=\"ngModel\" required email name=\"email\" ngModel>\n        <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"password\" placeholder=\"Password\" name=\"password\" ngModel #passwordInput=\"ngModel\" required>\n        <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password.</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n          <input matInput type=\"password\" placeholder=\"Verify Password\" name=\"verify-password\" ngModel #passwordInput=\"ngModel\" required>\n          <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password.</mat-error>\n        </mat-form-field>\n      <div class=\"cancel\">\n          <button mat-raised-button color=\"accent\" type=\"submit\">Sign Up</button>\n          <a routerLink=\"/workout-history\">Cancel</a>\n        </div>\n    </form>\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-routine/create-routine.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-routine/create-routine.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <form [formGroup]=\"createRoutineForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h3 *ngIf=\"addName\">New Routine</h3>\r\n    <h3 *ngIf=\"addExercise\">Add Exercises</h3>\r\n\r\n    <div class=\"add-exercise-form\" *ngIf=\"addName\">\r\n      <label for=\"routineTitle\">NAME</label>\r\n      <input formControlName=\"routineTitle\" type=\"text\" required>\r\n      <div class=\"add-exercise-form__button-group\">\r\n        <button type=\"button\" (click)=\"onAddExercise()\" mat-raised-button>NEXT</button>\r\n        <button type=\"button\" routerLink=\"/workout-history\" color=\"warn\" mat-raised-button>CANCEL</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"add-exercises-form\" *ngIf=\"addExercise\">\r\n      <div class=\"add-exercise-form__add-exercise\">\r\n        <div class=\"add-exercise\">\r\n          <button type=\"button\" (click)=\"onAddExcercise()\" mat-flat-button><i class=\"fas fa-plus\"></i></button>\r\n          <h6>ADD EXERCISE</h6>\r\n        </div>\r\n        <div class=\"delete-exercise\">\r\n          <button type=\"button\" mat-flat-button><i class=\"fas fa-minus\"></i></button>\r\n          <h6>DELETE EXERCISE</h6>\r\n        </div>\r\n      </div>\r\n      <div class=\"routineExercises\" formArrayName=\"routineExercises\">\r\n        <div class=\"routineExercise\"\r\n             *ngFor=\"let exerciseControl of createRoutineForm.get('routineExercises').controls; let i = index\"\r\n             [formGroupName]=\"i\">\r\n          <label for=\"exerciseName\">EXERCISE NAME</label>\r\n          <input formControlName=\"exerciseName\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"add-exercise-form__button-group\">\r\n        <button type=\"button\" mat-raised-button (click)=\"onAddIcon()\">NEXT</button>\r\n        <button type=\"button\" color=\"warn\" (click)=\"onAddName()\" mat-raised-button>BACK</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"addIcon\" *ngIf=\"addIcon\">\r\n      <div>\r\n        <h3>ASSIGN AN ICON TO THIS ROUTINE</h3>\r\n      </div>\r\n      <div class=\"icons-container\">\r\n        <div class=\"icon-container-image\" *ngFor=\"let url of buttonUrls; let i = index\">\r\n          <img type=\"button\" (click)=\"selectIcon(i)\" src=\"{{url}}\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button type=\"submit\" mat-raised-button>SAVE</button>\r\n        <button type=\"button\" color=\"warn\" (click)=\"onAddExercise()\" mat-raised-button>BACK</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/log-work-out/log-work-out.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/log-work-out/log-work-out.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" *ngIf=\"currentRoutine; else notShow\">\n  <form class=\"log-routine-form\" [formGroup]=\"logRoutineForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"logRoutineForm\">\n\n    <h3 class=\"title\">Choose<br>Routine</h3>\n    <div class=\"select-routine-container\">\n      <mat-form-field>\n        <mat-label>Select routine</mat-label>\n        <mat-select [value]=\"currentRoutine.name\">\n          <mat-option *ngFor=\"let routine of routines; let i = index\" (click)=\"changeCurrentRoutine(i)\"\n            [value]=\"routine.name\">{{ routine.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div formArrayName=\"routineLog\">\n      <div *ngFor=\"let exercise of logRoutineForm.get('routineLog').controls; let i = index\" [formGroupName]=\"i\"\n        class=\"set-list-item\">\n        <h3 class=\"exercise-name\">{{exercise.get('exerciseName').value}}</h3>\n        <div formArrayName=\"sets\">\n          <div *ngFor=\"let set of exercise.get('sets').controls; let j = index\" [formGroupName]=\"j\"\n            class=\"set-list-item\">\n            <h6 class=\"setNumber\">----- SET {{j + 1}} -----</h6>\n            <label for=\"reps\">REPS</label>\n            <input formControlName=\"reps\" type=\"text\">\n            <label for=\"weight\">WEIGHT</label>\n            <input formControlName=\"weight\" type=\"text\">\n          </div>\n          <div class=\"add-exercise-form__add-set\">\n            <div class=\"add-exercise\">\n              <button type=\"button\" (click)=\"onAddSet(exercise)\" mat-flat-button><i class=\"fas fa-plus\"></i></button>\n              <h6>ADD SET</h6>\n            </div>\n            <div class=\"delete-exercise\">\n              <button type=\"button\" (click)=\"onDeleteSet(exercise)\" mat-flat-button><i\n                  class=\"fas fa-minus\"></i></button>\n              <h6>DELETE SET</h6>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"save-routine-button-group\">\n      <button class=\"save-routine-button-group__save-button\" mat-flat-button type=\"submit\">SAVE</button>\n      <button mat-flat-button color=\"warn\" routerLink=\"/workout-history\" type=\"button\">CANCEL</button>\n    </div>\n\n  </form>\n</div>\n<ng-template #notShow>\n  <div class=\"no-routine\">\n    <p>\n      You must add a routine before logging a workout!\n    </p>\n    <h5 class=\"add-routine-link\"><a routerLink=\"/create-routine\">Add Routine</a></h5>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container\">\r\n\r\n  <div [ngClass]=\"showClasses\" class=\"menu-btn\" (click)=\"toggleMenu()\">\r\n    <div class=\"btn-line\"></div>\r\n    <div class=\"btn-line\"></div>\r\n    <div class=\"btn-line\"></div>\r\n  </div>\r\n\r\n  <nav [ngClass]=\"showClasses\" class=\"menu-dropdown-container\" (click)=\"toggleMenu()\">\r\n\r\n    <div [ngClass]=\"showClasses\" class=\"menu-branding\" (click)=\"toggleMenu()\">\r\n      <div [ngClass]=\"showClasses\" class=\"user-name\" (click)=\"toggleMenu()\">USER NAME</div>\r\n      <div [ngClass]=\"showClasses\" class=\"portrait\" (click)=\"toggleMenu()\"></div>\r\n      <div [ngClass]=\"showClasses\" class=\"log-out\" (click)=\"onLogout()\">Logout</div>\r\n    </div>\r\n\r\n    <ul class=\"nav-menu\" (click)=\"toggleMenu()\">\r\n      <li [ngClass]=\"showClasses\" class=\"nav-menu-item\"><a routerLink=\"/workout-history\" (click)=\"toggleMenu()\">Home</a></li>\r\n      <li [ngClass]=\"showClasses\" class=\"nav-menu-item\"><a routerLink=\"/routines\" (click)=\"toggleMenu()\">Routines</a></li>\r\n      <li [ngClass]=\"showClasses\" class=\"nav-menu-item\"><a routerLink=\"/create-routine\" (click)=\"toggleMenu()\">Add Routine</a></li>\r\n      <li [ngClass]=\"showClasses\" class=\"nav-menu-item\"><a routerLink=\"/log-workout\" (click)=\"onLogout()\">Log Workout</a></li>\r\n    </ul>\r\n\r\n  </nav>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routines/routines.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routines/routines.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h3 class=\"routines-header\">Routines</h3>\n  <div class=\"add-routine-container\">\n    <button mat-flat-button routerLink=\"/create-routine\">ADD ROUTINE</button>\n  </div>\n  <mat-list class=\"routine-list\" role=\"list\" *ngFor=\"let routine of routines\" (routineAdded)=\"onRoutineAdded($event)\">\n    <div class=\"routine-list-item\">\n      <mat-list-item class=\"routine-list-item__routine-name\" role=\"listitem\" (click)=\"open\">{{ routine.name }}\n      </mat-list-item>\n      <div class=\"routine-list-item-button-group\">\n        <button class=\"routine-list-item-button-group__edit-button\" mat-flat-button (click)=\"onDelete(routine._id)\">\n          EDIT\n        </button>\n        <button mat-flat-button color=\"warn\" (click)=\"onDelete(routine._id)\">DELETE</button>\n      </div>\n    </div>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/workout-history-list/workout-history-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/workout-history-list/workout-history-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n\n  <div class=\"backdrop\" [ngClass]=\"showClasses\" (click)=\"closeModal()\"></div>\n  <div class=\"modal\" [ngClass]=\"showClasses\" (click)=\"closeModal()\">\n    <div class=\"modal-body\" [ngClass]=\"showClasses\">\n      <button type=\"button\" class=\"delete-workout btn btn-danger\" (click)=\"onDeleteWorkout()\">DELETE WORKOUT</button>\n      <img class=\"card-img-top\" src={{currentWorkout.icon}} alt=\"Card image cap\">\n      <h4 class=\"workout-info\">{{currentWorkout.name}}<br>{{currentWorkout.date}}</h4>\n      <div *ngIf=\"currentWorkout.exercises\" class=\"workout-exercises\">\n          <div class =\"exercise\" *ngFor=\"let exercise of currentWorkout.exercises\">\n            <div class=\"exercise-name\">{{exercise.name}}</div>\n            <ul *ngFor=\"let set of exercise.weight; let i = index\">\n              <li class=\"exercise-sets\">Set {{i + 1}}</li>\n              <li class=\"exercise-reps\">Reps {{set.reps}}</li>\n              <li class=\"exercise-weight\">Weight {{set.weight}}</li>\n            </ul>\n          </div>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"title-container\">\n    <h4 class=\"title\">Workout<br>History</h4>\n  </div>\n\n  <div class=\"workouts-container\" *ngIf=\"lastWorkout\">\n\n    <div class=\"last-workout-container\">\n      <div class=\"last-workout-info-left\">\n        <h6>Last Workout</h6>\n        <h4>{{lastWorkout.date}}</h4>\n        <h6>{{lastWorkout.name}}</h6>\n      </div>\n      <div class=\"last-workout-info-right\">\n        <div \n          class=\"last-workout-image\"\n          alt=\"IMG\" (click)=\"openModal(i)\"\n          [style.background-image]=\"'url(' + lastWorkout.icon + ')'\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"recent-workouts-header\">\n      <h6>Recent Workouts</h6>\n    </div>\n\n    <div class=\"recent-workouts\">\n      <div class=\"recent-workouts-images\">\n        <div class=\"recent-workouts-image_container\" *ngFor=\"let routine of savedRoutines; let i = index\">\n          <div>{{routine.name}}</div>\n          <div \n            *ngIf=\"i<4\" \n            class=\"recent-workouts-image\" \n            alt=\"IMG\" (click)=\"openModal(i)\"\n            [style.background-image]=\"'url(' + routine.icon + ')'\">\n          </div>\n          <div>{{routine.date}}</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"button-container\">\n      <div class=\"add-workout\">\n        <button type=\"button\" mat-flat-button routerLink=\"/log-workout\" class=\"w3-circle\"><i\n            class=\"fas fa-plus\"></i></button>\n        <h6>Log Workout</h6>\n      </div>\n      <div class=\"add-routine\">\n        <button mat-flat-button routerLink=\"/create-routine\"><i class=\"fas fa-plus\"></i></button>\n        <h6>Add Routine</h6>\n      </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-nav-bar {\r\n  position: relative;\r\n  z-index: 5;\r\n}\r\n\r\nrouter-outlet {\r\n  position: relative;\r\n  z-index: 4;\r\n}\r\n\r\n.background-image {\r\n  background-image:url('background-1.jpg');\r\n  background-position: 0 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -5;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  overflow: scroll;\r\n}\r\n\r\n.roboto {\r\n  font-family: 'Roboto', sans-serif;\r\n  color: black;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdDQUFrRDtFQUNsRCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7O0FBRWQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1uYXYtYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxucm91dGVyLW91dGxldCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDQ7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kLTEuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogLTU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLnJvYm90byB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFjaztcclxuXHJcbn1cclxuIl19 */"

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
/* harmony import */ var _shared_services_routine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/routine.service */ "./src/app/shared/services/routine.service.ts");
/* harmony import */ var _shared_services_log_routine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/log-routine.service */ "./src/app/shared/services/log-routine.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(routineService, logRoutineService, authService) {
        this.routineService = routineService;
        this.logRoutineService = logRoutineService;
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            providers: [_shared_services_routine_service__WEBPACK_IMPORTED_MODULE_1__["RoutineService"], _shared_services_log_routine_service__WEBPACK_IMPORTED_MODULE_2__["LogRoutineService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_routine_service__WEBPACK_IMPORTED_MODULE_1__["RoutineService"], _shared_services_log_routine_service__WEBPACK_IMPORTED_MODULE_2__["LogRoutineService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _create_routine_create_routine_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-routine/create-routine.component */ "./src/app/create-routine/create-routine.component.ts");
/* harmony import */ var _log_work_out_log_work_out_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-work-out/log-work-out.component */ "./src/app/log-work-out/log-work-out.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _workout_history_list_workout_history_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workout-history-list/workout-history-list.component */ "./src/app/workout-history-list/workout-history-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routines_routines_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routines/routines.component */ "./src/app/routines/routines.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/auth.gaurd */ "./src/app/auth/auth.gaurd.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: _workout_history_list_workout_history_list_component__WEBPACK_IMPORTED_MODULE_7__["WorkoutHistoryListComponent"] },
    { path: 'workout-history', component: _workout_history_list_workout_history_list_component__WEBPACK_IMPORTED_MODULE_7__["WorkoutHistoryListComponent"] },
    { path: 'routines', component: _routines_routines_component__WEBPACK_IMPORTED_MODULE_9__["RoutinesComponent"] },
    { path: 'create-routine', component: _create_routine_create_routine_component__WEBPACK_IMPORTED_MODULE_4__["CreateRoutineComponent"], canActivate: [_auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'log-workout', component: _log_work_out_log_work_out_component__WEBPACK_IMPORTED_MODULE_5__["LogWorkOutComponent"], canActivate: [_auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"] },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _create_routine_create_routine_component__WEBPACK_IMPORTED_MODULE_4__["CreateRoutineComponent"],
                _log_work_out_log_work_out_component__WEBPACK_IMPORTED_MODULE_5__["LogWorkOutComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _workout_history_list_workout_history_list_component__WEBPACK_IMPORTED_MODULE_7__["WorkoutHistoryListComponent"],
                _routines_routines_component__WEBPACK_IMPORTED_MODULE_9__["RoutinesComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__["AuthInterceptor"], multi: true }, _auth_auth_gaurd__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    //We use interceptors to manipulate the outgoing http request --> here we are simply adding the token to the HTTP requests we put this 'middlewear' on which is why we inject auth service into here
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        //Here we clone the auth request because we do not want to edit it directly - we are editing the headers here
        //Here we are cloning the request and then also manipulating the request headers in here - the set function will just overide the Authorization headerer because we are extracting our token on the backend for authroization which is in the check-auth.js file
        //In summary this will create a request which will add Authorization headers along with the token - intercepting request and adding token
        //Lastly we must go to app,module.ts and add the providers property {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true} --> this is the interceptor we created right here! Multi true says don't overide any current interceptors just add it to the current one
        //Remember to add Authorization to our headers "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.gaurd.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.gaurd.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/signin']);
        }
        return isAuth;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isAuthenticated = false;
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.createUser = function (email, password) {
        var authData = { email: email, password: password };
        this.http.post('api/signup', authData)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http.post('api/signin', authData)
            .subscribe(function (response) {
            var token = response.token;
            _this.token = token;
            console.log(response.message);
            if (token) {
                var expiresInDuration = response.expiresIn;
                _this.setAuthTimer(expiresInDuration);
                _this.tokenTimer = setTimeout(function () {
                    _this.logout();
                }, expiresInDuration * 1000);
                _this.isAuthenticated = true;
                _this.authStatusListener.next(true);
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                _this.saveAuthData(token, expirationDate);
                console.log(token);
                _this.router.navigate(['/']);
            }
        });
    };
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, null];
                    case 1:
                        _a.token = _c.sent();
                        _b = this;
                        return [4 /*yield*/, false];
                    case 2:
                        _b.isAuthenticated = _c.sent();
                        this.authStatusListener.next(false);
                        clearTimeout(this.tokenTimer);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log('Setting timer: :' + duration);
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthService.prototype.saveAuthData = function (token, expirationDate) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
    };
    AuthService.prototype.clearAuthDate = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem('token');
        var expirationDate = localStorage.getItem('expiration');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate)
        };
    };
    AuthService.prototype.ngOnDestroy = function () {
        this.authStatusListener.unsubscribe();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    width: 100vw;\r\n    margin: 4rem 0 0 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.signin-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.create-account {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    margin: 2rem;\r\n}\r\n\r\ndiv > button, div > a {\r\n    margin: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogNHJlbSAwIDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2lnbmluLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jcmVhdGUtYWNjb3VudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMnJlbTtcclxufVxyXG5cclxuZGl2ID4gYnV0dG9uLCBkaXYgPiBhIHtcclxuICAgIG1hcmdpbjogMnJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignIn = function (form) {
        if (form.invalid) {
            return;
        }
        this.authService.login(form.value.email, form.value.password);
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    width: 100vw;\r\n    margin: 4rem 0 0 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n.signup-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.cancel {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    margin: 2rem;\r\n}\r\n\r\ndiv > button, div > a {\r\n    margin: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogNHJlbSAwIDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWdudXAtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhbmNlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMnJlbTtcclxufVxyXG5cclxuZGl2ID4gYnV0dG9uLCBkaXYgPiBhIHtcclxuICAgIG1hcmdpbjogMnJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignUp = function (form) {
        if (form.invalid) {
            return;
        }
        this.authService.createUser(form.value.email, form.value.password);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/create-routine/create-routine.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create-routine/create-routine.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  margin: 7rem 0 0 0;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n\r\n.main input[type=text] {\r\n  border: none;\r\n  border-bottom: 2px solid black;\r\n  background: rgb(255, 255, 255, .4);\r\n}\r\n\r\nh3 {\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n}\r\n\r\n.add-exercise-form, .add-exercises-form, .addIcon {\r\n  width: 80vw;\r\n  margin: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.add-exercise-form label, .add-exercises-form label {\r\n  margin: 0;\r\n}\r\n\r\n.add-exercise-form__button-group {\r\n  margin: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.add-exercise-form__button-group button, a {\r\n  margin: .2rem .4rem;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.add-exercise-form__add-exercise {\r\n  padding: 0 0 1rem 0;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  background: none;\r\n}\r\n\r\n.add-exercise, .delete-exercise {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.add-exercise-form__add-exercise button {\r\n  background: black;\r\n  color: white;\r\n  border-radius: 50px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.add-exercise h6, .delete-exercise h6 {\r\n  color: black;\r\n  font-size: .7rem;\r\n  margin-top: .3rem;\r\n}\r\n\r\n.routineExercise {\r\n  margin: .25rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.recent-workouts-container h6 {\r\n  margin: 1rem 0 .5rem 1rem;\r\n  font-size: .8rem;\r\n}\r\n\r\n.addIcon {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.addIcon h1 {\r\n  text-align: center;\r\n}\r\n\r\n.icons-container {\r\n  margin: 2rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.icon-container-image {\r\n  width: 100vh;\r\n}\r\n\r\n.icon-container-image {\r\n  width: 25%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.icon-container-image img {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  border-radius: 7px 7px 7px 7px;\r\n  margin: .3rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXJvdXRpbmUvY3JlYXRlLXJvdXRpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBR25CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUduQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtcm91dGluZS9jcmVhdGUtcm91dGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIG1hcmdpbjogN3JlbSAwIDAgMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubWFpbiBpbnB1dFt0eXBlPXRleHRdIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAuNCk7XHJcbn1cclxuXHJcbmgzIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZC1leGVyY2lzZS1mb3JtLCAuYWRkLWV4ZXJjaXNlcy1mb3JtLCAuYWRkSWNvbiB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZC1leGVyY2lzZS1mb3JtIGxhYmVsLCAuYWRkLWV4ZXJjaXNlcy1mb3JtIGxhYmVsIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5hZGQtZXhlcmNpc2UtZm9ybV9fYnV0dG9uLWdyb3VwIHtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGQtZXhlcmNpc2UtZm9ybV9fYnV0dG9uLWdyb3VwIGJ1dHRvbiwgYSB7XHJcbiAgbWFyZ2luOiAuMnJlbSAuNHJlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbn1cclxuXHJcbi5hZGQtZXhlcmNpc2UtZm9ybV9fYWRkLWV4ZXJjaXNlIHtcclxuICBwYWRkaW5nOiAwIDAgMXJlbSAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmFkZC1leGVyY2lzZSwgLmRlbGV0ZS1leGVyY2lzZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkLWV4ZXJjaXNlLWZvcm1fX2FkZC1leGVyY2lzZSBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxuICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxufVxyXG5cclxuLmFkZC1leGVyY2lzZSBoNiwgLmRlbGV0ZS1leGVyY2lzZSBoNiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgbWFyZ2luLXRvcDogLjNyZW07XHJcbn1cclxuXHJcbi5yb3V0aW5lRXhlcmNpc2Uge1xyXG4gIG1hcmdpbjogLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmVjZW50LXdvcmtvdXRzLWNvbnRhaW5lciBoNiB7XHJcbiAgbWFyZ2luOiAxcmVtIDAgLjVyZW0gMXJlbTtcclxuICBmb250LXNpemU6IC44cmVtO1xyXG59XHJcblxyXG4uYWRkSWNvbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkSWNvbiBoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbnMtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbi1jb250YWluZXItaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDB2aDtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyLWltYWdlIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbi1jb250YWluZXItaW1hZ2UgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDdweCA3cHg7XHJcbiAgbWFyZ2luOiAuM3JlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/create-routine/create-routine.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-routine/create-routine.component.ts ***!
  \************************************************************/
/*! exports provided: CreateRoutineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoutineComponent", function() { return CreateRoutineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_routine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/routine.service */ "./src/app/shared/services/routine.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CreateRoutineComponent = /** @class */ (function () {
    function CreateRoutineComponent(routineService, router) {
        this.routineService = routineService;
        this.router = router;
        this.addName = true;
        this.addExercise = false;
        this.addIcon = false;
        this.buttonUrls = [
            '../../assets/abs.png',
            '../../assets/arms.png',
            '../../assets/back.png',
            '../../assets/cardio.png',
            '../../assets/chest.png',
            '../../assets/legs.png',
            '../../assets/shoulders.png'
        ];
    }
    CreateRoutineComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.buttonUrls.forEach(function (image) {
            console.log(image);
        });
    };
    CreateRoutineComponent.prototype.initForm = function () {
        var title = '';
        var exercises = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([
            new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'exerciseName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            })
        ]);
        this.createRoutineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'routineTitle': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](title),
            'routineExercises': exercises
        });
    };
    CreateRoutineComponent.prototype.onAddName = function () {
        this.addName = true;
        this.addExercise = false;
        this.addIcon = false;
    };
    CreateRoutineComponent.prototype.onAddExercise = function () {
        this.addName = false;
        this.addExercise = true;
        this.addIcon = false;
    };
    CreateRoutineComponent.prototype.onAddIcon = function () {
        this.addName = false;
        this.addExercise = false;
        this.addIcon = true;
    };
    CreateRoutineComponent.prototype.selectIcon = function (i) {
        console.log("select icon function works! array number " + i);
        this.selectedIcon = this.buttonUrls[i];
    };
    CreateRoutineComponent.prototype.onAddExcercise = function () {
        this.createRoutineForm.get('routineExercises').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'exerciseName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        }));
    };
    CreateRoutineComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routineService.addRoutine(this.createRoutineForm.value['routineTitle'], this.createRoutineForm.value['routineExercises'], this.selectedIcon)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/routines']);
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateRoutineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-routine',
            template: __webpack_require__(/*! raw-loader!./create-routine.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-routine/create-routine.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./create-routine.component.css */ "./src/app/create-routine/create-routine.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_routine_service__WEBPACK_IMPORTED_MODULE_1__["RoutineService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateRoutineComponent);
    return CreateRoutineComponent;
}());



/***/ }),

/***/ "./src/app/log-work-out/log-work-out.component.css":
/*!*********************************************************!*\
  !*** ./src/app/log-work-out/log-work-out.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  margin: 6rem 0 0 0;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n}\r\n\r\n.log-routine-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  background: white;\r\n}\r\n\r\n.log-routine-form mat-form-field, .set {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nh3.title {\r\n  margin: .5rem;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.select-routine-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 80vw;\r\n  margin: 1.5rem 0;\r\n}\r\n\r\n.routine-form-fields {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.routine-exercise {\r\n  margin: .5rem;\r\n}\r\n\r\n.save-routine-button-group {\r\n  margin: 3rem 0;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.save-routine-button-group button {\r\n  margin: 0 .2rem;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.save-routine-button-group__save-button {\r\n  color: white;\r\n  background: black;\r\n}\r\n\r\n.set-list-item {\r\n  width: 80vw;\r\n  margin: .5rem auto;\r\n  background: white;\r\n  padding: .5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nh3.exercise-name {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.setNumber {\r\n  color: red;\r\n}\r\n\r\n.add-exercise-form__add-set {\r\n  margin: .5rem;\r\n  padding: 0 0 1rem 0;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  background: none;\r\n}\r\n\r\n.add-exercise, .delete-exercise {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.add-exercise-form__add-set button {\r\n  background: black;\r\n  color: white;\r\n  border-radius: 50px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.add-exercise h6, .delete-exercise h6 {\r\n  color: black;\r\n  font-size: .7rem;\r\n  margin-top: .3rem;\r\n}\r\n\r\n.no-routine {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.add-routine-link {\r\n  background: black;\r\n  text-decoration: none;\r\n  padding: .5rem;\r\n}\r\n\r\n.add-routine-link a {\r\n  color: white;\r\n}\r\n\r\n.add-routine-link:hover {\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLXdvcmstb3V0L2xvZy13b3JrLW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUdmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUduQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbG9nLXdvcmstb3V0L2xvZy13b3JrLW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIG1hcmdpbjogNnJlbSAwIDAgMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmxvZy1yb3V0aW5lLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZy1yb3V0aW5lLWZvcm0gbWF0LWZvcm0tZmllbGQsIC5zZXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMy50aXRsZSB7XHJcbiAgbWFyZ2luOiAuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnNlbGVjdC1yb3V0aW5lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luOiAxLjVyZW0gMDtcclxufVxyXG5cclxuLnJvdXRpbmUtZm9ybS1maWVsZHMge1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucm91dGluZS1leGVyY2lzZSB7XHJcbiAgbWFyZ2luOiAuNXJlbTtcclxufVxyXG5cclxuLnNhdmUtcm91dGluZS1idXR0b24tZ3JvdXAge1xyXG4gIG1hcmdpbjogM3JlbSAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2F2ZS1yb3V0aW5lLWJ1dHRvbi1ncm91cCBidXR0b24ge1xyXG4gIG1hcmdpbjogMCAuMnJlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbn1cclxuXHJcbi5zYXZlLXJvdXRpbmUtYnV0dG9uLWdyb3VwX19zYXZlLWJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4uc2V0LWxpc3QtaXRlbSB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luOiAuNXJlbSBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMy5leGVyY2lzZS1uYW1lIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uc2V0TnVtYmVyIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYWRkLWV4ZXJjaXNlLWZvcm1fX2FkZC1zZXQge1xyXG4gIG1hcmdpbjogLjVyZW07XHJcbiAgcGFkZGluZzogMCAwIDFyZW0gMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5hZGQtZXhlcmNpc2UsIC5kZWxldGUtZXhlcmNpc2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAxcmVtO1xyXG59XHJcblxyXG4uYWRkLWV4ZXJjaXNlLWZvcm1fX2FkZC1zZXQgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbn1cclxuXHJcbi5hZGQtZXhlcmNpc2UgaDYsIC5kZWxldGUtZXhlcmNpc2UgaDYge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IC43cmVtO1xyXG4gIG1hcmdpbi10b3A6IC4zcmVtO1xyXG59XHJcblxyXG4ubm8tcm91dGluZSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uYWRkLXJvdXRpbmUtbGluayB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG59XHJcblxyXG4uYWRkLXJvdXRpbmUtbGluayBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hZGQtcm91dGluZS1saW5rOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/log-work-out/log-work-out.component.ts":
/*!********************************************************!*\
  !*** ./src/app/log-work-out/log-work-out.component.ts ***!
  \********************************************************/
/*! exports provided: LogWorkOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogWorkOutComponent", function() { return LogWorkOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_routine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/routine.service */ "./src/app/shared/services/routine.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_models_exercise_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/exercise.model */ "./src/app/shared/models/exercise.model.ts");
/* harmony import */ var _shared_services_log_routine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/log-routine.service */ "./src/app/shared/services/log-routine.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var LogWorkOutComponent = /** @class */ (function () {
    function LogWorkOutComponent(routineService, logRoutineService, router) {
        this.routineService = routineService;
        this.logRoutineService = logRoutineService;
        this.router = router;
        this.routines = [];
    }
    LogWorkOutComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.routineService.getRoutines()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.routineService.getRoutineUpdateListener()
                                .subscribe(function (routines) {
                                _this.routines = routines;
                                _this.exercises = routines[0].exercises;
                                var currentRoutine = routines[0];
                                _this.currentRoutine = currentRoutine;
                                _this.refreshRoutine();
                            })];
                    case 2:
                        _a.routinesSub = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //https://stackoverflow.com/questions/48436145/angular-reactive-forms-with-nested-form-arrays
    LogWorkOutComponent.prototype.refreshRoutine = function () {
        var _this = this;
        var currentExercises = this.currentRoutine.exercises.map(function (exercise) {
            return exercise.exerciseName;
        });
        var routineLog = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        this.logRoutineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'routineLog': routineLog
        });
        currentExercises.forEach(function (exercise) {
            _this.logRoutineForm.get('routineLog').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'exerciseName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](exercise),
                'sets': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([
                    new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        'reps': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]),
                        'weight': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([])
                    })
                ])
            }));
        });
    };
    LogWorkOutComponent.prototype.onAddSet = function (exercise) {
        exercise.get('sets').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'reps': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]),
            'weight': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([])
        }));
    };
    LogWorkOutComponent.prototype.onDeleteSet = function (exercise) {
        exercise.get('sets').removeAt(0);
    };
    LogWorkOutComponent.prototype.changeCurrentRoutine = function (i) {
        this.currentRoutine = this.routines[i];
        var routineLog = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        this.logRoutineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'routineLog': routineLog
        });
        this.refreshRoutine();
    };
    LogWorkOutComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var exercises;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, []];
                    case 1:
                        exercises = _a.sent();
                        return [4 /*yield*/, this.logRoutineForm.get('routineLog').value.forEach(function (exercise) { return __awaiter(_this, void 0, void 0, function () {
                                var exerciseName, reps, weight, sets, newExercise;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, exercise.exerciseName];
                                        case 1:
                                            exerciseName = _a.sent();
                                            return [4 /*yield*/, []];
                                        case 2:
                                            reps = _a.sent();
                                            return [4 /*yield*/, []];
                                        case 3:
                                            weight = _a.sent();
                                            return [4 /*yield*/, exercise.sets.length];
                                        case 4:
                                            sets = _a.sent();
                                            exercise.sets.forEach(function (set) {
                                                reps.push(set.reps);
                                                weight.push(set.weight);
                                            });
                                            newExercise = new _shared_models_exercise_model__WEBPACK_IMPORTED_MODULE_3__["Exercise"](exerciseName, sets, reps, weight);
                                            exercises.push(newExercise);
                                            return [4 /*yield*/, this.logRoutineService.saveRoutine(this.currentRoutine.name, exercises, this.currentRoutine.icon)];
                                        case 5:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        this.router.navigate(['/workout-history']);
                        return [2 /*return*/];
                }
            });
        });
    };
    LogWorkOutComponent.prototype.ngOnDestroy = function () {
        this.routinesSub.unsubscribe();
    };
    LogWorkOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-work-out',
            template: __webpack_require__(/*! raw-loader!./log-work-out.component.html */ "./node_modules/raw-loader/index.js!./src/app/log-work-out/log-work-out.component.html"),
            styles: [__webpack_require__(/*! ./log-work-out.component.css */ "./src/app/log-work-out/log-work-out.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_routine_service__WEBPACK_IMPORTED_MODULE_1__["RoutineService"], _shared_services_log_routine_service__WEBPACK_IMPORTED_MODULE_4__["LogRoutineService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LogWorkOutComponent);
    return LogWorkOutComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-container {\r\n  width:100vh;\r\n  height: 4rem;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  background: black;\r\n}\r\n\r\n.menu-btn {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 16px;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  z-index: 5;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-line {\r\n  width: 28px;\r\n  height: 3px;\r\n  margin: 0 0 5px 0;\r\n  background: rgb(193,193,193);\r\n  transition: background 1500ms;\r\n}\r\n\r\ndiv.show div.btn-line {\r\n  background: black;\r\n}\r\n\r\n.menu-dropdown-container {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  opacity: 0.95;\r\n  visibility: hidden;\r\n  transition: visibility 550ms;\r\n}\r\n\r\n.show {\r\n  visibility: visible;\r\n}\r\n\r\n.nav-menu, .menu-branding  {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 50vw;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n  background: rgba(255, 255, 255, .8);\r\n  list-style: none;\r\n  transition: -webkit-transform 500ms;\r\n  transition: transform 500ms;\r\n  transition: transform 500ms, -webkit-transform 500ms;\r\n}\r\n\r\n.nav-menu {\r\n  right: 0;\r\n  -webkit-transform: translate3d(0, -100%, 0);\r\n          transform: translate3d(0, -100%, 0);\r\n}\r\n\r\n.menu-branding {\r\n  left: 0;\r\n  -webkit-transform: translate3d(0, 100%, 0);\r\n          transform: translate3d(0, 100%, 0);\r\n}\r\n\r\nnav.show div.menu-branding,\r\nnav.show ul.nav-menu {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.portrait {\r\n  height: 100px;\r\n  width: 100px;\r\n  background: url('ayodlo.jpg');\r\n  background-position: center center;\r\n  background-size: cover;\r\n  border-radius: 50%;\r\n  border: solid 3px black;\r\n}\r\n\r\n.nav-menu-item a,\r\n.log-out,\r\n.user-name,\r\n.portrait {\r\n  text-transform: uppercase;\r\n  color: black;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  transition: 300ms;\r\n  margin: .4rem 0;\r\n}\r\n\r\n.nav-menu-item a:hover,\r\n.log-out:hover,\r\n.user-name:hover,\r\n.portrait:hover {\r\n  color: rgb(244,67,54);\r\n  border-color:rgb(244,67,54);\r\n  text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsbUNBQTJCO0VBQTNCLDJCQUEyQjtFQUEzQixvREFBMkI7QUFDN0I7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLE9BQU87RUFDUCwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FBQ3BDOztBQUVBOztFQUVFLHVDQUErQjtVQUEvQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUEwQztFQUMxQyxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7Ozs7RUFJRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7Ozs7RUFJRSxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1jb250YWluZXIge1xyXG4gIHdpZHRoOjEwMHZoO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4ubWVudS1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogMTZweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiA1O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bi1saW5lIHtcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBtYXJnaW46IDAgMCA1cHggMDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTkzLDE5MywxOTMpO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMTUwMG1zO1xyXG59XHJcblxyXG5kaXYuc2hvdyBkaXYuYnRuLWxpbmUge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4ubWVudS1kcm9wZG93bi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45NTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSA1NTBtcztcclxufVxyXG5cclxuLnNob3cge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5uYXYtbWVudSwgLm1lbnUtYnJhbmRpbmcgIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcztcclxufVxyXG5cclxuLm5hdi1tZW51IHtcclxuICByaWdodDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxufVxyXG5cclxuLm1lbnUtYnJhbmRpbmcge1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxufVxyXG5cclxubmF2LnNob3cgZGl2Lm1lbnUtYnJhbmRpbmcsXHJcbm5hdi5zaG93IHVsLm5hdi1tZW51IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG59XHJcblxyXG4ucG9ydHJhaXQge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2F5b2Rsby5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xyXG59XHJcblxyXG4ubmF2LW1lbnUtaXRlbSBhLFxyXG4ubG9nLW91dCxcclxuLnVzZXItbmFtZSxcclxuLnBvcnRyYWl0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gIG1hcmdpbjogLjRyZW0gMDtcclxufVxyXG5cclxuLm5hdi1tZW51LWl0ZW0gYTpob3ZlcixcclxuLmxvZy1vdXQ6aG92ZXIsXHJcbi51c2VyLW5hbWU6aG92ZXIsXHJcbi5wb3J0cmFpdDpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigyNDQsNjcsNTQpO1xyXG4gIGJvcmRlci1jb2xvcjpyZ2IoMjQ0LDY3LDU0KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.showClasses = { show: false };
        this.userIsAuthenticated = false;
    }
    NavBarComponent.prototype.onLogout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.logout()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.toggleMenu()];
                    case 2:
                        _a.sent();
                        this.router.navigate(['/signin']);
                        return [2 /*return*/];
                }
            });
        });
    };
    NavBarComponent.prototype.toggleMenu = function () {
        this.showClasses.show === false ? this.showClasses.show = true : this.showClasses.show = false;
    };
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
        if (!this.userIsAuthenticated) {
            this.router.navigate(['/signin']);
        }
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/routines/routines.component.css":
/*!*************************************************!*\
  !*** ./src/app/routines/routines.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  margin: 7rem 0 0 0;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  align-content: space-around;\r\n  height: 100vh;\r\n}\r\n\r\nh3.routines-header {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.add-routine-container {\r\n  width: 80vw;\r\n}\r\n\r\n.add-routine-container button {\r\n  width: 100%;\r\n  background: white;\r\n  color: black;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.routine-list {\r\n  margin: .5rem 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.routine-list-item {\r\n  background: white;\r\n  padding: .5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.routine-list-item-button-group {\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.routine-list-item-button-group button {\r\n  margin: 0 .2rem;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.routine-list-item-button-group__edit-button {\r\n  color: white;\r\n  background: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGluZXMvcm91dGluZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFHWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBR25CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBR2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JvdXRpbmVzL3JvdXRpbmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgbWFyZ2luOiA3cmVtIDAgMCAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5oMy5yb3V0aW5lcy1oZWFkZXIge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5hZGQtcm91dGluZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG59XHJcblxyXG4uYWRkLXJvdXRpbmUtY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxuICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxufVxyXG5cclxuLnJvdXRpbmUtbGlzdCB7XHJcbiAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxuICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxufVxyXG5cclxuLnJvdXRpbmUtbGlzdC1pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdXRpbmUtbGlzdC1pdGVtLWJ1dHRvbi1ncm91cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdXRpbmUtbGlzdC1pdGVtLWJ1dHRvbi1ncm91cCBidXR0b24ge1xyXG4gIG1hcmdpbjogMCAuMnJlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbn1cclxuXHJcbi5yb3V0aW5lLWxpc3QtaXRlbS1idXR0b24tZ3JvdXBfX2VkaXQtYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/routines/routines.component.ts":
/*!************************************************!*\
  !*** ./src/app/routines/routines.component.ts ***!
  \************************************************/
/*! exports provided: RoutinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutinesComponent", function() { return RoutinesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_routine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/routine.service */ "./src/app/shared/services/routine.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoutinesComponent = /** @class */ (function () {
    //INITIALIZE SERVICES
    function RoutinesComponent(routineService) {
        this.routineService = routineService;
        //VARS
        this.routines = [];
    }
    //INITIAL METHOD
    RoutinesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routineService.getRoutines();
        this.routinesSub = this.routineService.getRoutineUpdateListener()
            .subscribe(function (routines) {
            _this.routines = routines;
            console.log(_this.routines);
        });
    };
    RoutinesComponent.prototype.onDelete = function (routineId) {
        this.routineService.deleteRoutine(routineId);
    };
    //AVOID MEMORY LEAKS
    RoutinesComponent.prototype.ngOnDestroy = function () {
        this.routinesSub.unsubscribe();
    };
    RoutinesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-routines',
            template: __webpack_require__(/*! raw-loader!./routines.component.html */ "./node_modules/raw-loader/index.js!./src/app/routines/routines.component.html"),
            styles: [__webpack_require__(/*! ./routines.component.css */ "./src/app/routines/routines.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_routine_service__WEBPACK_IMPORTED_MODULE_1__["RoutineService"]])
    ], RoutinesComponent);
    return RoutinesComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/exercise.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/exercise.model.ts ***!
  \*************************************************/
/*! exports provided: Exercise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercise", function() { return Exercise; });
var Exercise = /** @class */ (function () {
    function Exercise(name, sets, reps, weight) {
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
    }
    return Exercise;
}());



/***/ }),

/***/ "./src/app/shared/models/routine.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/routine.model.ts ***!
  \************************************************/
/*! exports provided: Routine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routine", function() { return Routine; });
var Routine = /** @class */ (function () {
    function Routine(name, exercises, icon) {
        this._id = null;
        this.name = name;
        this.exercises = exercises;
        this.icon = icon;
    }
    return Routine;
}());



/***/ }),

/***/ "./src/app/shared/models/saved-routine.model.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/models/saved-routine.model.ts ***!
  \******************************************************/
/*! exports provided: SavedRoutine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedRoutine", function() { return SavedRoutine; });
var SavedRoutine = /** @class */ (function () {
    function SavedRoutine(name, exercises, icon) {
        var date = new Date();
        var day = date.getDate();
        var month = (date.getMonth() + 1);
        var year = date.getFullYear();
        var currentDate = month + "/" + day + "/" + year;
        this.name = name;
        this.date = currentDate;
        this.exercises = exercises;
        this.icon = icon;
    }
    return SavedRoutine;
}());



/***/ }),

/***/ "./src/app/shared/services/log-routine.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/log-routine.service.ts ***!
  \********************************************************/
/*! exports provided: LogRoutineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogRoutineService", function() { return LogRoutineService; });
/* harmony import */ var _models_saved_routine_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/saved-routine.model */ "./src/app/shared/models/saved-routine.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LogRoutineService = /** @class */ (function () {
    function LogRoutineService(http) {
        this.http = http;
        this.savedRoutines = [];
        this.savedRoutinesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    LogRoutineService.prototype.getWorkouts = function () {
        var _this = this;
        this.http.get('api/workouts')
            .subscribe(function (workoutData) {
            _this.savedRoutines = workoutData.workouts;
            _this.savedRoutinesUpdated.next(_this.savedRoutines.slice());
        });
    };
    LogRoutineService.prototype.getSavedRoutinesUpdateListener = function () {
        return this.savedRoutinesUpdated.asObservable();
    };
    LogRoutineService.prototype.saveRoutine = function (name, exercises, icon) {
        return __awaiter(this, void 0, void 0, function () {
            var routine;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new _models_saved_routine_model__WEBPACK_IMPORTED_MODULE_0__["SavedRoutine"](name, exercises, icon)];
                    case 1:
                        routine = _a.sent();
                        console.log(exercises[0]);
                        this.http.post('api/workouts', routine)
                            .subscribe(function (responseData) {
                            //console.log(responseData.message);
                            _this.savedRoutines.push(routine);
                            _this.savedRoutinesUpdated.next(_this.savedRoutines.slice());
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LogRoutineService.prototype.deleteRoutine = function (workout) {
        this.http.delete('api/workouts/' + workout._id)
            .subscribe(function (responseData) {
            //console.log(responseData.message);
            //this.savedRoutines.push(routine);
            //this.savedRoutinesUpdated.next([...this.savedRoutines]);
        });
    };
    LogRoutineService.prototype.ngOnDestroy = function () {
        this.savedRoutinesUpdated.unsubscribe();
    };
    LogRoutineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LogRoutineService);
    return LogRoutineService;
}());



/***/ }),

/***/ "./src/app/shared/services/routine.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/routine.service.ts ***!
  \****************************************************/
/*! exports provided: RoutineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutineService", function() { return RoutineService; });
/* harmony import */ var _models_routine_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/routine.model */ "./src/app/shared/models/routine.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// @ts-ignore
var RoutineService = /** @class */ (function () {
    function RoutineService(http) {
        this.http = http;
        this.routines = [];
        this.routinesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    RoutineService.prototype.getRoutines = function () {
        var _this = this;
        this.http.get('api/routines')
            .subscribe(function (routineData) {
            _this.routines = routineData.routines;
            _this.routinesUpdated.next(_this.routines.slice());
        });
    };
    RoutineService.prototype.getRoutineUpdateListener = function () {
        return this.routinesUpdated.asObservable();
    };
    RoutineService.prototype.addRoutine = function (name, exercises, icon) {
        var _this = this;
        var routine = new _models_routine_model__WEBPACK_IMPORTED_MODULE_0__["Routine"](name, exercises, icon);
        console.log(exercises);
        this.http.post('api/routines', routine)
            .subscribe(function (responseData) {
            _this.routines.push(routine);
            _this.routinesUpdated.next(_this.routines.slice());
        });
    };
    RoutineService.prototype.deleteRoutine = function (routineId) {
        var _this = this;
        this.http.delete('api/routines/' + routineId)
            .subscribe(function () {
            var updatedRoutines = _this.routines.filter(function (routine) { return routine._id !== routineId; });
            _this.routines = updatedRoutines;
            _this.routinesUpdated.next(_this.routines.slice());
        });
    };
    RoutineService.prototype.ngOnDestroy = function () {
        this.routinesUpdated.unsubscribe();
    };
    RoutineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RoutineService);
    return RoutineService;
}());



/***/ }),

/***/ "./src/app/workout-history-list/workout-history-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/workout-history-list/workout-history-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  box-sizing: border-box;\r\n  margin: 4rem 0 0 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.title-container {\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.title {\r\n  text-transform: uppercase;\r\n  margin: 1rem auto;\r\n  text-align: center;\r\n  font-family: 'Roboto Condensed';\r\n}\r\n\r\n.workouts-container {\r\n  color: white;\r\n  border-radius: 25px 25px 0px 0px;\r\n  width: 100vw;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.last-workout-container {\r\n  width: 90vw;\r\n  height: 35vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.last-workout-info-left {\r\n  width: 60%;\r\n  height:100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.last-workout-info-right {\r\n  width: 40%;\r\n  height:100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.last-workout-image {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: .5rem;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.recent-workouts-header {\r\n  width: 100vw;\r\n  background: black;\r\n  text-align: center;\r\n}\r\n\r\n.recent-workouts {\r\n  color: white;\r\n  background: black;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n  overflow: scroll;\r\n}\r\n\r\n.recent-workouts h6 {\r\n  margin: .5rem 0;\r\n  text-align: center;\r\n}\r\n\r\n.recent-workouts-images {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 90vh;\r\n}\r\n\r\n.recent-workouts-image_container {\r\n  height: 8rem;\r\n  text-align: center;\r\n  margin: .5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.recent-workouts-image {\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: bottom center;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\ndiv.recent-workouts-image:hover,\r\ndiv.last-workout-image:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.button-container {\r\n  width: 100vw;\r\n  padding: 2rem 0;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  background: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.add-workout, .add-routine {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.button-container button {\r\n  background: black;\r\n  color: white;\r\n  border-style: solid;\r\n  border-color: white;\r\n  border-radius: 50px;\r\n}\r\n\r\n.add-workout h6, .add-routine h6 {\r\n  font-size: .7rem;\r\n  margin-top: .3rem;\r\n}\r\n\r\n.backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0,0,0,0.8);\r\n  -webkit-transform: translate3d(0, -100%, 0);\r\n          transform: translate3d(0, -100%, 0);\r\n  transition: -webkit-transform 500ms;\r\n  transition: transform 500ms;\r\n  transition: transform 500ms, -webkit-transform 500ms;\r\n  transition: 500ms;\r\n  z-index: 5;\r\n}\r\n\r\n.modal,\r\n.modal-body {\r\n  visibility: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  -webkit-transform: translate3d(0, -100%, 0);\r\n          transform: translate3d(0, -100%, 0);\r\n  transition: -webkit-transform 500ms;\r\n  transition: transform 500ms;\r\n  transition: transform 500ms, -webkit-transform 500ms;\r\n  transition: 500ms;\r\n  overflow: scroll;\r\n}\r\n\r\n.modal {\r\n  top: 4rem;\r\n  left: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  width: 100vw;\r\n}\r\n\r\n.modal-body {\r\n  width: 80vw;\r\n  z-index: 5;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.backdrop.show,\r\n.modal.show,\r\n.modal-body.show {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.show {\r\n  visibility: visible;\r\n}\r\n\r\n.delete-workout {\r\n  width: 100%;\r\n}\r\n\r\n.card-img-top {\r\n  width: 60%;\r\n  margin: 1rem;\r\n}\r\n\r\n.workout-info,\r\n.workout-exercises {\r\n  color: white;\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nul,\r\nul li {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.exercise {\r\n  margin: 1rem;\r\n}\r\n\r\n.button-container {\r\n  z-index: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya291dC1oaXN0b3J5LWxpc3Qvd29ya291dC1oaXN0b3J5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxtQ0FBMkI7RUFBM0IsMkJBQTJCO0VBQTNCLG9EQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxtQ0FBMkI7RUFBM0IsMkJBQTJCO0VBQTNCLG9EQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLHVDQUErQjtVQUEvQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3dvcmtvdXQtaGlzdG9yeS1saXN0L3dvcmtvdXQtaGlzdG9yeS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDRyZW0gMCAwIDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnO1xyXG59XHJcblxyXG4ud29ya291dHMtY29udGFpbmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxhc3Qtd29ya291dC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGhlaWdodDogMzV2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxhc3Qtd29ya291dC1pbmZvLWxlZnQge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGFzdC13b3Jrb3V0LWluZm8tcmlnaHQge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYXN0LXdvcmtvdXQtaW1hZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWNlbnQtd29ya291dHMtaGVhZGVyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVjZW50LXdvcmtvdXRzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLnJlY2VudC13b3Jrb3V0cyBoNiB7XHJcbiAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlY2VudC13b3Jrb3V0cy1pbWFnZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogOTB2aDtcclxufVxyXG5cclxuLnJlY2VudC13b3Jrb3V0cy1pbWFnZV9jb250YWluZXIge1xyXG4gIGhlaWdodDogOHJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlY2VudC13b3Jrb3V0cy1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5yZWNlbnQtd29ya291dHMtaW1hZ2U6aG92ZXIsXHJcbmRpdi5sYXN0LXdvcmtvdXQtaW1hZ2U6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi5hZGQtd29ya291dCwgLmFkZC1yb3V0aW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMXJlbTtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5hZGQtd29ya291dCBoNiwgLmFkZC1yb3V0aW5lIGg2IHtcclxuICBmb250LXNpemU6IC43cmVtO1xyXG4gIG1hcmdpbi10b3A6IC4zcmVtO1xyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zO1xyXG4gIHRyYW5zaXRpb246IDUwMG1zO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5tb2RhbCxcclxuLm1vZGFsLWJvZHkge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXM7XHJcbiAgdHJhbnNpdGlvbjogNTAwbXM7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICB0b3A6IDRyZW07XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmFja2Ryb3Auc2hvdyxcclxuLm1vZGFsLnNob3csXHJcbi5tb2RhbC1ib2R5LnNob3cge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uZGVsZXRlLXdvcmtvdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLndvcmtvdXQtaW5mbyxcclxuLndvcmtvdXQtZXhlcmNpc2VzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG51bCxcclxudWwgbGkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5leGVyY2lzZSB7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/workout-history-list/workout-history-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/workout-history-list/workout-history-list.component.ts ***!
  \************************************************************************/
/*! exports provided: WorkoutHistoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutHistoryListComponent", function() { return WorkoutHistoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_log_routine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/log-routine.service */ "./src/app/shared/services/log-routine.service.ts");
/* harmony import */ var _shared_services_routine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/routine.service */ "./src/app/shared/services/routine.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var WorkoutHistoryListComponent = /** @class */ (function () {
    function WorkoutHistoryListComponent(logRoutineService, routineService) {
        this.logRoutineService = logRoutineService;
        this.routineService = routineService;
        this.showClasses = { show: false };
        this.savedRoutines = [];
        this.currentExercises = [];
    }
    WorkoutHistoryListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.logRoutineService.getWorkouts()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.logRoutineService.getSavedRoutinesUpdateListener()
                                .subscribe(function (savedWorkouts) {
                                _this.savedRoutines = savedWorkouts;
                                _this.savedRoutines = _this.savedRoutines.reverse();
                                _this.lastWorkout = savedWorkouts[0];
                                _this.currentWorkout = savedWorkouts[0];
                                console.log(savedWorkouts);
                            })];
                    case 2:
                        _a.workoutsSub = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkoutHistoryListComponent.prototype.openModal = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!i) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.savedRoutines[i]];
                    case 1:
                        _a.currentWorkout = _c.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        _b = this;
                        return [4 /*yield*/, this.lastWorkout];
                    case 3:
                        _b.currentWorkout = _c.sent();
                        _c.label = 4;
                    case 4:
                        this.showClasses.show === false ? this.showClasses.show = true : this.showClasses.show = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkoutHistoryListComponent.prototype.closeModal = function () {
        this.showClasses.show === true ? this.showClasses.show = false : this.showClasses.show = true;
        console.log(this.currentWorkout);
    };
    WorkoutHistoryListComponent.prototype.onDeleteWorkout = function () {
        this.logRoutineService.deleteRoutine(this.currentWorkout);
    };
    WorkoutHistoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workout-history-list',
            template: __webpack_require__(/*! raw-loader!./workout-history-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/workout-history-list/workout-history-list.component.html"),
            styles: [__webpack_require__(/*! ./workout-history-list.component.css */ "./src/app/workout-history-list/workout-history-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_log_routine_service__WEBPACK_IMPORTED_MODULE_1__["LogRoutineService"], _shared_services_routine_service__WEBPACK_IMPORTED_MODULE_2__["RoutineService"]])
    ], WorkoutHistoryListComponent);
    return WorkoutHistoryListComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
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

module.exports = __webpack_require__(/*! M:\Web Projects\gym-log\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map