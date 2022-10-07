package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String loaiXe;
    private String diaDiemDi;
    private String diaDiemDen;
    private String gioKhoiHanh;
    private String gioDen;


    @ManyToOne
    @JoinColumn(name = "homeCar",referencedColumnName = "id")
    private HomeCar nhaXe;
}
