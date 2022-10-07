package com.example.repository;

import com.example.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
public interface ICarRepository extends JpaRepository<Car,Integer> {
    @Query(value = "select * from car ",nativeQuery = true,countQuery = "select count(*) from car as xe ")
    Page<Car> findAllCar(Pageable pageable);

    @Modifying
    @Query(value = "delete from car where id=:id",nativeQuery = true)
    void deleteCarById(@Param("id") Integer id);

    @Query(value = "select * from car where id=:id",nativeQuery = true)
    Optional<Car> findById(@Param("id")Integer id);

}
