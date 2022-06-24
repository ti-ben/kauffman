package com.kauffman.management.numberplate.repository;

import com.kauffman.management.numberplate.entity.dto.Numberplate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface NumberplateRepository extends JpaRepository<Numberplate, UUID> {
}
