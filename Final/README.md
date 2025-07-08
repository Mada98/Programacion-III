# 🚀 Proyecto Final - Programacion III - Sistema Web Full-Stack con Docker

---

## 📋 Informacion del Proyecto

### 📚 Sistema de Biblioteca Personal

#### Descripción
Una aplicación para catalogar libros personales y hacer seguimiento de lectura.

#### Funcionalidades Principales
- Registrar libros con información básica
- Marcar estado de lectura (leído, leyendo, por leer)
- Calificar libros con estrellas
- Organizar por géneros
- Escribir reseñas simples

---

## 🏗️ Construccion del Proyecto

1. Clonar el repositorio actual.

    ```bash
    git clone <URL-DEL-REPOSITORIO>
    ```
2. Abrir el repositorio clonado recientemente en el Visual Studio Code.

3. Entrar a la carpeta donde esta el proyecto (**Final**).
    ```bash
    cd Final
    ```
4. Crear un archivo .env y dentro de este colocar el siguiente contenido:

    ```env
    # ===========================================
    # BASE DE DATOS POSTGRESQL
    # ===========================================
    POSTGRES_DB=app_database
    POSTGRES_USER=app_user
    POSTGRES_PASSWORD=app_password

    # ===========================================
    # BACKEND (EXPRESS)
    # ===========================================
    NODE_ENV=development
    PORT=3001

    # Configuración de base de datos para Sequelize
    DB_HOST=database
    DB_PORT=5432
    DB_NAME=app_database
    DB_USER=app_user
    DB_PASSWORD=app_password

    # JWT para autenticación
    JWT_SECRET=mi_jwt_secret_super_seguro_para_desarrollo_2024

    # CORS - Permitir requests desde el frontend
    CORS_ORIGIN=http://localhost:3000

    # ===========================================
    # FRONTEND (REACT)
    # ===========================================
    REACT_APP_API_URL=http://localhost:3001/api
    REACT_APP_ENV=development

    # Hot reload optimizado para Docker
    CHOKIDAR_USEPOLLING=true
    WATCHPACK_POLLING=true
    FAST_REFRESH=true

    # WebSocket para hot reload
    WDS_SOCKET_HOST=localhost
    WDS_SOCKET_PORT=3000
    WDS_SOCKET_PATH=/ws

    # ESLint en desarrollo
    ESLINT_NO_DEV_ERRORS=true
    GENERATE_SOURCEMAP=true

    # ===========================================
    # REDIS
    # ===========================================
    REDIS_HOST=redis
    REDIS_PORT=6379
    REDIS_URL=redis://redis:6379

    # ===========================================
    # PGADMIN 4
    # ===========================================
    PGADMIN_DEFAULT_EMAIL=admin@example.com
    PGADMIN_DEFAULT_PASSWORD=admin123
    PGADMIN_CONFIG_SERVER_MODE=False
    PGADMIN_CONFIG_MASTER_PASSWORD_REQUIRED=False

    # ===========================================
    # CONFIGURACIÓN DE DESARROLLO
    # ===========================================
    DEBUG=true
    LOG_LEVEL=debug
    UPLOAD_PATH=./uploads
    MAX_FILE_SIZE=10MB

    # Email para desarrollo (Mailtrap)
    EMAIL_HOST=smtp.mailtrap.io
    EMAIL_PORT=2525
    EMAIL_USER=tu_usuario_mailtrap
    EMAIL_PASS=tu_password_mailtrap
    EMAIL_FROM=noreply@tuapp.com

    # ===========================================
    # SEGURIDAD (DESARROLLO)
    # ===========================================
    RATE_LIMIT_REQUESTS=100
    RATE_LIMIT_WINDOW_MS=900000
    SESSION_SECRET=mi_session_secret_para_desarrollo
    COOKIE_SECURE=false
    COOKIE_HTTP_ONLY=true
    COOKIE_SAME_SITE=lax
    ```
5. Construccion de la imagen (**Docker**).
    ```bash
    docker-compose build
    ```
6. Inicializar la base de datos y los servicios (**Docker**).
    ```bash
    docker-compose up -d
    ```
---
### 🔧 Comandos Principales - Docker
```bash
# Iniciar todos los servicios
docker-compose up

# Iniciar en background
docker-compose up -d

# Ver logs en tiempo real
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f backend

# Detener servicios
docker-compose down

# Detener y limpiar volúmenes
docker-compose down -v
```
---

### URLs de Acceso
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001/api
- **Health Check:** http://localhost:3001/health
- **Nginx Proxy:** http://localhost
- **pgAdmin 4:** http://localhost:5050
- **Base de datos:** localhost:5432

---

### ⚙️ Crear datos de Prueba

1. En la terminal, para acceder al contenedor del backend:
    ```bash
    docker-compose exec backend sh
    ```
2. Ejecutar el siguiente comando para crear los datos de prueba:
    ```bash
    npx sequelize-cli db:seed:all
    ```
3. Para salir del contenedor:
    ```bash
    exit
    ```
---

### 👥 Integrantes del Proyecto

+ Mateo Avila Baez.
+ Ramiro Gabeiras.
+ Juan Braun
