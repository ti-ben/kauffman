package com.kauffman.management.modules.intervtech.repository;

import com.kauffman.management.modules.intervtech.entity.dto.Intervtech;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface IntervtechRepository extends JpaRepository<Intervtech, UUID> {
    @Query("select i from Intervtech i where i.vehicule.vehicule_id = :vehicule_id order by i.start_date desc")
    List<Intervtech> findByVehiculeId(UUID vehicule_id);
}
