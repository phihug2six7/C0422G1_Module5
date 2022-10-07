package com.example.controller;

import com.example.model.Car;
import com.example.model.HomeCar;
import com.example.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("car")
public class RestCarController {
    @Autowired
    private ICarService iCarService;

    @GetMapping("")
    public ResponseEntity<Page<Car>> showCar(@PageableDefault(size = 2) Pageable pageable) {
        Page<Car> cars = iCarService.findAll(pageable);
        if (!cars.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Integer id) {
        iCarService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> findById(@PathVariable Integer id) {
        Car car = this.iCarService.findById(id);
        if (car == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @PatchMapping("")
    public ResponseEntity<Void> update(@RequestBody Car car){
        this.iCarService.update(car);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/homeCar")
    public ResponseEntity<List<HomeCar>> findAllHome() {
         List<HomeCar> homeCarList = iCarService.findAllHomeCar();
         if (homeCarList.isEmpty()){
             return new ResponseEntity<>(HttpStatus.NO_CONTENT);
         }
         return new ResponseEntity<>(homeCarList,HttpStatus.OK);
    }

    @GetMapping("homeCar/{id}")
    public ResponseEntity<HomeCar> findByIdHomeCar(@PathVariable Integer id) {
        HomeCar homeCar = this.iCarService.findByHome(id);
        if (homeCar == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(homeCar, HttpStatus.OK);
    }
}
