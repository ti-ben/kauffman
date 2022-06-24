package com.kauffman.management.provider.entity.builder;

import com.kauffman.management.address.entity.dto.Address;
import com.kauffman.management.provider.entity.dto.Provider;

import java.util.UUID;

public class ProviderBuilder {
    private UUID provider_id;
    private String name;
    private String phone;
    private String email;
    private String service;
    private Boolean active;

    private Address address;

    public ProviderBuilder setProvider_id(UUID provider_id) {
        this.provider_id = provider_id;
        return this;
    }

    public ProviderBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public ProviderBuilder setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    public ProviderBuilder setEmail(String email) {
        this.email = email;
        return this;
    }

    public ProviderBuilder setService(String service) {
        this.service = service;
        return this;
    }

    public ProviderBuilder setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public ProviderBuilder setAddress(Address address) {
        this.address = address;
        return this;
    }

    public Provider build() {
        return new Provider(provider_id, name, phone, email, service, active, address);
    }
}
