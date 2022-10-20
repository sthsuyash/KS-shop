# Ecommerce Project

Ecommerce project created with AngularJS, SpringBoot integrating mySQL database.

- Homepage

  ![Project homepage](/images/homepage.png)

- Application Interaction

  ![Application Interaction](/images/application-interaction.png)

## Table of Contents

- [General Info](https://github.com/sthsuyash/ecommerce-angular-springboot/edit/main/README.md#ecommerce-project)
- [Technologies](https://github.com/sthsuyash/ecommerce-angular-springboot/edit/main/README.md#technologies)
- [Features](https://github.com/sthsuyash/ecommerce-angular-springboot/edit/main/README.md#features)
- [Setup](https://github.com/sthsuyash/ecommerce-angular-springboot/edit/main/README.md#setup)
- [Feature Release Plan](https://github.com/sthsuyash/ecommerce-angular-springboot/edit/main/README.md#release-plan)

## Technologies

Project is created with:

- AngularJS 14.2.6
- SpringBoot 2.7.4
- TypeScript 4.8.4
- mySQL 8.x
- Bootstrap 5.x
- SCSS
- npm 8.19.x
- node 16.18.x
- HTML5

## Features

The features (to be) implemented in the project: 

1. Show a list of products.
2. Add products to shopping cart (CRUD).
3. Shopping cart checkout.
4. User login/logout security.
5. Track previous orders for logged in users.

## Setup

To run this project locally, perform the following steps:

```git
git clone https://github.com/sthsuyash/ecommerce-angular-springboot.git ecommerce
cd ecommerce
mvn spring-boot:run
cd ecommerce-frontend
ng serve
```

## Release Plan

This is release plan for backend. For frontend, navigate to the [frontend README](https://github.com/sthsuyash/ecommerce-angular-springboot/tree/main/ecommerce-frontend#readme).

### 1) [Release 1.0](https://github.com/sthsuyash/ecommerce-angular-springboot/tree/v1.0)

- Show a list of products

- ### Development Process

  1. Setup database tables
  2. Create a spring boot starter project
  3. Develop entities: Product and ProductCategory
  4. Create REST APIs and Spring Data JPA Repositories and Spring Data REST
     Spring Data REST will expose all these endpoints for free, and we don't want that.

     - disable POST, PUT, DELETE methods

     - ### Possible Solutions

       1. Don't use Spring Data REST

          1. Manually create REST APIs using @RestController
          2. Manually define methods for access: @GetMapping
          3. But we lose the Spring Data REST support for paging, sorting, etc.

       2. Use Spring Data REST and disable the endpoints we don't want.

          1. Configure to disable HTTP methods like POST, PUT, DELETE

### 2) [Release 2.0](https://github.com/sthsuyash/ecommerce-angular-springboot/tree/v2.0)

- Add products to shopping cart(CRUD).
- Shopping cart checkout.
