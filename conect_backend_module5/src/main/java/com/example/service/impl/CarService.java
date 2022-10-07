package com.example.service.impl;

import com.example.model.Car;
import com.example.model.HomeCar;
import com.example.repository.ICarRepository;
import com.example.repository.IHomeCarRepository;
import com.example.service.ICarService;
import com.example.service.IHomeCarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService implements ICarService {
    @Autowired
    private ICarRepository iCarRepository;
    @Autowired
    private IHomeCarRepository iHomeCarRepository;

    public Page<Car> findAll(Pageable pageable) {
        return iCarRepository.findAllCar(pageable);
    }

    @Override
    public Car findById(Integer id) {
        return iCarRepository.findById(id).orElse(null);
    }

    @Override
    public void remove(Integer id) {
        iCarRepository.deleteCarById(id);
    }

    @Override
    public void update(Car car) {
        iCarRepository.save(car);
    }

    @Override
    public List<HomeCar> findAllHomeCar() {
        return iHomeCarRepository.findAllHomeCar();
    }

    @Override
    public HomeCar findByHome(Integer id) {
        return iHomeCarRepository.findByIdHomeCar(id);
    }
}
