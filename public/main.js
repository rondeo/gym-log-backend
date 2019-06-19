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

module.exports = "<div class=\"nav-container\">\r\n\r\n  <div [ngClass]=\"showClasses\" class=\"menu-btn\" (click)=\"toggleMenu()\">\r\n    <div class=\"btn-line\"></div>\r\n    <div class=\"btn-line\"></div>\r\n    <div class=\"btn-line\"></div>\r\n  </div>\r\n\r\n  <nav [ngClass]=\"showClasses\" class=\"menu-dropdown-container\" (click)=\"toggleMenu()\">\r\n\r\n    <div [ngClass]=\"showClasses\" class=\"menu-branding\" (click)=\"toggleMenu()\">\r\n      <div [ngClass]=\"showClasses\" class=\"user-name\" (click)=\"toggleMenu()\">USER NAME</div>\r\n      <label [ngClass]=\"showClasses\" *ngIf=\"avatar\" [style.background]=\"'url(/uploads/' + avatar + ')'\" class=\"portrait\">\r\n          <input [ngClass]=\"showClasses\" *ngIf=\"avatar\" [style.background]=\"'url(/uploads/' + avatar + ')'\" type=\"file\" (change)=\"onFileSelected($event)\" class=\"portrait\">\r\n      </label>\r\n      <div [ngClass]=\"showClasses\" class=\"log-out\" (click)=\"onLogout()\">Logout</div>\r\n    </div>\r\n\r\n    <ul class=\"nav-menu\" (click)=\"toggleMenu()\">\r\n      <li [ngClass]=\"showClasses\" class=\"nav-menu-item\"><a routerLink=\"/workout-history\" (click)=\"toggleMenu()\">Home</a></li>\r\n      <li [ngClass]=\"showClasses\" class=\"nav-menu-item\"><a routerLink=\"/routines\" (click)=\"toggleMenu()\">Routines</a></li>\r\n      <li [ngClass]=\"showClasses\" class=\"nav-menu-item\"><a routerLink=\"/create-routine\" (click)=\"toggleMenu()\">Add Routine</a></li>\r\n      <li [ngClass]=\"showClasses\" class=\"nav-menu-item\"><a routerLink=\"/log-workout\" (click)=\"toggleMenu()\">Log Workout</a></li>\r\n    </ul>\r\n\r\n  </nav>\r\n\r\n</div>"

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

module.exports = "<div class=\"main\">\r\n\r\n  <div class=\"title-container\">\r\n    <h4 class=\"title\">Workout<br>History</h4>\r\n  </div>\r\n\r\n  <div class=\"backdrop\" [ngClass]=\"showClasses\" (click)=\"closeModal()\" *ngIf=\"currentWorkout; else noLoggedWorkouts\">\r\n  </div>\r\n  <div class=\"modal\" [ngClass]=\"showClasses\" (click)=\"closeModal()\" *ngIf=\"currentWorkout\">\r\n    <div class=\"modal-body\" [ngClass]=\"showClasses\">\r\n      <button type=\"button\" class=\"delete-workout btn btn-danger\" (click)=\"onDeleteWorkout()\">DELETE WORKOUT</button>\r\n      <img class=\"card-img-top\" src={{currentWorkout.icon}} alt=\"Card image cap\">\r\n      <h4 class=\"workout-info\">{{currentWorkout.name}}<br>{{currentWorkout.date}}</h4>\r\n      <div class=\"workout-exercises\" *ngIf=\"currentWorkout.exercises\">\r\n        <div class=\"exercise\" *ngFor=\"let exercise of currentWorkout.exercises\">\r\n          <div class=\"exercise-name\">---{{exercise.name}}---</div>\r\n          <ul class= \"modal-sets\" *ngFor=\"let set of exercise.weight; let i = index\">\r\n            <li class=\"exercise-sets\">Set {{i + 1}}</li>\r\n            <li class=\"exercise-reps\">Reps: {{exercise.reps[i]}}</li>\r\n            <li class=\"exercise-weight\">Weight: {{exercise.weight[i]}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"workouts-container\" *ngIf=\"lastWorkout\">\r\n\r\n    <div class=\"last-workout-container\">\r\n      <div class=\"last-workout-info-left\">\r\n        <h6>Last Workout</h6>\r\n        <h4>{{lastWorkout.date}}</h4>\r\n        <h6>{{lastWorkout.name}}</h6>\r\n      </div>\r\n      <div class=\"last-workout-info-right\">\r\n        <div class=\"last-workout-image\" alt=\"IMG\" (click)=\"openModal(i)\"\r\n          [style.background-image]=\"'url(' + lastWorkout.icon + ')'\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"recent-workouts-header\">\r\n      <h6>Recent Workouts</h6>\r\n    </div>\r\n\r\n    <div class=\"recent-workouts\" *ngIf=\"currentWorkout; else noLoggedWorkouts\">\r\n      <div class=\"recent-workouts-images\">\r\n        <div class=\"recent-workouts-image_container\" *ngFor=\"let routine of savedRoutines; let i = index\">\r\n          <div>{{routine.name}}</div>\r\n          <div *ngIf=\"i<4\" class=\"recent-workouts-image\" alt=\"IMG\" (click)=\"openModal(i)\"\r\n            [style.background-image]=\"'url(' + routine.icon + ')'\">\r\n          </div>\r\n          <div>{{routine.date}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"button-container\">\r\n      <div class=\"add-workout\">\r\n        <button type=\"button\" mat-flat-button routerLink=\"/log-workout\" class=\"w3-circle\"><i\r\n            class=\"fas fa-plus\"></i></button>\r\n        <h6>Log Workout</h6>\r\n      </div>\r\n      <div class=\"add-routine\">\r\n        <button mat-flat-button routerLink=\"/create-routine\"><i class=\"fas fa-plus\"></i></button>\r\n        <h6>Add Routine</h6>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <ng-template #noLoggedWorkouts>\r\n    <div class=\"no-workout\">\r\n      <p>\r\n        You haven't logged any workouts yet!\r\n      </p>\r\n      <p>Start by creating and routine and logging your first workout!</p>\r\n      <h5 class=\"add-workout-link\"><a routerLink=\"/log-workout\">Log Workout</a></h5>\r\n    </div>\r\n  </ng-template>\r\n\r\n</div>"

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

module.exports = "app-nav-bar {\r\n  position: relative;\r\n  z-index: 5;\r\n}\r\n\r\nrouter-outlet {\r\n  position: relative;\r\n  z-index: 4;\r\n}\r\n\r\n.background-image {\r\n  background-image:url('background-1.jpg');\r\n  background-position: 0 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -5;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  overflow: scroll;\r\n}\r\n\r\n.roboto {\r\n  font-family: 'Roboto', sans-serif;\r\n  color: black;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0NBQWtEO0VBQ2xELDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTs7QUFFZCIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbmF2LWJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbnJvdXRlci1vdXRsZXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA0O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi9hc3NldHMvYmFja2dyb3VuZC0xLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IC01O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5yb2JvdG8ge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcbiJdfQ== */"

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
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http.post('api/signin', authData)
            .subscribe(function (response) {
            var token = response.token;
            _this.token = token;
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
                _this.saveAuthData(token, expirationDate);
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
                        this.router.navigate(['/signin']);
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

module.exports = "mat-card {\r\n    width: 100vw;\r\n    margin: 4rem 0 0 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.signin-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.create-account {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    margin: 2rem;\r\n}\r\n\r\ndiv > button, div > a {\r\n    margin: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJhcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDRyZW0gMCAwIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZ25pbi1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY3JlYXRlLWFjY291bnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbn1cclxuXHJcbmRpdiA+IGJ1dHRvbiwgZGl2ID4gYSB7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbn0iXX0= */"

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

module.exports = "mat-card {\r\n    width: 100vw;\r\n    margin: 4rem 0 0 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n.signup-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.cancel {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    margin: 2rem;\r\n}\r\n\r\ndiv > button, div > a {\r\n    margin: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJhcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDRyZW0gMCAwIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2lnbnVwLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYW5jZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbn1cclxuXHJcbmRpdiA+IGJ1dHRvbiwgZGl2ID4gYSB7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbn0iXX0= */"

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



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignUp = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (form.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.authService.createUser(form.value.email, form.value.password)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/signin']);
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = ".main {\r\n  margin: 7rem 0 0 0;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n\r\n.main input[type=text] {\r\n  border: none;\r\n  border-bottom: 2px solid black;\r\n  background: rgb(255, 255, 255, .4);\r\n}\r\n\r\nh3 {\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n}\r\n\r\n.add-exercise-form, .add-exercises-form, .addIcon {\r\n  width: 80vw;\r\n  margin: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.add-exercise-form label, .add-exercises-form label {\r\n  margin: 0;\r\n}\r\n\r\n.add-exercise-form__button-group {\r\n  margin: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.add-exercise-form__button-group button, a {\r\n  margin: .2rem .4rem;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.add-exercise-form__add-exercise {\r\n  padding: 0 0 1rem 0;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  background: none;\r\n}\r\n\r\n.add-exercise, .delete-exercise {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.add-exercise-form__add-exercise button {\r\n  background: black;\r\n  color: white;\r\n  border-radius: 50px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.add-exercise h6, .delete-exercise h6 {\r\n  color: black;\r\n  font-size: .7rem;\r\n  margin-top: .3rem;\r\n}\r\n\r\n.routineExercise {\r\n  margin: .25rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.recent-workouts-container h6 {\r\n  margin: 1rem 0 .5rem 1rem;\r\n  font-size: .8rem;\r\n}\r\n\r\n.addIcon {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.addIcon h1 {\r\n  text-align: center;\r\n}\r\n\r\n.icons-container {\r\n  margin: 2rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.icon-container-image {\r\n  width: 100vh;\r\n}\r\n\r\n.icon-container-image {\r\n  width: 25%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.icon-container-image img {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  border-radius: 7px 7px 7px 7px;\r\n  margin: .3rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jcmVhdGUtcm91dGluZS9jcmVhdGUtcm91dGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFHbkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBR25CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGFBQWE7QUFDZiIsImZpbGUiOiJhcHAvY3JlYXRlLXJvdXRpbmUvY3JlYXRlLXJvdXRpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBtYXJnaW46IDdyZW0gMCAwIDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1haW4gaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjQpO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGQtZXhlcmNpc2UtZm9ybSwgLmFkZC1leGVyY2lzZXMtZm9ybSwgLmFkZEljb24ge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGQtZXhlcmNpc2UtZm9ybSBsYWJlbCwgLmFkZC1leGVyY2lzZXMtZm9ybSBsYWJlbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYWRkLWV4ZXJjaXNlLWZvcm1fX2J1dHRvbi1ncm91cCB7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkLWV4ZXJjaXNlLWZvcm1fX2J1dHRvbi1ncm91cCBidXR0b24sIGEge1xyXG4gIG1hcmdpbjogLjJyZW0gLjRyZW07XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG59XHJcblxyXG4uYWRkLWV4ZXJjaXNlLWZvcm1fX2FkZC1leGVyY2lzZSB7XHJcbiAgcGFkZGluZzogMCAwIDFyZW0gMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5hZGQtZXhlcmNpc2UsIC5kZWxldGUtZXhlcmNpc2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZC1leGVyY2lzZS1mb3JtX19hZGQtZXhlcmNpc2UgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbn1cclxuXHJcbi5hZGQtZXhlcmNpc2UgaDYsIC5kZWxldGUtZXhlcmNpc2UgaDYge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IC43cmVtO1xyXG4gIG1hcmdpbi10b3A6IC4zcmVtO1xyXG59XHJcblxyXG4ucm91dGluZUV4ZXJjaXNlIHtcclxuICBtYXJnaW46IC4yNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlY2VudC13b3Jrb3V0cy1jb250YWluZXIgaDYge1xyXG4gIG1hcmdpbjogMXJlbSAwIC41cmVtIDFyZW07XHJcbiAgZm9udC1zaXplOiAuOHJlbTtcclxufVxyXG5cclxuLmFkZEljb24ge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZEljb24gaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb25zLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyLWltYWdlIHtcclxuICB3aWR0aDogMTAwdmg7XHJcbn1cclxuXHJcbi5pY29uLWNvbnRhaW5lci1pbWFnZSB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyLWltYWdlIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCA3cHggN3B4O1xyXG4gIG1hcmdpbjogLjNyZW07XHJcbn1cclxuIl19 */"

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

module.exports = ".main {\r\n  margin: 6rem 0 0 0;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n}\r\n\r\n.log-routine-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  background: white;\r\n}\r\n\r\n.log-routine-form mat-form-field, .set {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nh3.title {\r\n  margin: .5rem;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.select-routine-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 80vw;\r\n  margin: 1.5rem 0;\r\n}\r\n\r\n.routine-form-fields {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.routine-exercise {\r\n  margin: .5rem;\r\n}\r\n\r\n.save-routine-button-group {\r\n  margin: 3rem 0;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.save-routine-button-group button {\r\n  margin: 0 .2rem;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.save-routine-button-group__save-button {\r\n  color: white;\r\n  background: black;\r\n}\r\n\r\n.set-list-item {\r\n  width: 80vw;\r\n  margin: .5rem auto;\r\n  background: white;\r\n  padding: .5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nh3.exercise-name {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.setNumber {\r\n  color: red;\r\n}\r\n\r\n.add-exercise-form__add-set {\r\n  margin: .5rem;\r\n  padding: 0 0 1rem 0;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  background: none;\r\n}\r\n\r\n.add-exercise, .delete-exercise {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.add-exercise-form__add-set button {\r\n  background: black;\r\n  color: white;\r\n  border-radius: 50px;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.add-exercise h6, .delete-exercise h6 {\r\n  color: black;\r\n  font-size: .7rem;\r\n  margin-top: .3rem;\r\n}\r\n\r\n.no-routine {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.add-routine-link {\r\n  background: black;\r\n  text-decoration: none;\r\n  padding: .5rem;\r\n}\r\n\r\n.add-routine-link a {\r\n  color: white;\r\n}\r\n\r\n.add-routine-link:hover {\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2ctd29yay1vdXQvbG9nLXdvcmstb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBR2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBR25CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiYXBwL2xvZy13b3JrLW91dC9sb2ctd29yay1vdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBtYXJnaW46IDZyZW0gMCAwIDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5sb2ctcm91dGluZS1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2ctcm91dGluZS1mb3JtIG1hdC1mb3JtLWZpZWxkLCAuc2V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDMudGl0bGUge1xyXG4gIG1hcmdpbjogLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5zZWxlY3Qtcm91dGluZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogMS41cmVtIDA7XHJcbn1cclxuXHJcbi5yb3V0aW5lLWZvcm0tZmllbGRzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdXRpbmUtZXhlcmNpc2Uge1xyXG4gIG1hcmdpbjogLjVyZW07XHJcbn1cclxuXHJcbi5zYXZlLXJvdXRpbmUtYnV0dG9uLWdyb3VwIHtcclxuICBtYXJnaW46IDNyZW0gMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNhdmUtcm91dGluZS1idXR0b24tZ3JvdXAgYnV0dG9uIHtcclxuICBtYXJnaW46IDAgLjJyZW07XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG59XHJcblxyXG4uc2F2ZS1yb3V0aW5lLWJ1dHRvbi1ncm91cF9fc2F2ZS1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG5cclxuLnNldC1saXN0LWl0ZW0ge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1hcmdpbjogLjVyZW0gYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDMuZXhlcmNpc2UtbmFtZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnNldE51bWJlciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmFkZC1leGVyY2lzZS1mb3JtX19hZGQtc2V0IHtcclxuICBtYXJnaW46IC41cmVtO1xyXG4gIHBhZGRpbmc6IDAgMCAxcmVtIDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uYWRkLWV4ZXJjaXNlLCAuZGVsZXRlLWV4ZXJjaXNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMXJlbTtcclxufVxyXG5cclxuLmFkZC1leGVyY2lzZS1mb3JtX19hZGQtc2V0IGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG59XHJcblxyXG4uYWRkLWV4ZXJjaXNlIGg2LCAuZGVsZXRlLWV4ZXJjaXNlIGg2IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAuN3JlbTtcclxuICBtYXJnaW4tdG9wOiAuM3JlbTtcclxufVxyXG5cclxuLm5vLXJvdXRpbmUge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmFkZC1yb3V0aW5lLWxpbmsge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxufVxyXG5cclxuLmFkZC1yb3V0aW5lLWxpbmsgYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWRkLXJvdXRpbmUtbGluazpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

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

module.exports = ".nav-container {\r\n  width:100vh;\r\n  height: 4rem;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  background: black;\r\n}\r\n\r\n.menu-btn {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 16px;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  z-index: 5;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-line {\r\n  width: 28px;\r\n  height: 3px;\r\n  margin: 0 0 5px 0;\r\n  background: rgb(193,193,193);\r\n  transition: background 1500ms;\r\n}\r\n\r\ndiv.show div.btn-line {\r\n  background: black;\r\n}\r\n\r\n.menu-dropdown-container {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  opacity: 0.95;\r\n  visibility: hidden;\r\n  transition: visibility 550ms;\r\n}\r\n\r\n.show {\r\n  visibility: visible;\r\n}\r\n\r\n.nav-menu, .menu-branding  {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 50vw;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n  background: rgba(255, 255, 255, .8);\r\n  list-style: none;\r\n  transition: -webkit-transform 500ms;\r\n  transition: transform 500ms;\r\n  transition: transform 500ms, -webkit-transform 500ms;\r\n}\r\n\r\n.nav-menu {\r\n  right: 0;\r\n  -webkit-transform: translate3d(0, -100%, 0);\r\n          transform: translate3d(0, -100%, 0);\r\n}\r\n\r\n.menu-branding {\r\n  left: 0;\r\n  -webkit-transform: translate3d(0, 100%, 0);\r\n          transform: translate3d(0, 100%, 0);\r\n}\r\n\r\nnav.show div.menu-branding,\r\nnav.show ul.nav-menu {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.portrait {\r\n  height: 100px;\r\n  width: 100px;\r\n  /*background: url('../../assets/ayodlo.jpg');*/\r\n  background-position: center center !important;\r\n  background-size: cover !important;\r\n  border-radius: 50%;\r\n  border: solid 3px black;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n  display: none;\r\n}\r\n\r\n.nav-menu-item a,\r\n.log-out,\r\n.user-name,\r\n.portrait {\r\n  text-transform: uppercase;\r\n  color: black;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  transition: 300ms;\r\n  margin: .4rem 0;\r\n}\r\n\r\n.nav-menu-item a:hover,\r\n.log-out:hover,\r\n.user-name:hover,\r\n.portrait:hover {\r\n  color: rgb(244,67,54);\r\n  border-color:rgb(244,67,54);\r\n  text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixtQ0FBMkI7RUFBM0IsMkJBQTJCO0VBQTNCLG9EQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFFBQVE7RUFDUiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsT0FBTztFQUNQLDBDQUFrQztVQUFsQyxrQ0FBa0M7QUFDcEM7O0FBRUE7O0VBRUUsdUNBQStCO1VBQS9CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osOENBQThDO0VBQzlDLDZDQUE2QztFQUM3QyxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7OztFQUlFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImFwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtY29udGFpbmVyIHtcclxuICB3aWR0aDoxMDB2aDtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG5cclxuLm1lbnUtYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tbGluZSB7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE5MywxOTMsMTkzKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDE1MDBtcztcclxufVxyXG5cclxuZGl2LnNob3cgZGl2LmJ0bi1saW5lIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG5cclxuLm1lbnUtZHJvcGRvd24tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTU7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgNTUwbXM7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ubmF2LW1lbnUsIC5tZW51LWJyYW5kaW5nICB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNTB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXM7XHJcbn1cclxuXHJcbi5uYXYtbWVudSB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbn1cclxuXHJcbi5tZW51LWJyYW5kaW5nIHtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbn1cclxuXHJcbm5hdi5zaG93IGRpdi5tZW51LWJyYW5kaW5nLFxyXG5uYXYuc2hvdyB1bC5uYXYtbWVudSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxufVxyXG5cclxuLnBvcnRyYWl0IHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAvKmJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2F5b2Rsby5qcGcnKTsqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm5hdi1tZW51LWl0ZW0gYSxcclxuLmxvZy1vdXQsXHJcbi51c2VyLW5hbWUsXHJcbi5wb3J0cmFpdCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0cmFuc2l0aW9uOiAzMDBtcztcclxuICBtYXJnaW46IC40cmVtIDA7XHJcbn1cclxuXHJcbi5uYXYtbWVudS1pdGVtIGE6aG92ZXIsXHJcbi5sb2ctb3V0OmhvdmVyLFxyXG4udXNlci1uYW1lOmhvdmVyLFxyXG4ucG9ydHJhaXQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMjQ0LDY3LDU0KTtcclxuICBib3JkZXItY29sb3I6cmdiKDI0NCw2Nyw1NCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */"

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
    function NavBarComponent(authService, router, http) {
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.selectedFile = null;
        this.showClasses = { show: false };
        this.userIsAuthenticated = false;
    }
    NavBarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.toggleMenu();
        this.router.navigate(['/signin']);
    };
    NavBarComponent.prototype.toggleMenu = function () {
        this.showClasses.show === false ? this.showClasses.show = true : this.showClasses.show = false;
    };
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAvatar();
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
        if (!this.userIsAuthenticated) {
            this.router.navigate(['/signin']);
        }
    };
    NavBarComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        var fd = new FormData();
        fd.append('myAvatar', this.selectedFile);
        this.http.post('/api/avatar', fd)
            .subscribe(function (res) {
            _this.getAvatar();
        });
    };
    NavBarComponent.prototype.getAvatar = function () {
        var _this = this;
        this.http.get('/api/avatar')
            .subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.avatar = res.avatar;
                this.avatar = this.avatar.split('\\')[1];
                console.log(this.avatar);
                return [2 /*return*/];
            });
        }); });
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
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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

module.exports = ".main {\r\n  margin: 7rem 0 0 0;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  align-content: space-around;\r\n  height: 100vh;\r\n}\r\n\r\nh3.routines-header {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.add-routine-container {\r\n  width: 80vw;\r\n}\r\n\r\n.add-routine-container button {\r\n  width: 100%;\r\n  background: white;\r\n  color: black;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.routine-list {\r\n  margin: .5rem 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.routine-list-item {\r\n  background: white;\r\n  padding: .5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.routine-list-item-button-group {\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.routine-list-item-button-group button {\r\n  margin: 0 .2rem;\r\n  box-shadow: 0 10px 6px -6px #777;\r\n}\r\n\r\n.routine-list-item-button-group__edit-button {\r\n  color: white;\r\n  background: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb3V0aW5lcy9yb3V0aW5lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUdaLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFHbkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFHZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC9yb3V0aW5lcy9yb3V0aW5lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIG1hcmdpbjogN3JlbSAwIDAgMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuaDMucm91dGluZXMtaGVhZGVyIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYWRkLXJvdXRpbmUtY29udGFpbmVyIHtcclxuICB3aWR0aDogODB2dztcclxufVxyXG5cclxuLmFkZC1yb3V0aW5lLWNvbnRhaW5lciBidXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbn1cclxuXHJcbi5yb3V0aW5lLWxpc3Qge1xyXG4gIG1hcmdpbjogLjVyZW0gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcbn1cclxuXHJcbi5yb3V0aW5lLWxpc3QtaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3V0aW5lLWxpc3QtaXRlbS1idXR0b24tZ3JvdXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3V0aW5lLWxpc3QtaXRlbS1idXR0b24tZ3JvdXAgYnV0dG9uIHtcclxuICBtYXJnaW46IDAgLjJyZW07XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xyXG59XHJcblxyXG4ucm91dGluZS1saXN0LWl0ZW0tYnV0dG9uLWdyb3VwX19lZGl0LWJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"

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
        });
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

module.exports = ".main {\r\n  box-sizing: border-box;\r\n  margin: 4rem 0 0 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.title-container {\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.title {\r\n  text-transform: uppercase;\r\n  margin: 1rem auto;\r\n  text-align: center;\r\n  font-family: 'Roboto Condensed';\r\n}\r\n\r\n.workouts-container {\r\n  color: white;\r\n  border-radius: 25px 25px 0px 0px;\r\n  width: 100vw;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.last-workout-container {\r\n  width: 90vw;\r\n  height: 35vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.last-workout-info-left {\r\n  width: 60%;\r\n  height:100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.last-workout-info-right {\r\n  width: 40%;\r\n  height:100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.last-workout-image {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: .5rem;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.recent-workouts-header {\r\n  width: 100vw;\r\n  background: black;\r\n  text-align: center;\r\n}\r\n\r\n.recent-workouts {\r\n  color: white;\r\n  background: black;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n  overflow: scroll;\r\n}\r\n\r\n.recent-workouts h6 {\r\n  margin: .5rem 0;\r\n  text-align: center;\r\n}\r\n\r\n.recent-workouts-images {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 90vh;\r\n}\r\n\r\n.recent-workouts-image_container {\r\n  height: 8rem;\r\n  text-align: center;\r\n  margin: .5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.recent-workouts-image {\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: bottom center;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\ndiv.recent-workouts-image:hover,\r\ndiv.last-workout-image:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.button-container {\r\n  width: 100vw;\r\n  padding: 2rem 0;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  background: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.add-workout, .add-routine {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 1rem;\r\n}\r\n\r\n.button-container button {\r\n  background: black;\r\n  color: white;\r\n  border-style: solid;\r\n  border-color: white;\r\n  border-radius: 50px;\r\n}\r\n\r\n.add-workout h6, .add-routine h6 {\r\n  font-size: .7rem;\r\n  margin-top: .3rem;\r\n}\r\n\r\n.backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0,0,0,0.8);\r\n  -webkit-transform: translate3d(0, -100%, 0);\r\n          transform: translate3d(0, -100%, 0);\r\n  transition: -webkit-transform 500ms;\r\n  transition: transform 500ms;\r\n  transition: transform 500ms, -webkit-transform 500ms;\r\n  transition: 500ms;\r\n  z-index: 5;\r\n}\r\n\r\n.modal,\r\n.modal-body {\r\n  visibility: hidden;\r\n  -webkit-transform: translate3d(0, -100%, 0);\r\n          transform: translate3d(0, -100%, 0);\r\n  transition: -webkit-transform 500ms;\r\n  transition: transform 500ms;\r\n  transition: transform 500ms, -webkit-transform 500ms;\r\n  transition: 500ms;\r\n}\r\n\r\n.modal {\r\n  box-sizing: border-box;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 100vw;\r\n\r\n}\r\n\r\n.modal-body {\r\n  padding: 3rem 0;\r\n  width: 80vw;\r\n  z-index: 5;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  overflow: auto;\r\n}\r\n\r\n.backdrop.show,\r\n.modal.show,\r\n.modal-body.show {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.show {\r\n  visibility: visible;\r\n}\r\n\r\n.delete-workout {\r\n  width: 100%;\r\n}\r\n\r\n.card-img-top {\r\n  width: 60%;\r\n  margin: 1rem;\r\n}\r\n\r\n.workout-info,\r\n.workout-exercises {\r\n  color: white;\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nul,\r\nul li {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.exercise {\r\n  margin: 1.5rem;\r\n}\r\n\r\n.exercise-name {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.modal-sets {\r\n  margin: .4rem;\r\n}\r\n\r\n.button-container {\r\n  z-index: 0;\r\n}\r\n\r\n.no-workout {\r\n  width: 100vw;\r\n  margin: 1.5rem 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.add-workout-link {\r\n  margin: 1.5rem 0;\r\n  background: black;\r\n  text-decoration: none;\r\n  padding: .5rem;\r\n}\r\n\r\n.add-workout-link a {\r\n  color: white;\r\n}\r\n\r\n.add-workout-link:hover {\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93b3Jrb3V0LWhpc3RvcnktbGlzdC93b3Jrb3V0LWhpc3RvcnktbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLG1DQUEyQjtFQUEzQiwyQkFBMkI7RUFBM0Isb0RBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLDJDQUFtQztVQUFuQyxtQ0FBbUM7RUFDbkMsbUNBQTJCO0VBQTNCLDJCQUEyQjtFQUEzQixvREFBMkI7RUFDM0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSx1Q0FBK0I7VUFBL0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImFwcC93b3Jrb3V0LWhpc3RvcnktbGlzdC93b3Jrb3V0LWhpc3RvcnktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiA0cmVtIDAgMCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJztcclxufVxyXG5cclxuLndvcmtvdXRzLWNvbnRhaW5lciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYXN0LXdvcmtvdXQtY29udGFpbmVyIHtcclxuICB3aWR0aDogOTB2dztcclxuICBoZWlnaHQ6IDM1dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYXN0LXdvcmtvdXQtaW5mby1sZWZ0IHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxhc3Qtd29ya291dC1pbmZvLXJpZ2h0IHtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGFzdC13b3Jrb3V0LWltYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVjZW50LXdvcmtvdXRzLWhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlY2VudC13b3Jrb3V0cyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5yZWNlbnQtd29ya291dHMgaDYge1xyXG4gIG1hcmdpbjogLjVyZW0gMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWNlbnQtd29ya291dHMtaW1hZ2VzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwdmg7XHJcbn1cclxuXHJcbi5yZWNlbnQtd29ya291dHMtaW1hZ2VfY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDhyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWNlbnQtd29ya291dHMtaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5kaXYucmVjZW50LXdvcmtvdXRzLWltYWdlOmhvdmVyLFxyXG5kaXYubGFzdC13b3Jrb3V0LWltYWdlOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG59XHJcblxyXG4uYWRkLXdvcmtvdXQsIC5hZGQtcm91dGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDFyZW07XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uYWRkLXdvcmtvdXQgaDYsIC5hZGQtcm91dGluZSBoNiB7XHJcbiAgZm9udC1zaXplOiAuN3JlbTtcclxuICBtYXJnaW4tdG9wOiAuM3JlbTtcclxufVxyXG5cclxuLmJhY2tkcm9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcztcclxuICB0cmFuc2l0aW9uOiA1MDBtcztcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4ubW9kYWwsXHJcbi5tb2RhbC1ib2R5IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zO1xyXG4gIHRyYW5zaXRpb246IDUwMG1zO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcblxyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogM3JlbSAwO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYmFja2Ryb3Auc2hvdyxcclxuLm1vZGFsLnNob3csXHJcbi5tb2RhbC1ib2R5LnNob3cge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uZGVsZXRlLXdvcmtvdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLndvcmtvdXQtaW5mbyxcclxuLndvcmtvdXQtZXhlcmNpc2VzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG51bCxcclxudWwgbGkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5leGVyY2lzZSB7XHJcbiAgbWFyZ2luOiAxLjVyZW07XHJcbn1cclxuXHJcbi5leGVyY2lzZS1uYW1lIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLm1vZGFsLXNldHMge1xyXG4gIG1hcmdpbjogLjRyZW07XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4ubm8td29ya291dCB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1hcmdpbjogMS41cmVtIDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uYWRkLXdvcmtvdXQtbGluayB7XHJcbiAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbn1cclxuXHJcbi5hZGQtd29ya291dC1saW5rIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFkZC13b3Jrb3V0LWxpbms6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

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