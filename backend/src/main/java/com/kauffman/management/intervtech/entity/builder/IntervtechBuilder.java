package com.kauffman.management.intervtech.entity.builder;

import com.kfm.management.modules.intervtech.entity.dto.Intervtech;
import com.kfm.management.modules.vehicule.entity.dto.Vehicule;

import java.util.Date;
import java.util.UUID;

public class IntervtechBuilder {
    private UUID intervtech_id;
    private Date start_date;
    private Date end_date;
    private String description;

    private Vehicule vehicule;

    public IntervtechBuilder setIntervtech_id(UUID intervtech_id) {
        this.intervtech_id = intervtech_id;
        return this;
    }

    public IntervtechBuilder setStart_date(Date start_date) {
        this.start_date = start_date;
        return this;
    }

    public IntervtechBuilder setEnd_date(Date end_date) {
        this.end_date = end_date;
        return this;
    }

    public IntervtechBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public IntervtechBuilder setVehicule(Vehicule vehicule) {
        this.vehicule = vehicule;
        return this;
    }

    public Intervtech build() {
        return new Intervtech(intervtech_id, start_date, end_date, description, vehicule);
    }
}
