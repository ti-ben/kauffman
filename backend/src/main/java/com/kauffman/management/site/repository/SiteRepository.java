package com.kauffman.management.site.repository;

import com.kfm.management.modules.site.entity.dto.Site;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.UUID;

@CrossOrigin("http://localhost:4200")
public interface SiteRepository extends JpaRepository<Site, UUID> {
}
