package com.kauffman.management.selectmed.repository;

import com.kauffman.management.cap.entity.dto.Cap;
import com.kauffman.management.selectmed.entity.dto.Selectmed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface SelectmedRepository extends JpaRepository<Selectmed, UUID> {
    @Query("select u from Selectmed u where u.user.user_id = :user_id")
    List<Selectmed> findByUserId(UUID user_id);
}
