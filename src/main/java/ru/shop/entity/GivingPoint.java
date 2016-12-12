package ru.shop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "GivingPoint")
public class GivingPoint extends BaseEntity{
    private String name;
    private String address;
    private String time;
    private String region;
}
