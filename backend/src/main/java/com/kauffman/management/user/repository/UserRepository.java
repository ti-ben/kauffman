package com.kauffman.management.user.repository;

import com.kauffman.management.user.entity.dto.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
}
