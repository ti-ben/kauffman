package com.kauffman.management.modules.rank.repository;

import com.kauffman.management.modules.rank.entity.dto.Rank;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RankRepository extends JpaRepository<Rank, UUID> {
    Rank findByName(String name);
}
