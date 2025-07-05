class VistaProducto:
    def mostrar_producto(self, producto):
        print(f"- {producto.nombre} : ${producto.precio:.2f}")

    def mostrar_lista(self, productos):
        if not productos:
            print("No hay productos en la lista.")
        else:
            print("Lista de productos:")
            for p in productos:
                self.mostrar_producto(p)

    def mostrar_mensaje(self, mensaje):
        print(f"[INFO] {mensaje}")

    def mostrar_total(self, total):
        print(f"Total a pagar: ${total:.2f}")
