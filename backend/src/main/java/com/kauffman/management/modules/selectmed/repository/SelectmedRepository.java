package com.kauffman.management.modules.selectmed.repository;

import com.kauffman.management.modules.selectmed.entity.dto.Selectmed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface SelectmedRepository extends JpaRepository<Selectmed, UUID> {
    @Query("select u from Selectmed u where u.user.user_id = :user_id order by u.start_date desc ")
    List<Selectmed> findByUserId(UUID user_id);
}
