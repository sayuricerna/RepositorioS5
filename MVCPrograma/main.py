from controlador import ControladorProducto

def menu():
    print("\n--- Menú ---")
    print("1. Agregar producto")
    print("2. Eliminar producto")
    print("3. Mostrar productos")
    print("4. Calcular total")
    print("5. Salir")

controlador = ControladorProducto()

while True:
    menu()
    opcion = input("Seleccione una opción: ")

    if opcion == '1':
        nombre = input("Nombre del producto: ")
        try:
            precio = float(input("Precio del producto: "))
            controlador.agregar_producto(nombre, precio)
        except ValueError:
            print("[ERROR] Precio inválido.")
    elif opcion == '2':
        nombre = input("Nombre del producto a eliminar: ")
        controlador.eliminar_producto(nombre)
    elif opcion == '3':
        controlador.mostrar_productos()
    elif opcion == '4':
        controlador.calcular_total()
    elif opcion == '5':
        print("Saliendo del programa...")
        break
    else:
        print("[ERROR] Opción no válida.")
