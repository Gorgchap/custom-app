import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InfoService } from '@app/core/services/api';

describe('InfoService', () => {
  let service: InfoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(InfoService);
    httpMock = TestBed.inject(HttpTestingController);
    service['api'] = 'https://aws.random.cat/meow';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getInfo method', () => {
    it('should return an Observable<FileInfo>', () => {
      service.getInfo().subscribe((info) => {
        expect(info).toEqual({ file: 'someInfo' });
      });

      const req = httpMock.expectOne(`${service['api']}`);
      expect(req.request.method).toBe('GET');
      req.flush({ file: 'someInfo' });
    });
  });
});
