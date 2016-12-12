package ru.shop.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "Goods")
public class Goods extends BaseEntity {
    private String price;
    private String weight;
    private String name;
    private String category;
    private String length;
    private String width;
    private String guarantee;

}
