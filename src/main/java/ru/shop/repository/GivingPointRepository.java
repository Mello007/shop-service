package ru.shop.repository;


import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.shop.entity.GivingPoint;
import ru.shop.entity.Goods;

@RepositoryRestResource(collectionResourceRel = "givingpoint", path = "givingpoint")
public interface GivingPointRepository extends PagingAndSortingRepository<GivingPoint, Long> {

    @Transactional
    void deleteByName(@Param("name") String name);
}
