// Listas para almacenar los datos
var doctores = [];
var pacientes = [];
var citas = [];
// Obtener los elementos del DOM
var doctorForm = document.getElementById('doctorForm');
var pacienteForm = document.getElementById('pacienteForm');
var citaForm = document.getElementById('citaForm');
var doctoresList = document.getElementById('doctoresList');
var pacientesList = document.getElementById('pacientesList');
var citasList = document.getElementById('citasList');
// Función para mostrar los doctores en el DOM
function mostrarDoctores() {
    doctoresList.innerHTML = '';
    doctores.forEach(function (doctor) {
        var li = document.createElement('li');
        li.textContent = "".concat(doctor.nombre, " ").concat(doctor.apellido, " - ").concat(doctor.especialidad);
        doctoresList.appendChild(li);
    });
}
// Función para mostrar los pacientes en el DOM
function mostrarPacientes() {
    pacientesList.innerHTML = '';
    pacientes.forEach(function (paciente) {
        var li = document.createElement('li');
        li.textContent = "".concat(paciente.nombre, " ").concat(paciente.apellido, " - ").concat(paciente.cedula);
        pacientesList.appendChild(li);
    });
}
// Función para mostrar las citas en el DOM
function mostrarCitas() {
    citasList.innerHTML = '';
    citas.forEach(function (cita) {
        var li = document.createElement('li');
        li.textContent = "Paciente: ".concat(cita.pacienteDocumento, " - Especialidad: ").concat(cita.especialidad);
        citasList.appendChild(li);
    });
}
// Evento para guardar un doctor
doctorForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var especialidad = document.getElementById('especialidad').value;
    var consultorio = document.getElementById('consultorio').value;
    var correo = document.getElementById('correo').value;
    doctores.push({ nombre: nombre, apellido: apellido, especialidad: especialidad, consultorio: consultorio, correo: correo });
    mostrarDoctores();
    doctorForm.reset();
});
// Evento para guardar un paciente
pacienteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var cedula = Number(document.getElementById('cedula').value);
    var apellido = document.getElementById('apellido').value;
    var edad = Number(document.getElementById('edad').value);
    var telefono = document.getElementById('telefono').value;
    pacientes.push({ nombre: nombre, cedula: cedula, apellido: apellido, edad: edad, telefono: telefono });
    mostrarPacientes();
    pacienteForm.reset();
});
// Evento para guardar una cita
citaForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var pacienteDocumento = document.getElementById('pacienteDocumento').value;
    var especialidad = document.getElementById('especialidad').value;
    citas.push({ pacienteDocumento: pacienteDocumento, especialidad: especialidad });
    mostrarCitas();
    citaForm.reset();
});
