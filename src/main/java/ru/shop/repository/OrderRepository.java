package ru.shop.repository;


import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.shop.entity.UserOrder;

@RepositoryRestResource(collectionResourceRel = "userorder", path = "userorder")
public interface OrderRepository extends PagingAndSortingRepository<UserOrder, Long> {

    @Transactional
    void deleteByDate(@Param("date") String date);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM user_order", nativeQuery = true)
    void deleteAll();

}
