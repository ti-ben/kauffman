package com.kauffman.management.modules.site.repository;

import com.kauffman.management.modules.site.entity.dto.Site;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SiteRepository extends JpaRepository<Site, UUID> {
}
