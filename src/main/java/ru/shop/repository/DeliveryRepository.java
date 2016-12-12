package ru.shop.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.shop.entity.Delivery;
import ru.shop.entity.Employee;

@RepositoryRestResource(collectionResourceRel = "delivery", path = "delivery")
public interface DeliveryRepository extends PagingAndSortingRepository<Delivery, Long> {

    @Transactional
    void deleteByNumberOfDelivery(@Param("numberOfDelivery") String numberOfDelivery);


    @Transactional
    @Modifying
    @Query(value = "DELETE FROM delivery", nativeQuery = true)
    void deleteAll();
}
