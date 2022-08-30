package com.kauffman.management.selectmed.controller;

import com.kauffman.management.common.entity.ApiResponse;
import com.kauffman.management.selectmed.entity.builder.SelectmedBuilder;
import com.kauffman.management.selectmed.entity.dto.Selectmed;
import com.kauffman.management.selectmed.entity.payload.SelectmedCreatePayload;
import com.kauffman.management.selectmed.entity.payload.SelectmedUpdatePayload;
import com.kauffman.management.selectmed.repository.SelectmedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/selectmed")

public class SelectmedController {

    @Autowired
    SelectmedRepository selectmedRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody SelectmedCreatePayload payload) {
        Selectmed selectmed = new SelectmedBuilder()
                .setStart_date(payload.getStart_date())
                .setEnd_date(payload.getEnd_date())
                .setDescription(payload.getDescription())
                .setPrice(payload.getPrice())
                .setUser(payload.getUser())
                //.setPeriod(payload.getPeriod())
                .build();
        return new ApiResponse(true, selectmedRepository.save(selectmed), "api.selectmed.create.success");
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, selectmedRepository.findAll(), null);
    }

    // Read all cap records by user id
    @GetMapping("/findByUserId/{id}")
    public ApiResponse get(@PathVariable("id") UUID id){
        return new ApiResponse(true, selectmedRepository.findByUserId(id), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Selectmed fromDb = selectmedRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.selectmed.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.selectmed.detail.success");
    }

    // Update selected record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody SelectmedUpdatePayload payload) {
        Selectmed fromDb = selectmedRepository.findById(payload.getSelectmed_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.selectmed.update.not-found");
        }
        fromDb.setStart_date(payload.getStart_date());
        fromDb.setEnd_date(payload.getEnd_date());
        fromDb.setDescription(payload.getDescription());
        fromDb.setPrice(payload.getPrice());
        fromDb.setUser(payload.getUser());
        //fromDb.setPeriod(payload.getPeriod());
        return new ApiResponse(true, selectmedRepository.save(fromDb), "api.selectmed.update.success");
    }

    // Delete selected records from db
    @PutMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Selectmed fromDb = selectmedRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.selectmed.delete.not-found");
        }
        selectmedRepository.deleteById(fromDb.getSelectmed_id());
        return new ApiResponse(true, null, "api.selectmed.delete.success");
    }
}
