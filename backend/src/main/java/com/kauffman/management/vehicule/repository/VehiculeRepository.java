package com.kauffman.management.vehicule.repository;

import com.kauffman.management.vehicule.entity.dto.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VehiculeRepository extends JpaRepository<Vehicule, UUID> {
}
