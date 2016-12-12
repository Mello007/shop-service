package ru.shop.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import ru.shop.entity.Provider;

@RepositoryRestResource(collectionResourceRel = "provider", path = "provider")
public interface ProviderRepository extends PagingAndSortingRepository<Provider, Long> {

    @Transactional
    void deleteByName(@Param("name") String name);


    @Transactional
    @Modifying
    @Query(value = "DELETE FROM provider", nativeQuery = true)
    void deleteAll();
}
