package com.kauffman.management.selectmed.entity.builder;

import com.kauffman.management.period.entity.dto.Period;
import com.kauffman.management.selectmed.entity.dto.Selectmed;
import com.kauffman.management.user.entity.dto.User;

import java.util.Date;
import java.util.UUID;

public class SelectmedBuilder {
    private UUID selectmed_id;
    private Date start_date;
    private Date end_date;
    private String price;
    private String description;

    private User user;
    //private Period period;

    public SelectmedBuilder setSelectmed_id(UUID selectmed_id) {
        this.selectmed_id = selectmed_id;
        return this;
    }

    public SelectmedBuilder setStart_date(Date start_date) {
        this.start_date = start_date;
        return this;
    }

    public SelectmedBuilder setEnd_date(Date end_date) {
        this.end_date = end_date;
        return this;
    }

    public SelectmedBuilder setPrice(String price) {
        this.price = price;
        return this;
    }

    public SelectmedBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public SelectmedBuilder setUser(User user) {
        this.user = user;
        return this;
    }
/*
    public SelectmedBuilder setPeriod(Period period) {
        this.period = period;
        return this;
    }
*/
    public Selectmed build() {
        return new Selectmed(selectmed_id, start_date, end_date, price, description, user/*, period*/);
    }
}

