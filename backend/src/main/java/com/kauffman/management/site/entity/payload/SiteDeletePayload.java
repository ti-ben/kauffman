package com.kauffman.management.site.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;
@Data
@AllArgsConstructor
@NoArgsConstructor

public class SiteDeletePayload {
    private UUID site_id;
}
