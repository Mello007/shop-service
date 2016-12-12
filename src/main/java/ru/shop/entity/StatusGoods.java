package ru.shop.entity;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "StatusGoods")
public class StatusGoods extends BaseEntity {
    private String number;
    private String estimate;
    private String status;
}
