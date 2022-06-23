package com.kauffman.management.credential.entity.builder;

import com.kauffman.management.credential.entity.dto.Credential;
import com.kauffman.management.rank.entity.dto.Rank;
import com.kauffman.management.user.entity.dto.User;

import java.util.Date;
import java.util.UUID;

public class CredentialBuilder {
    private UUID credential_id;
    private String username;
    private String password;
    private Date created_on;
    private Date updated_on;
    private Boolean active;

    private User user;
    private Rank rank;

    public CredentialBuilder setCredential_id(UUID credential_id) {
        this.credential_id = credential_id;
        return this;
    }

    public CredentialBuilder setUsername(String username) {
        this.username = username;
        return this;
    }

    public CredentialBuilder setPassword(String password) {
        this.password = password;
        return this;
    }

    public CredentialBuilder setCreated_on(Date created_on) {
        this.created_on = created_on;
        return this;
    }

    public CredentialBuilder setUpdated_on(Date updated_on) {
        this.updated_on = updated_on;
        return this;
    }

    public CredentialBuilder setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public CredentialBuilder setUser(User user) {
        this.user = user;
        return this;
    }

    public CredentialBuilder setRank(Rank rank) {
        this.rank = rank;
        return this;
    }

    public Credential build() {
        return new Credential(credential_id, username, password, created_on, updated_on, active, user, rank);
    }
}
