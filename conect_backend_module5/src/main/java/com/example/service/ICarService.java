package com.example.service;

import com.example.model.Car;
import com.example.model.HomeCar;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICarService {
    Page<Car> findAll(Pageable pageable);
    Car findById(Integer id);
    void remove(Integer id);
    void update(Car car);
    List<HomeCar> findAllHomeCar();
    HomeCar findByHome(Integer id);
}
