package com.kauffman.management.modules.site.entity.builder;

import com.kauffman.management.modules.address.entity.dto.Address;
import com.kauffman.management.modules.site.entity.dto.Site;

import java.util.Date;
import java.util.UUID;

public class SiteBuilder {
    private UUID site_id;
    private String name;
    private String description;
    private Date created_on;
    private Boolean active;

    private Address address;

    public SiteBuilder setSite_id(UUID site_id) {
        this.site_id = site_id;
        return this;
    }

    public SiteBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public SiteBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public SiteBuilder setCreatedOn(Date created_on) {
        this.created_on = created_on;
        return this;
    }

    public SiteBuilder setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public SiteBuilder setAddress(Address address) {
        this.address = address;
        return this;
    }

    public Site build() {
        return new Site(site_id, name, description, created_on, active, address);
    }
}
