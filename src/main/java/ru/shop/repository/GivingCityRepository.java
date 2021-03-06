package ru.shop.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.shop.entity.GivingCity;
import ru.shop.entity.GivingPoint;

@RepositoryRestResource(collectionResourceRel = "givingcity", path = "givingcity")
public interface GivingCityRepository extends PagingAndSortingRepository<GivingCity, Long> {

    @Transactional
    void deleteByName(@Param("name") String name);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM giving_city", nativeQuery = true)
    void deleteAll();
}
