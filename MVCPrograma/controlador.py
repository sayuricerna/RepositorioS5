from modelo import Producto
from vista import VistaProducto

class ControladorProducto:
    def __init__(self):
        self.productos = []
        self.vista = VistaProducto()

    def agregar_producto(self, nombre, precio):
        producto = Producto(nombre, precio)
        self.productos.append(producto)
        self.vista.mostrar_mensaje("Producto agregado.")

    def eliminar_producto(self, nombre):
        for p in self.productos:
            if p.nombre.lower() == nombre.lower():
                self.productos.remove(p)
                self.vista.mostrar_mensaje("Producto eliminado.")
                return
        self.vista.mostrar_mensaje("Producto no encontrado.")

    def mostrar_productos(self):
        self.vista.mostrar_lista(self.productos)

    def calcular_total(self):
        total = sum(p.precio for p in self.productos)
        self.vista.mostrar_total(total)
