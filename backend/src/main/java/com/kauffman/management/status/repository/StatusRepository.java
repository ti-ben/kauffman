package com.kauffman.management.status.repository;

import com.kfm.management.modules.status.entity.dto.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StatusRepository extends JpaRepository<Status, UUID> {
}
