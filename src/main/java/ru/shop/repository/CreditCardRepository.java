package ru.shop.repository;


import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.shop.entity.CreditCard;
import ru.shop.entity.Customer;

@RepositoryRestResource(collectionResourceRel = "creditcard", path = "creditcard")
public interface CreditCardRepository extends PagingAndSortingRepository<CreditCard, Long> {

    @Transactional
    void deleteByOwnerName(@Param("ownerName") String ownerName);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM credit_card", nativeQuery = true)
    void deleteAll();

}
