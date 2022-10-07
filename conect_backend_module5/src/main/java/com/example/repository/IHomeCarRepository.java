package com.example.repository;

import com.example.model.HomeCar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IHomeCarRepository extends JpaRepository<HomeCar,Integer> {
    @Query(value = "select * from home_car",nativeQuery = true)
    List<HomeCar> findAllHomeCar();

    @Query(value = "select * from home_car where id=:id",nativeQuery = true)
    HomeCar findByIdHomeCar(@Param("id")Integer id);
}
