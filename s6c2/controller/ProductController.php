<?php
// namespace Controller;

// use Service\ProductService;

// class ProductController {
//     private ProductService $service;

//     public function __construct(ProductService $service) {
//         $this->service = $service;
//     }

//Con violación  principio SRP
//     public function createFromRequest(array $data): void {
//         $id = (int)$data['id'];
//         $name = $data['name'];
//         $price = (float)$data['price'];

//         $this->service->createProduct($id, $name, $price);
//         echo "Producto agregado con éxito.<br>";
//     }

//     public function showAll(): void {
//         $products = $this->service->getAllProducts();
//         foreach ($products as $product) {
//             echo "Código: {$product->getId()} - Nombre: {$product->getName()} - Precio: {$product->getPrice()}<br>";
//         }
//     }
// }

namespace Controller;

use Service\ProductService;

class ProductController {
    private ProductService $service;

    public function __construct(ProductService $service) {
        $this->service = $service;
    }

    public function createFromRequest(array $data): void {
        $this->service->createProduct(
            (int)$data['id'],
            $data['name'],
            (float)$data['price']
        );
    }

    public function renderView(): void {
        $products = $this->service->getAllProducts();
        require __DIR__ . '/../view/products.php';
    }
}
