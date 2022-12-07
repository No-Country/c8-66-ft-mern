# Proyecto: Pick In (Sitio para envio de paquetería)
## Grupo c8-66-ft-mern
### Integrantes:
 - Luciana Mansilla (UX/UI)
 - Kelvyn Loreto (Frontend)
 - Martin Figueroa (Frontend)
 - Hugo Vera (Backend)
 - Nicolas Bordon (Backend)

### Tecnologías utilizadas
 - Frontend: React, Redux, SASS
 - Backend: Node, Express, Sequelize
 - Bases de datos: Postgres
 - Deploy: Vercel, AWS
 
## Corriendo el frontend:

1. Clonar el repositorio
2. Posicionarse en la carpeta frontend: cd frontend
3. Ejecutar en la consola: npm run dev


## Corriendo el backend:

### Con NPM:
1. Clonar el repositorio
2. Posicionarse en la carpeta frontend: cd Backend
3. Configurar el archivo .env con los siguientes valores:
    - NODE_ENV=development
    - DB_HOST=XXXXXXXX
    - DB_USERNAME=XXXX
    - DB_PASSWORD=XXXX
    - DB_PORT=XXXX
    - DB=XXXXX
    - DB_TYPE=postgres
    - JWT_SECRET=XXXXXXXXXXXXXXXX
4. Ejecutar en la consola: npm run start

### Con DOCKER:
1. Clonar el repositorio
2. Posicionarse en la carpeta frontend: cd Backend
3. Configurar el archivo .env con los siguientes valores:
    - NODE_ENV=development
    - DB_HOST=XXXXXXXX
    - DB_USERNAME=XXXX
    - DB_PASSWORD=XXXX
    - DB_PORT=XXXX
    - DB=XXXXX
    - DB_TYPE=postgres
    - JWT_SECRET=XXXXXXXXXXXXXXXX
4. Ejecutar en la consola: docker-compose up -d