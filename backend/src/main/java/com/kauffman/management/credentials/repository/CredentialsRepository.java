package com.kauffman.management.credentials.repository;

import com.kauffman.management.credentials.entity.dto.Credentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface CredentialsRepository extends JpaRepository<Credentials, UUID> {

    @Query("select cred from Credentials cred where cred.user.user_id = :user_id")
    Credentials findByUserId(UUID user_id);

    @Query("SELECT c FROM Credentials c WHERE c.username LIKE %?1%"
            + " OR c.password LIKE %?1%")
    public List<Credentials> search(String keyword);

}
