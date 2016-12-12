package ru.shop.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "UserOrder")
public class UserOrder extends BaseEntity{
    private String price;
    private String paymentMethod;
    private String date;
    private String number;
        private String cityCode;
    private String numberOfReportsCard;
}
