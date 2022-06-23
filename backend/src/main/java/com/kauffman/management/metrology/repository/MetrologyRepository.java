package com.kauffman.management.metrology.repository;

import com.kfm.management.modules.metrology.entity.dto.Metrology;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface MetrologyRepository extends JpaRepository<Metrology, UUID> {
}
