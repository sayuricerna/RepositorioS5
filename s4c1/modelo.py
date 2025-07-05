import pymysql

def obtener_conexion():
    return pymysql.connect(
        host="127.0.0.1",
        user="root",
        password="",
        database="agenda_citas"
    )

def insertar_cita(nombre, fecha, hora, motivo):
    conexion = obtener_conexion()
    with conexion.cursor() as cursor:
        cursor.execute("INSERT INTO citas (nombre_paciente, fecha, hora, motivo) VALUES (%s, %s, %s, %s)",
                      (nombre, fecha, hora, motivo))
    conexion.commit()
    conexion.close()

def obtener_citas():
    conexion = obtener_conexion()
    try:    
        with conexion.cursor() as cursor:
        cursor.execute("SELECT id ,nombre_paciente, fecha, hora, motivo FROM citas")
        citas = cursor.fetchall()
    return cursor.fetchall()
    finally:
    conexion.close()

