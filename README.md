# Ecommerce Project

## Requirements

1. Show a list of products.
2. Add products to shopping cart (CRUD).
3. Shopping cart checkout.
4. User login/logout security.
5. Track previous orders for logged in users.

## Release Plan

### 1) Release 1.0

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

### 2) Release 2.0

- Add products to shopping cart(CRUD).
- Shopping cart checkout.

### 3) Release 3.0

- User login/logout security.
- Track previous orders for logged in users.
