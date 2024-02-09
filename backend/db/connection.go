package db

import (
	"log"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	
)

var DB *gorm.DB

func DBConnection() {
	var error error

	DB, error = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if error != nil {
		log.Fatal(error)
	} else {
		log.Println("connection successful")
	}
}