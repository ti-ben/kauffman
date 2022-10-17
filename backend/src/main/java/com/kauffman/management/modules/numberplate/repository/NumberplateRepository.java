package com.kauffman.management.modules.numberplate.repository;

import com.kauffman.management.modules.numberplate.entity.dto.Numberplate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NumberplateRepository extends JpaRepository<Numberplate, UUID> {
}
