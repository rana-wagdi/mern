import { fakeAsync, getTestBed, TestBed, tick } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { Location } from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

describe('AppComponent', () => {
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // });
  // let appComponent: AppComponent;
  
  let location: Location;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          { path: 'home', component: HomeComponent },
          
        ]),
      
       
      ],
      declarations: [HomeComponent,  AppComponent]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);

  });
  it('"" redirects you to /home', () => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/home");
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    // const router = TestBed.get(Router);
    // const location = TestBed.get(Location);
    
    // it('routes are navigated', fakeAsync(() => {
    //   expect(AppComponent).toBeDefined();
    //   // router.navigated(['']);
    //   // tick()
    //   // expect(location.path()).toBe('/homess')
     
    // }))
    
//     it('should be able to navigate to `/`',
//     fakeAsync(() => {
//       const injector = getTestBed();
//       const router = injector.get(Router);
//       const fixture = TestBed.createComponent(TestBootstrapComponent);
//  fixture.detectChanges();
//       // initial navigation
//       router.navigate(['/'])
//         .then(() => {
//           expect(router.url).toEqual('/');
//         });
//       }));
// });
  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('app');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('app app is running!');
  // });
  
  // const routes: Routes = [
  //   {path: '', redirectTo: 'home', pathMatch: 'full'},
  //   { path: 'home', component: HomeComponent },
  
  // ];
  
  

})


function TestBootstrapComponent(TestBootstrapComponent: any) {
  throw new Error('Function not implemented.');
}

