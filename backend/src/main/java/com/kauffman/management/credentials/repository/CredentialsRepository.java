package com.kauffman.management.credentials.repository;

import com.kauffman.management.credentials.entity.dto.Credentials;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CredentialsRepository extends JpaRepository<Credentials, UUID> {
    Credentials findByUsername(String username);
    boolean existsByUsername(String username);
}
