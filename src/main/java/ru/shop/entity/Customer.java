package ru.shop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "Customer")
public class Customer extends BaseEntity {
    private String name;
    private String sex;
    private String address;
    private String numberCustomer;
    private String studying;
}
