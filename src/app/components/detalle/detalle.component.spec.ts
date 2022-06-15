import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComponent } from './detalle.component';

describe('DetalleComponent', () => {
  let component: DetalleComponent;
  const mockRouter = jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation']);

  beforeEach(async () => {
    mockRouter.getCurrentNavigation.and.returnValue({
      extras: {
        state: {
          element: {}
        }
      }
    });

    component = new DetalleComponent(mockRouter);
  });

  it('should get element on builder', () => {
    expect(component.element).toBeTruthy();
  });

  it('should NOT get element on builder', () => {
    mockRouter.getCurrentNavigation.and.returnValue({
      extras: {}
    });

    component = new DetalleComponent(mockRouter)

    expect(component.element).toBeFalsy();
  });

  it('should call navigate on method goBack', () => {
    component.goBack();
    expect(mockRouter.navigate).toHaveBeenCalled();
  });
});
