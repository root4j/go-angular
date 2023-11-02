# Aplicación en Go + Angular
Esta es una aplicación creada para desplegar una aplicación realizada con Go para el backend y Angular para el frontend.

## Prerrequisitos
Para ejecutar este repositorio se requiere la herramienta **Docker** para la ejecución a través de contenedores. Para esto podemos utilizar la herramienta oficial **Docker Desktop** pero esta solo puede ser instalada para uso personal, si no es tu caso puedes utilizar la herramienta **Rancher Desktop** que funciona igual pero no tiene restricción para trabajo en equipo.

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Rancher Desktop](https://rancherdesktop.io/)

## Tecnologías Utilizadas en el Código
Para este código se utilizaron las siguientes librerías y plantillas:

- [Go](https://go.dev/) 
- [Gorilla Mux](https://github.com/gorilla/mux)
- [Gorm](https://gorm.io/)
- [Angular](https://angular.io/)
- [PrimeNG](https://primeng.org/)
- [Sakai NG](https://github.com/primefaces/sakai-ng)
- [Postgres Docker Image](https://hub.docker.com/_/postgres)

## Scripts para Ejecutar la Aplicación
Para ejecutar la aplicación el proceso de **Docker** debe estar ejecutándose. En caso que vayas a instalar **Docker** en **Windows** debes tener en cuenta que debes instalar primero la aplicación **WSL** (Windows Subsystem for Linux), este te permitirá ejecutar los comandos de **Docker** antes de la instalación de **Docker Desktop** o **Rancher Desktop**. Para ejecutar la aplicación debes esta ubicado en la carpeta donde se encuentre el archivo **Dockerfile**.

```sh
docker network create --driver bridge go-net
docker network ls
docker run --rm --name go-db -p 5432:5432 -e POSTGRES_PASSWORD=Wn9sWrWST4fNzkWR#A --network go-net -d postgres:15-alpine
docker build -t go-img .
docker run -dti -p 8080:8080 --network go-net --name go-app 
```

Una vez ejecutes los comandos puedes ejecutar en tu navegador la aplicación en la siguiente url http://localhost:8080. Si tienes problemas con el puerto este lo puedes cambiar con el siguiente comando:

```sh
docker run -dti -p 8888:8080 --network go-net --name go-app 
```

Si quieres verificar cual es el log del contenedor, lo puede realizar con el siguiente comando:

```sh
docker logs go-app
```