package com.kauffman.management.modules.vehicule.controller;

import com.kauffman.management.modules.entity.ApiResponse;
import com.kauffman.management.modules.vehicule.entity.builder.VehiculeBuilder;
import com.kauffman.management.modules.vehicule.entity.dto.Vehicule;
import com.kauffman.management.modules.vehicule.entity.payload.VehiculeCreatePayload;
import com.kauffman.management.modules.vehicule.entity.payload.VehiculeUpdatePayload;
import com.kauffman.management.modules.vehicule.repository.VehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/vehicule")

public class VehiculeController {

    @Autowired
    VehiculeRepository vehiculeRepository;

    // Create new vehicule records
    @PostMapping("/create")
    public ApiResponse create(@RequestBody VehiculeCreatePayload payload) {
        Vehicule vehicule = new VehiculeBuilder()
                .setCreated_on(payload.getCreated_on())
                .setUpdated_on(payload.getUpdated_on())
                .setDate_of_purchase(payload.getDate_of_purchase())
                .setPrice(payload.getPrice())
                .setNum_chassis(payload.getNum_chassis())
                .setBrand(payload.getBrand())
                .setCde_carrosserie(payload.getCde_carrosserie())
                .setGenre(payload.getGenre())
                .setMom(payload.getMom())
                .setMma(payload.getMma())
                .setMmat(payload.getMmat())
                .setMta(payload.getMta())
                .setClasse_enviro(payload.getClasse_enviro())
                .setNbr_km(payload.getNbr_km())
                .setMetrology(payload.getMetrology())
                .setAvatar(payload.getAvatar())
                .setFuel(payload.getFuel())
                .setType(payload.getType())
                .setActive(payload.getActive())
                .setBought_by(payload.getBought_by())
                .setNumberplate(payload.getNumberplate())
                .setSite(payload.getSite())
                .build();
        return new ApiResponse(true, vehiculeRepository.save(vehicule), "api.vehicule.create.success");
    }

    // Read all vehicule records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, vehiculeRepository.findAll(), null);
    }

    // Read selected vehicule record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Vehicule fromDb = vehiculeRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.vehicule.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.vehicule.detail.success");
    }

    // Update selected vehicule record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody VehiculeUpdatePayload payload) {
        Vehicule fromDb = vehiculeRepository.findById(payload.getVehicule_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.vehicule.update.not-found");
        }
        fromDb.setCreated_on(payload.getCreated_on());
        fromDb.setUpdated_on(payload.getUpdated_on());
        fromDb.setDate_of_purchase(payload.getDate_of_purchase());
        fromDb.setPrice(payload.getPrice());
        fromDb.setNum_chassis(payload.getNum_chassis());
        fromDb.setBrand(payload.getBrand());
        fromDb.setCde_carrosserie(payload.getCde_carrosserie());
        fromDb.setGenre(payload.getGenre());
        fromDb.setMom(payload.getMom());
        fromDb.setMma(payload.getMma());
        fromDb.setMmat(payload.getMmat());
        fromDb.setMta(payload.getMta());
        fromDb.setClasse_enviro(payload.getClasse_enviro());
        fromDb.setNbr_km(payload.getNbr_km());
        fromDb.setMetrology(payload.getMetrology());
        fromDb.setAvatar(payload.getAvatar());
        fromDb.setFuel(payload.getFuel());
        fromDb.setType(payload.getType());
        fromDb.setActive(payload.getActive());
        fromDb.setBought_by(payload.getBought_by());
        fromDb.setNumberplate(payload.getNumberplate());
        fromDb.setSite(payload.getSite());
        return new ApiResponse(true, vehiculeRepository.save(fromDb), "api.vehicule.update.success");
    }

    // Archive selected vehicule record
    @PutMapping("/archive")
    public ApiResponse archive(@RequestBody VehiculeUpdatePayload payload) {
        Vehicule fromDb = vehiculeRepository.findById(payload.getVehicule_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.vehicule.archive.not-found");
        }
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, vehiculeRepository.save(fromDb), "api.vehicule.archive.success");
    }

    // Delete selected vehicule record
    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Vehicule fromDb = vehiculeRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.vehicule.delete.not-found");
        }
        vehiculeRepository.deleteById(fromDb.getVehicule_id());
        return new ApiResponse(true, null, "api.vehicule.delete.success");
    }
}
