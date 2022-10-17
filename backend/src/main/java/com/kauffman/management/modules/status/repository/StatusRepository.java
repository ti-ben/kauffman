package com.kauffman.management.modules.status.repository;

import com.kauffman.management.modules.status.entity.dto.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StatusRepository extends JpaRepository<Status, UUID> {
}
