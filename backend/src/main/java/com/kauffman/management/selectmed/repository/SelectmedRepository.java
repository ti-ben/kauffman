package com.kauffman.management.selectmed.repository;

import com.kfm.management.modules.selectmed.entity.dto.Selectmed;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SelectmedRepository extends JpaRepository<Selectmed, UUID> {
}
