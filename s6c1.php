<?php

// negocio
function registrarProducto($producto, $precio, $repo, $vista) {
    $datos = "$producto - $precio USD";
    $repo->guardar("productos.txt", $datos);
    $vista->mostrar("Producto '$producto' registrado con éxito.");
}

// persistencia de datos
class RepositorioArchivo {
    public function guardar($archivo, $contenido) {
        $f = fopen($archivo, "a");
        fwrite($f, $contenido . "\n");
        fclose($f);
    }
}

// presentación 
class VistaConsola {
    public function mostrar($mensaje) {
        echo $mensaje;
    }
}

// inyección de dependencias
$producto = "Camiseta oversize blanca de algodón";
$precio = 25.99;
$repositorio = new RepositorioArchivo();  
$vista = new VistaConsola();              

registrarProducto($producto, $precio, $repositorio, $vista);
?>
