package com.kauffman.management.credential.repository;

import com.kauffman.management.credential.entity.dto.Credential;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CredentialRepository extends JpaRepository<Credential, UUID> {
    Credential findByUsername(String username);

    boolean existsByUsername(String username);
}
