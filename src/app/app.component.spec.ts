import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";


describe('App Component', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

 

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[AppComponent]
        }).compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        });

       
    });


    it('should create the AppComponent instance', () => {
        expect(component).toBeTruthy();
    })



})
