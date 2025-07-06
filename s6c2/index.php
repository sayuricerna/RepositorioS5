<?php
require_once __DIR__ . '/config/container.php';

$controller = get('ProductController');

// Manejar la solicitud 5to
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $controller->createFromRequest($_POST);
}
$controller->renderView();

// require_once 'model/Product.php';
// require_once 'repository/ProductRepository.php';
// require_once 'service/ProductService.php';
// require_once 'controller/ProductController.php';

// use Repository\ProductRepository;
// use Service\ProductService;
// use Controller\ProductController;

// $repo = new ProductRepository();
// $service = new ProductService($repo);
// $controller = new ProductController($service);

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $controller->createFromRequest($_POST);
// }
