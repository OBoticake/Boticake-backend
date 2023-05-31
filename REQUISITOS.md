# REQUISITOS

## Entidades

### `Products`

* `id` : `Integer` // Ex: 1
<!-- * `id_owner`: ======== TO DO ========   -->
* `slug` : `String` // kabum.com.br/mouse-logitech-mx-master-3 
* `name` : `String` // Ex: "Mouse Logitech Mx Master - Wireless 2.4Ghz 
* `price` : `Float` // Ex: 10.99
* `type` : `String` // 
* `size`: `Char`
* `cover`:`String`
* `flavor`: `String`
* `imgPathName` : `String`
* `description`: `String`
* `id_category` : `Integer` // Id da Tabela de categorias
<!-- * `id_shop`: `Integer` -->
* `created_at` : `Date` 
* `updated_at` : `Date`



# TO DO

Category, , Order, Payments

hasMany, hasOne, 

### `Category`

* `id`: `Integer`
<!-- =========================TODO========================= -->
* `created_at` : `Date`
* `updated_at` : `Date`

### `Order`

* `id`: `Integer`
* `listOfProducts`:`Objeto` // OBS

* `products`: `Array` // OBS
* `countPerProduct`: `Array` //OBS

* `details`: `String` //OBS
* `discount` : `Float`
* `totalPrice`:`Float`
* `created_at`:`Date` //ISO xxxx-xx-xxT00:00:0000
* `devilery_date`: `Date` //ISO xxxx-xx-xxT00:00:0000
<!-- Foreing key -->
* `id_client`: `Integer`
* `FKdetails_products`:`String`
