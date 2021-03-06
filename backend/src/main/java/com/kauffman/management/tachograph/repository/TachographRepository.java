package com.kauffman.management.tachograph.repository;

import com.kauffman.management.tachograph.entity.dto.Tachograph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TachographRepository extends JpaRepository<Tachograph, UUID> {
}
