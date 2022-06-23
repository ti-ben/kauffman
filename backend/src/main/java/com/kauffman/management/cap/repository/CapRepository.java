package com.kauffman.management.cap.repository;

import com.kauffman.management.cap.entity.dto.Cap;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CapRepository extends JpaRepository<Cap, UUID> {
}
