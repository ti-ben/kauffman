package com.kauffman.management.address.repository;

import com.kauffman.management.address.entity.dto.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AddressRepository extends JpaRepository<Address, UUID> {
}
