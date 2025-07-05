import pymysql 
from modelodatos_cita import obtener_conexion

def probar_conexion():
    try:
        conexion = obtener_conexion()
        print("Conexión exitosa a la base de datos")
        conexion.close()
        return True
    except Exception as e:
        print(f"Error de conexión: {e}")
        return False

if __name__ == "__main__":
    probar_conexion()