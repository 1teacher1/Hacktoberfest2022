package main

import "fmt"

func main() {
	// string
	topic := "Hacktoberfest"
	contribute := `Go is an open source programming language that makes 
	it easy to build simple, reliable, and efficient software`

	// integer
	age1 := 12
	var age2 = 16;

	// float
	a1 := 20.452
    b1 := 34.891
    c1 := b1-a1  // Subtraction of two

	// boolean
	var isValid bool
	isValid = false
  
	// show output
	fmt.Println(topic)
	fmt.Println(contribute)
	fmt.Println(age1, age2)
	fmt.Println(c1)
	fmt.Println(isValid)
}