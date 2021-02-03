package com.example.walkablecitybackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;

import static com.example.walkablecitybackend.model.Crawler.relatedNaverCrawler;

@RestController
public class Controller {

    @GetMapping("gettest")
    public String m1() {
        return "재웅 짱짱맨";
    }

    @GetMapping("crawltest")
    public ArrayList<String> m2(String search) throws IOException {
        return relatedNaverCrawler(search);
    }
}
