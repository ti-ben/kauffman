package com.kauffman.management.tachograph.repository;

import com.kauffman.management.selectmed.entity.dto.Selectmed;
import com.kauffman.management.tachograph.entity.dto.Tachograph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface TachographRepository extends JpaRepository<Tachograph, UUID> {
    @Query("select t from Tachograph t where t.user.user_id = :user_id")
    List<Tachograph> findByUserId(UUID user_id);
}
