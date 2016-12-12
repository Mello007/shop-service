package ru.shop.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "GivingCity")
public class GivingCity extends BaseEntity {
    private String name;
    private String region;
    private String number;
}
