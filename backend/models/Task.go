package models

type Task struct {
	Audit
	Title       string `gorm:"not null;unique_index" json:"title"`
	Description string `json:"description"`
	Done        bool   `gorm:"default:false" json:"done"`
	UserID      uint   `json:"userId"`
}
