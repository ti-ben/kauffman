package com.kauffman.management.modules.adr.entity.builder;

import com.kauffman.management.modules.adr.entity.dto.Adr;
import com.kauffman.management.modules.user.entity.dto.User;
import com.kauffman.management.modules.vehicule.entity.dto.Vehicule;

import java.util.Date;
import java.util.UUID;

public class AdrBuilder {
    private UUID adr_id;
    private Date date_rdv;
    private String category;
    private String description;

    private User user;
    private Vehicule vehicule;

    public AdrBuilder setAdr_id(UUID adr_id) {
        this.adr_id = adr_id;
        return this;
    }

    public AdrBuilder setDate_rdv(Date date_rdv) {
        this.date_rdv = date_rdv;
        return this;
    }

    public AdrBuilder setCategory(String category) {
        this.category = category;
        return this;
    }

    public AdrBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public AdrBuilder setUser(User user) {
        this.user = user;
        return this;
    }

    public AdrBuilder setVehicule(Vehicule vehicule) {
        this.vehicule = vehicule;
        return this;
    }

    public Adr build() {
        return new Adr(adr_id, date_rdv, category, description, user, vehicule);
    }
}
