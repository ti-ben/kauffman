package com.kauffman.management.ctrltech.repository;

import com.kauffman.management.ctrltech.entity.dto.Ctrltech;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CtrltechRepository extends JpaRepository<Ctrltech, UUID> {
}
