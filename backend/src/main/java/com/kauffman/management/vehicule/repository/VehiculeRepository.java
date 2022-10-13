package com.kauffman.management.vehicule.repository;

import com.kauffman.management.user.entity.dto.User;
import com.kauffman.management.vehicule.entity.dto.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface VehiculeRepository extends JpaRepository<Vehicule, UUID> {
    @Query ("select v from Vehicule v ORDER BY v.brand")
    List<Vehicule> findAll();
}
