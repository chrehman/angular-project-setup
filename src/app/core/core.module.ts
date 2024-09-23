// The core module should only be imported once (in the AppModule). It contains singleton services, guards, interceptors, and global configurations like API URL constants.

// Services: Services that are app-wide singletons (e.g., API service, logging service).
// Interceptors: HTTP interceptors for attaching tokens, handling errors, etc.
// Guards: Route guards for authentication, role-based access control.


// @NgModule({
//     providers: [
//       AuthService,
//       { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
//     ],
//   })
//   export class CoreModule {}
  