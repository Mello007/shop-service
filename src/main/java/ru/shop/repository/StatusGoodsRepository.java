package ru.shop.repository;


import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.shop.entity.Provider;
import ru.shop.entity.StatusGoods;

@RepositoryRestResource(collectionResourceRel = "statusgoods", path = "statusgoods")
public interface StatusGoodsRepository extends PagingAndSortingRepository<StatusGoods, Long> {

    @Transactional
    void deleteByNumber(@Param("number") String number);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM status_goods", nativeQuery = true)
    void deleteAll();
}
