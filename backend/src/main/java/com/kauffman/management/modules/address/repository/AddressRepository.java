package com.kauffman.management.modules.address.repository;

import com.kauffman.management.modules.address.entity.dto.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AddressRepository extends JpaRepository<Address, UUID> {
}
