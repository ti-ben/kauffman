package com.kauffman.management.modules.numberplate.controller;

import com.kauffman.management.modules.entity.ApiResponse;
import com.kauffman.management.modules.numberplate.entity.dto.Numberplate;
import com.kauffman.management.modules.numberplate.repository.NumberplateRepository;
import com.kauffman.management.modules.numberplate.entity.builder.NumberplateBuilder;
import com.kauffman.management.modules.numberplate.entity.payload.NumberplateCreatePayload;
import com.kauffman.management.modules.numberplate.entity.payload.NumberplateUpdatePayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/numberplate")

public class NumberplateController {

    @Autowired
    NumberplateRepository numberplateRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody NumberplateCreatePayload payload) {
        Numberplate numberplate = new NumberplateBuilder()
                .setNum_plate(payload.getNum_plate())
                .setDop(payload.getDop())
                .setActive(payload.getActive())
                .setSite(payload.getSite())
                .build();
        System.out.println(numberplate);
        return new ApiResponse(true, numberplateRepository.save(numberplate), "api.site.create.success");

    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, numberplateRepository.findAll(), "api.numberplate.list.success");
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Numberplate fromDb = numberplateRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.numberplate.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.numberplate.detail.success");
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody NumberplateUpdatePayload payload) {
        Numberplate fromDb = numberplateRepository.findById(payload.getNumberplate_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.numberplate.update.not-found");
        }
        fromDb.setNum_plate(payload.getNum_plate());
        fromDb.setDop(payload.getDop());
        fromDb.setSite(payload.getSite());
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, numberplateRepository.save(fromDb), "api.numberplate.update.success");
    }

    // Archive record
    @PutMapping("/archive")
    public ApiResponse archive(@RequestBody NumberplateUpdatePayload payload) {
        Numberplate fromDb = numberplateRepository.findById(payload.getNumberplate_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.numberplate.archive.not-found");
        }
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, numberplateRepository.save(fromDb), "api.numberplate.archive.success");
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Numberplate fromDb = numberplateRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.numberplate.delete.not-found");
        }
        numberplateRepository.deleteById(fromDb.getNumberplate_id());
        return new ApiResponse(true, null, "api.numberplate.delete.success");
    }
}
