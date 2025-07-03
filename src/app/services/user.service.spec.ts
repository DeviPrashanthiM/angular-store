import { HttpClient } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"
import { UserService } from "./user.service"
import { User } from "../models/user.model";
import { of } from "rxjs/internal/observable/of";
import { firstValueFrom, throwError } from "rxjs";


describe('UserService', () => {

    let service: UserService;
    let mockHttpClient: jest.Mocked<HttpClient>;

    const mockUsers: User[] = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' }
    ] as User[];

    beforeEach(() => {
        mockHttpClient = {
            get: jest.fn()
        } as unknown as jest.Mocked<HttpClient>;

        TestBed.configureTestingModule({
            providers:[
                UserService,
                {provide:HttpClient, useValue: mockHttpClient}
            ]
        });

        service = TestBed.inject(UserService);
    });

    it('should create userservcie', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch user list from api', async () => {
        mockHttpClient.get.mockReturnValue(of(mockUsers));
        const users = await firstValueFrom(service.getUserList());
       expect(mockHttpClient.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
       expect(users.length).toBe(2);
    });

     it('should return empty array on api error', async () => {
        mockHttpClient.get.mockReturnValue(throwError(() => new Error('api error')));
        const users = await firstValueFrom(service.getUserList());
        expect(users.length).toEqual(0);
     });
    
})