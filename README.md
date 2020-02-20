# Login Project for Fleet Advantage

#### Author: Logan Born

Built using  [Angular CLI](documentation/angularCLI.md)

## Tech
- Angular 8
- Bootstrap 4+

## Plan
- bootstrap 4

- we need to add a validator for:
  - first name
    - required
    - min 1, max 56
  - last name
    - required
    - min 1, max 56
  - date of birth
    - required
    - can't be greater than today - dynamic

## Steps:

- global angular installed
- Create new project
  - ng new login

- need to install bootstrap
  - ng add @ng-bootstrap/schematics

- created login component
  - ng g c login

- build form
  - first name,
  - last name,
  - dob

- grabbed spinner from 
  - https://getbootstrap.com/docs/4.4/components/spinners/

- need a date picker
  -https://ng-bootstrap.github.io/#/components/datepicker/examples
- for calendar icon
  - npm install bootstrap-icons

- created success component
  - ng g c success
- sucessful login will route to success page

- created custom validator for date of birth

- activated route for success
  - check out the data!