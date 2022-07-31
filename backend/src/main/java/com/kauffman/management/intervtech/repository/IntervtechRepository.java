package com.kauffman.management.intervtech.repository;

import com.kauffman.management.intervtech.entity.dto.Intervtech;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface IntervtechRepository extends JpaRepository<Intervtech, UUID> {
    @Query("select i from Intervtech i where i.vehicule.vehicule_id = :vehicule_id")
    List<Intervtech> findByVehiculeId(UUID vehicule_id);
}
