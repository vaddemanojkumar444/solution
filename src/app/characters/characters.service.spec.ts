import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {LoaderService} from '../loader/loader.service';
import {HttpClient} from '@angular/common/http';
import { CharactersService} from '../characters/characters.service';

describe('CharactersService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: CharactersService;
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService, LoaderService]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CharactersService);
    loaderService = TestBed.get(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
