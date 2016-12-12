package ru.shop.repository;


import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.shop.entity.Goods;
import ru.shop.entity.UserOrder;

@RepositoryRestResource(collectionResourceRel = "goods", path = "goods")
public interface GoodsRepository extends PagingAndSortingRepository<Goods, Long> {

    @Transactional
    void deleteByName(@Param("name") String name);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM goods", nativeQuery = true)
    void deleteAll();

}
