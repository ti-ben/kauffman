package com.kauffman.management.modules.ctrltech.entity.builder;

import com.kauffman.management.modules.ctrltech.entity.dto.Ctrltech;
import com.kauffman.management.modules.provider.entity.dto.Provider;
import com.kauffman.management.modules.vehicule.entity.dto.Vehicule;

import java.util.Date;
import java.util.UUID;

public class CtrltechBuilder {
    private UUID ctrltech_id;
    private Date start_date;
    private Date end_date;
    private String description;
    private String price;

    private Vehicule vehicule;
    private Provider provider;

    public CtrltechBuilder setCtrltech_id(UUID ctrltech_id) {
        this.ctrltech_id = ctrltech_id;
        return this;
    }

    public CtrltechBuilder setStart_date(Date start_date) {
        this.start_date = start_date;
        return this;
    }

    public CtrltechBuilder setEnd_date(Date end_date) {
        this.end_date = end_date;
        return this;
    }

    public CtrltechBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public CtrltechBuilder setPrice(String price) {
        this.price = price;
        return this;
    }

    public CtrltechBuilder setVehicule(Vehicule vehicule) {
        this.vehicule = vehicule;
        return this;
    }

    public CtrltechBuilder setProvider(Provider provider) {
        this.provider = provider;
        return this;
    }

    public Ctrltech build() {
        return new Ctrltech(ctrltech_id, start_date, end_date, description, price, vehicule, provider);
    }
}
