package com.kauffman.management.credentials.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CredentialsSearchPayload {
    private String search;
}
