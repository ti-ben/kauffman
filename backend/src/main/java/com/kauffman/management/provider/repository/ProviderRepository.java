package com.kauffman.management.provider.repository;

import com.kauffman.management.provider.entity.dto.Provider;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProviderRepository extends JpaRepository<Provider, UUID> {
}
