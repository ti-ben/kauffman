package com.kauffman.management.user.controller;

import com.kauffman.management.common.entity.ApiResponse;
import com.kauffman.management.user.entity.builder.UserBuilder;
import com.kauffman.management.user.entity.dto.User;
import com.kauffman.management.user.entity.payload.UserCreatePayload;
import com.kauffman.management.user.entity.payload.UserUpdatePayload;
import com.kauffman.management.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody UserCreatePayload payload) {
        User user = new UserBuilder()
                .setFirstname(payload.getFirstname())
                .setLastname(payload.getLastname())
                .setGender(payload.getGender())
                .setAvatar(payload.getAvatar())
                .setDob(payload.getDob())
                .setEmail(payload.getEmail())
                .setPhonePro(payload.getPhone_pro())
                .setPhonePerso(payload.getPhone_perso())
                .setNationality(payload.getNationality())
                .setNumirn(payload.getNumirn())
                .setDriverLicense(payload.getDriver_license())
                .setCreatedOn(payload.getCreated_on())
                .setUpdatedOn(payload.getUpdated_on())
                .setPob(payload.getPob())
                .setActive(payload.getActive())
                .setSite(payload.getSite())
                .setStatus(payload.getStatus())
                .setAddress(payload.getAddress())
                .build();
        return new ApiResponse(true, userRepository.save(user), "api.user.create.success");
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, userRepository.findAll(), "api.user.list.success");
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        User fromDb = userRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.user.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.user.detail.success");
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody UserUpdatePayload payload) {
        User fromDb = userRepository.findById(payload.getUser_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.user.update.not-found");
        }
        fromDb.setFirstname(payload.getFirstname());
        fromDb.setLastname(payload.getLastname());
        fromDb.setGender(payload.getGender());
        fromDb.setAvatar(payload.getAvatar());
        fromDb.setDob(payload.getDob());
        fromDb.setEmail(payload.getEmail());
        fromDb.setPhone_pro(payload.getPhone_pro());
        fromDb.setPhone_perso(payload.getPhone_perso());
        fromDb.setNationality(payload.getNationality());
        fromDb.setNumirn(payload.getNumirn());
        fromDb.setDriver_license(payload.getDriver_license());
        fromDb.setCreated_on(payload.getCreated_on());
        fromDb.setUpdated_on(payload.getUpdated_on());
        fromDb.setPob(payload.getPob());
        fromDb.setActive(payload.getActive());
        fromDb.setSite(payload.getSite());
        fromDb.setStatus(payload.getStatus());
        fromDb.setAddress(payload.getAddress());
        return new ApiResponse(true, userRepository.save(fromDb), "api.update.update.success");
    }

    // Archive record
    @PutMapping("/archive")
    public ApiResponse archive(@RequestBody UserUpdatePayload payload) {
        User fromDb = userRepository.findById(payload.getUser_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.user.archive.not-found");
        }
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, userRepository.save(fromDb), "api.user.archive.success");
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        User fromDb = userRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.user.delete.not-found");
        }
        userRepository.deleteById(fromDb.getUser_id());
        return new ApiResponse(true, null, "api.user.delete.success");
    }
}
