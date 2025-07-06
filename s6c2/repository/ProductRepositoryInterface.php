<?php
namespace Repository;

use Model\Product;

interface ProductRepositoryInterface
{
    public function save(Product $product): void;
    public function findAll(): array;
}