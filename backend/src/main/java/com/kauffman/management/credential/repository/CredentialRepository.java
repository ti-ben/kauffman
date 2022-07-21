package com.kauffman.management.credential.repository;

import com.kauffman.management.credential.entity.dto.Credential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

public interface CredentialRepository extends JpaRepository<Credential, UUID> {
    @Query("SELECT c FROM Credential c WHERE c.user.user_id =:id")
    Credential findByUserId(UUID id);

    boolean existsByUsername(String username);
}
