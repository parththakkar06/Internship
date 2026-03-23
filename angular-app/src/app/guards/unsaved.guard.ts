import { CanDeactivateFn } from '@angular/router';

export const unsavedGuard: CanDeactivateFn<any> = (component) => {

  console.log(component)
  if(component.hasUnsavedChanges){
    return confirm("You have unsaved changes. Leave anyway ?")
  } 

  return true;
};
