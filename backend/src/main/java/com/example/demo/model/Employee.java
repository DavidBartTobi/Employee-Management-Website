package com.example.demo.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Entity // marks this class as a table in an SQL DB. Java knows to creat a table called Employee. each instance is a row
public class Employee {
    @Id // mark as Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // autoincrement
    private int id;
    @Column(name = "first_name")
    @NotEmpty
    private String firstName;
    @Column(name = "last_name")
    @NotEmpty
    private String lastName;
    @Column(name = "email")
    @NotEmpty
    @Email
    private String email;

    public Employee() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
