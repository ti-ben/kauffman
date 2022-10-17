package com.kauffman.management.modules.status.controller;

import com.kauffman.management.modules.entity.ApiResponse;
import com.kauffman.management.modules.status.entity.builder.StatusBuilder;
import com.kauffman.management.modules.status.entity.dto.Status;
import com.kauffman.management.modules.status.entity.payload.StatusCreatePayload;
import com.kauffman.management.modules.status.entity.payload.StatusUpdatePayload;
import com.kauffman.management.modules.status.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/status")
public class StatusController {
    @Autowired
    StatusRepository statusRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody StatusCreatePayload payload) {
        Status status = new StatusBuilder()
                .setName(payload.getName())
                .setDescription(payload.getDescription())
                .setActive(payload.getActive())
                .build();
        return new ApiResponse(true, statusRepository.save(status), "api.status.create.success");
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, statusRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Status fromDb = statusRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.status.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.status.detail.success");
    }

    // Update status record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody StatusUpdatePayload payload) {
        Status fromDb = statusRepository.findById(payload.getStatus_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.site.update.not-found");
        }
        fromDb.setName(payload.getName());
        fromDb.setDescription(payload.getDescription());
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, statusRepository.save(fromDb), "api.site.update.success");
    }

    // Archive record
    @PutMapping("/archive")
    public ApiResponse archive(@RequestBody StatusUpdatePayload payload) {
        Status fromDb = statusRepository.findById(payload.getStatus_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.status.archive.not-found");
        }
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, statusRepository.save(fromDb), "api.status.archive.success");
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Status fromDb = statusRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.status.delete.not-found");
        }
        statusRepository.deleteById(fromDb.getStatus_id());
        return new ApiResponse(true, null, "api.status.delete.success");
    }
}
