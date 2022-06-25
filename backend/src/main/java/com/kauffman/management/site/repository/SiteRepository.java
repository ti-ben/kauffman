package com.kauffman.management.site.repository;

import com.kauffman.management.site.entity.dto.Site;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SiteRepository extends JpaRepository<Site, UUID> {
}
