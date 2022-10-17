package com.kauffman.management.modules.address.controller;

import com.kauffman.management.modules.address.entity.builder.AddressBuilder;
import com.kauffman.management.modules.address.entity.dto.Address;
import com.kauffman.management.modules.address.entity.payload.AddressCreatePayload;
import com.kauffman.management.modules.address.entity.payload.AddressUpdatePayload;
import com.kauffman.management.modules.address.repository.AddressRepository;
import com.kauffman.management.modules.entity.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/address")
public class AddressController {

    @Autowired
    AddressRepository addressRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody AddressCreatePayload payload) {
        Address address = new AddressBuilder()
                .setCountry(payload.getCountry())
                .setNum(payload.getNum())
                .setPostal_code(payload.getPostal_code())
                .setTown(payload.getTown())
                .setRoad(payload.getRoad())
                .build();
        return new ApiResponse(true, addressRepository.save(address), "api.address.create.success");
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, addressRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Address fromDb = addressRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.address.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.address.detail.success");
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody AddressUpdatePayload payload) {
        Address fromDb = addressRepository.findById(payload.getAddress_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.address.update.not-found");
        }
        fromDb.setCountry(payload.getCountry());
        fromDb.setNum(payload.getNum());
        fromDb.setPostal_code(payload.getPostal_code());
        fromDb.setTown(payload.getTown());
        fromDb.setRoad(payload.getRoad());
        return new ApiResponse(true, addressRepository.save(fromDb), "api.address.update.success");
    }

    // Delete address from db by it's id
    @PutMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Address fromDb = addressRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.address.delete.not-found");
        }
        addressRepository.deleteById(fromDb.getAddress_id());
        return new ApiResponse(true, null, "api.address.delete.success");
    }
}
