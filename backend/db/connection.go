package db

import (
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB
var DSN = "host=go-db user=postgres password=Wn9sWrWST4fNzkWR#A dbname=postgres port=5432 sslmode=disable"

func DBConnection() {
	var error error
	var myDNS string

	envHost := os.Getenv("GO_APP_DB_HOST")
	envUser := os.Getenv("GO_APP_DB_USER")
	envPswd := os.Getenv("GO_APP_DB_PSWD")

	if envHost != "" && envUser != "" && envPswd != "" {
		log.Println("dns by env var")
		myDNS = "host=" + envHost + " user=" + envUser + " password=" + envPswd + " dbname=postgres port=5432 sslmode=disable"
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
