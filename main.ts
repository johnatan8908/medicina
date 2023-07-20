// Interfaces para los objetos Doctor y Paciente
interface Doctor {
    nombre: string;
    apellido: string;
    especialidad: string;
    consultorio: string;
    correo: string;
  }
  
  interface Paciente {
    nombre: string;
    cedula: number;
    apellido: string;
    edad: number;
    telefono: string;
  }
  
  // Listas para almacenar los datos
  const doctores: Doctor[] = [];
  const pacientes: Paciente[] = [];
  const citas: { pacienteDocumento: string, especialidad: string }[] = [];
  
  // Obtener los elementos del DOM
  const doctorForm = document.getElementById('doctorForm');
  const pacienteForm = document.getElementById('pacienteForm');
  const citaForm = document.getElementById('citaForm');
  const doctoresList = document.getElementById('doctoresList');
  const pacientesList = document.getElementById('pacientesList');
  const citasList = document.getElementById('citasList');
  
  // Función para mostrar los doctores en el DOM
  function mostrarDoctores() {
    doctoresList.innerHTML = '';
    doctores.forEach((doctor) => {
      const li = document.createElement('li');
      li.textContent = `${doctor.nombre} ${doctor.apellido} - ${doctor.especialidad}`;
      doctoresList.appendChild(li);
    });
  }
  
  // Función para mostrar los pacientes en el DOM
  function mostrarPacientes() {
    pacientesList.innerHTML = '';
    pacientes.forEach((paciente) => {
      const li = document.createElement('li');
      li.textContent = `${paciente.nombre} ${paciente.apellido} - ${paciente.cedula}`;
      pacientesList.appendChild(li);
    });
  }
  
  // Función para mostrar las citas en el DOM
  function mostrarCitas() {
    citasList.innerHTML = '';
    citas.forEach((cita) => {
      const li = document.createElement('li');
      li.textContent = `Paciente: ${cita.pacienteDocumento} - Especialidad: ${cita.especialidad}`;
      citasList.appendChild(li);
    });
  }
  
  // Evento para guardar un doctor
  doctorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellido') as HTMLInputElement).value;
    const especialidad = (document.getElementById('especialidad') as HTMLSelectElement).value;
    const consultorio = (document.getElementById('consultorio') as HTMLInputElement).value;
    const correo = (document.getElementById('correo') as HTMLInputElement).value;
  
    doctores.push({ nombre, apellido, especialidad, consultorio, correo });
    mostrarDoctores();
    doctorForm.reset();
  });
  
  // Evento para guardar un paciente
  pacienteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const cedula = Number((document.getElementById('cedula') as HTMLInputElement).value);
    const apellido = (document.getElementById('apellido') as HTMLInputElement).value;
    const edad = Number((document.getElementById('edad') as HTMLInputElement).value);
    const telefono = (document.getElementById('telefono') as HTMLInputElement).value;
  
    pacientes.push({ nombre, cedula, apellido, edad, telefono });
    mostrarPacientes();
    pacienteForm.reset();
  });
  
  // Evento para guardar una cita
  citaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pacienteDocumento = (document.getElementById('pacienteDocumento') as HTMLInputElement).value;
    const especialidad = (document.getElementById('especialidad') as HTMLSelectElement).value;
  
    citas.push({ pacienteDocumento, especialidad });
    mostrarCitas();
    citaForm.reset();
  });
  