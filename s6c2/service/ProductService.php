<?php
namespace Service;
use Repository\ProductRepositoryInterface;
use Model\Product;

class ProductService
{
    private ProductRepositoryInterface $repository;
    public function __construct(ProductRepositoryInterface $repository) {
        $this->repository = $repository;
    }

    public function createProduct(int $id, string $name, float $price): void {
        $product = new Product($id, $name, $price);
        $this->repository->save($product);
    }

    public function getAllProducts(): array {
        return $this->repository->findAll();
    }
}
