package com.kauffman.management.credentials.entity.builder;

import com.kauffman.management.credentials.entity.dto.Credentials;

import java.util.Date;
import java.util.UUID;

public class CredentialsBuilder {
    private UUID credentials_id;
    private String username;
    private String password;
    private Date created_on;
    private Date updated_on;
    private Boolean active;

    public CredentialsBuilder setCredentials_id(UUID credentials_id) {
        this.credentials_id = credentials_id;
        return this;
    }

    public CredentialsBuilder setUsername(String username) {
        this.username = username;
        return this;
    }

    public CredentialsBuilder setPassword(String password) {
        this.password = password;
        return this;
    }

    public CredentialsBuilder setCreated_on(Date created_on) {
        this.created_on = created_on;
        return this;
    }

    public CredentialsBuilder setUpdated_on(Date updated_on) {
        this.updated_on = updated_on;
        return this;
    }

    public CredentialsBuilder setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public Credentials build() {
        return new Credentials(credentials_id, username, password, created_on, updated_on, active);
    }
}
