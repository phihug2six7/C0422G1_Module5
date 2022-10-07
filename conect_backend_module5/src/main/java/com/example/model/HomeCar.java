package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class HomeCar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String tenNhaXe;
    private String soDienThoai;
    private String email;
    @JsonBackReference
    @OneToMany(mappedBy = "nhaXe", cascade = CascadeType.ALL)
    private List<Car> cars;
}
