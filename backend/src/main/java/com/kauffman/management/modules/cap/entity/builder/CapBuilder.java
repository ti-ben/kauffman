package com.kauffman.management.modules.cap.entity.builder;

import com.kauffman.management.modules.cap.entity.dto.Cap;
import com.kauffman.management.modules.user.entity.dto.User;
import com.kauffman.management.modules.vehicule.entity.dto.Vehicule;

import java.util.Date;
import java.util.UUID;

public class CapBuilder {
    private UUID cap_id;
    private Date start_date;
    private Date end_date;
    private String price;
    private String theme;
    private String description;

    private User user;
    private Vehicule vehicule;

    public CapBuilder setCap_id(UUID cap_id) {
        this.cap_id = cap_id;
        return this;
    }

    public CapBuilder setStart_date(Date start_date) {
        this.start_date = start_date;
        return this;
    }

    public CapBuilder setEnd_date(Date end_date) {
        this.end_date = end_date;
        return this;
    }

    public CapBuilder setPrice(String price) {
        this.price = price;
        return this;
    }

    public CapBuilder setTheme(String theme) {
        this.theme = theme;
        return this;
    }

    public CapBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public CapBuilder setUser(User user) {
        this.user = user;
        return this;
    }

    public CapBuilder setVehicule(Vehicule vehicule) {
        this.vehicule = vehicule;
        return this;
    }

    public Cap build() {
        return new Cap(cap_id, start_date, end_date, price, theme, description, user, vehicule);
    }
}
