package com.kauffman.management.modules.adr.repository;

import com.kauffman.management.modules.adr.entity.dto.Adr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface AdrRepository extends JpaRepository<Adr, UUID> {
    @Query("select av from Adr av where av.vehicule.vehicule_id = :vehicule_id order by av.date_rdv desc")
    List<Adr> findByVehiculeId(UUID vehicule_id);

    @Query("select au from Adr au where au.user.user_id = :user_id order by au.date_rdv desc")
    List<Adr> findByUserId(UUID user_id);
}
