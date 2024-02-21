# Guía de Instalación y Configuración

  Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

## Instalación

1. **Clona el repositorio:**

<pre>git clone https://github.com/Rokudou264/crud_js.git
cd crud_js</pre>


2. **Configura las variables de entorno:**

  Crea un archivo .env en la raíz del proyecto y añade las siguientes variables con los valores adecuados:

<pre><code>PORT=4000
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=TU_CONTRASEÑA_DE_MYSQL
MYSQL_DB=prueba_tecnica</code></pre>

## Configuración de la Base de Datos


1. **Crea la Base de Datos:**

  Accede a tu phpMyAdmin y crea una nueva base de datos llamada prueba_tecnica.
  

2. **Importa las Tablas:**

  Utiliza el archivo de creación de tablas proporcionado en la documentación del proyecto (prueba_tecnico.sql) para importar las tablas necesarias en tu base de datos prueba_tecnica.
  
  Asegúrate de que las tablas se creen correctamente con las relaciones adecuadas.
  

## Ejecución del Proyecto


1. **Instala las dependencias:**

  <pre><code>npm install</code></pre>
  
  express, morgan, mysql, nodemon y dotenv.
  

2. **Inicia el servidor:**

  <pre><code>npm run dev</code></pre>
  
  
  Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación desde:
  http://localhost:4000/api/usuarios/
  http://localhost:4000/api/direcciones/
  http://localhost:4000/api/companias/
