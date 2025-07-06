<?php
namespace Repository;

use Model\Product;

class ProductRepository {
    private array $products = [];

    public function save(Product $product): void {
        $this->products[] = $product;
    }

    public function findAll(): array {
        return $this->products;
    }
}
