<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Productos</title>
    <style>
        body {
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        h1 {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 10px;
        }

        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: 600;

        }
        
        input[type="text"],
        input[type="number"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
            box-sizing: border-box;
        }

        .product-list {
            margin-top: 30px;
        }
        
        .product-item {
            background: white;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .product-info {
            flex-grow: 1;
        }
        
        .product-id {
            font-weight: bold;
            color: #2c3e50;
        }
        
        .product-price {
            color:rgb(0, 0, 0);
            font-weight: bold;
        }
        
        .success-message {
            color:rgb(38, 53, 79);
            background-color: #e8f5e9;
            padding: 10px;
            border-radius: 4px;
            margin-bottom: 20px;
            text-align: center;
            display: none;
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>Registro de Productos en la Tienda "Planeta"</h1>
        
        <?php if (isset($success) && $success): ?>
            <div class="success-message">
                Producto registrado
            </div>
        <?php endif; ?>
        
        <form method="POST">
            <div class="form-group">
                <label for="id">Código</label>
                <input type="number" name="id" id="id" required>
            </div>
            
            <div class="form-group">
                <label for="name">Nombre </label>
                <input type="text" name="name" id="name" required>
            </div>
            
            <div class="form-group">
                <label for="price">Precio (USD)</label>
                <input type="number" step="0.01" name="price" id="price" required>
            </div>
            
            <button type="submit">
                 Guardar
            </button>
        </form>
    </div>
    
    <div class="card product-list">
        <h2>Productos Registrados</h2>
        
        <?php if (!empty($products)): ?>
            <?php foreach ($products as $product): ?>
                <div class="product-item">
                    <div class="product-info">
                        <span class="product-id">#<?= htmlspecialchars($product->getId()) ?></span>
                        <span><?= htmlspecialchars($product->getName()) ?></span>
                    </div>
                    <div class="product-price">
                        $<?= number_format($product->getPrice(), 2) ?>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php else: ?>
            <p>No hay productos</p>
        <?php endif; ?>
    </div>
</body>
</html>