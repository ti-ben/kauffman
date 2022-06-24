package com.kauffman.management.intervtech.repository;

import com.kauffman.management.intervtech.entity.dto.Intervtech;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface IntervtechRepository extends JpaRepository<Intervtech, UUID> {
}
