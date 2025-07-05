import tkinter as tk
from tkinter import messagebox
from controlador import agregar_cita

def mostrar_interface():
    ventana = tk.Tk()
    ventana.title("Sistema de Citas Médicas")
    
    # Campos del formulario
    tk.Label(ventana, text="Nombre:").grid(row=0, column=0, padx=5, pady=5)
    entry_nombre = tk.Entry(ventana)
    entry_nombre.grid(row=0, column=1, padx=5, pady=5)
    
    tk.Label(ventana, text="Fecha:").grid(row=1, column=0, padx=5, pady=5)
    entry_fecha = tk.Entry(ventana)
    entry_fecha.grid(row=1, column=1, padx=5, pady=5)
    
    tk.Label(ventana, text="Hora:").grid(row=2, column=0, padx=5, pady=5)
    entry_hora = tk.Entry(ventana)
    entry_hora.grid(row=2, column=1, padx=5, pady=5)
    
    tk.Label(ventana, text="Motivo:").grid(row=3, column=0, padx=5, pady=5)
    entry_motivo = tk.Entry(ventana)
    entry_motivo.grid(row=3, column=1, padx=5, pady=5)
    
    def guardar():
        nombre = entry_nombre.get()
        fecha = entry_fecha.get()
        hora = entry_hora.get()
        motivo = entry_motivo.get()
        
        if nombre and fecha and hora and motivo:
            agregar_cita(nombre, fecha, hora, motivo)
            messagebox.showinfo("Cita guardada", "Cita registrada correctamente.")
            entry_nombre.delete(0, tk.END)
            entry_fecha.delete(0, tk.END)
            entry_hora.delete(0, tk.END)
            entry_motivo.delete(0, tk.END)
        else:
            messagebox.showerror("Error", "Todos los campos son obligatorios")
    
    # Botón de guardar
    tk.Button(ventana, text="Guardar Cita", command=guardar).grid(row=4, columnspan=2, pady=10)
    
    ventana.mainloop()