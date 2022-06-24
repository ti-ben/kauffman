package com.kauffman.management.tachograph.controller;

import com.kauffman.management.common.entity.ApiResponse;
import com.kauffman.management.tachograph.entity.builder.TachographBuilder;
import com.kauffman.management.tachograph.entity.dto.Tachograph;
import com.kauffman.management.tachograph.entity.payload.TachographCreatePayload;
import com.kauffman.management.tachograph.entity.payload.TachographUpdatePayload;
import com.kauffman.management.tachograph.repository.TachographRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/tachograph")

public class TachographController {
    @Autowired
    TachographRepository tachographRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody TachographCreatePayload payload) {
        Tachograph tachograph = new TachographBuilder()
                .setStart_date(payload.getStart_date())
                .setEnd_date(payload.getEnd_date())
                .setNum_carte(payload.getNum_carte())
                .setDescription(payload.getDescription())
                .setUser(payload.getUser())
                .build();
        return new ApiResponse(true, tachographRepository.save(tachograph), "api.tachograph.create.success");
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, tachographRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Tachograph fromDb = tachographRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.tachograph.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.tachograph.detail.success");
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody TachographUpdatePayload payload) {
        Tachograph fromDb = tachographRepository.findById(payload.getTachograph_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.tachograph.update.not-found");
        }
        fromDb.setStart_date(payload.getStart_date());
        fromDb.setEnd_date(payload.getEnd_date());
        fromDb.setNum_carte(payload.getNum_carte());
        fromDb.setDescription(payload.getDescription());
        fromDb.setUser(payload.getUser());
        return new ApiResponse(true, tachographRepository.save(fromDb), "api.tachograph.update.success");
    }

    @PutMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Tachograph fromDb = tachographRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.tachograph.delete.not-found");
        }
        tachographRepository.deleteById(fromDb.getTachograph_id());
        return new ApiResponse(true, null, "api.tachograph.delete.success");
    }
}
