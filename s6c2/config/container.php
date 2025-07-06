<?php
require_once __DIR__.'/../model/Product.php';
require_once __DIR__.'/../repository/ProductRepositoryInterface.php';
require_once __DIR__.'/../repository/ProductRepositoryArray.php';
require_once __DIR__.'/../service/ProductService.php';
require_once __DIR__.'/../controller/ProductController.php';

$container = [
    'ProductController' => function() {
        $repository = new \Repository\ProductRepositoryArray();
        $service = new \Service\ProductService($repository);
        return new \Controller\ProductController($service);
    }
];

function get(string $key) {
    global $container;
    return $container[$key]();
}