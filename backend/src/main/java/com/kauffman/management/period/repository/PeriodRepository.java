package com.kauffman.management.period.repository;

import com.kauffman.management.period.entity.dto.Period;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PeriodRepository extends JpaRepository<Period, UUID> {
}
