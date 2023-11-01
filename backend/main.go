package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"root4j.xyz/api/db"
	"root4j.xyz/api/models"
	"root4j.xyz/api/routes"
)

func main() {
	log.Println("init app")

	log.Println("database connection")
	// database connection
	db.DBConnection()

	log.Println("database migration")
	// database migration
	db.DB.AutoMigrate(models.Task{})
	db.DB.AutoMigrate(models.User{})

	log.Println("new router")
	// new router
	r := mux.NewRouter()

	// tasks routes
	r.HandleFunc("/api/tasks", routes.GetTasksHandler).Methods("GET")
	r.HandleFunc("/api/tasks", routes.CreateTaskHandler).Methods("POST")
	r.HandleFunc("/api/tasks/{id}", routes.GetTaskHandler).Methods("GET")
	r.HandleFunc("/api/tasks/{id}", routes.PutTaskHandler).Methods("PUT")
	r.HandleFunc("/api/tasks/{id}", routes.DeleteTaskHandler).Methods("DELETE")

	// users routes
	r.HandleFunc("/api/users", routes.GetUsersHandler).Methods("GET")
	r.HandleFunc("/api/users", routes.PostUserHandler).Methods("POST")
	r.HandleFunc("/api/users/{id}", routes.GetUserHandler).Methods("GET")
	r.HandleFunc("/api/users/{id}", routes.PutUserHandler).Methods("PUT")
	r.HandleFunc("/api/users/{id}", routes.DeleteUserHandler).Methods("DELETE")

	// Index route
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./webapp/")))

	log.Println("listen port :8080")
	// listener port
	http.ListenAndServe(":8080", r)

}
