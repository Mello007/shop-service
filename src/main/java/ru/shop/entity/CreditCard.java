package ru.shop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "CreditCard")
public class CreditCard extends BaseEntity {
    private String ownerName;
    private String code;
    private String number;
}
