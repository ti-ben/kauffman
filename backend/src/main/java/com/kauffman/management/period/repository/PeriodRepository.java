package com.kauffman.management.period.repository;

import com.kauffman.management.period.entity.dto.Period;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface PeriodRepository extends JpaRepository<Period, UUID> {
    //@Query("SELECT p FROM Period p WHERE p.user.user_id = id")
    //public List<Period> listByUser(UUID id);
}
