
import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;

  const mockApiService = jasmine.createSpyObj(['getInfo']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    mockApiService.getInfo.and.returnValue(of({}));
    component = new DashboardComponent(mockApiService, mockRouter)
  });

  it('should get 6 elements from nasaObjects', () => {
    expect(component.nasaObjects.length).toEqual(6);
  });

  it('should navigate on showDetalle', () => {
    component.showDetalle({
      copyright: '',
      date: '',
      explanation: '',
      hdurl: '',
      media_type: '',
      service_version: '',
      title: '',
      url: ''
    });
    
    expect(mockRouter.navigate).toHaveBeenCalled();
  });
});
