package ru.shop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "Provider")
public class Provider extends BaseEntity {
    private String name;
    private String numberPhone;
    private String fax;
    private String mail;
}
