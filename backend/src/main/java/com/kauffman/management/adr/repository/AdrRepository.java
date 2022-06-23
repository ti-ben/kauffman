package com.kauffman.management.adr.repository;

import com.kauffman.management.adr.entity.dto.Adr;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AdrRepository extends JpaRepository<Adr, UUID> {
}
