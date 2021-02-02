package com.example.walkablecity.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("gettest")
    public String m1() {
        return "재웅 짱짱맨";
    }
}
