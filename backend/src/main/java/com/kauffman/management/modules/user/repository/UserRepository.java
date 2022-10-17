package com.kauffman.management.modules.user.repository;

import com.kauffman.management.modules.user.entity.dto.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    @Query ("select u from User u ORDER BY u.firstname")
    List<User> findAll();

    @Query("select u from User u")
    List<User> exportToPdf();

    @Query("select u from User u")
    List<User> exportToCsv();
}
