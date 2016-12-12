package ru.shop.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "Delivery")
public class Delivery extends BaseEntity {
    private String numberOfDelivery;
    private String date;
    private String time;
    private String price;
    private String numberOfTable;
    private String kindOfDelivery;
}
