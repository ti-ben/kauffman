package com.kauffman.management.metrology.entity.builder;

import com.kauffman.management.metrology.entity.dto.Metrology;
import com.kauffman.management.vehicule.entity.dto.Vehicule;

import java.util.Date;
import java.util.UUID;

public class MetrologyBuilder {
    private UUID metrology_id;
    private Date start_date;
    private Date end_date;
    private String price;
    private String description;
    private Vehicule vehicule;

    public MetrologyBuilder setMetrology_id(UUID metrology_id) {
        this.metrology_id = metrology_id;
        return this;
    }

    public MetrologyBuilder setStart_date(Date start_date) {
        this.start_date = start_date;
        return this;
    }

    public MetrologyBuilder setEnd_date(Date end_date) {
        this.end_date = end_date;
        return this;
    }

    public MetrologyBuilder setPrice(String price) {
        this.price = price;
        return this;
    }

    public MetrologyBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public MetrologyBuilder setVehicule(Vehicule vehicule) {
        this.vehicule = vehicule;
        return this;
    }

    public Metrology build() {
        return new Metrology(metrology_id, start_date, end_date, price, description, vehicule);
    }
}
