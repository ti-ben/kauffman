package com.kauffman.management.ctrltech.repository;

import com.kauffman.management.ctrltech.entity.dto.Ctrltech;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface CtrltechRepository extends JpaRepository<Ctrltech, UUID> {
    @Query("select c from Ctrltech c where c.vehicule.vehicule_id = :vehicule_id")
    List<Ctrltech> findByVehiculeId(UUID vehicule_id);
}
