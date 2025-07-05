from modelo import insertar_cita, obtener_citas

def agregar_cita(nombre, fecha, hora, motivo):
    insertar_cita(nombre, fecha, hora, motivo)

def listar_citas():
    return obtener_citas()