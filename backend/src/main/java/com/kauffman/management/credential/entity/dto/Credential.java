package com.kauffman.management.credential.entity.dto;

import com.kauffman.management.rank.entity.dto.Rank;
import com.kauffman.management.user.entity.dto.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Credential {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID credential_id;
    @Column(unique = true)
    private String username;
    private String password;
    private Date created_on;
    private Date updated_on;
    private Boolean active;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne
    @JoinColumn(name = "rank_id")
    private Rank rank;

}
