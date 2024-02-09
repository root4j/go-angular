# Application in Go + Angular
This is an application created to deploy an application made with Go for the backend and Angular for the frontend.

## Prerequisites
To run this repository the **Docker** tool for execution through containers is required. For this we can use the official Docker Desktop tool but it can only be installed for personal use, if this is not your case you can use the Rancher Desktop tool that works the same but has no restriction for teamwork.

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Rancher Desktop](https://rancherdesktop.io/)

## Technologies Used in the Code
The following libraries and templates were used for this code:

- [Go](https://go.dev/) 
- [Gorilla Mux](https://github.com/gorilla/mux)
- [Gorm](https://gorm.io/)
- [Angular](https://angular.io/)
- [PrimeNG](https://primeng.org/)
- [Sakai NG](https://github.com/primefaces/sakai-ng)

## Scripts to Run the Application
To run the application the **Docker** process must be running. If you are going to install **Docker** on **Windows**, you must keep in mind that you must first install the **WSL** (Windows Subsystem for Linux) application, this will allow you to execute **Docker** commands before installing **Docker Desktop** or **Rancher Desktop**. To run the application you must be located in the folder where the **Dockerfile** file is located.

```sh
docker build -t go-img .
docker run -dti -p 8080:8080 --name go-app go-img
```

Once you execute the commands you can run the application in your browser at the following url http://localhost:8080. If you have problems with the port, you can change it with the following command:

```sh
docker run -dti -p 8888:8080 --name go-app go-img
```

If you want to verify what the container log is, you can do it with the following command:

```sh
docker logs go-app
```