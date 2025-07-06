<?php
// repository/ProductRepositoryArray.php
namespace Repository;

use Model\Product;

class ProductRepositoryArray implements ProductRepositoryInterface
{
// violacion 2 srp
    public function __construct()
    {
        session_start(); 
        if (!isset($_SESSION['products'])) {
            $_SESSION['products'] = [];
        }
    }

    public function save(Product $product): void
    {
        $_SESSION['products'][] = serialize($product);
    }

    public function findAll(): array
    {
        return array_map(function($item) {
            return unserialize($item);
        }, $_SESSION['products']);
    }
}