package com.kauffman.management.modules.period.entity.builder;

import com.kauffman.management.modules.period.entity.dto.Period;
import com.kauffman.management.modules.user.entity.dto.User;
import com.kauffman.management.modules.vehicule.entity.dto.Vehicule;

import java.util.Date;
import java.util.UUID;

public class PeriodBuilder {
    private UUID period_id;
    private Date start_date;
    private Date end_date;

    private User user;
    private Vehicule vehicule;

    public PeriodBuilder setPeriod_id(UUID period_id) {
        this.period_id = period_id;
        return this;
    }

    public PeriodBuilder setStart_date(Date start_date) {
        this.start_date = start_date;
        return this;
    }

    public PeriodBuilder setEnd_date(Date end_date) {
        this.end_date = end_date;
        return this;
    }

    public PeriodBuilder setUser(User user) {
        this.user = user;
        return this;
    }

    public PeriodBuilder setVehicule(Vehicule vehicule) {
        this.vehicule = vehicule;
        return this;
    }

    public Period build() {
        return new Period(period_id, start_date, end_date, user, vehicule);
    }
}
