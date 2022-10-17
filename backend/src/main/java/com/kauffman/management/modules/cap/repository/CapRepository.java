package com.kauffman.management.modules.cap.repository;

import com.kauffman.management.modules.cap.entity.dto.Cap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface CapRepository extends JpaRepository<Cap, UUID> {
    @Query("select ucap from Cap ucap where ucap.user.user_id = :user_id order by ucap.start_date desc")
    List<Cap> findByUserId(UUID user_id);

    @Query("select vcap from Cap vcap where vcap.vehicule.vehicule_id = :vehicule_id")
    List<Cap> findByVehiculeId(UUID vehicule_id);
}
