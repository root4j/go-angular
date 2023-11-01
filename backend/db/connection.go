package db

import (
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB
var DSN = "host=go-db user=postgres password=Wn9sWrWST4fNzkWR#A dbname=godb port=5432 sslmode=disable"

func DBConnection() {
	var error error
	var myDNS string

	envDNS := os.Getenv("GO_APP_DSN")

	if envDNS != "" {
		log.Println("dns by env var")
		myDNS = envDNS
	} else {
		log.Println("dns by docker")
		myDNS = DSN
	}

	DB, error = gorm.Open(postgres.Open(myDNS), &gorm.Config{})
	if error != nil {
		log.Fatal(error)
	} else {
		log.Println("connection successful")
	}
}
