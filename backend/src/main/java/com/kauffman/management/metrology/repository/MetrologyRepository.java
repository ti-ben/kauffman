package com.kauffman.management.metrology.repository;

import com.kauffman.management.ctrltech.entity.dto.Ctrltech;
import com.kauffman.management.metrology.entity.dto.Metrology;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface MetrologyRepository extends JpaRepository<Metrology, UUID> {
    @Query("select m from Metrology m where m.vehicule.vehicule_id = :vehicule_id order by m.start_date desc")
    List<Metrology> findByVehiculeId(UUID vehicule_id);
}
