package models

type User struct {
	Audit
	FirstName string `gorm:"not null" json:"firstName"`
	LastName  string `gorm:"not null" json:"lastName"`
	Email     string `gorm:"not null;uniqueIndex" json:"email"`
	Tasks     []Task `json:"tasks"`
}
